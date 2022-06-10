"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailMessagUnstar = exports.GmailMessageStar = exports.GmailMessageReplyAll = exports.GmailMessageReply = exports.GmailMessageGetThread = exports.GmailMessageGetSubject = exports.GmailMessageGetTo = exports.GmailMessageGetPlainBody = exports.GmailMessageGetId = exports.GmailMessageGetHeader = exports.GmailMessageGetFrom = exports.GmailMessageGetDate = exports.GmailMessageGetCc = exports.GmailMessageGetBody = exports.GmailMessageGetBcc = exports.GmailMessageGetAttachments = exports.GmailMessageForward = exports.GmailMessageCreateDraftReplyAll = exports.GmailMessageCreateDraftReply = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
  constructor() {
    this.className = "GmailApp";
    this.categoryId = "GmailMessage";
    this.categoryName = "Gmailメッセージ";
    this.categoryDescription = "Gmailメッセージを操作する";
    this.cardCategoryIcon = "markunread_mailbox";
    this.hasNest = false;
  }
}
const COMMON_KEYWORD = "メール メーラー Email message メッセージ";
class GmailMessageCreateDraftReply extends Parent {
  constructor() {
    super();
    this.methodId = "createDraftReply";
    this.methodName = "返信メール下書きを作成";
    this.methodDescription = "対象メッセージの単一返信下書きを作成";
    this.keyword = `${COMMON_KEYWORD} draft 返信 リプライ replay`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_DRAFT,
      child: LiteralTypes_1.default.NONE,
    };
    this.argumentType = [
      {
        name: "本文（Plain Text形式）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: true,
        isObject: false,
        isMultiLine: true,
        key: "body",
      },
      {
        name: "添付ファイル",
        type: { parent: LiteralTypes_1.default.ARRAY, child: GoogleTypes_1.default.BASE_BLOBSOURCE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "attachments",
      },
      {
        name: "BCCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "bcc",
      },
      {
        name: "CCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "cc",
      },
      {
        name: "FROMアドレス（送信元を変更する場合）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "from",
      },
      {
        name: "本文（HTML形式）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: true,
        key: "htmlBody",
      },
      {
        name: "送信者名",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "name",
      },
    ];
  }
}
exports.GmailMessageCreateDraftReply = GmailMessageCreateDraftReply;
class GmailMessageCreateDraftReplyAll extends Parent {
  constructor() {
    super();
    this.methodId = "createDraftReplyAll";
    this.methodName = "全返信メール下書きを作成";
    this.methodDescription = "対象メッセージの全返信下書きを作成";
    this.keyword = `${COMMON_KEYWORD} draft 返信 リプライ replay all`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_DRAFT,
      child: LiteralTypes_1.default.NONE,
    };
    this.argumentType = [
      {
        name: "本文（Plain Text形式）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: true,
        isObject: false,
        isMultiLine: true,
        key: "body",
      },
      {
        name: "添付ファイル",
        type: { parent: LiteralTypes_1.default.ARRAY, child: GoogleTypes_1.default.BASE_BLOBSOURCE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "attachments",
      },
      {
        name: "BCCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "bcc",
      },
      {
        name: "CCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "cc",
      },
      {
        name: "FROMアドレス（送信元を変更する場合）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "from",
      },
      {
        name: "本文（HTML形式）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: true,
        key: "htmlBody",
      },
      {
        name: "送信者名",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "name",
      },
    ];
  }
}
exports.GmailMessageCreateDraftReplyAll = GmailMessageCreateDraftReplyAll;
class GmailMessageForward extends Parent {
  constructor() {
    super();
    this.methodId = "forward";
    this.methodName = "メッセージの転送";
    this.methodDescription = "対象メッセージを転送する";
    this.keyword = `${COMMON_KEYWORD} forward 送信`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.argumentType = [
      {
        name: "宛先アドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "recipient",
        isObject: false,
        isMultiLine: false,
      },
      {
        name: "添付ファイル",
        type: { parent: LiteralTypes_1.default.ARRAY, child: GoogleTypes_1.default.BASE_BLOBSOURCE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "attachments",
      },
      {
        name: "BCCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "bcc",
      },
      {
        name: "CCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "cc",
      },
      {
        name: "FROMアドレス（送信元を変更する場合）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "from",
      },
      {
        name: "本文（HTML形式）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: true,
        key: "htmlBody",
      },
      {
        name: "送信者名",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "name",
      },
    ];
  }
}
exports.GmailMessageForward = GmailMessageForward;
class GmailMessageGetAttachments extends Parent {
  constructor() {
    super();
    this.methodId = "getAttachments";
    this.methodName = "メッセージの添付ファイル取得";
    this.methodDescription = "対象メッセージの添付ファイルを取得する";
    this.keyword = `${COMMON_KEYWORD} attachment file ファイル`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: LiteralTypes_1.default.ARRAY,
      child: GoogleTypes_1.default.GMAIL_ATTACHMENT,
    };
    this.argumentType = [
      {
        name: "本文の画像も含めますか？（Yes=true）",
        type: { parent: LiteralTypes_1.default.BOOLEAN, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "includeInlineImages",
        isObject: true,
        isMultiLine: false,
      },
      {
        name: "添付ファイルも含めますか？（Yes=true）",
        type: { parent: LiteralTypes_1.default.BOOLEAN, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "includeAttachments",
        isObject: true,
        isMultiLine: false,
      },
    ];
  }
}
exports.GmailMessageGetAttachments = GmailMessageGetAttachments;
class GmailMessageGetBcc extends Parent {
  constructor() {
    super();
    this.methodId = "getBcc";
    this.methodName = "メッセージのBCC取得";
    this.methodDescription = "対象メッセージのBCCを取得する";
    this.keyword = `${COMMON_KEYWORD} bcc`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailMessageGetBcc = GmailMessageGetBcc;
class GmailMessageGetBody extends Parent {
  constructor() {
    super();
    this.methodId = "getBody";
    this.methodName = "メッセージの本文取得";
    this.methodDescription = "対象メッセージの本文を取得する";
    this.keyword = `${COMMON_KEYWORD} body`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailMessageGetBody = GmailMessageGetBody;
class GmailMessageGetCc extends Parent {
  constructor() {
    super();
    this.methodId = "getCc";
    this.methodName = "メッセージのCC取得";
    this.methodDescription = "対象メッセージのCCを取得する";
    this.keyword = `${COMMON_KEYWORD} cc`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailMessageGetCc = GmailMessageGetCc;
class GmailMessageGetDate extends Parent {
  constructor() {
    super();
    this.methodId = "getDate";
    this.methodName = "メッセージの受信日取得";
    this.methodDescription = "対象メッセージの受信日を取得する";
    this.keyword = `${COMMON_KEYWORD}`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailMessageGetDate = GmailMessageGetDate;
class GmailMessageGetFrom extends Parent {
  constructor() {
    super();
    this.methodId = "getFrom";
    this.methodName = "メッセージの送信元取得";
    this.methodDescription = "対象メッセージの送信元を取得する";
    this.keyword = `${COMMON_KEYWORD} from`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailMessageGetFrom = GmailMessageGetFrom;
class GmailMessageGetHeader extends Parent {
  constructor() {
    super();
    this.methodId = "getHeader";
    this.methodName = "メッセージヘッダー情報の取得";
    this.methodDescription = "対象メッセージのヘッダー情報を取得する";
    this.keyword = `${COMMON_KEYWORD} header`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "ヘッダー名",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "name",
        isObject: false,
        isMultiLine: false,
      },
    ];
  }
}
exports.GmailMessageGetHeader = GmailMessageGetHeader;
class GmailMessageGetId extends Parent {
  constructor() {
    super();
    this.methodId = "getId";
    this.methodName = "メッセージIDの取得";
    this.methodDescription = "対象メッセージのID情報を取得する";
    this.keyword = `${COMMON_KEYWORD} id`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailMessageGetId = GmailMessageGetId;
class GmailMessageGetPlainBody extends Parent {
  constructor() {
    super();
    this.methodId = "getPlainBody";
    this.methodName = "メッセージ本文（PlainText形式）の取得";
    this.methodDescription = "対象メッセージの本文（PlainText形式）を取得する";
    this.keyword = `${COMMON_KEYWORD} body`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailMessageGetPlainBody = GmailMessageGetPlainBody;
class GmailMessageGetTo extends Parent {
  constructor() {
    super();
    this.methodId = "getTo";
    this.methodName = "メッセージの返信先を取得";
    this.methodDescription = "対象メッセージの返信先を取得する";
    this.keyword = `${COMMON_KEYWORD} to`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailMessageGetTo = GmailMessageGetTo;
class GmailMessageGetSubject extends Parent {
  constructor() {
    super();
    this.methodId = "getSubject";
    this.methodName = "メッセージの件名を取得";
    this.methodDescription = "対象メッセージの件名を取得する";
    this.keyword = `${COMMON_KEYWORD} タイトル subject title Title Subject`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailMessageGetSubject = GmailMessageGetSubject;
class GmailMessageGetThread extends Parent {
  constructor() {
    super();
    this.methodId = "getThread";
    this.methodName = "メッセージのスレッドを取得";
    this.methodDescription = "対象メッセージの紐づくスレッドを取得する";
    this.keyword = `${COMMON_KEYWORD} thread`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.argumentType = [];
  }
}
exports.GmailMessageGetThread = GmailMessageGetThread;
class GmailMessageReply extends Parent {
  constructor() {
    super();
    this.methodId = "reply";
    this.methodName = "メッセージに返信する";
    this.methodDescription = "対象メッセージに返信する";
    this.keyword = `${COMMON_KEYWORD} replay`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.argumentType = [
      {
        name: "本文（Plain Text形式）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: true,
        isObject: false,
        isMultiLine: true,
        key: "body",
      },
      {
        name: "添付ファイル",
        type: { parent: LiteralTypes_1.default.ARRAY, child: GoogleTypes_1.default.BASE_BLOBSOURCE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "attachments",
      },
      {
        name: "BCCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "bcc",
      },
      {
        name: "CCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "cc",
      },
      {
        name: "FROMアドレス（送信元を変更する場合）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "from",
      },
      {
        name: "本文（HTML形式）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: true,
        key: "htmlBody",
      },
      {
        name: "送信者名",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "name",
      },
    ];
  }
}
exports.GmailMessageReply = GmailMessageReply;
class GmailMessageReplyAll extends Parent {
  constructor() {
    super();
    this.methodId = "replyAll";
    this.methodName = "メッセージに全返信する";
    this.methodDescription = "対象メッセージに全返信する";
    this.keyword = `${COMMON_KEYWORD} replay all`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.argumentType = [
      {
        name: "本文（Plain Text形式）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: true,
        isObject: false,
        isMultiLine: true,
        key: "body",
      },
      {
        name: "添付ファイル",
        type: { parent: LiteralTypes_1.default.ARRAY, child: GoogleTypes_1.default.BASE_BLOBSOURCE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "attachments",
      },
      {
        name: "BCCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "bcc",
      },
      {
        name: "CCメールアドレス（複数は,区切り）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "cc",
      },
      {
        name: "FROMアドレス（送信元を変更する場合）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "from",
      },
      {
        name: "本文（HTML形式）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: true,
        key: "htmlBody",
      },
      {
        name: "送信者名",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "name",
      },
    ];
  }
}
exports.GmailMessageReplyAll = GmailMessageReplyAll;
class GmailMessageStar extends Parent {
  constructor() {
    super();
    this.methodId = "star";
    this.methodName = "メッセージにスターを付与";
    this.methodDescription = "対象メッセージへスターを付与する";
    this.keyword = `${COMMON_KEYWORD} start`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.argumentType = [];
  }
}
exports.GmailMessageStar = GmailMessageStar;
class GmailMessagUnstar extends Parent {
  constructor() {
    super();
    this.methodId = "unstar";
    this.methodName = "メッセージのスターを削除";
    this.methodDescription = "対象メッセージのスターを削除する";
    this.keyword = `${COMMON_KEYWORD} star delete`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_MESSAGE,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.argumentType = [];
  }
}
exports.GmailMessagUnstar = GmailMessagUnstar;
