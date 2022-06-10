"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTypeANYANY = exports.isTypeIfOperator = exports.isTypeArrayStrict = exports.isTypeArray = exports.isTypeNone = exports.isTypeDate = exports.isTypeBoolean = exports.isTypeNumber = exports.isTypeString = exports.isType = exports.isCorrectFormatOfVariable = exports.isReservedWord = exports.isIFOperator = exports.isOperator = exports.addStringSymbol = exports.removeVariableSymbol = exports.addVariableSymbol = exports.isBlank = exports.isFormatString = exports.isVariable = exports.isNumber = exports.isBoolean = exports.isDate = exports.inputTokenizer = exports.isUndefined = void 0;
const LiteralTypes_1 = require("../../interfaces/SystemClasses/LiteralTypes");
const isUndefined = (v) => {
  return v === undefined;
};
exports.isUndefined = isUndefined;
/** 入力値をTokenに変換する */
const inputTokenizer = (target) => {
  const tokenize = target.replace(/[\s]/g, "").split(/(\+|-)/g);
  return tokenize.join("") === "" ? [] : tokenize.filter((e) => e !== "");
};
exports.inputTokenizer = inputTokenizer;
/** 入力値が日付であるか否か判定 */
const isDate = (target) => {
  return !(0, exports.isNumber)(target) && new Date(target).toString() !== "Invalid Date";
};
exports.isDate = isDate;
/** 入力値がBooleanであるか否か判定 */
const isBoolean = (target) => {
  return target === "true" || target === "false";
};
exports.isBoolean = isBoolean;
/** 入力値が数値であるか否か判定 */
const isNumber = (target) => {
  return !(0, exports.isBoolean)(target) && Number(target).toString() !== "NaN";
};
exports.isNumber = isNumber;
/** 入力値が変数であるか否か判定 */
const isVariable = (target) => {
  return /\$[\s\S].*\$/.test(target);
};
exports.isVariable = isVariable;
/** 入力値が正しく文字列として入力されているか判定 */
const isFormatString = (target) => {
  const patterns = [/^'[\s\S].*'$/, /^''$/, /^""$/, /^"[\s\S].*"$/];
  return patterns.some((pattern) => pattern.test(target));
};
exports.isFormatString = isFormatString;
/** 入力値が空白か否か判定 */
const isBlank = (target) => {
  return target === "";
};
exports.isBlank = isBlank;
/** 入力値に変数Symbolを付与する */
const addVariableSymbol = (target) => {
  return (0, exports.isVariable)(target) ? target : `$${target}$`;
};
exports.addVariableSymbol = addVariableSymbol;
/** 入力値から変数Symbolを付与する */
const removeVariableSymbol = (target) => {
  return target.replace(/^\$/, "").replace(/\$$/, "");
};
exports.removeVariableSymbol = removeVariableSymbol;
/** 入力値に文字列Symbolを付与する */
const addStringSymbol = (target) => {
  return (0, exports.isFormatString)(target) ? target : target === "''" ? target : `'${target}'`;
};
exports.addStringSymbol = addStringSymbol;
/** 入力値が演算子であるか否か判定 */
const isOperator = (target) => {
  return target === "+" || target === "-";
};
exports.isOperator = isOperator;
/** TypeTreeのArray子要素も含め判定を行う */
const isIFOperator = (target) => {
  return ["==", "===", "!=", "!==", ">", "<", ">=", "<="].some((e) => e === target);
};
exports.isIFOperator = isIFOperator;
/** 入力値がJSの予約後であるか判定する */
const isReservedWord = (targetText) => {
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
exports.isReservedWord = isReservedWord;
const isCorrectFormatOfVariable = (targetText) => {
  if (targetText === "" || targetText === "　") {
    return { err: true, message: "空白です" };
  }
  if ((0, exports.isReservedWord)(targetText)) {
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
exports.isCorrectFormatOfVariable = isCorrectFormatOfVariable;
/** TypeTreeの型判定を行う */
const isType = (targetType, acceptType) => {
  if ((0, exports.isUndefined)(targetType) || (0, exports.isUndefined)(acceptType)) return false;
  if (
    targetType.parent === LiteralTypes_1.default.IF_OPERATOR &&
    acceptType.parent !== LiteralTypes_1.default.IF_OPERATOR
  )
    return false;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.ANY) return true;
  if (acceptType.parent === LiteralTypes_1.default.ANY && acceptType.child === LiteralTypes_1.default.ANY) return true;
  if (targetType.parent === LiteralTypes_1.default.ANY) return true;
  if (targetType.parent === acceptType.parent && acceptType.child === LiteralTypes_1.default.ANY) return true;
  if (targetType.parent === acceptType.parent && targetType.child === acceptType.child) {
    return true;
  } else {
    return false;
  }
};
exports.isType = isType;
/** TypeTreeのString判定を行う */
const isTypeString = (targetType) => {
  if ((0, exports.isUndefined)(targetType)) return false;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.ANY) return true;
  if (targetType.parent === LiteralTypes_1.default.ANY) return true;
  return targetType.parent === LiteralTypes_1.default.STRING && targetType.child === LiteralTypes_1.default.NONE;
};
exports.isTypeString = isTypeString;
/** TypeTreeのNumber判定を行う */
const isTypeNumber = (targetType) => {
  if ((0, exports.isUndefined)(targetType)) return false;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.ANY) return true;
  if (targetType.parent === LiteralTypes_1.default.ANY) return true;
  return targetType.parent === LiteralTypes_1.default.NUMBER && targetType.child === LiteralTypes_1.default.NONE;
};
exports.isTypeNumber = isTypeNumber;
/** TypeTreeのBoolean判定を行う */
const isTypeBoolean = (targetType) => {
  if ((0, exports.isUndefined)(targetType)) return false;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.ANY) return true;
  if (targetType.parent === LiteralTypes_1.default.ANY) return true;
  return targetType.parent === LiteralTypes_1.default.BOOLEAN && targetType.child === LiteralTypes_1.default.NONE;
};
exports.isTypeBoolean = isTypeBoolean;
/** TypeTreeのDate判定を行う */
const isTypeDate = (targetType) => {
  if ((0, exports.isUndefined)(targetType)) return false;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.ANY) return true;
  if (targetType.parent === LiteralTypes_1.default.ANY) return true;
  return targetType.parent === LiteralTypes_1.default.DATE && targetType.child === LiteralTypes_1.default.NONE;
};
exports.isTypeDate = isTypeDate;
/** TypeTreeのNONE判定を行う */
const isTypeNone = (targetType) => {
  if ((0, exports.isUndefined)(targetType)) return false;
  return targetType.parent === LiteralTypes_1.default.NONE && targetType.child === LiteralTypes_1.default.NONE;
};
exports.isTypeNone = isTypeNone;
/** TypeTreeのArray判定を行う */
const isTypeArray = (targetType) => {
  if ((0, exports.isUndefined)(targetType)) return false;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.ANY) return true;
  return (
    !(0, exports.isUndefined)(targetType) &&
    targetType.parent === LiteralTypes_1.default.ARRAY &&
    targetType.child === LiteralTypes_1.default.NONE
  );
};
exports.isTypeArray = isTypeArray;
/** TypeTreeのArray子要素も含め判定を行う */
const isTypeArrayStrict = (targetType, acceptType) => {
  if ((0, exports.isUndefined)(targetType)) return false;
  if ((0, exports.isUndefined)(acceptType)) return false;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.ANY) return true;
  if (acceptType.parent === LiteralTypes_1.default.ANY && acceptType.child === LiteralTypes_1.default.ANY) return true;
  if ((0, exports.isTypeArray)(targetType) && targetType.child === LiteralTypes_1.default.ANY) return true;
  return (0, exports.isTypeArray)(targetType) && targetType.child === acceptType.child;
};
exports.isTypeArrayStrict = isTypeArrayStrict;
/** TypeTreeのArray子要素も含め判定を行う */
const isTypeIfOperator = (targetType) => {
  if ((0, exports.isUndefined)(targetType)) return false;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.ANY) return true;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.NONE) return true;
  if (targetType.parent === LiteralTypes_1.default.IF_OPERATOR && targetType.child === LiteralTypes_1.default.NONE)
    return true;
  return false;
};
exports.isTypeIfOperator = isTypeIfOperator;
/** TypeTreeのArray子要素も含め判定を行う */
const isTypeANYANY = (targetType) => {
  if ((0, exports.isUndefined)(targetType)) return false;
  if (targetType.parent === LiteralTypes_1.default.ANY && targetType.child === LiteralTypes_1.default.ANY) return true;
  return false;
};
exports.isTypeANYANY = isTypeANYANY;
