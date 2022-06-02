"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeClear = exports.SetValues = exports.SetValue = exports.GgetValues = exports.GetValue = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
    constructor() {
        this.className = "SpreadsheetApp";
        this.categoryId = "SpreadsheetRange";
        this.categoryName = "セル範囲";
        this.categoryDescription = "指定したセル範囲への操作";
        this.cardCategoryIcon = "flip_to_front";
        this.hasNest = false;
    }
}
const COMMON_KEYWORD = "excel Excel Spreadsheet spreadsheet sheet スプレッドシート シート Sheet セル 範囲 range Range";
// 範囲の値を取得する（単一）
class GetValue extends Parent {
    constructor() {
        super();
        this.methodId = "getValue";
        this.methodName = "指定したセルから値を取得";
        this.methodDescription = "指定したセルから値を取得する（単一セル）";
        this.keyword = `${COMMON_KEYWORD} get cell`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_RANGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.GetValue = GetValue;
// 範囲の値を取得する（複数）
class GgetValues extends Parent {
    constructor() {
        super();
        this.methodId = "getValues";
        this.methodName = "指定したセル範囲から値を取得";
        this.methodDescription = "指定したセル範囲から値を取得する（複数セル）";
        this.keyword = `${COMMON_KEYWORD} get cell`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_RANGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.ARRAY2, child: LiteralTypes_1.default.ANY };
        this.argumentType = [];
    }
}
exports.GgetValues = GgetValues;
// セルに値を書き込む
class SetValue extends Parent {
    constructor() {
        super();
        this.methodId = "setValue";
        this.methodName = "指定したセルへ値を書き込み";
        this.methodDescription = "指定したセルへ値を書き込む（単一セル）";
        this.keyword = `${COMMON_KEYWORD} write 反映 cell`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_RANGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "書き込む値",
                type: { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.NONE },
                key: "value",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.SetValue = SetValue;
// 範囲に値を書き込む
class SetValues extends Parent {
    constructor() {
        super();
        this.methodId = "setValues";
        this.methodName = "指定したセル範囲へ値を書き込み";
        this.methodDescription = "指定したセル範囲へ値を書き込む（単一セル）";
        this.keyword = `${COMMON_KEYWORD} write 反映 cell`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_RANGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "書き込む値の配列（２次元配列）",
                type: { parent: LiteralTypes_1.default.ARRAY2, child: LiteralTypes_1.default.ANY },
                key: "values",
                require: true,
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.SetValues = SetValues;
// 範囲の値をクリアする
class RangeClear extends Parent {
    constructor() {
        super();
        this.methodId = "rangeClear";
        this.methodName = "指定したセル範囲の値クリア";
        this.methodDescription = "指定したセル範囲へ値を全てクリアする";
        this.keyword = `${COMMON_KEYWORD} clear 消去`;
        this.inputType = {
            parent: GoogleTypes_1.default.SPREADSHEET_RANGE,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.RangeClear = RangeClear;
