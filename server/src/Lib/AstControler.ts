import { parseExpression } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import { isVariable } from "../../../hostings/app/lib/TextParser";
import { removeVariableSymbol } from "./utils";

export class AstControler {
  private ast: t.File;

  public constructor(astFile: t.File) {
    this.ast = astFile;
  }

  /*
    function methods
  */
  public changeFunctionName(functionName: string): this {
    let stop = true;
    traverse(this.ast, {
      enter: (p) => {
        if (t.isFunctionDeclaration(p.node) && t.isIdentifier(p.node.id) && stop) {
          p.node.id.name = functionName;
          stop = false;
        }
      },
    });
    return this;
  }

  public updateArrowFunctionBody(statements: t.Statement[]): this {
    let stop = true;
    traverse(this.ast, {
      enter: (p) => {
        if (
          t.isExpressionStatement(p.node) &&
          t.isCallExpression(p.node.expression) &&
          t.isArrowFunctionExpression(p.node.expression.arguments[0]) &&
          stop
        ) {
          p.node.expression.arguments[0].body = t.blockStatement(statements);
          stop = false;
        }
      },
    });
    return this;
  }

  public insertStatementToFunction(statements: t.Statement[]): this {
    let stop = true;
    traverse(this.ast, {
      enter: (p) => {
        if (t.isFunctionDeclaration(p.node) && stop) {
          p.node.body.body = [...p.node.body.body, ...statements];
          stop = false;
        }
      },
    });
    return this;
  }

  public changeCallExpressionArgument(argument: t.Expression[]): this {
    let stop = true;
    traverse(this.ast, {
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
  public changeVariableName(variableName: string) {
    let stop = true;
    traverse(this.ast, {
      enter: (p) => {
        if (
          t.isVariableDeclaration(p.node) &&
          t.isVariableDeclarator(p.node.declarations[0]) &&
          t.isIdentifier(p.node.declarations[0].id) &&
          stop
        ) {
          p.node.declarations[0].id.name = variableName;
          stop = false;
        }
      },
    });
    return this;
  }

  /** 変数宣言の右辺に対して、初期化値を生成する */
  public insertInitOnVariableDeclarator(expression: t.Expression) {
    let stop = true;
    traverse(this.ast, {
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
  public updateExpressionStatementIdentifer(expression: t.Expression): this {
    let stop = true;
    traverse(this.ast, {
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
  public insertStatemtnsToIfStatement(statements: t.Statement[]) {
    let stop = true;
    traverse(this.ast, {
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
  public insertArrowFunctionOnCallExpression(groupKey: string) {
    let stop = true;
    const fc = t.arrowFunctionExpression(
      [t.identifier(`${groupKey}Value`), t.identifier(`${groupKey}Index`)],
      t.blockStatement([])
    );
    traverse(this.ast, {
      enter: (p) => {
        if (t.isExpressionStatement(p.node) && t.isCallExpression(p.node.expression) && stop) {
          p.node.expression.arguments = [fc];
          stop = false;
        }
      },
    });
    return this;
  }

  public insertObjectExpressionKeyValue(paramaters: string[][]): this {
    let stop = true;
    traverse(this.ast, {
      enter: (p) => {
        if (t.isExpressionStatement(p.node) && t.isCallExpression(p.node.expression) && stop) {
          const prop = paramaters.map((e) => t.objectProperty(parseExpression(e[0]), parseExpression(e[1])));
          p.node.expression.arguments = [...p.node.expression.arguments, ...[t.objectExpression(prop)]];
          stop = false;
        }
      },
    });
    return this;
  }

  public getFile() {
    return this.ast;
  }

  static getExpression(a: string): t.Expression {
    const v = isVariable(a) ? removeVariableSymbol(a) : a;
    return parseExpression(v);
  }

  static getCallExpression(objectIdentifer: string, memberIdentider: string): t.CallExpression {
    const o = isVariable(objectIdentifer) ? removeVariableSymbol(objectIdentifer) : objectIdentifer;
    const m = isVariable(memberIdentider) ? removeVariableSymbol(memberIdentider) : memberIdentider;
    return t.callExpression(t.memberExpression(parseExpression(o), parseExpression(m)), []);
  }
}
