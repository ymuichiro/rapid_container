"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSheets = exports.GetSheetByName = exports.OpenByUrl = exports.GetActiveSpreadsheet = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
    constructor() {
        this.className = "SpreadsheetApp";
        this.categoryId = "Spreadsheet";
        this.categoryName = "Spreadsheet";
        this.categoryDescription = "Spreadsheetを操作";
        this.cardCategoryIcon = "table_rows";
        this.hasNest = false;
    }
}
const COMMON_KEYWORD = "excel Excel Spreadsheet spreadsheet sheet スプレッドシート シート Sheet";
// active ssを開く
class GetActiveSpreadsheet extends Parent {
    constructor() {
        super();
        this.methodId = "getActiveSpreadsheet";
        this.methodName = "スプレッドシートを取得（Active）";
        this.methodDescription = "スクリプトに紐づくスプレッドシートを開く";
        this.keyword = `${COMMON_KEYWORD} 開く`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: GoogleTypes_1.default.SPREADSHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [];
    }
}
exports.GetActiveSpreadsheet = GetActiveSpreadsheet;
// url ssを開く
class OpenByUrl extends Parent {
    constructor() {
        super();
        this.methodId = "openByUrl";
        this.methodName = "スプレッドシートを取得（URL）";
        this.methodDescription = "URLでスプレッドシートを開く";
        this.keyword = `${COMMON_KEYWORD} url 開く`;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: GoogleTypes_1.default.SPREADSHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "スプレッドシートのURL",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                key: "url",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.OpenByUrl = OpenByUrl;
// shを開く（名前）
class GetSheetByName extends Parent {
    constructor() {
        super();
        this.methodId = "getSheetByName";
        this.methodName = "シートを取得（名前）";
        this.methodDescription = "スプレッドシート内のシートを名前指定で開く";
        this.keyword = `${COMMON_KEYWORD} 開く name`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "シート名",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                key: "name",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GetSheetByName = GetSheetByName;
// shを開く（配列）
class GetSheets extends Parent {
    constructor() {
        super();
        this.methodId = "getSheets";
        this.methodName = "シートを取得（全て）";
        this.methodDescription = "スプレッドシート内のシートを全て取得する";
        this.keyword = `${COMMON_KEYWORD} 開く`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.SPREADSHEET_SHEET,
        };
        this.argumentType = [];
    }
}
exports.GetSheets = GetSheets;
