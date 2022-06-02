"use strict";
/*

Javascriptの各基本処理群を定義

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowScript = exports.DeleteAllTrigger = exports.IfStatement = exports.ConsoleError = exports.ConsoleLog = void 0;
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
/*

Console

*/
/** 共通のパラメーターを定義する */
class ConsoleParent {
    constructor() {
        this.className = "console";
        this.categoryId = "Utility";
        this.categoryName = "分岐やログ出力等";
        this.categoryDescription = "その他処理を行います";
        this.cardCategoryIcon = "build";
    }
}
const COMMON_KEYWORD = "";
class ConsoleLog extends ConsoleParent {
    constructor() {
        super();
        this.methodId = "log";
        this.methodName = "ログ出力";
        this.methodDescription = "ログを出力します";
        this.hasNest = false;
        this.keyword = `${COMMON_KEYWORD} console log ログ`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "ログ出力する内容",
                type: { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY },
                require: true,
                isObject: false,
                isMultiLine: false,
                key: "value",
            },
        ];
    }
}
exports.ConsoleLog = ConsoleLog;
class ConsoleError extends ConsoleParent {
    constructor() {
        super();
        this.methodId = "error";
        this.methodName = "Errorログ出力";
        this.methodDescription = "Error形式のログを出力します";
        this.keyword = `${COMMON_KEYWORD} console log ログ error`;
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "ログ出力する内容",
                type: { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY },
                require: true,
                isObject: false,
                isMultiLine: false,
                key: "value",
            },
        ];
    }
}
exports.ConsoleError = ConsoleError;
class IfStatement extends ConsoleParent {
    constructor() {
        super();
        this.methodId = "if";
        this.methodName = "if分岐処理";
        this.methodDescription = "条件を満たした場合にIF配下の処理を実行します";
        this.keyword = `${COMMON_KEYWORD} if 分岐 もし 条件`;
        this.hasNest = true;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "比較される値",
                type: { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY },
                require: true,
                isObject: false,
                isMultiLine: false,
                key: "left",
            },
            {
                name: "比較条件（例：===,!==,>,<...）",
                type: { parent: LiteralTypes_1.default.IF_OPERATOR, child: LiteralTypes_1.default.NONE },
                require: true,
                isObject: false,
                isMultiLine: false,
                key: "operator",
            },
            {
                name: "比較する値",
                type: { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY },
                require: true,
                isObject: false,
                isMultiLine: false,
                key: "right",
            },
        ];
    }
}
exports.IfStatement = IfStatement;
class TriggerParent {
    constructor() {
        this.className = "ScriptApp";
        this.categoryId = "Utility";
        this.categoryName = "分岐やログ出力等";
        this.categoryDescription = "その他処理を行います";
        this.cardCategoryIcon = "build";
        this.hasNest = false;
    }
}
const TRIGGER_COMMON_KEYWORD = "トリガー trigger Trigger イベント";
// 設定された全てのトリガーを削除する
class DeleteAllTrigger extends TriggerParent {
    constructor() {
        super();
        this.methodId = "deleteAllTrigger";
        this.methodName = "全てのトリガーを削除";
        this.methodDescription = "プロジェクトに登録された全てのトリガーを削除";
        this.keyword = `${TRIGGER_COMMON_KEYWORD} all`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.DeleteAllTrigger = DeleteAllTrigger;
class RowScript extends ConsoleParent {
    constructor() {
        super();
        this.methodId = "RowScript";
        this.methodName = "Scriptを直接記述する";
        this.methodDescription = "本サービスで表現できない複雑な処理を実行します";
        this.keyword = "script スクリプト";
        this.hasNest = true;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY };
        this.argumentType = [
            {
                name: "スクリプト（最後に必ず値をreturnして下さい）",
                type: { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY },
                require: true,
                isObject: false,
                isMultiLine: true,
                key: "code",
            },
        ];
    }
}
exports.RowScript = RowScript;
