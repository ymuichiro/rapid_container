import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";
import { AddSymbolToVariableValue, inputValueChecker, inputValueMolding } from "./functions";
import { TempErrorView } from "./TempErrorView";
import { TextParser } from "../../lib";
import { isUndefined } from "../../lib/TextParser";
import TypeTree from "../../interfaces/SystemClasses/TypeTree";
import Literal from "../../interfaces/SystemClasses/LiteralTypes";
import CandidateVariableList from "../../interfaces/ReduxClasses/CandidateVariableList";

interface ModalFormInputArgs {
  variableList: CandidateVariableList[];
  acceptType?: TypeTree;
  label: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalFormInput = (props: ModalFormInputArgs) => {
  // 入力候補の変数一覧（Filter後）
  const [candidateVariableList, setCandidateVariableList] = React.useState<CandidateVariableList[]>([]);
  // 変数リストの開閉ステータスを保持
  const [openVariableList, setOpenVariableList] = React.useState<boolean>(false);
  // 変数リストを開いた際のカーソル位置情報、元の入力情報を保持
  const [cursorPosition, setCursorPosition] = React.useState<number>(NaN);
  const [originalInputText, setOriginalInputText] = React.useState<string>("");
  // 変数リストを開いた際の検索ワードを保持
  const [variableSearch, setVariableSearch] = React.useState<string>("");
  // エラーが発生した場合の表示箇所を保持
  const [errorMessages, setErrorMessages] = React.useState<string[]>([]);
  // 入力用フォームElementへのアクセス用
  const refs = React.useRef<HTMLInputElement>();

  useEffect(() => {
    setOpenVariableList(false);
    setCandidateVariableList([...[]]);
    setOriginalInputText("");
    // 入力値検証
    if (props.input !== "" && refs.current !== undefined) {
      const tokenizes = inputValueMolding(refs.current.value.replace(/\s/g, "").split(/(\+|-)/g), props.acceptType);
      if (tokenizes.join("") !== "") {
        const checkFlags = inputValueChecker(tokenizes, props.variableList, props.acceptType);
        if (checkFlags.every((flag) => !flag.error)) {
          setErrorMessages([...[]]);
          props.setInput(tokenizes.join("").replace(/(\+|-)$/g, ""));
          props.setError(false);
        } else {
          setErrorMessages([...checkFlags.filter((flag) => flag.error).map((flag) => flag.message)]);
          props.setError(true);
        }
      }
    }
  }, [props.acceptType]);

  useEffect(() => {
    const current = refs.current as HTMLInputElement;
    if (cursorPosition.toString() !== "NaN") {
      current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [cursorPosition]);

  useEffect(() => {
    if (variableSearch !== "") {
      setCandidateVariableList((e) => e.filter((x) => x.name.indexOf(variableSearch) !== -1));
    }
  }, [variableSearch]);

  useEffect(() => {
    let cleanUpFlag = true;
    if (openVariableList && candidateVariableList.length === 0) {
      setOpenVariableList(false);
      setErrorMessages([...["一致する変数がありません"], ...errorMessages]);
      setTimeout(() => {
        if (cleanUpFlag) setErrorMessages([...errorMessages]);
      }, 2000);
    }
    return () => {
      cleanUpFlag = false;
    };
  }, [candidateVariableList]);

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const tokenizes = inputValueMolding(e.currentTarget.value.replace(/\s/g, "").split(/(\+|-)/g), props.acceptType);
    if (tokenizes.join("") === "") return;
    const checkFlags = inputValueChecker(tokenizes, props.variableList, props.acceptType);
    if (checkFlags.every((flag) => !flag.error)) {
      setErrorMessages([...[]]);
      props.setInput(tokenizes.join("").replace(/(\+|-)$/g, ""));
      props.setError(false);
    } else {
      setErrorMessages([...checkFlags.filter((flag) => flag.error).map((flag) => flag.message)]);
      props.setError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { selectionStart, value } = e.currentTarget;
    if (openVariableList && selectionStart !== null) {
      setVariableSearch((old) => `${old}${value.substr(selectionStart - 1, 1)}`);
    }
    props.setError(false);
    props.setInput(value);
  };

  const handleAddVariableComponentOpen = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const current = refs.current as HTMLInputElement;
    const position = current.selectionStart === null ? 0 : current.selectionStart;
    if (openVariableList) {
      setCandidateVariableList([...[]]);
      setOriginalInputText("");
    } else {
      props.setInput((e) => `${e.substr(0, position)}${e.substr(position)}`);
      setCandidateVariableList([...props.variableList.filter((e) => TextParser.isType(e.type, props.acceptType))]);
      setOriginalInputText(current.value);
    }
    setVariableSearch("");
    setCursorPosition(position);
    setOpenVariableList(!openVariableList);
    current.focus();
  };

  const handleSelectedVariable = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const current = refs.current as HTMLInputElement;
    const name = e.currentTarget.getAttribute("data-name") as CandidateVariableList["name"];
    const label = e.currentTarget.getAttribute("data-label") as CandidateVariableList["label"];
    const type = JSON.parse(e.currentTarget.getAttribute("data-type") as string) as CandidateVariableList["type"];
    const position = current.selectionStart === null ? 0 : current.selectionStart;
    // 候補入力中の箇所を削除の上、現在のカーソル位置へ変数を挿入する
    const insertValue = AddSymbolToVariableValue({
      name,
      label,
      type,
      remark: "",
    });
    props.setInput(
      `${originalInputText.substr(0, position)}${position === 0 ? "" : " "}${insertValue} ${originalInputText.substr(
        position
      )}`
    );
    setOpenVariableList(false);
    setCursorPosition(`${originalInputText.substr(0, position)}${position === 0 ? "" : " "}${insertValue} `.length); // 変数挿入位置を検出
    setCandidateVariableList([...[]]);
    setOriginalInputText("");
    current.focus();
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      openVariableList &&
      ["Backspace", "Delete", "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"].some((x) => x === e.key)
    ) {
      setOpenVariableList(false);
      setCandidateVariableList([...[]]);
      setOriginalInputText("");
    }
  };

  return (
    <div>
      <TextField
        value={props.input}
        variant="outlined"
        color="secondary"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeydown}
        inputRef={refs}
        label={`${props.label}${isUndefined(props.acceptType) ? "" : " " + props.acceptType.parent.toString()}${
          isUndefined(props.acceptType)
            ? ""
            : props.acceptType.child === Literal.NONE
            ? ""
            : " " + props.acceptType?.child.toString()
        }`}
        required={props.acceptType !== undefined}
        disabled={props.acceptType === undefined}
        placeholder={
          props.acceptType === undefined ? "カテゴリ・アクションを選択" : "変数の挿入は右のボタンから行います"
        }
        error={errorMessages.length !== 0}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color={openVariableList ? "primary" : "secondary"}
                size="medium"
                onClick={handleAddVariableComponentOpen}
                style={{ width: "5em" }}
              >
                {openVariableList ? "閉じる" : "変数挿入"}
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <Collapse in={errorMessages.length !== 0} exit={errorMessages.length === 0} unmountOnExit>
        {errorMessages.map((e, i) => (
          <TempErrorView key={i}>{e}</TempErrorView>
        ))}
      </Collapse>
      <Collapse in={candidateVariableList.length !== 0} unmountOnExit>
        <List style={{ maxHeight: "20em", overflow: "scroll", overflowX: "hidden" }}>
          {candidateVariableList.map((e, i) => (
            <ListItem
              key={i}
              divider
              button
              data-name={e.name}
              data-label={e.label}
              data-type={JSON.stringify(e.type)}
              onClick={handleSelectedVariable}
            >
              <ListItemText
                primary={e.name}
                secondary={`(${e.label}) ${e.type.parent} ${e.type.child === Literal.NONE ? "" : e.type.child}`}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};
