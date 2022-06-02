import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "GmailApp";
  public readonly categoryId = "GmailMessage";
  public readonly categoryName = "Gmailメッセージ";
  public readonly categoryDescription = "Gmailメッセージを操作する";
  public readonly cardCategoryIcon = "markunread_mailbox";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "メール メーラー Email message メッセージ";

export class GmailMessageCreateDraftReply extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "createDraftReply";
  public readonly methodName = "返信メール下書きを作成";
  public readonly methodDescription = "対象メッセージの単一返信下書きを作成";
  public readonly keyword = `${COMMON_KEYWORD} draft 返信 リプライ replay`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
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
  ];
}

export class GmailMessageCreateDraftReplyAll extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "createDraftReplyAll";
  public readonly methodName = "全返信メール下書きを作成";
  public readonly methodDescription = "対象メッセージの全返信下書きを作成";
  public readonly keyword = `${COMMON_KEYWORD} draft 返信 リプライ replay all`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
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
  ];
}

export class GmailMessageForward extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "forward";
  public readonly methodName = "メッセージの転送";
  public readonly methodDescription = "対象メッセージを転送する";
  public readonly keyword = `${COMMON_KEYWORD} forward 送信`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_MESSAGE,
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

export class GmailMessageGetAttachments extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getAttachments";
  public readonly methodName = "メッセージの添付ファイル取得";
  public readonly methodDescription = "対象メッセージの添付ファイルを取得する";
  public readonly keyword = `${COMMON_KEYWORD} attachment file ファイル`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.GMAIL_ATTACHMENT,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "本文の画像も含めますか？（Yes=true）",
      type: { parent: Literal.BOOLEAN, child: Literal.NONE },
      require: true,
      key: "includeInlineImages",
      isObject: true,
      isMultiLine: false,
    },
    {
      name: "添付ファイルも含めますか？（Yes=true）",
      type: { parent: Literal.BOOLEAN, child: Literal.NONE },
      require: true,
      key: "includeAttachments",
      isObject: true,
      isMultiLine: false,
    },
  ];
}

export class GmailMessageGetBcc extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getBcc";
  public readonly methodName = "メッセージのBCC取得";
  public readonly methodDescription = "対象メッセージのBCCを取得する";
  public readonly keyword = `${COMMON_KEYWORD} bcc`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageGetBody extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getBody";
  public readonly methodName = "メッセージの本文取得";
  public readonly methodDescription = "対象メッセージの本文を取得する";
  public readonly keyword = `${COMMON_KEYWORD} body`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageGetCc extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getCc";
  public readonly methodName = "メッセージのCC取得";
  public readonly methodDescription = "対象メッセージのCCを取得する";
  public readonly keyword = `${COMMON_KEYWORD} cc`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageGetDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDate";
  public readonly methodName = "メッセージの受信日取得";
  public readonly methodDescription = "対象メッセージの受信日を取得する";
  public readonly keyword = `${COMMON_KEYWORD}`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageGetFrom extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getFrom";
  public readonly methodName = "メッセージの送信元取得";
  public readonly methodDescription = "対象メッセージの送信元を取得する";
  public readonly keyword = `${COMMON_KEYWORD} from`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageGetHeader extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getHeader";
  public readonly methodName = "メッセージヘッダー情報の取得";
  public readonly methodDescription = "対象メッセージのヘッダー情報を取得する";
  public readonly keyword = `${COMMON_KEYWORD} header`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "ヘッダー名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "name",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailMessageGetId extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getId";
  public readonly methodName = "メッセージIDの取得";
  public readonly methodDescription = "対象メッセージのID情報を取得する";
  public readonly keyword = `${COMMON_KEYWORD} id`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageGetPlainBody extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getPlainBody";
  public readonly methodName = "メッセージ本文（PlainText形式）の取得";
  public readonly methodDescription = "対象メッセージの本文（PlainText形式）を取得する";
  public readonly keyword = `${COMMON_KEYWORD} body`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageGetTo extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getTo";
  public readonly methodName = "メッセージの返信先を取得";
  public readonly methodDescription = "対象メッセージの返信先を取得する";
  public readonly keyword = `${COMMON_KEYWORD} to`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageGetSubject extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getSubject";
  public readonly methodName = "メッセージの件名を取得";
  public readonly methodDescription = "対象メッセージの件名を取得する";
  public readonly keyword = `${COMMON_KEYWORD} タイトル subject title Title Subject`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageGetThread extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getThread";
  public readonly methodName = "メッセージのスレッドを取得";
  public readonly methodDescription = "対象メッセージの紐づくスレッドを取得する";
  public readonly keyword = `${COMMON_KEYWORD} thread`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessageReply extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "reply";
  public readonly methodName = "メッセージに返信する";
  public readonly methodDescription = "対象メッセージに返信する";
  public readonly keyword = `${COMMON_KEYWORD} replay`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_MESSAGE,
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

export class GmailMessageReplyAll extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "replyAll";
  public readonly methodName = "メッセージに全返信する";
  public readonly methodDescription = "対象メッセージに全返信する";
  public readonly keyword = `${COMMON_KEYWORD} replay all`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_MESSAGE,
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

export class GmailMessageStar extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "star";
  public readonly methodName = "メッセージにスターを付与";
  public readonly methodDescription = "対象メッセージへスターを付与する";
  public readonly keyword = `${COMMON_KEYWORD} start`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailMessagUnstar extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "unstar";
  public readonly methodName = "メッセージのスターを削除";
  public readonly methodDescription = "対象メッセージのスターを削除する";
  public readonly keyword = `${COMMON_KEYWORD} star delete`;
  public readonly inputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_THREAD,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}
