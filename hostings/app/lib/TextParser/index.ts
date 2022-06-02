import Literal from "../../interfaces/SystemClasses/LiteralTypes";
import TypeTree from "../../interfaces/SystemClasses/TypeTree";

export const isUndefined = <T>(v: T | undefined): v is undefined => {
  return v === undefined;
};

/** 入力値をTokenに変換する */
export const inputTokenizer = (target: string): string[] => {
  const tokenize = target.replace(/[\s]/g, "").split(/(\+|-)/g);
  return tokenize.join("") === "" ? [] : tokenize.filter((e) => e !== "");
};

/** 入力値が日付であるか否か判定 */
export const isDate = (target: string): boolean => {
  return !isNumber(target) && new Date(target).toString() !== "Invalid Date";
};

/** 入力値がBooleanであるか否か判定 */
export const isBoolean = (target: string): boolean => {
  return target === "true" || target === "false";
};

/** 入力値が数値であるか否か判定 */
export const isNumber = (target: string): boolean => {
  return !isBoolean(target) && Number(target).toString() !== "NaN";
};

/** 入力値が変数であるか否か判定 */
export const isVariable = (target: string): boolean => {
  return /\$[\s\S].*\$/.test(target);
};

/** 入力値が正しく文字列として入力されているか判定 */
export const isFormatString = (target: string): boolean => {
  const patterns = [/^'[\s\S].*'$/, /^''$/, /^""$/, /^"[\s\S].*"$/];
  return patterns.some((pattern) => pattern.test(target));
};

/** 入力値が空白か否か判定 */
export const isBlank = (target: string): boolean => {
  return target === "";
};

/** 入力値に変数Symbolを付与する */
export const addVariableSymbol = (target: string): string => {
  return isVariable(target) ? target : `$${target}$`;
};

/** 入力値から変数Symbolを付与する */
export const removeVariableSymbol = (target: string): string => {
  return target.replace(/^\$/, "").replace(/\$$/, "");
};

/** 入力値に文字列Symbolを付与する */
export const addStringSymbol = (target: string): string => {
  return isFormatString(target) ? target : target === "''" ? target : `'${target}'`;
};

/** 入力値が演算子であるか否か判定 */
export const isOperator = (target: string): boolean => {
  return target === "+" || target === "-";
};

/** TypeTreeのArray子要素も含め判定を行う */
export const isIFOperator = (target: string): boolean => {
  return ["==", "===", "!=", "!==", ">", "<", ">=", "<="].some((e) => e === target);
};

/** 入力値がJSの予約後であるか判定する */
export const isReservedWord = (targetText: string): boolean => {
  return (
    [
      "break",
      "case",
      "catch",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "else",
      "finally",
      "for",
      "function",
      "if",
      "in",
      "instanceof",
      "new",
      "return",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "var",
      "void",
      "while",
      "with",
      "class",
      "enum",
      "export",
      "extends",
      "import",
      "super",
      "implements",
      "interface",
      "let",
      "package",
      "private",
      "protected",
      "public",
      "static",
      "yield",
      "true",
      "false",
    ].find((e) => e === targetText) !== undefined
  );
};

export const isCorrectFormatOfVariable = (targetText: string): { err: boolean; message: string } => {
  if (targetText === "" || targetText === "　") {
    return { err: true, message: "空白です" };
  }
  if (isReservedWord(targetText)) {
    return {
      err: true,
      message: `「${targetText}」はJavascriptで予約された単語の為、使えません`,
    };
  }
  if (/[0-9]/.test(targetText[0])) {
    return { err: true, message: "単語の先頭に数字は使えません" };
  }
  if (!/^[A-Za-z0-9]*$/.test(targetText)) {
    return {
      err: true,
      message: "利用可能な文字は大文字/小文字の半角英数のみです。",
    };
  }
  return { err: false, message: "" };
};

/** TypeTreeの型判定を行う */
export const isType = (targetType: TypeTree | undefined, acceptType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType) || isUndefined(acceptType)) return false;
  if (targetType.parent === Literal.IF_OPERATOR && acceptType.parent !== Literal.IF_OPERATOR) return false;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.ANY) return true;
  if (acceptType.parent === Literal.ANY && acceptType.child === Literal.ANY) return true;
  if (targetType.parent === Literal.ANY) return true;
  if (targetType.parent === acceptType.parent && acceptType.child === Literal.ANY) return true;
  if (targetType.parent === acceptType.parent && targetType.child === acceptType.child) {
    return true;
  } else {
    return false;
  }
};

/** TypeTreeのString判定を行う */
export const isTypeString = (targetType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType)) return false;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.ANY) return true;
  if (targetType.parent === Literal.ANY) return true;
  return targetType.parent === Literal.STRING && targetType.child === Literal.NONE;
};

/** TypeTreeのNumber判定を行う */
export const isTypeNumber = (targetType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType)) return false;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.ANY) return true;
  if (targetType.parent === Literal.ANY) return true;
  return targetType.parent === Literal.NUMBER && targetType.child === Literal.NONE;
};

/** TypeTreeのBoolean判定を行う */
export const isTypeBoolean = (targetType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType)) return false;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.ANY) return true;
  if (targetType.parent === Literal.ANY) return true;
  return targetType.parent === Literal.BOOLEAN && targetType.child === Literal.NONE;
};

/** TypeTreeのDate判定を行う */
export const isTypeDate = (targetType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType)) return false;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.ANY) return true;
  if (targetType.parent === Literal.ANY) return true;
  return targetType.parent === Literal.DATE && targetType.child === Literal.NONE;
};

/** TypeTreeのNONE判定を行う */
export const isTypeNone = (targetType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType)) return false;
  return targetType.parent === Literal.NONE && targetType.child === Literal.NONE;
};

/** TypeTreeのArray判定を行う */
export const isTypeArray = (targetType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType)) return false;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.ANY) return true;
  return !isUndefined(targetType) && targetType.parent === Literal.ARRAY && targetType.child === Literal.NONE;
};

/** TypeTreeのArray子要素も含め判定を行う */
export const isTypeArrayStrict = (targetType: TypeTree | undefined, acceptType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType)) return false;
  if (isUndefined(acceptType)) return false;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.ANY) return true;
  if (acceptType.parent === Literal.ANY && acceptType.child === Literal.ANY) return true;
  if (isTypeArray(targetType) && targetType.child === Literal.ANY) return true;
  return isTypeArray(targetType) && targetType.child === acceptType.child;
};

/** TypeTreeのArray子要素も含め判定を行う */
export const isTypeIfOperator = (targetType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType)) return false;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.ANY) return true;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.NONE) return true;
  if (targetType.parent === Literal.IF_OPERATOR && targetType.child === Literal.NONE) return true;
  return false;
};

/** TypeTreeのArray子要素も含め判定を行う */
export const isTypeANYANY = (targetType: TypeTree | undefined): boolean => {
  if (isUndefined(targetType)) return false;
  if (targetType.parent === Literal.ANY && targetType.child === Literal.ANY) return true;
  return false;
};
