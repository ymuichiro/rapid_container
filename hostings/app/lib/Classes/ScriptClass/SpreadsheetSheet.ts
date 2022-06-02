import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "SpreadsheetApp";
  public readonly categoryId = "SpreadsheetSheet";
  public readonly categoryName = "Sheet";
  public readonly categoryDescription = "Spreadsheet内のシートを操作";
  public readonly cardCategoryIcon = "border_all";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "excel Excel Spreadsheet spreadsheet sheet スプレッドシート シート Sheet";

// shを削除する
export class DeleteSheet extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "deleteSheet";
  public readonly methodName = "シートを削除";
  public readonly methodDescription = "指定したスプレッドシートのシートを削除する";
  public readonly keyword = `${COMMON_KEYWORD} delete`;
  public readonly inputType = {
    parent: Google.SPREADSHEET,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [
    {
      name: "削除するシート変数",
      type: { parent: Google.SPREADSHEET_SHEET, child: Literal.NONE },
      key: "sheet",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

// shの範囲を指定する - 絶対範囲
export class GetRangeByString extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getRangeByString";
  public readonly methodName = "セルを範囲指定（絶対座標）";
  public readonly methodDescription = "指定したシート内で絶対座標で範囲選択する";
  public readonly keyword = `${COMMON_KEYWORD} range 範囲 cell セル`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.SPREADSHEET_RANGE,
    child: Literal.NONE,
  };
  public readonly argumentType = [
    {
      name: "対象範囲（例：A1:B10）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "range",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

// shの範囲を指定する - 相対範囲
export class GetRangeByInteger extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getRangeByInteger";
  public readonly methodName = "セルを範囲指定（相対範囲）";
  public readonly methodDescription = "指定したシート内で相対座標で指定する";
  public readonly keyword = `${COMMON_KEYWORD} range 範囲 cell セル`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.SPREADSHEET_RANGE,
    child: Literal.NONE,
  };
  public readonly argumentType = [
    {
      name: "対象範囲 - y軸",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      key: "row",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "対象範囲 - x軸",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      key: "column",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "対象範囲 - 縦幅数(縦幅指定時は横幅数必須))",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      key: "columns",
      require: false,
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "対象範囲 - 横幅数",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      key: "rows",
      require: false,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

// 値の入っているセル全てで範囲選択
export class GetDataRange extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDataRange";
  public readonly methodName = "値の入ったセル範囲全てを指定";
  public readonly methodDescription = "指定したシート内で値の入っているセル全てを範囲選択する";
  public readonly keyword = `${COMMON_KEYWORD} range 範囲 cell セル`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.SPREADSHEET_RANGE,
    child: Literal.NONE,
  };
  public readonly argumentType = [];
}

// Sheetをクリアする
export class SheetAllClear extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "SheetAllClear";
  public readonly methodName = "シートをクリア";
  public readonly methodDescription = "指定したシート内の値を全て削除する";
  public readonly keyword = `${COMMON_KEYWORD} clear 消去 リセット delete reset`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [];
}

// Sheetをコピーする
export class SheetCopy extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "sheetAllClear";
  public readonly methodName = "シートをコピー";
  public readonly methodDescription = "指定したシートを指定したSpreadsheetにコピーする";
  public readonly keyword = `${COMMON_KEYWORD} copy 複製`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly argumentType = [
    {
      name: "コピー先Spreadsheet",
      type: { parent: Google.SPREADSHEET, child: Literal.NONE },
      key: "spreadsheet",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

// シートの最終行Noを取得
export class GetLastRow extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getLastRow";
  public readonly methodName = "シートの最終行を取得";
  public readonly methodDescription = "シート内で値の入った最終行の位置を取得する";
  public readonly keyword = `${COMMON_KEYWORD} last 最後`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType = [];
}

// シートの最終列Noを取得
export class GetLastColumn extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getLastColumn";
  public readonly methodName = "シートの最終列を取得";
  public readonly methodDescription = "シート内で値の入った最終列の位置を取得する";
  public readonly keyword = `${COMMON_KEYWORD} last 最後`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType = [];
}

// シートの最終行に値を書き込み
export class AppendRow extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "appendRow";
  public readonly methodName = "シートの最終行書き込み";
  public readonly methodDescription = "指定したシートの最終行に値を書き込む";
  public readonly keyword = `${COMMON_KEYWORD} append last 最後`;
  public readonly inputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [
    {
      name: "書き込む値の配列（1次元配列）",
      type: { parent: Literal.ARRAY, child: Literal.ANY },
      key: "array",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}
