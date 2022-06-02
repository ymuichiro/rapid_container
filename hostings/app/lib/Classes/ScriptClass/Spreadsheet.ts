import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "SpreadsheetApp";
  public readonly categoryId = "Spreadsheet";
  public readonly categoryName = "Spreadsheet";
  public readonly categoryDescription = "Spreadsheetを操作";
  public readonly cardCategoryIcon = "table_rows";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "excel Excel Spreadsheet spreadsheet sheet スプレッドシート シート Sheet";

// active ssを開く
export class GetActiveSpreadsheet extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getActiveSpreadsheet";
  public readonly methodName = "スプレッドシートを取得（Active）";
  public readonly methodDescription = "スクリプトに紐づくスプレッドシートを開く";
  public readonly keyword = `${COMMON_KEYWORD} 開く`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Google.SPREADSHEET,
    child: Literal.NONE,
  };
  public readonly argumentType = [];
}

// url ssを開く
export class OpenByUrl extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "openByUrl";
  public readonly methodName = "スプレッドシートを取得（URL）";
  public readonly methodDescription = "URLでスプレッドシートを開く";
  public readonly keyword = `${COMMON_KEYWORD} url 開く`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Google.SPREADSHEET,
    child: Literal.NONE,
  };
  public readonly argumentType = [
    {
      name: "スプレッドシートのURL",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "url",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

// shを開く（名前）
export class GetSheetByName extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getSheetByName";
  public readonly methodName = "シートを取得（名前）";
  public readonly methodDescription = "スプレッドシート内のシートを名前指定で開く";
  public readonly keyword = `${COMMON_KEYWORD} 開く name`;
  public readonly inputType = {
    parent: Google.SPREADSHEET,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.SPREADSHEET_SHEET,
    child: Literal.NONE,
  };
  public readonly argumentType = [
    {
      name: "シート名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "name",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

// shを開く（配列）
export class GetSheets extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getSheets";
  public readonly methodName = "シートを取得（全て）";
  public readonly methodDescription = "スプレッドシート内のシートを全て取得する";
  public readonly keyword = `${COMMON_KEYWORD} 開く`;
  public readonly inputType = {
    parent: Google.SPREADSHEET,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.SPREADSHEET_SHEET,
  };
  public readonly argumentType = [];
}
