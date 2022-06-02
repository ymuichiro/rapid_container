import AbstractRunOptions from "../../../interfaces/SystemClasses/RunOptions";

class Parent
  implements Pick<AbstractRunOptions, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon"> {
  public readonly categoryId = "DocumentTrigger";
  public readonly categoryName = "ドキュメント操作時";
  public readonly categoryDescription = "ドキュメントが操作された時、実行します";
  public readonly cardCategoryIcon = "description";
}

// on start up
export class OnStartUpTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "onStartUp";
  public readonly methodName = "起動時に実行";
  public readonly methodDescription = "ドキュメントの起動時にスクリプトを実行します";
  public readonly frequency1Argument = undefined;
  public readonly frequenct1ArgumentDescription = undefined;
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}
