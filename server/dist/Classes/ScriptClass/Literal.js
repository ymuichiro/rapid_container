"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlankArrayLiteral = exports.BooleanLiteral = exports.NumericLiteral = exports.StringLiteral = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
// gas-lib側で定義されている各クラスに対して、AST処理分を追記する
class StringLiteral extends lib_1.Classes.LiteralClasses.StringLiteral {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.updateVariableDeclaration_Init)(args);
    }
}
exports.StringLiteral = StringLiteral;
class NumericLiteral extends lib_1.Classes.LiteralClasses.NumericLiteral {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.updateVariableDeclaration_Init)(args);
    }
}
exports.NumericLiteral = NumericLiteral;
class BooleanLiteral extends lib_1.Classes.LiteralClasses.BooleanLiteral {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.updateVariableDeclaration_Init)(args);
    }
}
exports.BooleanLiteral = BooleanLiteral;
class BlankArrayLiteral extends lib_1.Classes.LiteralClasses.BlankArrayLiteral {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.codeParseOnly)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Array()`);
    }
}
exports.BlankArrayLiteral = BlankArrayLiteral;
