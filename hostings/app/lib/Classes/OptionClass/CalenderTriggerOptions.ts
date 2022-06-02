import AbstractRunOptions from "../../../interfaces/SystemClasses/RunOptions";

class Parent
  implements Pick<AbstractRunOptions, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon"> {
  public readonly categoryId = "CalenderTrigger";
  public readonly categoryName = "カレンダー操作時";
  public readonly categoryDescription = "カレンダーが操作された時、実行します";
  public readonly cardCategoryIcon = "event";
}

// on update
export class OnUpdateTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "update";
  public readonly methodName = "対象カレンダーの更新時";
  public readonly methodDescription = "指定したカレンダーの更新時に実行します";
  public readonly frequency1Argument = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  public readonly frequenct1ArgumentDescription = "メールアドレスを入力して下さい";
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}
