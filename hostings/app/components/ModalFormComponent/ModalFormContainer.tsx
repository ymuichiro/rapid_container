import React, { useEffect } from "react";
import { ModalFormInput } from "./ModalFormInput";
import { ModalFormOutput } from "./ModalFormOutput";
import { ModalFormArguments } from "./ModalFormArguments";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import CardContent from "@material-ui/core/CardContent";
import { Classes, TextParser } from "../../lib";
import { EditerListContext } from "../../pages/EditerPage";
import { getSpecificCard, getCanUseVariables, getNewGroupId } from "../../stores/editers/functions";
import globalStyles from "../../styles/useGlobalStyles";
import { Editers, useAppDispatch } from "../../stores";
import { isUndefined } from "../../lib/TextParser";
import { InputArgumentObject, InputClassesData } from "../../interfaces/ReduxClasses/InputClasses";
import { InputClassesDataRoot } from "../../interfaces/ReduxClasses";
import Literal from "../../interfaces/SystemClasses/LiteralTypes";
import AbstractClasses from "../../interfaces/SystemClasses/AbstractClasses";
import CandidateVariableList from "../../interfaces/ReduxClasses/CandidateVariableList";
import EditerStateCurrentArea from "../../interfaces/ReduxClasses/EditerStateCurrentArea";
import CenterModal from "../CenterModal";
import useGlobalLogic from "../../interfaces/logic/useGlobalLogic";
import { ModalFormSelectCard } from "./ModalFormSelectCard";

interface ModalFormContainerArgs {
  entities: InputClassesData[];
  root: InputClassesDataRoot;
  current: EditerStateCurrentArea[];
}

/*
 カテゴリ選択BOXを１つに統合するには？
 Collapseでカテゴリ側の入力フィールドを隠す。かつこの際にunmountされない事
 メソッド選択時にカテゴリ側にも自動選択される機能の追加
*/

export const ModalFormContainer = (props: ModalFormContainerArgs) => {
  const [input, setInput] = React.useState<string>("");
  const [inputError, setInputError] = React.useState<boolean>(false);
  const [output, setOutput] = React.useState<string>("");
  const [outputError, setOutputError] = React.useState<boolean>(false);
  const [inputArguments, setInputArguments] = React.useState<InputArgumentObject[]>([]);
  const [inputArgumentsError, setInputArgumentsError] = React.useState<boolean[]>([]);
  const [categorySelectInput, setCategorySelectInput] = React.useState<string>("");
  const [methodSelectInput, setMethodSelectInput] = React.useState<string>("");
  const [classesSelectError, setClassesSelectError] = React.useState<boolean>(false);
  const [currentClasses, setCurrentClasses] = React.useState<AbstractClasses | undefined>(undefined);
  const [candidateVariableList, setCandidateVariableList] = React.useState<CandidateVariableList[]>([]);
  const [allVariableList, setAllVariableList] = React.useState<string[]>([]);
  const [buttonDisabledFlag, setButtonDisabledFlag] = React.useState<boolean>(true);
  const [inputComment, setInputComment] = React.useState<string>("");
  const [childGroupId, setChildGroupId] = React.useState<string>("");
  const gs = globalStyles();
  const dispatch = useAppDispatch();
  const { clsxJoin } = useGlobalLogic();
  const context = React.useContext(EditerListContext);

  useEffect(() => {
    if (context.state.isModalOpen) {
      const current = getSpecificCard(props.entities, context.state.idForModal);
      setCategorySelectInput(current.categoryId);
      setMethodSelectInput(current.methodId);
      setInput(current.inputBaseValue);
      setOutput(current.outputVariableName);
      setInputArguments([...current.inputArgumentValue]);
      setCurrentClasses(Classes.Search.getSpecificClasses(current.categoryId, current.methodId));
      setChildGroupId(current.childGroupId);
    }
  }, [context.state.isModalOpen]);

  useEffect(() => {
    // 入力値ERRORを検証する
    let flag = false;
    // 未入力とErrorフラグの有無を検証する
    if (
      [
        inputError,
        outputError,
        inputArgumentsError.some((e) => e === true),
        classesSelectError,
        currentClasses?.inputType !== undefined && !TextParser.isTypeNone(currentClasses.inputType) && input === "",
        currentClasses?.outputType !== undefined && !TextParser.isTypeNone(currentClasses.outputType) && output === "",
        currentClasses?.argumentType !== undefined &&
          currentClasses.argumentType.length !== 0 &&
          currentClasses.argumentType.some((e, i) => e.require && inputArguments[i].value === ""),
        categorySelectInput === "",
        methodSelectInput === "",
      ].some((e) => e === true)
    ) {
      flag = true; // Errorが存在する為、ButtonDisabled
    }
    setButtonDisabledFlag(flag);
  }, [
    input,
    output,
    inputArguments,
    categorySelectInput,
    methodSelectInput,
    inputError,
    outputError,
    inputArgumentsError,
    classesSelectError,
  ]);

  useEffect(() => {
    // 変数一覧を更新する
    const { all, ago } = getCanUseVariables(props.root, props.current, context.state.idForModal);
    setCandidateVariableList(ago);
    setAllVariableList(all);
  }, [context.state.isModalOpen]);

  const handleCurrentClassesUpdate = (categoryInput: string, methodInput: string) => {
    if (methodInput !== "") {
      const currentClasses = Classes.Search.getSpecificClasses(categoryInput, methodInput);
      const argLength = currentClasses?.argumentType.length === undefined ? 0 : currentClasses.argumentType.length;
      // まずはBlankのInputArgsを作成
      const updatedArgs = currentClasses?.argumentType.map<InputArgumentObject>((e) => {
        const currentArgs = inputArguments.find((i) => i.key === e.key);
        return { key: e.key, value: currentArgs === undefined ? "" : currentArgs.value, isObject: e.isObject };
      });
      // 既存の値を代入し、setInput
      setCurrentClasses(currentClasses);
      setInputArguments([...(isUndefined(updatedArgs) ? [] : updatedArgs)]);
      setInputArgumentsError([...inputArgumentsError, ...new Array(argLength).fill(false).slice(0, argLength)]);
      // メソッドの変更を検知した際には各Errorを一旦初期化する
      setInputError(false);
      setOutputError(false);
      setInputArgumentsError((e) => e.map((_) => false));
    }
  };

  const handleSubmit = () => {
    if (isUndefined(currentClasses)) {
      console.error("currentClasses is undefined", "ModalFormContainer", "->", "handleSubmit");
    } else {
      // GroupIDが存在しない、かつNESTカードの場合は、GroupIDを新規生成の上、更新する
      const groupId = currentClasses.hasNest && childGroupId === "" ? getNewGroupId(props.root) : childGroupId;
      if (currentClasses.hasNest && childGroupId === "") dispatch(Editers.createGroup({ groupId }));
      dispatch(
        Editers.update({
          id: context.state.idForModal,
          categoryId: currentClasses.categoryId,
          methodId: currentClasses.methodId,
          inputBaseValue: input,
          inputArgumentValue: inputArguments,
          outputVariableName: output,
          comment: inputComment,
          childGroupId: groupId,
        })
      );
      context.reducer({
        type: "update",
        payload: { idForModal: "", isModalOpen: false },
      });
    }
  };

  const handleModalClose = () => {
    // 閉じる際、未入力カードは削除の上、Close
    dispatch(Editers.deleteNoDataCard());
    context.reducer({
      type: "update",
      payload: {
        ...context.state,
        isModalOpen: false,
      },
    });
  };

  return (
    <CenterModal
      open={context.state.isModalOpen}
      onClose={handleModalClose}
      style={{ maxHeight: "80vh", maxWidth: "800px", width: "95vw" }}
    >
      <div style={{ width: "100%" }} className={gs.positionRight}>
        <IconButton color="secondary" size="small" onClick={handleModalClose} style={{ padding: "1px" }}>
          <Icon fontSize="small">cancel</Icon>
        </IconButton>
      </div>
      <CardContent style={{ paddingTop: "0px" }}>
        <Grid container direction="row" justify="center" alignItems={"center"} spacing={2}>
          <Grid item xs={12}>
            <div className={clsxJoin(gs.text_h5, gs.text_primary)}>設定値登録</div>
          </Grid>
          <Grid item xs={12}>
            <ModalFormSelectCard
              inputCategory={categorySelectInput}
              setInputCategory={setCategorySelectInput}
              inputMethod={methodSelectInput}
              setInputMethod={setMethodSelectInput}
              setError={setClassesSelectError}
              setClassesUpdater={handleCurrentClassesUpdate}
            />
          </Grid>
          {currentClasses?.inputType !== undefined && !TextParser.isTypeNone(currentClasses.inputType) && (
            <Grid item xs={12}>
              <ModalFormInput
                variableList={candidateVariableList}
                acceptType={currentClasses?.inputType}
                input={input}
                setInput={setInput}
                label="入力値"
                error={inputError}
                setError={setInputError}
              />
            </Grid>
          )}
          {currentClasses?.outputType !== undefined && !TextParser.isTypeNone(currentClasses?.outputType) && (
            <Grid item xs={12}>
              <ModalFormOutput
                variableList={allVariableList}
                acceptType={currentClasses?.outputType}
                input={output}
                setInput={setOutput}
                label="出力先名指定（変数名）"
                error={outputError}
                setError={setOutputError}
              />
            </Grid>
          )}
          {currentClasses?.argumentType.length !== 0 && currentClasses?.argumentType.length !== undefined && (
            <Grid item xs={12}>
              <div className={clsxJoin(gs.text_body, gs.text_secondary)}>パラメーター</div>
            </Grid>
          )}
          {currentClasses?.argumentType.length !== 0 &&
            currentClasses?.argumentType.length !== undefined &&
            currentClasses?.argumentType.map((e, i) => {
              return (
                <Grid item xs={12} key={i}>
                  <ModalFormArguments
                    variableList={candidateVariableList}
                    acceptType={e.type}
                    input={inputArguments}
                    setInput={setInputArguments}
                    isMultiline={e.isMultiLine}
                    require={e.require}
                    label={`引数-${i} (${e.name}/${e.type.parent}${
                      e.type.child === Literal.NONE ? "" : " " + e.type.child
                    })`}
                    error={inputArgumentsError}
                    setError={setInputArgumentsError}
                    currentIndex={i}
                  />
                </Grid>
              );
            })}
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              onBlur={(e) => setInputComment(e.currentTarget.value)}
              label={"コメント"}
              required={false}
              placeholder={"メモ・TODO等自由記述欄"}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleSubmit}
              disabled={buttonDisabledFlag}
            >
              登録
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </CenterModal>
  );
};
