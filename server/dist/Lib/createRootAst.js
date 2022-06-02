"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRootAst = void 0;
const AstControler_1 = require("./AstControler");
const core_1 = require("@babel/core");
const utilitiy_1 = require("../../../hostings/app/lib/TextParser/utilitiy");
/** コードの書き出し先となる関数を出力する */
function createRootAst(functionName) {
    const ast = (0, utilitiy_1.isUndefinedOrNullError)((0, core_1.parseSync)("function name(){}"), (0, utilitiy_1.systemError)("parseSyncがnullとなりました", createRootAst.name));
    return new AstControler_1.AstControler(ast).changeFunctionName(functionName).getFile();
}
exports.createRootAst = createRootAst;
