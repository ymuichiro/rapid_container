"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringSprit = exports.StringToNumeric = exports.NumericZeroPadding = exports.NumericAddDigit = exports.NumericToScring = void 0;
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
/*

変数のCast処理群を定義する

*/
/*

数値処理

*/
/** 共通のパラメーターを定義する */
class NumericParent {
    constructor() {
        this.className = "Number";
        this.categoryId = "Parser";
        this.categoryName = "変数変換";
        this.categoryDescription = "変数の形式/型を変換する";
        this.cardCategoryIcon = "change_circle";
        this.hasNest = false;
    }
}
const COMMON_KEYWORD = "変換 コンバート パーサー convert キャスト cast";
class NumericToScring extends NumericParent {
    constructor() {
        super();
        this.methodId = "NumericToScring";
        this.methodName = "変数変換 - 数値 → 文字列";
        this.methodDescription = "数値形式の変数を文字列へ変換します";
        this.keyword = COMMON_KEYWORD;
        this.inputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.NumericToScring = NumericToScring;
class NumericAddDigit extends NumericParent {
    constructor() {
        super();
        this.methodId = "NumericAddDigit";
        this.methodName = "変数変換 - 数値 → 3桁カンマ区切り文字列";
        this.methodDescription = "数値形式の変数を3桁カンマ区切りの文字列へ変換します";
        this.keyword = COMMON_KEYWORD;
        this.inputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.NumericAddDigit = NumericAddDigit;
class NumericZeroPadding extends NumericParent {
    constructor() {
        super();
        this.methodId = "NumericZeroPadding";
        this.methodName = "変数変換 - 数値ゼロパディング";
        this.methodDescription = "数値形式の先頭に0をつけ、桁数を揃えます";
        this.keyword = COMMON_KEYWORD;
        this.inputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "桁数",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "num",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.NumericZeroPadding = NumericZeroPadding;
/*

文字列処理

*/
/** 共通のパラメーターを定義する */
class StringParent {
    constructor() {
        this.className = "String";
        this.categoryId = "Parser";
        this.categoryName = "変数変換";
        this.categoryDescription = "変数の形式/型を変換する";
        this.cardCategoryIcon = "change_circle";
        this.hasNest = false;
    }
}
class StringToNumeric extends StringParent {
    constructor() {
        super();
        this.methodId = "StringToNumeric";
        this.methodName = "変数変換 - 文字列 → 数値";
        this.methodDescription = "数値形式の変数を文字列へ変換します";
        this.keyword = COMMON_KEYWORD;
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "対象文字列（数値に変換できない場合は NaN となります）",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                isObject: false,
                isMultiLine: false,
                key: "num",
            },
        ];
    }
}
exports.StringToNumeric = StringToNumeric;
class StringSprit extends StringParent {
    constructor() {
        super();
        this.methodId = "StringSprit";
        this.methodName = "変数変換 - 文字列 → 配列";
        this.methodDescription = "文字列を指定の区切り文字で分割し配列に変換します";
        this.keyword = `${COMMON_KEYWORD} 分割`;
        this.inputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.STRING };
        this.argumentType = [
            {
                name: "区切り文字",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                isObject: false,
                isMultiLine: false,
                key: "text",
            },
        ];
    }
}
exports.StringSprit = StringSprit;
