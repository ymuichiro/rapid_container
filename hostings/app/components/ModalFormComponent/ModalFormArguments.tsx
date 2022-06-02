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
import { InputArgumentObject } from "../../interfaces/ReduxClasses/InputClasses";
import TypeTree from "../../interfaces/SystemClasses/TypeTree";
import Literal from "../../interfaces/SystemClasses/LiteralTypes";
import CandidateVariableList from "../../interfaces/ReduxClasses/CandidateVariableList";

interface ModalFormArgumentsArgs {
  variableList: CandidateVariableList[];
  acceptType?: TypeTree;
  label: string;
  input: InputArgumentObject[];
  currentIndex: number;
  require: boolean;
  isMultiline: boolean;
  setInput: React.Dispatch<React.SetStateAction<InputArgumentObject[]>>;
  error: boolean[];
  setError: React.Dispatch<React.SetStateAction<boolean[]>>;
}
export const ModalFormArguments = (props: ModalFormArgumentsArgs) => {
  // 入力値は一旦ローカルで保持し、確定時のみ親へ返す
  const [localInput, setLocalInput] = React.useState<string>("");
  const [localError, setLocalError] = React.useState<boolean>(false);
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
    if (props.input[props.currentIndex].value !== undefined && props.input[props.currentIndex].value !== null) {
      setLocalInput(props.input[props.currentIndex].value);
    }
  }, []);

  useEffect(() => {
    setOpenVariableList(false);
    setCandidateVariableList([...[]]);
    setOriginalInputText("");
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
    if (openVariableList && candidateVariableList.length === 0) {
      setOpenVariableList(false);
      setErrorMessages([...["一致する変数がありません"], ...errorMessages]);
      setTimeout(() => {
        setErrorMessages([...errorMessages]);
      }, 2000);
    }
  }, [candidateVariableList]);

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const tokenizes = inputValueMolding(e.currentTarget.value.replace(/\s/g, "").split(/(\+|-)/g), props.acceptType);
    if (tokenizes.join("") === "") {
      // 未入力Error
      if (props.require) {
        // 未入力かつ入力必須箇所の後処理
        setLocalError(true);
        setErrorMessages(["入力して下さい"]);
        props.setError((value) => value.map((v, i) => (i === props.currentIndex ? true : v)));
      } else {
        // 未入力かつ入力任意箇所の後処理
        setErrorMessages([...[]]);
        setLocalError(false);
        props.setInput((value) =>
          value
            .map((v, i) =>
              i === props.currentIndex
                ? {
                    key: v.key,
                    value: tokenizes.join("").replace(/(\+|-)$/g, ""),
                    isObject: v.isObject,
                  }
                : v
            )
            .concat()
        );
        props.setError((value) => value.map((v, i) => (i === props.currentIndex ? false : v)));
      }
      return;
    }
    const checkFlags = inputValueChecker(tokenizes, props.variableList, props.acceptType);
    if (checkFlags.every((flag) => !flag.error)) {
      setErrorMessages([...[]]);
      setLocalInput(tokenizes.join("").replace(/(\+|-)$/g, ""));
      setLocalError(false);
      props.setInput((value) =>
        value
          .map((v, i) =>
            i === props.currentIndex
              ? { key: v.key, value: tokenizes.join("").replace(/(\+|-)$/g, ""), isObject: v.isObject }
              : v
          )
          .concat()
      );
      props.setError((value) => value.map((v, i) => (i === props.currentIndex ? false : v)));
    } else {
      setLocalError(true);
      setErrorMessages([...checkFlags.filter((flag) => flag.error).map((flag) => flag.message)]);
      props.setError((value) => value.map((v, i) => (i === props.currentIndex ? true : v)));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { selectionStart, value } = e.currentTarget;
    if (openVariableList && selectionStart !== null) {
      setVariableSearch((old) => `${old}${value.substr(selectionStart - 1, 1)}`);
    }
    setLocalInput(value);
    props.setError((value) => value.map((v, i) => (i === props.currentIndex ? false : v)));
  };

  const handleAddVariableComponentOpen = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const current = refs.current as HTMLInputElement;
    const position = current.selectionStart === null ? 0 : current.selectionStart;
    if (openVariableList) {
      setCandidateVariableList([...[]]);
      setOriginalInputText("");
    } else {
      setLocalInput((e) => `${e.substr(0, position)}${e.substr(position)}`);
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
    const joinInsertValue = `${originalInputText.substr(0, position)}${
      position === 0 ? "" : " "
    }${insertValue} ${originalInputText.substr(position)}`;
    setLocalInput(joinInsertValue);
    props.setInput((value) =>
      value
        .map((v, i) => (i === props.currentIndex ? { key: v.key, value: joinInsertValue, isObject: v.isObject } : v))
        .concat()
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
        value={localInput}
        variant="outlined"
        color="secondary"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeydown}
        multiline={props.isMultiline}
        inputRef={refs}
        label={`${props.label}`}
        required={props.acceptType !== undefined && props.require}
        disabled={props.acceptType === undefined}
        placeholder={
          props.acceptType === undefined ? "カテゴリ・アクションを選択" : "変数の挿入は右のボタンから行います"
        }
        error={localError}
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
                secondary={`(${e.label}) ${e.type.parent}${e.type.child === Literal.NONE ? "" : " " + e.type.child}`}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};
