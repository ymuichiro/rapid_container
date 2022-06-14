"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailDraftAddToThreads = exports.GmailDraftAddToThread = exports.GmailLabelGetThreads = exports.GmailLabelGetName = exports.GmailLabelDeleteLabel = exports.GmailLabelGetUserLabelByName = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
    constructor() {
        this.className = "GmailApp";
        this.categoryId = "GmailLabel";
        this.categoryName = "Gmailラベル";
        this.categoryDescription = "Gmailのラベルを操作する";
        this.cardCategoryIcon = "label";
        this.hasNest = false;
    }
}
const COMMON_KEYWORD = "メール メーラー Email ラベル label カテゴリ";
class GmailLabelGetUserLabelByName extends Parent {
    constructor() {
        super();
        this.methodId = "getUserLabelByName";
        this.methodName = "ラベルを取得";
        this.methodDescription = "Gmailラベルを名前指定で取得する";
        this.keyword = `${COMMON_KEYWORD} 名称`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: GoogleTypes_1.default.GMAIL_LABEL,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "ラベル名",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "name",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailLabelGetUserLabelByName = GmailLabelGetUserLabelByName;
class GmailLabelDeleteLabel extends Parent {
    constructor() {
        super();
        this.methodId = "deleteLabel";
        this.methodName = "ラベルを削除";
        this.methodDescription = "Gmailラベルを名前指定で削除する";
        this.keyword = `${COMMON_KEYWORD} 名称 delete`;
        this.inputType = {
            parent: GoogleTypes_1.default.GMAIL_LABEL,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.GmailLabelDeleteLabel = GmailLabelDeleteLabel;
class GmailLabelGetName extends Parent {
    constructor() {
        super();
        this.methodId = "getName";
        this.methodName = "ラベルの名前を取得";
        this.methodDescription = "Gmailラベル名を取得する";
        this.keyword = `${COMMON_KEYWORD} 名称`;
        this.inputType = {
            parent: GoogleTypes_1.default.GMAIL_LABEL,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.GmailLabelGetName = GmailLabelGetName;
class GmailLabelGetThreads extends Parent {
    constructor() {
        super();
        this.methodId = "getThreads";
        this.methodName = "ラベル付スレッド一覧取得";
        this.keyword = `${COMMON_KEYWORD}`;
        this.methodDescription = "対象のGmailラベルが追加スレッド一覧を取得する";
        this.inputType = {
            parent: GoogleTypes_1.default.GMAIL_LABEL,
            child: LiteralTypes_1.default.NONE,
        };
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
exports.GmailLabelGetThreads = GmailLabelGetThreads;
class GmailDraftAddToThread extends Parent {
    constructor() {
        super();
        this.methodId = "addToThread";
        this.methodName = "スレッドにラベルを追加";
        this.methodDescription = "指定したスレッドにラベルを追加する";
        this.keyword = `${COMMON_KEYWORD} add 付与 つける`;
        this.inputType = {
            parent: GoogleTypes_1.default.GMAIL_LABEL,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "スレッド",
                type: { parent: GoogleTypes_1.default.GMAIL_THREAD, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "thread",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailDraftAddToThread = GmailDraftAddToThread;
class GmailDraftAddToThreads extends Parent {
    constructor() {
        super();
        this.methodId = "addToThreads";
        this.methodName = "複数スレッドにラベルを追加";
        this.methodDescription = "指定した複数スレッドにラベルを追加する";
        this.keyword = `${COMMON_KEYWORD} add 付与 つける`;
        this.inputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.GMAIL_LABEL,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "複数スレッド",
                type: { parent: LiteralTypes_1.default.ARRAY, child: GoogleTypes_1.default.GMAIL_THREAD },
                require: true,
                key: "threads",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GmailDraftAddToThreads = GmailDraftAddToThreads;
