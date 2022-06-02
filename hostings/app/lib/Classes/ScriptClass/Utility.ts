/*

Javascriptの各基本処理群を定義

*/

import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

type consoleMethod = keyof typeof console;

/*

Console

*/

/** 共通のパラメーターを定義する */
class ConsoleParent
  implements Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon"> {
  public readonly className = "console";
  public readonly categoryId = "Utility";
  public readonly categoryName = "分岐やログ出力等";
  public readonly categoryDescription = "その他処理を行います";
  public readonly cardCategoryIcon = "build";
}

const COMMON_KEYWORD = "";

export class ConsoleLog extends ConsoleParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId: consoleMethod = "log";
  public readonly methodName = "ログ出力";
  public readonly methodDescription = "ログを出力します";
  public readonly hasNest = false;
  public readonly keyword = `${COMMON_KEYWORD} console log ログ`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [
    {
      name: "ログ出力する内容",
      type: { parent: Literal.ANY, child: Literal.ANY },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "value",
    },
  ];
}

export class ConsoleError extends ConsoleParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId: consoleMethod = "error";
  public readonly methodName = "Errorログ出力";
  public readonly methodDescription = "Error形式のログを出力します";
  public readonly keyword = `${COMMON_KEYWORD} console log ログ error`;
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [
    {
      name: "ログ出力する内容",
      type: { parent: Literal.ANY, child: Literal.ANY },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "value",
    },
  ];
}

export class IfStatement extends ConsoleParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "if";
  public readonly methodName = "if分岐処理";
  public readonly methodDescription = "条件を満たした場合にIF配下の処理を実行します";
  public readonly keyword = `${COMMON_KEYWORD} if 分岐 もし 条件`;
  public readonly hasNest = true;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [
    {
      name: "比較される値",
      type: { parent: Literal.ANY, child: Literal.ANY },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "left",
    },
    {
      name: "比較条件（例：===,!==,>,<...）",
      type: { parent: Literal.IF_OPERATOR, child: Literal.NONE },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "operator",
    },
    {
      name: "比較する値",
      type: { parent: Literal.ANY, child: Literal.ANY },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "right",
    },
  ];
}

class TriggerParent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "ScriptApp";
  public readonly categoryId = "Utility";
  public readonly categoryName = "分岐やログ出力等";
  public readonly categoryDescription = "その他処理を行います";
  public readonly cardCategoryIcon = "build";
  public readonly hasNest = false;
}

const TRIGGER_COMMON_KEYWORD = "トリガー trigger Trigger イベント";

// 設定された全てのトリガーを削除する
export class DeleteAllTrigger extends TriggerParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "deleteAllTrigger";
  public readonly methodName = "全てのトリガーを削除";
  public readonly methodDescription = "プロジェクトに登録された全てのトリガーを削除";
  public readonly keyword = `${TRIGGER_COMMON_KEYWORD} all`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType = [];
}

export class RowScript extends ConsoleParent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "RowScript";
  public readonly methodName = "Scriptを直接記述する";
  public readonly methodDescription = "本サービスで表現できない複雑な処理を実行します";
  public readonly keyword = "script スクリプト";
  public readonly hasNest = true;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.ANY, child: Literal.ANY };
  public readonly argumentType = [
    {
      name: "スクリプト（最後に必ず値をreturnして下さい）",
      type: { parent: Literal.ANY, child: Literal.ANY },
      require: true,
      isObject: false,
      isMultiLine: true,
      key: "code",
    },
  ];
}
