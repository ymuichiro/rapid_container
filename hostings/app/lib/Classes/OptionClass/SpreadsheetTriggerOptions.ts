import AbstractRunOptions from "../../../interfaces/SystemClasses/RunOptions";

class Parent
  implements Pick<AbstractRunOptions, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon"> {
  public readonly categoryId = "SpreadsheetTrigger";
  public readonly categoryName = "スプレッドシート操作時";
  public readonly categoryDescription = "スプレッドシートが操作された時、実行します";
  public readonly cardCategoryIcon = "table_rows";
}

// on start up
export class OnStartUpTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "onStartUp";
  public readonly methodName = "起動時に実行";
  public readonly methodDescription = "スプレッドシートの起動時にスクリプトを実行します";
  public readonly frequency1Argument = undefined;
  public readonly frequenct1ArgumentDescription = undefined;
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}

// on edit
export class OnEditTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "onEdit";
  public readonly methodName = "編集時に実行";
  public readonly methodDescription = "スプレッドシートの編集時にスクリプトを実行します";
  public readonly frequency1Argument = undefined;
  public readonly frequenct1ArgumentDescription = undefined;
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}

// on Submit
export class OnSubmitFormTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "onSubmitForm";
  public readonly methodName = "フォーム受信時に実行";
  public readonly methodDescription = "スプレッドシートに紐づくフォームの受信時にスクリプトを実行します";
  public readonly frequency1Argument = undefined;
  public readonly frequenct1ArgumentDescription = undefined;
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}
