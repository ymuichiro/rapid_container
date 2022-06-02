"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstControler = void 0;
const parser_1 = require("@babel/parser");
const traverse_1 = require("@babel/traverse");
const t = require("@babel/types");
const TextParser_1 = require("../../../hostings/app/lib/TextParser");
const utils_1 = require("./utils");
class AstControler {
    constructor(astFile) {
        this.ast = astFile;
    }
    /*
      function methods
    */
    changeFunctionName(functionName) {
        let stop = true;
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isFunctionDeclaration(p.node) && t.isIdentifier(p.node.id) && stop) {
                    p.node.id.name = functionName;
                    stop = false;
                }
            },
        });
        return this;
    }
    updateArrowFunctionBody(statements) {
        let stop = true;
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isExpressionStatement(p.node) &&
                    t.isCallExpression(p.node.expression) &&
                    t.isArrowFunctionExpression(p.node.expression.arguments[0]) &&
                    stop) {
                    p.node.expression.arguments[0].body = t.blockStatement(statements);
                    stop = false;
                }
            },
        });
        return this;
    }
    insertStatementToFunction(statements) {
        let stop = true;
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isFunctionDeclaration(p.node) && stop) {
                    p.node.body.body = [...p.node.body.body, ...statements];
                    stop = false;
                }
            },
        });
        return this;
    }
    changeCallExpressionArgument(argument) {
        let stop = true;
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isExpressionStatement(p.node) && t.isCallExpression(p.node.expression) && stop) {
                    p.node.expression.arguments = argument;
                    stop = false;
                }
            },
        });
        return this;
    }
    /*
      Variable Methods
    */
    changeVariableName(variableName) {
        let stop = true;
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isVariableDeclaration(p.node) &&
                    t.isVariableDeclarator(p.node.declarations[0]) &&
                    t.isIdentifier(p.node.declarations[0].id) &&
                    stop) {
                    p.node.declarations[0].id.name = variableName;
                    stop = false;
                }
            },
        });
        return this;
    }
    /** 変数宣言の右辺に対して、初期化値を生成する */
    insertInitOnVariableDeclarator(expression) {
        let stop = true;
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isVariableDeclaration(p.node) && t.isVariableDeclarator(p.node.declarations[0]) && stop) {
                    p.node.declarations[0].init = expression;
                    stop = false;
                }
            },
        });
        return this;
    }
    /** 変数宣言ではない宣言文にExpressionStatementを上書きする */
    updateExpressionStatementIdentifer(expression) {
        let stop = true;
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isExpressionStatement(p.node) && stop) {
                    p.node.expression = expression;
                    stop = false;
                }
            },
        });
        return this;
    }
    /** IF StatementにStatementsを挿入する */
    insertStatemtnsToIfStatement(statements) {
        let stop = true;
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isIfStatement(p.node) && t.isBlockStatement(p.node.consequent) && stop) {
                    p.node.consequent.body = [...statements];
                    stop = false;
                }
            },
        });
        return this;
    }
    /** アロー関数をCallExpression内に挿入する */
    insertArrowFunctionOnCallExpression(groupKey) {
        let stop = true;
        const fc = t.arrowFunctionExpression([t.identifier(`${groupKey}Value`), t.identifier(`${groupKey}Index`)], t.blockStatement([]));
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isExpressionStatement(p.node) && t.isCallExpression(p.node.expression) && stop) {
                    p.node.expression.arguments = [fc];
                    stop = false;
                }
            },
        });
        return this;
    }
    insertObjectExpressionKeyValue(paramaters) {
        let stop = true;
        (0, traverse_1.default)(this.ast, {
            enter: (p) => {
                if (t.isExpressionStatement(p.node) && t.isCallExpression(p.node.expression) && stop) {
                    const prop = paramaters.map((e) => t.objectProperty((0, parser_1.parseExpression)(e[0]), (0, parser_1.parseExpression)(e[1])));
                    p.node.expression.arguments = [...p.node.expression.arguments, ...[t.objectExpression(prop)]];
                    stop = false;
                }
            },
        });
        return this;
    }
    getFile() {
        return this.ast;
    }
    static getExpression(a) {
        const v = (0, TextParser_1.isVariable)(a) ? (0, utils_1.removeVariableSymbol)(a) : a;
        return (0, parser_1.parseExpression)(v);
    }
    static getCallExpression(objectIdentifer, memberIdentider) {
        const o = (0, TextParser_1.isVariable)(objectIdentifer) ? (0, utils_1.removeVariableSymbol)(objectIdentifer) : objectIdentifer;
        const m = (0, TextParser_1.isVariable)(memberIdentider) ? (0, utils_1.removeVariableSymbol)(memberIdentider) : memberIdentider;
        return t.callExpression(t.memberExpression((0, parser_1.parseExpression)(o), (0, parser_1.parseExpression)(m)), []);
    }
}
exports.AstControler = AstControler;
