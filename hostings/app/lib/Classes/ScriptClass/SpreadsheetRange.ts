import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "SpreadsheetApp";
  public readonly categoryId = "SpreadsheetRange";
  public readonly categoryName = "セル範囲";
  public readonly categoryDescription = "指定したセル範囲への操作";
  public readonly cardCategoryIcon = "flip_to_front";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "excel Excel Spreadsheet spreadsheet sheet スプレッドシート シート Sheet セル 範囲 range Range";

// 範囲の値を取得する（単一）
export class GetValue extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getValue";
  public readonly methodName = "指定したセルから値を取得";
  public readonly methodDescription = "指定したセルから値を取得する（単一セル）";
  public readonly keyword = `${COMMON_KEYWORD} get cell`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_RANGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.ANY, child: Literal.NONE };
  public readonly argumentType = [];
}

// 範囲の値を取得する（複数）
export class GgetValues extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getValues";
  public readonly methodName = "指定したセル範囲から値を取得";
  public readonly methodDescription = "指定したセル範囲から値を取得する（複数セル）";
  public readonly keyword = `${COMMON_KEYWORD} get cell`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_RANGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.ARRAY2, child: Literal.ANY };
  public readonly argumentType = [];
}

// セルに値を書き込む
export class SetValue extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "setValue";
  public readonly methodName = "指定したセルへ値を書き込み";
  public readonly methodDescription = "指定したセルへ値を書き込む（単一セル）";
  public readonly keyword = `${COMMON_KEYWORD} write 反映 cell`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_RANGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [
    {
      name: "書き込む値",
      type: { parent: Literal.ANY, child: Literal.NONE },
      key: "value",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

// 範囲に値を書き込む
export class SetValues extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "setValues";
  public readonly methodName = "指定したセル範囲へ値を書き込み";
  public readonly methodDescription = "指定したセル範囲へ値を書き込む（単一セル）";
  public readonly keyword = `${COMMON_KEYWORD} write 反映 cell`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_RANGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [
    {
      name: "書き込む値の配列（２次元配列）",
      type: { parent: Literal.ARRAY2, child: Literal.ANY },
      key: "values",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

// 範囲の値をクリアする
export class RangeClear extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "rangeClear";
  public readonly methodName = "指定したセル範囲の値クリア";
  public readonly methodDescription = "指定したセル範囲へ値を全てクリアする";
  public readonly keyword = `${COMMON_KEYWORD} clear 消去`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_RANGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [];
}
