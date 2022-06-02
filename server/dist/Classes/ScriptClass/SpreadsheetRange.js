"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeClear = exports.SetValues = exports.SetValue = exports.GgetValues = exports.GetValue = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class GetValue extends lib_1.Classes.SpreadsheetRangeClasses.GetValue {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getValue";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GetValue = GetValue;
class GgetValues extends lib_1.Classes.SpreadsheetRangeClasses.GgetValues {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getValues";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GgetValues = GgetValues;
class SetValue extends lib_1.Classes.SpreadsheetRangeClasses.SetValue {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "setValue";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.SetValue = SetValue;
class SetValues extends lib_1.Classes.SpreadsheetRangeClasses.SetValues {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "setValues";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.SetValues = SetValues;
class RangeClear extends lib_1.Classes.SpreadsheetRangeClasses.RangeClear {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "clear";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.RangeClear = RangeClear;
