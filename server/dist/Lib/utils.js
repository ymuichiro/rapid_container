"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpressionStatement_ArrowFunctionBody = exports.updateVariableDeclaration_ArrowFunctionBody = exports.codeParseOnly = exports.updateVariableDeclaration_ClassCallExpression = exports.updateVariableDeclaration_NewInstance = exports.updateExpressionStatement_ClassMethod = exports.updateVariableDeclaration_ClassMethod = exports.updateVariableDeclaration_Init = exports.removeVariableSymbol = void 0;
const lib_1 = require("../../../hostings/app/lib");
const t = require("@babel/types");
const generator_1 = require("@babel/generator");
const parser_1 = require("@babel/parser");
const traverse_1 = require("@babel/traverse");
function removeVariableSymbol(v) {
    return lib_1.TextParser.isVariable(v) ? lib_1.TextParser.removeVariableSymbol(v) : v;
}
exports.removeVariableSymbol = removeVariableSymbol;
/** const a = init; */
function updateVariableDeclaration_Init({ outputVariableName, inputBaseValue }) {
    return (0, parser_1.parse)(`const ${removeVariableSymbol(outputVariableName)} = ${removeVariableSymbol(inputBaseValue)}`).program
        .body[0];
}
exports.updateVariableDeclaration_Init = updateVariableDeclaration_Init;
/** const a = identifer.method(...args) */
function updateVariableDeclaration_ClassMethod(identifer, method, { outputVariableName, inputArgumentValue }) {
    // 引数生成
    const plainArgs = inputArgumentValue.filter((v) => !v.isObject).map((v) => removeVariableSymbol(v.value));
    const objectArgs = inputArgumentValue
        .filter((v) => v.isObject)
        .filter((e) => e.value !== "")
        .map((v) => t.objectProperty((0, parser_1.parseExpression)(v.key), (0, parser_1.parseExpression)(removeVariableSymbol(v.value))));
    const objectArgsStr = objectArgs.length === 0 ? "" : (0, generator_1.default)(t.objectExpression(objectArgs)).code;
    // 引数挿入&出力
    const args = [...plainArgs, objectArgsStr].filter((e) => e !== "").join(",");
    const code = `const ${removeVariableSymbol(outputVariableName)} = ${removeVariableSymbol(identifer)}.${method}(${args})`;
    return (0, parser_1.parse)(code).program.body[0];
}
exports.updateVariableDeclaration_ClassMethod = updateVariableDeclaration_ClassMethod;
/** identifer.method(...args) */
function updateExpressionStatement_ClassMethod(identifer, method, { inputArgumentValue }) {
    // 引数生成
    const plainArgs = inputArgumentValue.filter((v) => !v.isObject).map((v) => removeVariableSymbol(v.value));
    const objectArgs = inputArgumentValue
        .filter((v) => v.isObject)
        .filter((e) => e.value !== "")
        .map((v) => t.objectProperty((0, parser_1.parseExpression)(v.key), (0, parser_1.parseExpression)(removeVariableSymbol(v.value))));
    const objectArgsStr = objectArgs.length === 0 ? "" : (0, generator_1.default)(t.objectExpression(objectArgs)).code;
    // 引数挿入&出力
    const args = [...plainArgs, objectArgsStr].filter((e) => e !== "").join(",");
    const code = `${removeVariableSymbol(identifer)}.${method}(${args})`;
    return (0, parser_1.parse)(code).program.body[0];
}
exports.updateExpressionStatement_ClassMethod = updateExpressionStatement_ClassMethod;
/** const a = new identifer(...args) */
function updateVariableDeclaration_NewInstance(identifer, { outputVariableName, inputArgumentValue }) {
    // 引数生成
    const plainArgs = inputArgumentValue.filter((v) => !v.isObject).map((v) => removeVariableSymbol(v.value));
    const objectArgs = inputArgumentValue
        .filter((v) => v.isObject)
        .filter((e) => e.value !== "")
        .map((v) => t.objectProperty((0, parser_1.parseExpression)(v.key), (0, parser_1.parseExpression)(removeVariableSymbol(v.value))));
    const objectArgsStr = objectArgs.length === 0 ? "" : (0, generator_1.default)(t.objectExpression(objectArgs)).code;
    // 引数挿入&出力
    const args = [...plainArgs, objectArgsStr].filter((e) => e !== "").join(",");
    return (0, parser_1.parse)(`const ${removeVariableSymbol(outputVariableName)} = new ${removeVariableSymbol(identifer)}(${args})`)
        .program.body[0];
}
exports.updateVariableDeclaration_NewInstance = updateVariableDeclaration_NewInstance;
/** const a = identifer(...args) */
function updateVariableDeclaration_ClassCallExpression(identifer, { outputVariableName, inputArgumentValue }) {
    // 引数生成
    const plainArgs = inputArgumentValue.filter((v) => !v.isObject).map((v) => removeVariableSymbol(v.value));
    const objectArgs = inputArgumentValue
        .filter((v) => v.isObject)
        .filter((e) => e.value !== "")
        .map((v) => t.objectProperty((0, parser_1.parseExpression)(v.key), (0, parser_1.parseExpression)(removeVariableSymbol(v.value))));
    const objectArgsStr = objectArgs.length === 0 ? "" : (0, generator_1.default)(t.objectExpression(objectArgs)).code;
    // 引数挿入&出力
    const args = [...plainArgs, objectArgsStr].filter((e) => e !== "").join(",");
    const code = `const ${removeVariableSymbol(outputVariableName)} = ${removeVariableSymbol(identifer)}(${args})`;
    return (0, parser_1.parse)(code).program.body[0];
}
exports.updateVariableDeclaration_ClassCallExpression = updateVariableDeclaration_ClassCallExpression;
function codeParseOnly(code) {
    return (0, parser_1.parse)(code).program.body[0];
}
exports.codeParseOnly = codeParseOnly;
function updateVariableDeclaration_ArrowFunctionBody(identifer, method, childStatements, { outputVariableName, childGroupId }) {
    const template = `const ${outputVariableName} = ${removeVariableSymbol(identifer)}.${method}((${childGroupId}Value,${childGroupId}Index)=>{})`;
    const ast = (0, parser_1.parse)(template);
    let stop = true;
    (0, traverse_1.default)(ast, {
        enter: (p) => {
            if (t.isVariableDeclaration(p.node) &&
                t.isVariableDeclarator(p.node.declarations[0]) &&
                t.isCallExpression(p.node.declarations[0].init) &&
                t.isArrowFunctionExpression(p.node.declarations[0].init.arguments[0]) &&
                stop) {
                p.node.declarations[0].init.arguments[0].body = t.blockStatement(childStatements);
                stop = false;
            }
        },
    });
    return ast.program.body[0];
}
exports.updateVariableDeclaration_ArrowFunctionBody = updateVariableDeclaration_ArrowFunctionBody;
function updateExpressionStatement_ArrowFunctionBody(identifer, method, childStatements, { childGroupId }) {
    const template = `${removeVariableSymbol(identifer)}.${method}((${childGroupId}Value,${childGroupId}Index)=>{})`;
    const ast = (0, parser_1.parse)(template);
    let stop = true;
    (0, traverse_1.default)(ast, {
        enter: (p) => {
            if (t.isExpressionStatement(p.node) &&
                t.isCallExpression(p.node.expression) &&
                t.isArrowFunctionExpression(p.node.expression.arguments[0]) &&
                stop) {
                p.node.expression.arguments[0].body = t.blockStatement(childStatements);
                stop = false;
            }
        },
    });
    return ast.program.body[0];
}
exports.updateExpressionStatement_ArrowFunctionBody = updateExpressionStatement_ArrowFunctionBody;
