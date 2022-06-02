import React, { useEffect } from "react";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";
import { TempErrorView } from "./TempErrorView";
import { isTypeNone, isUndefined } from "../../lib/TextParser";
import { TextParser } from "../../lib";
import TypeTree from "../../interfaces/SystemClasses/TypeTree";
import Literal from "../../interfaces/SystemClasses/LiteralTypes";

interface ModalFormOutputArgs {
  variableList: string[]; // 同一変数名判定用途のみ
  acceptType?: TypeTree;
  label: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalFormOutput = (props: ModalFormOutputArgs) => {
  // エラーが発生した場合の表示箇所を保持
  const [errorMessages, setErrorMessages] = React.useState<string[]>([]);
  const refs = React.useRef<HTMLInputElement>();

  useEffect(() => {
    const value = refs.current?.value;
    if (value !== undefined && value !== "") {
      const errors: string[] = [];
      const check1 = TextParser.isCorrectFormatOfVariable(value);
      const check2 = props.variableList.find((variable) => variable === value);
      if (check1.err) errors.push(check1.message);
      if (check2 !== undefined) errors.push(`変数名「${value}」は既に使われています`);
      setErrorMessages(errors);
      props.setError(errors.length !== 0);
    }
  }, [props.acceptType]);

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const errors: string[] = [];
    const check1 = TextParser.isCorrectFormatOfVariable(e.currentTarget.value);
    const check2 = props.variableList.find((variable) => variable === e.currentTarget.value);
    if (check1.err) errors.push(check1.message);
    if (check2 !== undefined) errors.push(`変数名「${e.currentTarget.value}」は既に使われています`);
    setErrorMessages(errors);
    props.setError(errors.length !== 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    props.setInput(e.currentTarget.value.replace(/\s/g, ""));
    props.setError(false);
  };

  return (
    <div>
      <TextField
        fullWidth
        value={props.input}
        variant="outlined"
        color="secondary"
        inputRef={refs}
        required={props.acceptType !== undefined && !TextParser.isTypeNone(props.acceptType)}
        onChange={handleChange}
        onBlur={handleBlur}
        label={`${props.label}${isUndefined(props.acceptType) ? "" : " " + props.acceptType.parent.toString()}${
          isUndefined(props.acceptType)
            ? ""
            : props.acceptType.child === Literal.NONE
            ? ""
            : " " + props.acceptType?.child.toString()
        }`}
        disabled={props.acceptType === undefined && !isTypeNone(props.acceptType)}
        placeholder={
          props.acceptType === undefined && !isTypeNone(props.acceptType)
            ? "カテゴリ・アクションを選択"
            : "値の保存先名（変数名）を指定します"
        }
        error={errorMessages.length !== 0}
      />
      <Collapse in={errorMessages.length !== 0} exit={errorMessages.length === 0} unmountOnExit>
        {errorMessages.map((e, i) => (
          <TempErrorView key={i}>{e}</TempErrorView>
        ))}
      </Collapse>
    </div>
  );
};
