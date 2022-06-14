"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailDraftUpdate = exports.GmailDraftSend = exports.GmailDraftGetId = exports.GmailDraftDeleteDraft = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
    constructor() {
        this.className = "GmailApp";
        this.categoryId = "GmailDraft";
        this.categoryName = "Gmail下書き";
        this.categoryDescription = "Gmailの下書きを操作する";
        this.cardCategoryIcon = "drafts";
        this.hasNest = false;
    }
}
const COMMON_KEYWORD = "メール メーラー Email 下書き draft";
class GmailDraftDeleteDraft extends Parent {
    constructor() {
        super();
        this.methodId = "deleteDraft";
        this.methodName = "メール下書きの削除";
        this.methodDescription = "Gmail下書きを削除する";
        this.keyword = `${COMMON_KEYWORD} delete`;
        this.inputType = {
            parent: GoogleTypes_1.default.GMAIL_DRAFT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.GmailDraftDeleteDraft = GmailDraftDeleteDraft;
class GmailDraftGetId extends Parent {
    constructor() {
        super();
        this.methodId = "getId";
        this.methodName = "メール下書きのID取得";
        this.methodDescription = "Gmail下書きのIDを取得する";
        this.keyword = `${COMMON_KEYWORD} id 識別子`;
        this.inputType = {
            parent: GoogleTypes_1.default.GMAIL_DRAFT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.GmailDraftGetId = GmailDraftGetId;
class GmailDraftSend extends Parent {
    constructor() {
        super();
        this.methodId = "send";
        this.methodName = "メール下書きの送信";
        this.methodDescription = "対象のGmail下書きを送信する";
        this.keyword = `${COMMON_KEYWORD} send 送る`;
        this.inputType = {
            parent: GoogleTypes_1.default.GMAIL_DRAFT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = {
            parent: GoogleTypes_1.default.GMAIL_MESSAGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [];
    }
}
exports.GmailDraftSend = GmailDraftSend;
class GmailDraftUpdate extends Parent {
    constructor() {
        super();
        this.methodId = "update";
        this.methodName = "メール下書きを更新";
        this.methodDescription = "対象のGmail下書きを更新する";
        this.keyword = `${COMMON_KEYWORD} update 上書き`;
        this.inputType = {
            parent: GoogleTypes_1.default.GMAIL_DRAFT,
            child: LiteralTypes_1.default.NONE,
        };
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
exports.GmailDraftUpdate = GmailDraftUpdate;
