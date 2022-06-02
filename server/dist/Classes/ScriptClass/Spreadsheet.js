"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSheets = exports.GetSheetByName = exports.OpenByUrl = exports.GetActiveSpreadsheet = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class GetActiveSpreadsheet extends lib_1.Classes.SpreadsheetClasses.GetActiveSpreadsheet {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getActiveSpreadsheet";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GetActiveSpreadsheet = GetActiveSpreadsheet;
class OpenByUrl extends lib_1.Classes.SpreadsheetClasses.OpenByUrl {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "openByUrl";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.OpenByUrl = OpenByUrl;
class GetSheetByName extends lib_1.Classes.SpreadsheetClasses.GetSheetByName {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getSheetByName";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GetSheetByName = GetSheetByName;
class GetSheets extends lib_1.Classes.SpreadsheetClasses.GetSheets {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getSheets";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GetSheets = GetSheets;
