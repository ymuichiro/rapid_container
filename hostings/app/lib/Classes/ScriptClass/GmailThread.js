"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailThreadReplyAll = exports.GmailThreadReply = exports.GmailThreadRemoveLabel = exports.GmailThreadMoveToTrash = exports.GmailThreadMoveToInbox = exports.GmailThreadMoveToArchive = exports.GmailThreadGetPermaLink = exports.GmailThreadGetMessages = exports.GmailThreadGetMessageCount = exports.GmailThreadGetLastMessageDate = exports.GmailThreadGetLabels = exports.GmailThreadGetId = exports.GmailThreadGetFirstMessageSubject = exports.GmailThreadCreateDraftReplyAll = exports.GmailThreadCreateDraftReply = exports.GmailThreadAddLabel = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
  constructor() {
    this.className = "GmailApp";
    this.categoryId = "GmailThread";
    this.categoryName = "Gmailスレッド";
    this.categoryDescription = "Gmailスレッドを操作する";
    this.cardCategoryIcon = "all_inbox";
    this.hasNest = false;
  }
}
const COMMON_KEYWORD = "メール メーラー Email thread スレッド";
class GmailThreadAddLabel extends Parent {
  constructor() {
    super();
    this.methodId = "addLabel";
    this.methodName = "スレッドへラベルを付与";
    this.methodDescription = "Gmailスレッドにラベルを付与する";
    this.keyword = `${COMMON_KEYWORD} label`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.argumentType = [
      {
        name: "ラベル",
        type: { parent: GoogleTypes_1.default.GMAIL_LABEL, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "label",
        isObject: false,
        isMultiLine: false,
      },
    ];
  }
}
exports.GmailThreadAddLabel = GmailThreadAddLabel;
class GmailThreadCreateDraftReply extends Parent {
  constructor() {
    super();
    this.methodId = "createDraftReply";
    this.methodName = "スレッドの返信下書き作成";
    this.methodDescription = "対象スレッドの返信下書きを作成";
    this.keyword = `${COMMON_KEYWORD} draft replay`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
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
      {
        name: "件名（最大250文字）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "subject",
      },
    ];
  }
}
exports.GmailThreadCreateDraftReply = GmailThreadCreateDraftReply;
class GmailThreadCreateDraftReplyAll extends Parent {
  constructor() {
    super();
    this.methodId = "createDraftReplyAll";
    this.methodName = "スレッドに全返信下書きの作成";
    this.methodDescription = "対象スレッドの全返信下書きを作成";
    this.keyword = `${COMMON_KEYWORD} replay draft all`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
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
      {
        name: "件名（最大250文字）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        require: false,
        isObject: true,
        isMultiLine: false,
        key: "subject",
      },
    ];
  }
}
exports.GmailThreadCreateDraftReplyAll = GmailThreadCreateDraftReplyAll;
class GmailThreadGetFirstMessageSubject extends Parent {
  constructor() {
    super();
    this.methodId = "getFirstMessageSubject";
    this.methodName = "スレッド最初のメッセージの件名を取得";
    this.methodDescription = "対象スレッドの最初のメッセージの件名を取得する";
    this.keyword = `${COMMON_KEYWORD} first subject title Title Subject`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailThreadGetFirstMessageSubject = GmailThreadGetFirstMessageSubject;
class GmailThreadGetId extends Parent {
  constructor() {
    super();
    this.methodId = "getId";
    this.methodName = "スレッドIDの取得";
    this.methodDescription = "対象スレッドのIDを取得する";
    this.keyword = `${COMMON_KEYWORD} id`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailThreadGetId = GmailThreadGetId;
class GmailThreadGetLabels extends Parent {
  constructor() {
    super();
    this.methodId = "getLabels";
    this.methodName = "スレッドのラベル一覧の取得";
    this.methodDescription = "対象スレッドに付与された全てのラベル取得する";
    this.keyword = `${COMMON_KEYWORD} list label`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: LiteralTypes_1.default.ARRAY,
      child: GoogleTypes_1.default.GMAIL_LABEL,
    };
    this.argumentType = [];
  }
}
exports.GmailThreadGetLabels = GmailThreadGetLabels;
class GmailThreadGetLastMessageDate extends Parent {
  constructor() {
    super();
    this.methodId = "getLastMessageDate";
    this.methodName = "スレッド内の最終受信日の取得";
    this.methodDescription = "スレッド最後のメッセージの受信日を取得";
    this.keyword = `${COMMON_KEYWORD} last 最後`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailThreadGetLastMessageDate = GmailThreadGetLastMessageDate;
class GmailThreadGetMessageCount extends Parent {
  constructor() {
    super();
    this.methodId = "getMessageCount";
    this.methodName = "スレッド内のメッセージ件数取得";
    this.methodDescription = "スレッド内メッセージの件数を取得";
    this.keyword = `${COMMON_KEYWORD} メッセージ数`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailThreadGetMessageCount = GmailThreadGetMessageCount;
class GmailThreadGetMessages extends Parent {
  constructor() {
    super();
    this.methodId = "getMessages";
    this.methodName = "スレッド内のメッセージ一覧取得";
    this.methodDescription = "スレッド内メッセージの一覧を取得";
    this.keyword = `${COMMON_KEYWORD} list`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: LiteralTypes_1.default.ARRAY,
      child: GoogleTypes_1.default.GMAIL_MESSAGE,
    };
    this.argumentType = [];
  }
}
exports.GmailThreadGetMessages = GmailThreadGetMessages;
class GmailThreadGetPermaLink extends Parent {
  constructor() {
    super();
    this.methodId = "getPermaLink";
    this.methodName = "スレッドへのリンク取得";
    this.methodDescription = "パーマリンク形式で取得";
    this.keyword = `${COMMON_KEYWORD} url link`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailThreadGetPermaLink = GmailThreadGetPermaLink;
class GmailThreadMoveToArchive extends Parent {
  constructor() {
    super();
    this.methodId = "moveToArchive";
    this.methodName = "スレッドのアーカイブ";
    this.methodDescription = "対象のスレッドをアーカイブする";
    this.keyword = `${COMMON_KEYWORD} archive`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailThreadMoveToArchive = GmailThreadMoveToArchive;
class GmailThreadMoveToInbox extends Parent {
  constructor() {
    super();
    this.methodId = "moveToInbox";
    this.methodName = "スレッドを受信トレイに移動";
    this.methodDescription = "対象のスレッドを受信トレイに移動する";
    this.keyword = `${COMMON_KEYWORD} inbox`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailThreadMoveToInbox = GmailThreadMoveToInbox;
class GmailThreadMoveToTrash extends Parent {
  constructor() {
    super();
    this.methodId = "moveToTrash";
    this.methodName = "スレッドをゴミ箱に移動";
    this.methodDescription = "対象のスレッドをゴミ箱に移動する";
    this.keyword = `${COMMON_KEYWORD} trach`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailThreadMoveToTrash = GmailThreadMoveToTrash;
class GmailThreadRemoveLabel extends Parent {
  constructor() {
    super();
    this.methodId = "removeLabel";
    this.methodName = "スレッドのラベルを削除";
    this.methodDescription = "ラベルをスレッドより削除する";
    this.keyword = `${COMMON_KEYWORD} delete`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailThreadRemoveLabel = GmailThreadRemoveLabel;
class GmailThreadReply extends Parent {
  constructor() {
    super();
    this.methodId = "reply";
    this.methodName = "スレッドに返信する";
    this.methodDescription = "対象スレッドに返信する";
    this.keyword = `${COMMON_KEYWORD} reply`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
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
exports.GmailThreadReply = GmailThreadReply;
class GmailThreadReplyAll extends Parent {
  constructor() {
    super();
    this.methodId = "replyAll";
    this.methodName = "スレッドに全返信する";
    this.methodDescription = "対象スレッドに全返信する";
    this.keyword = `${COMMON_KEYWORD} reply all`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = {
      parent: GoogleTypes_1.default.GMAIL_THREAD,
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
exports.GmailThreadReplyAll = GmailThreadReplyAll;
