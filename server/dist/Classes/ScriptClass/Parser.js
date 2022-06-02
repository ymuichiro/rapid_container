"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringSprit = exports.StringToNumeric = exports.NumericZeroPadding = exports.NumericAddDigit = exports.NumericToScring = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
/*

数値処理

*/
class NumericToScring extends lib_1.Classes.ParserClasses.NumericToScring {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "toString";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.NumericToScring = NumericToScring;
class NumericAddDigit extends lib_1.Classes.ParserClasses.NumericAddDigit {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "toLocaleString";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.NumericAddDigit = NumericAddDigit;
class NumericZeroPadding extends lib_1.Classes.ParserClasses.NumericZeroPadding {
    constructor() {
        super();
    }
    getAst(args) {
        const code = `${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = "0".repeat(${(0, utils_1.removeVariableSymbol)(args.inputArgumentValue[0].value) + 1}).slice(-${(0, utils_1.removeVariableSymbol)(args.inputArgumentValue[0].value)})`;
        return (0, utils_1.codeParseOnly)(code);
    }
}
exports.NumericZeroPadding = NumericZeroPadding;
/*

文字列処理

*/
class StringToNumeric extends lib_1.Classes.ParserClasses.StringToNumeric {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "Number";
        return (0, utils_1.updateVariableDeclaration_ClassCallExpression)(m, args);
    }
}
exports.StringToNumeric = StringToNumeric;
class StringSprit extends lib_1.Classes.ParserClasses.StringSprit {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "split";
        return (0, utils_1.updateVariableDeclaration_ClassCallExpression)(m, args);
    }
}
exports.StringSprit = StringSprit;
