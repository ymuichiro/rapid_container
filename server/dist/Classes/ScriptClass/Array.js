"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayLength = exports.ArrayIncludes = exports.ArrayJoin = exports.ArrayReverse = exports.ArraySlice = exports.ArrayConcat = exports.ArraySplice = exports.ArrayCopy = exports.ArrayPop = exports.ArrayShift = exports.ArrayPush = exports.ArrayUnshift = exports.ArrayIndexAccess = exports.ArrayReturn = exports.ArrayMap = exports.ArrayForEach = void 0;
const parser_1 = require("@babel/parser");
const types_1 = require("@babel/types");
const index_1 = require("../index");
const utils_1 = require("../../Lib/utils");
const lib_1 = require("../../../../hostings/app/lib");
const TextParser_1 = require("../../../../hostings/app/lib/TextParser");
class ArrayForEach extends lib_1.Classes.ArrayClasses.ArrayForEach {
    constructor() {
        super();
    }
    getAst(args, rootEntities) {
        const m = "forEach";
        const childStatements = rootEntities[args.childGroupId].map((e) => {
            const classesFilter = index_1.SystemClasses.find((clsx) => clsx.categoryId === e.categoryId && clsx.methodId === e.methodId);
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
        return (0, utils_1.updateExpressionStatement_ArrowFunctionBody)(args.inputBaseValue, m, childStatements, args);
    }
}
exports.ArrayForEach = ArrayForEach;
class ArrayMap extends lib_1.Classes.ArrayClasses.ArrayMap {
    constructor() {
        super();
    }
    getAst(args, rootEntities) {
        const m = "map";
        const childStatements = rootEntities[args.childGroupId].map((e) => {
            const classesFilter = index_1.SystemClasses.find((clsx) => clsx.categoryId === e.categoryId && clsx.methodId === e.methodId);
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
        return (0, utils_1.updateVariableDeclaration_ArrowFunctionBody)(args.inputBaseValue, m, childStatements, args);
    }
}
exports.ArrayMap = ArrayMap;
class ArrayReturn extends lib_1.Classes.ArrayClasses.ArrayReturn {
    constructor() {
        super();
    }
    getAst(args) {
        const statement = (0, types_1.returnStatement)((0, parser_1.parseExpression)((0, utils_1.removeVariableSymbol)(args.inputBaseValue)));
        return statement;
    }
}
exports.ArrayReturn = ArrayReturn;
class ArrayIndexAccess extends lib_1.Classes.ArrayClasses.ArrayIndexAccess {
    constructor() {
        super();
    }
    getAst(args) {
        const code = `const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = ${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}[${(0, utils_1.removeVariableSymbol)(args.inputArgumentValue[0].value)}]`;
        return (0, utils_1.codeParseOnly)(code);
    }
}
exports.ArrayIndexAccess = ArrayIndexAccess;
class ArrayUnshift extends lib_1.Classes.ArrayClasses.ArrayUnshift {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "unshift";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArrayUnshift = ArrayUnshift;
class ArrayPush extends lib_1.Classes.ArrayClasses.ArrayPush {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "push";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArrayPush = ArrayPush;
class ArrayShift extends lib_1.Classes.ArrayClasses.ArrayShift {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "shift";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArrayShift = ArrayShift;
class ArrayPop extends lib_1.Classes.ArrayClasses.ArrayPop {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "pop";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArrayPop = ArrayPop;
class ArrayCopy extends lib_1.Classes.ArrayClasses.ArrayCopy {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "concat";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArrayCopy = ArrayCopy;
class ArraySplice extends lib_1.Classes.ArrayClasses.ArraySplice {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "splice";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArraySplice = ArraySplice;
class ArrayConcat extends lib_1.Classes.ArrayClasses.ArrayConcat {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "concat";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArrayConcat = ArrayConcat;
class ArraySlice extends lib_1.Classes.ArrayClasses.ArraySlice {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "slice";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArraySlice = ArraySlice;
class ArrayReverse extends lib_1.Classes.ArrayClasses.ArrayReverse {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "reverse";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArrayReverse = ArrayReverse;
class ArrayJoin extends lib_1.Classes.ArrayClasses.ArrayJoin {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "join";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArrayJoin = ArrayJoin;
class ArrayIncludes extends lib_1.Classes.ArrayClasses.ArrayIncludes {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "includes";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.ArrayIncludes = ArrayIncludes;
class ArrayLength extends lib_1.Classes.ArrayClasses.ArrayLength {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "length";
        return (0, utils_1.codeParseOnly)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = ${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}.${m}`);
    }
}
exports.ArrayLength = ArrayLength;
