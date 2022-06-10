"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlankArrayLiteral = exports.BooleanLiteral = exports.NumericLiteral = exports.StringLiteral = void 0;
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
/*

Javascriptにおけるプリミティブな型情報を定義する

*/
/** 共通のパラメーターを定義する */
class Parent {
  constructor() {
    this.categoryId = "Literal";
    this.categoryName = "変数を作成";
    this.categoryDescription = "データの格納先を作成します";
    this.cardCategoryIcon = "add_box";
    this.hasNest = false;
  }
}
const COMMON_KEYWORD = "変数 宣言 var const 作成 作る";
class StringLiteral extends Parent {
  constructor() {
    super();
    this.methodId = "StringLiteral";
    this.methodName = "変数を作成 - 文字列";
    this.methodDescription = "文字列の格納先（変数）を作成";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.StringLiteral = StringLiteral;
class NumericLiteral extends Parent {
  constructor() {
    super();
    this.methodId = "NumericLiteral";
    this.methodName = "変数を作成 - 数値";
    this.methodDescription = "数値の格納先（変数）を作成";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.NumericLiteral = NumericLiteral;
class BooleanLiteral extends Parent {
  constructor() {
    super();
    this.methodId = "BooleanLiteral";
    this.methodName = "変数を作成 - 真偽値";
    this.methodDescription = "数値の格納先（変数）を作成";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.BOOLEAN, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.BOOLEAN, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.BooleanLiteral = BooleanLiteral;
class BlankArrayLiteral extends Parent {
  constructor() {
    super();
    this.methodId = "BlankArrayLiteral";
    this.methodName = "変数を作成 - 空の配列";
    this.methodDescription = "空の配列を作成する";
    this.keyword = `${COMMON_KEYWORD} blank リスト list`;
    this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
    this.argumentType = [];
  }
}
exports.BlankArrayLiteral = BlankArrayLiteral;
