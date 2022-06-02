import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "GmailApp";
  public readonly categoryId = "GmailLabel";
  public readonly categoryName = "Gmailラベル";
  public readonly categoryDescription = "Gmailのラベルを操作する";
  public readonly cardCategoryIcon = "label";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "メール メーラー Email ラベル label カテゴリ";

export class GmailLabelGetUserLabelByName extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getUserLabelByName";
  public readonly methodName = "ラベルを取得";
  public readonly methodDescription = "Gmailラベルを名前指定で取得する";
  public readonly keyword = `${COMMON_KEYWORD} 名称`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Google.GMAIL_LABEL,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "ラベル名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "name",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailLabelDeleteLabel extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "deleteLabel";
  public readonly methodName = "ラベルを削除";
  public readonly methodDescription = "Gmailラベルを名前指定で削除する";
  public readonly keyword = `${COMMON_KEYWORD} 名称 delete`;
  public readonly inputType = {
    parent: Google.GMAIL_LABEL,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailLabelGetName extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getName";
  public readonly methodName = "ラベルの名前を取得";
  public readonly methodDescription = "Gmailラベル名を取得する";
  public readonly keyword = `${COMMON_KEYWORD} 名称`;
  public readonly inputType = {
    parent: Google.GMAIL_LABEL,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailLabelGetThreads extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getThreads";
  public readonly methodName = "ラベル付スレッド一覧取得";
  public readonly keyword = `${COMMON_KEYWORD}`;
  public readonly methodDescription = "対象のGmailラベルが追加スレッド一覧を取得する";
  public readonly inputType = {
    parent: Google.GMAIL_LABEL,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.GMAIL_THREAD,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "取得開始位置",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      key: "start",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "取得終了位置",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      key: "end",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailDraftAddToThread extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "addToThread";
  public readonly methodName = "スレッドにラベルを追加";
  public readonly methodDescription = "指定したスレッドにラベルを追加する";
  public readonly keyword = `${COMMON_KEYWORD} add 付与 つける`;
  public readonly inputType = {
    parent: Google.GMAIL_LABEL,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "スレッド",
      type: { parent: Google.GMAIL_THREAD, child: Literal.NONE },
      require: true,
      key: "thread",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailDraftAddToThreads extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "addToThreads";
  public readonly methodName = "複数スレッドにラベルを追加";
  public readonly methodDescription = "指定した複数スレッドにラベルを追加する";
  public readonly keyword = `${COMMON_KEYWORD} add 付与 つける`;
  public readonly inputType = {
    parent: Literal.ARRAY,
    child: Google.GMAIL_LABEL,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "複数スレッド",
      type: { parent: Literal.ARRAY, child: Google.GMAIL_THREAD },
      require: true,
      key: "threads",
      isObject: false,
      isMultiLine: false,
    },
  ];
}
