"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailSendEmail = exports.GmailSearch = exports.GmailGetThreadById = exports.GmailGetMessageById = exports.GmailGetInboxUnreadCount = exports.GmailGetInboxThreads = exports.GmailGetDrafts = exports.GmailGetDraftMessages = exports.GmailGetDraft = exports.GmailGetChatThreads = exports.GmailDeleteLabel = exports.GmailCreateLabel = exports.GmailCreateDraft = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
    constructor() {
        this.className = "GmailApp";
        this.categoryId = "Gmail";
        this.categoryName = "Gmail";
        this.categoryDescription = "Gmailを操作";
        this.cardCategoryIcon = "email";
        this.hasNest = false;
    }
}
const COMMON_KEYWORD = "メール メーラー Email email";
class GmailCreateDraft extends Parent {
    constructor() {
        super();
        this.methodId = "createDraft";
        this.methodName = "メール下書きの作成";
        this.methodDescription = "Gmailの下書きを作成して保存します";
        this.keyword = `${COMMON_KEYWORD} 作る`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: GoogleTypes_1.default.GMAIL_DRAFT,
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
                name: "件名",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                isObject: false,
                isMultiLine: false,
                key: "subject",
            },
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
exports.GmailCreateDraft = GmailCreateDraft;
class GmailCreateLabel extends Parent {
    constructor() {
        super();
        this.methodId = "createLabel";
        this.methodName = "ラベルの作成";
        this.methodDescription = "Gmailのラベルを新規作成します";
        this.keyword = `${COMMON_KEYWORD} 作る カテゴリ`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: GoogleTypes_1.default.GMAIL_LABEL,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "ラベル名",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                key: "name",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailCreateLabel = GmailCreateLabel;
class GmailDeleteLabel extends Parent {
    constructor() {
        super();
        this.methodId = "deleteLabel";
        this.methodName = "ラベルの削除";
        this.methodDescription = "Gmailのラベルを削除します";
        this.keyword = `${COMMON_KEYWORD} カテゴリ delete 消す`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "ラベル名",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                key: "label",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailDeleteLabel = GmailDeleteLabel;
class GmailGetChatThreads extends Parent {
    constructor() {
        super();
        this.methodId = "getChatThreads";
        this.methodName = "チャットの取得（検索）";
        this.methodDescription = "Gmailのチャットをスレッドで取得します";
        this.keyword = `${COMMON_KEYWORD} chat`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.GMAIL_THREAD,
        };
        this.argumentType = [
            {
                name: "取得開始位置",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "start",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "取得終了位置",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "end",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailGetChatThreads = GmailGetChatThreads;
class GmailGetDraft extends Parent {
    constructor() {
        super();
        this.methodId = "getDraft";
        this.methodName = "保存した特定のメール下書きの取得";
        this.methodDescription = "Gmailの下書きをID指定で取得します";
        this.keyword = `${COMMON_KEYWORD} id draft`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: GoogleTypes_1.default.GMAIL_DRAFT,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "下書きID",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                key: "draftId",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailGetDraft = GmailGetDraft;
class GmailGetDraftMessages extends Parent {
    constructor() {
        super();
        this.methodId = "getDraftMessages";
        this.methodName = "メール下書きのスレッドメッセージを取得";
        this.methodDescription = "Gmailの下書きに紐づくメッセージを取得します";
        this.keyword = `${COMMON_KEYWORD} draft`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.GMAIL_MESSAGE,
        };
        this.argumentType = [];
    }
}
exports.GmailGetDraftMessages = GmailGetDraftMessages;
class GmailGetDrafts extends Parent {
    constructor() {
        super();
        this.methodId = "getDrafts";
        this.methodName = "保存した全ての下書きを取得";
        this.methodDescription = "Gmailの全ての下書きを取得します";
        this.keyword = `${COMMON_KEYWORD} draft`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.GMAIL_DRAFT,
        };
        this.argumentType = [];
    }
}
exports.GmailGetDrafts = GmailGetDrafts;
class GmailGetInboxThreads extends Parent {
    constructor() {
        super();
        this.methodId = "getInboxThreads";
        this.methodName = "受信トレイのメールを取得";
        this.methodDescription = "Gmail受信トレイ全てのスレッドを取得します";
        this.keyword = `${COMMON_KEYWORD} inbox`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.GMAIL_THREAD,
        };
        this.argumentType = [
            {
                name: "取得開始位置",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "start",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "取得終了位置",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "end",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailGetInboxThreads = GmailGetInboxThreads;
class GmailGetInboxUnreadCount extends Parent {
    constructor() {
        super();
        this.methodId = "getInboxUnreadCount";
        this.methodName = "受信トレイ未読件数を取得";
        this.methodDescription = "Gmail受信トレイの未読件数を取得します";
        this.keyword = `${COMMON_KEYWORD} inbox unread`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.GmailGetInboxUnreadCount = GmailGetInboxUnreadCount;
class GmailGetMessageById extends Parent {
    constructor() {
        super();
        this.methodId = "getMessageById";
        this.methodName = "メッセージの取得（ID指定）";
        this.methodDescription = "GmailメッセージをID指定で取得します";
        this.keyword = `${COMMON_KEYWORD} id`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: GoogleTypes_1.default.GMAIL_MESSAGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "id",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                key: "id",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailGetMessageById = GmailGetMessageById;
class GmailGetThreadById extends Parent {
    constructor() {
        super();
        this.methodId = "getThreadById";
        this.methodName = "スレッドの取得（ID指定）";
        this.methodDescription = "GmailスレッドをID指定で取得します";
        this.keyword = `${COMMON_KEYWORD} id`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: GoogleTypes_1.default.GMAIL_THREAD,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "id",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                key: "id",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailGetThreadById = GmailGetThreadById;
class GmailSearch extends Parent {
    constructor() {
        super();
        this.methodId = "search";
        this.methodName = "メールを検索して取得";
        this.methodDescription = "Gmail検索を実行し、スレッド一覧を取得します";
        this.keyword = `${COMMON_KEYWORD} search`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.GMAIL_THREAD,
        };
        this.argumentType = [
            {
                name: "検索条件",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                key: "query",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "開始位置",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "start",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "取得件数（最大500）",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "max",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailSearch = GmailSearch;
class GmailSendEmail extends Parent {
    constructor() {
        super();
        this.methodId = "sendEmail";
        this.methodName = "送信する";
        this.methodDescription = "Gmailを送信します";
        this.keyword = `${COMMON_KEYWORD} send 送る`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
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
                name: "件名",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                isObject: false,
                isMultiLine: false,
                key: "subject",
            },
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
exports.GmailSendEmail = GmailSendEmail;
