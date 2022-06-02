import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "GmailApp";
  public readonly categoryId = "Gmail";
  public readonly categoryName = "Gmail";
  public readonly categoryDescription = "Gmailを操作";
  public readonly cardCategoryIcon = "email";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "メール メーラー Email email";

export class GmailCreateDraft extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "createDraft";
  public readonly methodName = "メール下書きの作成";
  public readonly methodDescription = "Gmailの下書きを作成して保存します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Google.GMAIL_DRAFT,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "宛先アドレス（複数は,区切り）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "recipient",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "件名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "subject",
    },
    {
      name: "本文（Plain Text形式）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      isObject: false,
      isMultiLine: true,
      key: "body",
    },
    {
      name: "添付ファイル",
      type: { parent: Literal.ARRAY, child: Google.BASE_BLOBSOURCE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "attachments",
    },
    {
      name: "BCCメールアドレス（複数は,区切り）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "bcc",
    },
    {
      name: "CCメールアドレス（複数は,区切り）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "cc",
    },
    {
      name: "FROMアドレス（送信元を変更する場合）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "from",
    },
    {
      name: "本文（HTML形式）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: true,
      key: "htmlBody",
    },
    {
      name: "送信者名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "name",
    },
  ];
}

export class GmailCreateLabel extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "createLabel";
  public readonly methodName = "ラベルの作成";
  public readonly methodDescription = "Gmailのラベルを新規作成します";
  public readonly keyword = `${COMMON_KEYWORD} 作る カテゴリ`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Google.GMAIL_LABEL,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "ラベル名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "name",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailDeleteLabel extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "deleteLabel";
  public readonly methodName = "ラベルの削除";
  public readonly methodDescription = "Gmailのラベルを削除します";
  public readonly keyword = `${COMMON_KEYWORD} カテゴリ delete 消す`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "ラベル名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "label",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailGetChatThreads extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getChatThreads";
  public readonly methodName = "チャットの取得（検索）";
  public readonly methodDescription = "Gmailのチャットをスレッドで取得します";
  public readonly keyword = `${COMMON_KEYWORD} chat`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
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

export class GmailGetDraft extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDraft";
  public readonly methodName = "保存した特定のメール下書きの取得";
  public readonly methodDescription = "Gmailの下書きをID指定で取得します";
  public readonly keyword = `${COMMON_KEYWORD} id draft`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Google.GMAIL_DRAFT,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "下書きID",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "draftId",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailGetDraftMessages extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDraftMessages";
  public readonly methodName = "メール下書きのスレッドメッセージを取得";
  public readonly methodDescription = "Gmailの下書きに紐づくメッセージを取得します";
  public readonly keyword = `${COMMON_KEYWORD} draft`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.GMAIL_MESSAGE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailGetDrafts extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDrafts";
  public readonly methodName = "保存した全ての下書きを取得";
  public readonly methodDescription = "Gmailの全ての下書きを取得します";
  public readonly keyword = `${COMMON_KEYWORD} draft`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.GMAIL_DRAFT,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailGetInboxThreads extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getInboxThreads";
  public readonly methodName = "受信トレイのメールを取得";
  public readonly methodDescription = "Gmail受信トレイ全てのスレッドを取得します";
  public readonly keyword = `${COMMON_KEYWORD} inbox`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
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

export class GmailGetInboxUnreadCount extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getInboxUnreadCount";
  public readonly methodName = "受信トレイ未読件数を取得";
  public readonly methodDescription = "Gmail受信トレイの未読件数を取得します";
  public readonly keyword = `${COMMON_KEYWORD} inbox unread`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailGetMessageById extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getMessageById";
  public readonly methodName = "メッセージの取得（ID指定）";
  public readonly methodDescription = "GmailメッセージをID指定で取得します";
  public readonly keyword = `${COMMON_KEYWORD} id`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "id",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "id",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailGetThreadById extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getThreadById";
  public readonly methodName = "スレッドの取得（ID指定）";
  public readonly methodDescription = "GmailスレッドをID指定で取得します";
  public readonly keyword = `${COMMON_KEYWORD} id`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "id",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "id",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailSearch extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "search";
  public readonly methodName = "メールを検索して取得";
  public readonly methodDescription = "Gmail検索を実行し、スレッド一覧を取得します";
  public readonly keyword = `${COMMON_KEYWORD} search`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.GMAIL_THREAD,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "検索条件",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "query",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "開始位置",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      key: "start",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "取得件数（最大500）",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      key: "max",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailSendEmail extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "sendEmail";
  public readonly methodName = "送信する";
  public readonly methodDescription = "Gmailを送信します";
  public readonly keyword = `${COMMON_KEYWORD} send 送る`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "宛先アドレス（複数は,区切り）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "recipient",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "件名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "subject",
    },
    {
      name: "本文（Plain Text形式）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      isObject: false,
      isMultiLine: true,
      key: "body",
    },
    {
      name: "添付ファイル",
      type: { parent: Literal.ARRAY, child: Google.BASE_BLOBSOURCE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "attachments",
    },
    {
      name: "BCCメールアドレス（複数は,区切り）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "bcc",
    },
    {
      name: "CCメールアドレス（複数は,区切り）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "cc",
    },
    {
      name: "FROMアドレス（送信元を変更する場合）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "from",
    },
    {
      name: "本文（HTML形式）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: true,
      key: "htmlBody",
    },
    {
      name: "送信者名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "name",
    },
  ];
}
