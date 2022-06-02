import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "GmailApp";
  public readonly categoryId = "GmailThread";
  public readonly categoryName = "Gmailスレッド";
  public readonly categoryDescription = "Gmailスレッドを操作する";
  public readonly cardCategoryIcon = "all_inbox";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "メール メーラー Email thread スレッド";

export class GmailThreadAddLabel extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "addLabel";
  public readonly methodName = "スレッドへラベルを付与";
  public readonly methodDescription = "Gmailスレッドにラベルを付与する";
  public readonly keyword = `${COMMON_KEYWORD} label`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "ラベル",
      type: { parent: Google.GMAIL_LABEL, child: Literal.NONE },
      require: true,
      key: "label",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailThreadCreateDraftReply extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "createDraftReply";
  public readonly methodName = "スレッドの返信下書き作成";
  public readonly methodDescription = "対象スレッドの返信下書きを作成";
  public readonly keyword = `${COMMON_KEYWORD} draft replay`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_DRAFT,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
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
    {
      name: "件名（最大250文字）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "subject",
    },
  ];
}

export class GmailThreadCreateDraftReplyAll extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "createDraftReplyAll";
  public readonly methodName = "スレッドに全返信下書きの作成";
  public readonly methodDescription = "対象スレッドの全返信下書きを作成";
  public readonly keyword = `${COMMON_KEYWORD} replay draft all`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_DRAFT,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
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
    {
      name: "件名（最大250文字）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "subject",
    },
  ];
}

export class GmailThreadGetFirstMessageSubject extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getFirstMessageSubject";
  public readonly methodName = "スレッド最初のメッセージの件名を取得";
  public readonly methodDescription = "対象スレッドの最初のメッセージの件名を取得する";
  public readonly keyword = `${COMMON_KEYWORD} first subject title Title Subject`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadGetId extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getId";
  public readonly methodName = "スレッドIDの取得";
  public readonly methodDescription = "対象スレッドのIDを取得する";
  public readonly keyword = `${COMMON_KEYWORD} id`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadGetLabels extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getLabels";
  public readonly methodName = "スレッドのラベル一覧の取得";
  public readonly methodDescription = "対象スレッドに付与された全てのラベル取得する";
  public readonly keyword = `${COMMON_KEYWORD} list label`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.GMAIL_LABEL,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadGetLastMessageDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getLastMessageDate";
  public readonly methodName = "スレッド内の最終受信日の取得";
  public readonly methodDescription = "スレッド最後のメッセージの受信日を取得";
  public readonly keyword = `${COMMON_KEYWORD} last 最後`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadGetMessageCount extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getMessageCount";
  public readonly methodName = "スレッド内のメッセージ件数取得";
  public readonly methodDescription = "スレッド内メッセージの件数を取得";
  public readonly keyword = `${COMMON_KEYWORD} メッセージ数`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadGetMessages extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getMessages";
  public readonly methodName = "スレッド内のメッセージ一覧取得";
  public readonly methodDescription = "スレッド内メッセージの一覧を取得";
  public readonly keyword = `${COMMON_KEYWORD} list`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.GMAIL_MESSAGE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadGetPermaLink extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getPermaLink";
  public readonly methodName = "スレッドへのリンク取得";
  public readonly methodDescription = "パーマリンク形式で取得";
  public readonly keyword = `${COMMON_KEYWORD} url link`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadMoveToArchive extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "moveToArchive";
  public readonly methodName = "スレッドのアーカイブ";
  public readonly methodDescription = "対象のスレッドをアーカイブする";
  public readonly keyword = `${COMMON_KEYWORD} archive`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadMoveToInbox extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "moveToInbox";
  public readonly methodName = "スレッドを受信トレイに移動";
  public readonly methodDescription = "対象のスレッドを受信トレイに移動する";
  public readonly keyword = `${COMMON_KEYWORD} inbox`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadMoveToTrash extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "moveToTrash";
  public readonly methodName = "スレッドをゴミ箱に移動";
  public readonly methodDescription = "対象のスレッドをゴミ箱に移動する";
  public readonly keyword = `${COMMON_KEYWORD} trach`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadRemoveLabel extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "removeLabel";
  public readonly methodName = "スレッドのラベルを削除";
  public readonly methodDescription = "ラベルをスレッドより削除する";
  public readonly keyword = `${COMMON_KEYWORD} delete`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailThreadReply extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "reply";
  public readonly methodName = "スレッドに返信する";
  public readonly methodDescription = "対象スレッドに返信する";
  public readonly keyword = `${COMMON_KEYWORD} reply`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
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

export class GmailThreadReplyAll extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "replyAll";
  public readonly methodName = "スレッドに全返信する";
  public readonly methodDescription = "対象スレッドに全返信する";
  public readonly keyword = `${COMMON_KEYWORD} reply all`;
  public readonly inputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
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
