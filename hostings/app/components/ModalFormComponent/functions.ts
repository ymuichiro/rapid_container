import CandidateVariableList from "../../interfaces/ReduxClasses/CandidateVariableList";
import Literal from "../../interfaces/SystemClasses/LiteralTypes";
import TypeTree from "../../interfaces/SystemClasses/TypeTree";
import { TextParser } from "../../lib";
import { systemError } from "../../lib/TextParser/utilitiy";

interface InputValueError {
  error: boolean;
  message: string;
}

/**
 * ユーザーの入力値が正しいか判定を行う
 * @param tokenizes 検査対象の入力値配列
 * @param variableList 挿入候補の変数情報一覧
 * @param acceptType 挿入候補の変数をFilterする型情報
 * @returns
 */
export const inputValueChecker = (
  tokenizes: string[],
  variableList: CandidateVariableList[],
  acceptType?: TypeTree
): InputValueError[] => {
  return tokenizes.map<InputValueError>((tokenize) => {
    if (tokenize === "") {
      return { error: false, message: "" };
    }
    // 入力値検査
    if (tokenize === "＋" || tokenize === "ー" || tokenize === "―" || tokenize === "－") {
      return {
        error: true,
        message: `記号${tokenize}が正しくありません。半角か、正しい記号か確認下さい。`,
      };
    }
    if (TextParser.isVariable(tokenize)) {
      if (variableList.find((list) => list.name === tokenize) === null ? true : false) {
        return {
          error: true,
          message: `入力された変数"${tokenize}"が存在しません`,
        };
      }
    }

    // 型検査
    if (!TextParser.isOperator(tokenize) && TextParser.isVariable(tokenize)) {
      // 変数値である場合の判定
      if (!TextParser.isType(variableList.find((x) => tokenize.replace(/\$/g, "") === x.name)?.type, acceptType)) {
        return {
          error: true,
          message: `入力された変数「${tokenize}」は「${acceptType?.parent}${
            acceptType?.child === Literal.NONE ? "" : " " + acceptType?.child
          }」ではありません`,
        };
      }
    }
    if (!TextParser.isOperator(tokenize) && !TextParser.isVariable(tokenize)) {
      // Literal値である場合の判定
      const EMSGS = `入力された値「${tokenize}」は「${acceptType?.parent}${
        acceptType?.child === Literal.NONE ? "" : " " + acceptType?.child
      }」ではありません`;
      if (TextParser.isTypeANYANY(acceptType)) {
        return { error: false, message: "" };
      } else if (TextParser.isTypeDate(acceptType)) {
        if (new Date(tokenize).toString() === "Invalid Date") return { error: true, message: EMSGS };
      } else if (TextParser.isTypeNumber(acceptType)) {
        if (Number(tokenize).toString() === "NaN") return { error: true, message: EMSGS };
      } else if (TextParser.isTypeBoolean(acceptType)) {
        if (tokenize !== "true" && tokenize !== "false") return { error: true, message: EMSGS };
      } else if (TextParser.isTypeIfOperator(acceptType)) {
        if (!TextParser.isIFOperator(tokenize)) return { error: true, message: EMSGS };
      } else if (TextParser.isTypeString(acceptType)) {
        if (typeof tokenize !== "string") return { error: true, message: EMSGS };
        if (!TextParser.isFormatString(tokenize)) return { error: true, message: EMSGS };
      } else {
        // pass
      }
    }
    return { error: false, message: "" };
  });
};

export const inputValueMolding = (tokenizes: string[], acceptType?: TypeTree) => {
  return tokenizes.map((tokenize) => {
    // 演算子判定
    if (TextParser.isOperator(tokenize)) {
      return tokenize;
    }
    // 変数判定
    if (TextParser.isVariable(tokenize)) {
      return tokenize;
    }
    // any判定
    if (TextParser.isTypeANYANY(acceptType)) {
      return tokenize;
    }
    // Literal判定
    if (
      typeof tokenize === "string" &&
      tokenize !== "" &&
      !TextParser.isFormatString(tokenize) &&
      TextParser.isTypeString(acceptType)
    ) {
      return TextParser.addStringSymbol(tokenize).replace(/\s/g, "");
    }
    return tokenize;
  });
};

/** 変数名に対して変数であることを示す記号を付与する */
export const AddSymbolToVariableValue = (variableList: CandidateVariableList) => {
  if (variableList.label === "variable") {
    return TextParser.addVariableSymbol(variableList.name);
  } else if (variableList.label === "template") {
    return variableList.name;
  } else {
    throw systemError("指定されたVariableListに未定義の型が存在します", AddSymbolToVariableValue.name);
  }
};
