"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowScript = exports.DeleteAllTrigger = exports.IfStatement = exports.ConsoleError = exports.ConsoleLog = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
const parser_1 = require("@babel/parser");
const __1 = require("..");
const AstControler_1 = require("../../Lib/AstControler");
const TextParser_1 = require("../../../../hostings/app/lib/TextParser");
/*

Console

*/
class ConsoleLog extends lib_1.Classes.UtilityClasses.ConsoleLog {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "log";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(this.className, m, args);
    }
}
exports.ConsoleLog = ConsoleLog;
class ConsoleError extends lib_1.Classes.UtilityClasses.ConsoleError {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "error";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(this.className, m, args);
    }
}
exports.ConsoleError = ConsoleError;
class IfStatement extends lib_1.Classes.UtilityClasses.IfStatement {
    constructor() {
        super();
    }
    getAst(args, rootEntities) {
        const childStatements = rootEntities[args.childGroupId].map((e) => {
            const classesFilter = __1.SystemClasses.find((clsx) => clsx.categoryId === e.categoryId && clsx.methodId === e.methodId);
            if ((0, TextParser_1.isUndefined)(classesFilter)) {
                throw new Error(`system error. unknown class property: ${e.categoryId} ${e.methodId}`);
            }
            else {
                if (classesFilter.hasNest) {
                    return classesFilter.getAst(e, rootEntities);
                }
                else {
                    return classesFilter.getAst(e);
                }
            }
        });
        return new AstControler_1.AstControler((0, parser_1.parse)(`if(${(0, utils_1.removeVariableSymbol)(args.inputArgumentValue[0].value)}${(0, utils_1.removeVariableSymbol)(args.inputArgumentValue[1].value)}${(0, utils_1.removeVariableSymbol)(args.inputArgumentValue[2].value)}){}`))
            .insertStatemtnsToIfStatement(childStatements)
            .getFile().program.body[0];
    }
}
exports.IfStatement = IfStatement;
class DeleteAllTrigger extends lib_1.Classes.UtilityClasses.DeleteAllTrigger {
    constructor() {
        super();
    }
    getAst(_) {
        return (0, utils_1.codeParseOnly)(`${this.className}.getProjectTriggers().forEach(trigger => ScriptApp.deleteTrigger(trigger));`);
    }
}
exports.DeleteAllTrigger = DeleteAllTrigger;
class RowScript extends lib_1.Classes.UtilityClasses.RowScript {
    constructor() {
        super();
    }
    getAst(args) {
        const code = `const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = () => {
      ${args.inputArgumentValue[0].value}
    }
    `;
        return (0, utils_1.codeParseOnly)(code);
    }
}
exports.RowScript = RowScript;
