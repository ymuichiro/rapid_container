import AbstractRunOptions from "../../../interfaces/SystemClasses/RunOptions";

class Parent
  implements Pick<AbstractRunOptions, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon"> {
  public readonly categoryId = "FormTrigger";
  public readonly categoryName = "フォーム操作時";
  public readonly categoryDescription = "フォームが操作された時、実行します";
  public readonly cardCategoryIcon = "list";
}

// on startup
export class OnStartUpTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "onStartUp";
  public readonly methodName = "起動時に実行";
  public readonly methodDescription = "フォームの起動時にスクリプトを実行します";
  public readonly frequency1Argument = undefined;
  public readonly frequenct1ArgumentDescription = undefined;
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}

// on submit
export class OnSubmitFormTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "onSubmitForm";
  public readonly methodName = "送信時に実行";
  public readonly methodDescription = "フォームの送信時にスクリプトを実行します";
  public readonly frequency1Argument = undefined;
  public readonly frequenct1ArgumentDescription = undefined;
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}
