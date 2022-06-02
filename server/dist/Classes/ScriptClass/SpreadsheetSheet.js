"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppendRow = exports.GetLastColumn = exports.GetLastRow = exports.SheetCopy = exports.SheetAllClear = exports.GetDataRange = exports.GetRangeByInteger = exports.GetRangeByString = exports.DeleteSheet = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class DeleteSheet extends lib_1.Classes.SpreadsheetSheetClasses.DeleteSheet {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "deleteSheet";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.DeleteSheet = DeleteSheet;
class GetRangeByString extends lib_1.Classes.SpreadsheetSheetClasses.GetRangeByString {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getRange";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GetRangeByString = GetRangeByString;
class GetRangeByInteger extends lib_1.Classes.SpreadsheetSheetClasses.GetRangeByInteger {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getRange";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GetRangeByInteger = GetRangeByInteger;
class GetDataRange extends lib_1.Classes.SpreadsheetSheetClasses.GetDataRange {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getDataRange";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GetDataRange = GetDataRange;
class SheetAllClear extends lib_1.Classes.SpreadsheetSheetClasses.SheetAllClear {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "clear";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.SheetAllClear = SheetAllClear;
class SheetCopy extends lib_1.Classes.SpreadsheetSheetClasses.SheetCopy {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "copyTo";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.SheetCopy = SheetCopy;
class GetLastRow extends lib_1.Classes.SpreadsheetSheetClasses.GetLastRow {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getLastRow";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GetLastRow = GetLastRow;
class GetLastColumn extends lib_1.Classes.SpreadsheetSheetClasses.GetLastColumn {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getLastColumn";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GetLastColumn = GetLastColumn;
class AppendRow extends lib_1.Classes.SpreadsheetSheetClasses.AppendRow {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "appendRow";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.AppendRow = AppendRow;
