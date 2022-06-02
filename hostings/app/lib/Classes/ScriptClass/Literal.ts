import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";
/*

Javascriptにおけるプリミティブな型情報を定義する

*/

/** 共通のパラメーターを定義する */
class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly categoryId = "Literal";
  public readonly categoryName = "変数を作成";
  public readonly categoryDescription = "データの格納先を作成します";
  public readonly cardCategoryIcon = "add_box";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "変数 宣言 var const 作成 作る";

export class StringLiteral extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "StringLiteral";
  public readonly methodName = "変数を作成 - 文字列";
  public readonly methodDescription = "文字列の格納先（変数）を作成";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType = [];
}

export class NumericLiteral extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "NumericLiteral";
  public readonly methodName = "変数を作成 - 数値";
  public readonly methodDescription = "数値の格納先（変数）を作成";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType = [];
}

export class BooleanLiteral extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "BooleanLiteral";
  public readonly methodName = "変数を作成 - 真偽値";
  public readonly methodDescription = "数値の格納先（変数）を作成";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.BOOLEAN, child: Literal.NONE };
  public readonly outputType = { parent: Literal.BOOLEAN, child: Literal.NONE };
  public readonly argumentType = [];
}

export class BlankArrayLiteral extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "BlankArrayLiteral";
  public readonly methodName = "変数を作成 - 空の配列";
  public readonly methodDescription = "空の配列を作成する";
  public readonly keyword = `${COMMON_KEYWORD} blank リスト list`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly argumentType = [];
}
