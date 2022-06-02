"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppendRow = exports.GetLastColumn = exports.GetLastRow = exports.SheetCopy = exports.SheetAllClear = exports.GetDataRange = exports.GetRangeByInteger = exports.GetRangeByString = exports.DeleteSheet = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
    constructor() {
        this.className = "SpreadsheetApp";
        this.categoryId = "SpreadsheetSheet";
        this.categoryName = "Sheet";
        this.categoryDescription = "Spreadsheet内のシートを操作";
        this.cardCategoryIcon = "border_all";
        this.hasNest = false;
    }
}
const COMMON_KEYWORD = "excel Excel Spreadsheet spreadsheet sheet スプレッドシート シート Sheet";
// shを削除する
class DeleteSheet extends Parent {
    constructor() {
        super();
        this.methodId = "deleteSheet";
        this.methodName = "シートを削除";
        this.methodDescription = "指定したスプレッドシートのシートを削除する";
        this.keyword = `${COMMON_KEYWORD} delete`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "削除するシート変数",
                type: { parent: GoogleTypes_1.default.SPREADSHEET_SHEET, child: LiteralTypes_1.default.NONE },
                key: "sheet",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.DeleteSheet = DeleteSheet;
// shの範囲を指定する - 絶対範囲
class GetRangeByString extends Parent {
    constructor() {
        super();
        this.methodId = "getRangeByString";
        this.methodName = "セルを範囲指定（絶対座標）";
        this.methodDescription = "指定したシート内で絶対座標で範囲選択する";
        this.keyword = `${COMMON_KEYWORD} range 範囲 cell セル`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_RANGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "対象範囲（例：A1:B10）",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                key: "range",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GetRangeByString = GetRangeByString;
// shの範囲を指定する - 相対範囲
class GetRangeByInteger extends Parent {
    constructor() {
        super();
        this.methodId = "getRangeByInteger";
        this.methodName = "セルを範囲指定（相対範囲）";
        this.methodDescription = "指定したシート内で相対座標で指定する";
        this.keyword = `${COMMON_KEYWORD} range 範囲 cell セル`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_RANGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "対象範囲 - y軸",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "row",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "対象範囲 - x軸",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "column",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "対象範囲 - 縦幅数(縦幅指定時は横幅数必須))",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "columns",
                require: false,
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "対象範囲 - 横幅数",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                key: "rows",
                require: false,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.GetRangeByInteger = GetRangeByInteger;
// 値の入っているセル全てで範囲選択
class GetDataRange extends Parent {
    constructor() {
        super();
        this.methodId = "getDataRange";
        this.methodName = "値の入ったセル範囲全てを指定";
        this.methodDescription = "指定したシート内で値の入っているセル全てを範囲選択する";
        this.keyword = `${COMMON_KEYWORD} range 範囲 cell セル`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_RANGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [];
    }
}
exports.GetDataRange = GetDataRange;
// Sheetをクリアする
class SheetAllClear extends Parent {
    constructor() {
        super();
        this.methodId = "SheetAllClear";
        this.methodName = "シートをクリア";
        this.methodDescription = "指定したシート内の値を全て削除する";
        this.keyword = `${COMMON_KEYWORD} clear 消去 リセット delete reset`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.SheetAllClear = SheetAllClear;
// Sheetをコピーする
class SheetCopy extends Parent {
    constructor() {
        super();
        this.methodId = "sheetAllClear";
        this.methodName = "シートをコピー";
        this.methodDescription = "指定したシートを指定したSpreadsheetにコピーする";
        this.keyword = `${COMMON_KEYWORD} copy 複製`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "コピー先Spreadsheet",
                type: { parent: GoogleTypes_1.default.SPREADSHEET, child: LiteralTypes_1.default.NONE },
                key: "spreadsheet",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.SheetCopy = SheetCopy;
// シートの最終行Noを取得
class GetLastRow extends Parent {
    constructor() {
        super();
        this.methodId = "getLastRow";
        this.methodName = "シートの最終行を取得";
        this.methodDescription = "シート内で値の入った最終行の位置を取得する";
        this.keyword = `${COMMON_KEYWORD} last 最後`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.GetLastRow = GetLastRow;
// シートの最終列Noを取得
class GetLastColumn extends Parent {
    constructor() {
        super();
        this.methodId = "getLastColumn";
        this.methodName = "シートの最終列を取得";
        this.methodDescription = "シート内で値の入った最終列の位置を取得する";
        this.keyword = `${COMMON_KEYWORD} last 最後`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.GetLastColumn = GetLastColumn;
// シートの最終行に値を書き込み
class AppendRow extends Parent {
    constructor() {
        super();
        this.methodId = "appendRow";
        this.methodName = "シートの最終行書き込み";
        this.methodDescription = "指定したシートの最終行に値を書き込む";
        this.keyword = `${COMMON_KEYWORD} append last 最後`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_SHEET,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "書き込む値の配列（1次元配列）",
                type: { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY },
                key: "array",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.AppendRow = AppendRow;
