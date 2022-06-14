"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayLength = exports.ArrayIncludes = exports.ArrayJoin = exports.ArrayReverse = exports.ArraySlice = exports.ArrayConcat = exports.ArraySplice = exports.ArrayCopy = exports.ArrayPop = exports.ArrayShift = exports.ArrayPush = exports.ArrayUnshift = exports.ArrayReturn = exports.ArrayMap = exports.ArrayForEach = exports.ArrayIndexAccess = void 0;
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
    constructor() {
        this.className = "Array";
        this.categoryId = "Array";
        this.categoryName = "配列操作";
        this.categoryDescription = "配列形式のデータを操作します";
        this.cardCategoryIcon = "table_chart";
    }
}
const COMMON_KEYWORD = "配列 array";
class ArrayIndexAccess extends Parent {
    constructor() {
        super();
        this.methodId = "indexAccess";
        this.methodName = "指定位置の値にアクセスする";
        this.methodDescription = "配列の指定位置（順番）の値にアクセスする";
        this.hasNest = true;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [
            {
                name: "指定位置",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.ANY },
                require: true,
                key: "value",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.ArrayIndexAccess = ArrayIndexAccess;
class ArrayForEach extends Parent {
    constructor() {
        super();
        this.methodId = "forEach";
        this.methodName = "1次元配列の値で順に処理";
        this.methodDescription = "1次元配列内の各値に対して繰り返し処理を行う";
        this.hasNest = true;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
        this.keyword = COMMON_KEYWORD;
    }
}
exports.ArrayForEach = ArrayForEach;
class ArrayMap extends Parent {
    constructor() {
        super();
        this.methodId = "map";
        this.methodName = "1次元配列の値で順に処理し値を返す";
        this.methodDescription = "配列の値で順に処理した結果で再度配列を生成します";
        this.hasNest = true;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.argumentType = [];
        this.keyword = COMMON_KEYWORD;
    }
}
exports.ArrayMap = ArrayMap;
class ArrayReturn extends Parent {
    constructor() {
        super();
        this.methodId = "return";
        this.methodName = "map処理の値を返す";
        this.methodDescription = "map処理で値を返す際に利用する";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
        this.keyword = COMMON_KEYWORD;
    }
}
exports.ArrayReturn = ArrayReturn;
class ArrayUnshift extends Parent {
    constructor() {
        super();
        this.methodId = "unshift";
        this.methodName = "配列の先頭へ値追加";
        this.methodDescription = "配列の先頭に値を追加する";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [
            {
                name: "追加する値",
                type: { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY },
                require: true,
                key: "value",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.ArrayUnshift = ArrayUnshift;
class ArrayPush extends Parent {
    constructor() {
        super();
        this.methodId = "push";
        this.methodName = "配列の最後へ値追加";
        this.methodDescription = "配列の最後に値を追加する";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [
            {
                name: "追加する値",
                type: { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.ANY },
                require: true,
                key: "value",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.ArrayPush = ArrayPush;
class ArrayShift extends Parent {
    constructor() {
        super();
        this.methodId = "shift";
        this.methodName = "配列の先頭から値削除";
        this.methodDescription = "配列の先頭から値を削除する";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [];
    }
}
exports.ArrayShift = ArrayShift;
class ArrayPop extends Parent {
    constructor() {
        super();
        this.methodId = "shift";
        this.methodName = "配列の最後から値削除";
        this.methodDescription = "配列の最後から値を削除する";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [];
    }
}
exports.ArrayPop = ArrayPop;
class ArrayCopy extends Parent {
    constructor() {
        super();
        this.methodId = "copy";
        this.methodName = "配列をコピー";
        this.methodDescription = "配列をコピーして新規変数に格納する";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [];
    }
}
exports.ArrayCopy = ArrayCopy;
class ArraySplice extends Parent {
    constructor() {
        super();
        this.methodId = "splice";
        this.methodName = "配列の特定位置の値を削除";
        this.methodDescription = "配列の位置を指定して値を削除する";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.ANY };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [];
    }
}
exports.ArraySplice = ArraySplice;
class ArrayConcat extends Parent {
    constructor() {
        super();
        this.methodId = "concat";
        this.methodName = "配列と配列を結合する";
        this.methodDescription = "２つの配列を結合し、１つの配列にする";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [];
    }
}
exports.ArrayConcat = ArrayConcat;
class ArraySlice extends Parent {
    constructor() {
        super();
        this.methodId = "slice";
        this.methodName = "指定区間の値を取得";
        this.methodDescription = "配列から指定区間の値を取り出し新たな配列を生成する";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [
            {
                name: "開始位置",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "start",
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "終了位置",
                type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
                require: false,
                key: "end",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.ArraySlice = ArraySlice;
class ArrayReverse extends Parent {
    constructor() {
        super();
        this.methodId = "reverse";
        this.methodName = "逆順処理";
        this.methodDescription = "配列の並びを逆順に並び替える";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [];
    }
}
exports.ArrayReverse = ArrayReverse;
class ArrayJoin extends Parent {
    constructor() {
        super();
        this.methodId = "join";
        this.methodName = "結合処理";
        this.methodDescription = "配列を指定した区切り文字で結合する";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [
            {
                name: "区切り文字",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "value",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.ArrayJoin = ArrayJoin;
class ArrayIncludes extends Parent {
    constructor() {
        super();
        this.methodId = "includes";
        this.methodName = "指定文字の存在確認";
        this.methodDescription = "指定した値が配列内に存在するか確認する。";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.BOOLEAN, child: LiteralTypes_1.default.NONE };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [
            {
                name: "検索する値",
                type: { parent: LiteralTypes_1.default.ANY, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "value",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.ArrayIncludes = ArrayIncludes;
class ArrayLength extends Parent {
    constructor() {
        super();
        this.methodId = "length";
        this.methodName = "配列の長さ取得";
        this.methodDescription = "渡された配列の長さを数値で取得";
        this.hasNest = false;
        this.inputType = { parent: LiteralTypes_1.default.ARRAY, child: LiteralTypes_1.default.ANY };
        this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
        this.keyword = COMMON_KEYWORD;
        this.argumentType = [];
    }
}
exports.ArrayLength = ArrayLength;
