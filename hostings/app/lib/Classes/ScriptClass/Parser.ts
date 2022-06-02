import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

/*

変数のCast処理群を定義する

*/

/*

数値処理

*/

/** 共通のパラメーターを定義する */
class NumericParent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "Number";
  public readonly categoryId = "Parser";
  public readonly categoryName = "変数変換";
  public readonly categoryDescription = "変数の形式/型を変換する";
  public readonly cardCategoryIcon = "change_circle";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "変換 コンバート パーサー convert キャスト cast";

export class NumericToScring extends NumericParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "NumericToScring";
  public readonly methodName = "変数変換 - 数値 → 文字列";
  public readonly methodDescription = "数値形式の変数を文字列へ変換します";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType = [];
}

export class NumericAddDigit extends NumericParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "NumericAddDigit";
  public readonly methodName = "変数変換 - 数値 → 3桁カンマ区切り文字列";
  public readonly methodDescription = "数値形式の変数を3桁カンマ区切りの文字列へ変換します";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType = [];
}

export class NumericZeroPadding extends NumericParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "NumericZeroPadding";
  public readonly methodName = "変数変換 - 数値ゼロパディング";
  public readonly methodDescription = "数値形式の先頭に0をつけ、桁数を揃えます";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType = [
    {
      name: "桁数",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

/*

文字列処理

*/

/** 共通のパラメーターを定義する */
class StringParent implements Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription"> {
  public readonly className = "String";
  public readonly categoryId = "Parser";
  public readonly categoryName = "変数変換";
  public readonly categoryDescription = "変数の形式/型を変換する";
  public readonly cardCategoryIcon = "change_circle";
  public readonly hasNest = false;
}

export class StringToNumeric extends StringParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "StringToNumeric";
  public readonly methodName = "変数変換 - 文字列 → 数値";
  public readonly methodDescription = "数値形式の変数を文字列へ変換します";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType = [
    {
      name: "対象文字列（数値に変換できない場合は NaN となります）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "num",
    },
  ];
}

export class StringSprit extends StringParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "StringSprit";
  public readonly methodName = "変数変換 - 文字列 → 配列";
  public readonly methodDescription = "文字列を指定の区切り文字で分割し配列に変換します";
  public readonly keyword = `${COMMON_KEYWORD} 分割`;
  public readonly inputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly outputType = { parent: Literal.ARRAY, child: Literal.STRING };
  public readonly argumentType = [
    {
      name: "区切り文字",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "text",
    },
  ];
}
