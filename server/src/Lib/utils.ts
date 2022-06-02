import { TextParser } from "../../../hostings/app/lib";
import * as t from "@babel/types";
import generator from "@babel/generator";
import { parse, parseExpression } from "@babel/parser";
import traverse from "@babel/traverse";
import { InputClassesData } from "../../../hostings/app/interfaces/ReduxClasses/InputClasses";

export function removeVariableSymbol(v: string): string {
  return TextParser.isVariable(v) ? TextParser.removeVariableSymbol(v) : v;
}

/** const a = init; */
export function updateVariableDeclaration_Init({ outputVariableName, inputBaseValue }: InputClassesData): t.Statement {
  return parse(`const ${removeVariableSymbol(outputVariableName)} = ${removeVariableSymbol(inputBaseValue)}`).program
    .body[0];
}

/** const a = identifer.method(...args) */
export function updateVariableDeclaration_ClassMethod(
  identifer: string,
  method: string,
  { outputVariableName, inputArgumentValue }: InputClassesData
): t.Statement {
  // 引数生成
  const plainArgs = inputArgumentValue.filter((v) => !v.isObject).map((v) => removeVariableSymbol(v.value));
  const objectArgs = inputArgumentValue
    .filter((v) => v.isObject)
    .filter((e) => e.value !== "")
    .map((v) => t.objectProperty(parseExpression(v.key), parseExpression(removeVariableSymbol(v.value))));
  const objectArgsStr = objectArgs.length === 0 ? "" : generator(t.objectExpression(objectArgs)).code;
  // 引数挿入&出力
  const args = [...plainArgs, objectArgsStr].filter((e) => e !== "").join(",");
  const code = `const ${removeVariableSymbol(outputVariableName)} = ${removeVariableSymbol(
    identifer
  )}.${method}(${args})`;
  return parse(code).program.body[0];
}

/** identifer.method(...args) */
export function updateExpressionStatement_ClassMethod(
  identifer: string,
  method: string,
  { inputArgumentValue }: InputClassesData
): t.Statement {
  // 引数生成
  const plainArgs = inputArgumentValue.filter((v) => !v.isObject).map((v) => removeVariableSymbol(v.value));
  const objectArgs = inputArgumentValue
    .filter((v) => v.isObject)
    .filter((e) => e.value !== "")
    .map((v) => t.objectProperty(parseExpression(v.key), parseExpression(removeVariableSymbol(v.value))));
  const objectArgsStr = objectArgs.length === 0 ? "" : generator(t.objectExpression(objectArgs)).code;
  // 引数挿入&出力
  const args = [...plainArgs, objectArgsStr].filter((e) => e !== "").join(",");
  const code = `${removeVariableSymbol(identifer)}.${method}(${args})`;
  return parse(code).program.body[0];
}

/** const a = new identifer(...args) */
export function updateVariableDeclaration_NewInstance(
  identifer: string,
  { outputVariableName, inputArgumentValue }: InputClassesData
): t.Statement {
  // 引数生成
  const plainArgs = inputArgumentValue.filter((v) => !v.isObject).map((v) => removeVariableSymbol(v.value));
  const objectArgs = inputArgumentValue
    .filter((v) => v.isObject)
    .filter((e) => e.value !== "")
    .map((v) => t.objectProperty(parseExpression(v.key), parseExpression(removeVariableSymbol(v.value))));
  const objectArgsStr = objectArgs.length === 0 ? "" : generator(t.objectExpression(objectArgs)).code;
  // 引数挿入&出力
  const args = [...plainArgs, objectArgsStr].filter((e) => e !== "").join(",");
  return parse(`const ${removeVariableSymbol(outputVariableName)} = new ${removeVariableSymbol(identifer)}(${args})`)
    .program.body[0];
}

/** const a = identifer(...args) */
export function updateVariableDeclaration_ClassCallExpression(
  identifer: string,
  { outputVariableName, inputArgumentValue }: InputClassesData
): t.Statement {
  // 引数生成
  const plainArgs = inputArgumentValue.filter((v) => !v.isObject).map((v) => removeVariableSymbol(v.value));
  const objectArgs = inputArgumentValue
    .filter((v) => v.isObject)
    .filter((e) => e.value !== "")
    .map((v) => t.objectProperty(parseExpression(v.key), parseExpression(removeVariableSymbol(v.value))));
  const objectArgsStr = objectArgs.length === 0 ? "" : generator(t.objectExpression(objectArgs)).code;
  // 引数挿入&出力
  const args = [...plainArgs, objectArgsStr].filter((e) => e !== "").join(",");
  const code = `const ${removeVariableSymbol(outputVariableName)} = ${removeVariableSymbol(identifer)}(${args})`;
  return parse(code).program.body[0];
}

export function codeParseOnly(code: string): t.Statement {
  return parse(code).program.body[0];
}

export function updateVariableDeclaration_ArrowFunctionBody(
  identifer: string,
  method: string,
  childStatements: t.Statement[],
  { outputVariableName, childGroupId }: InputClassesData
): t.Statement {
  const template = `const ${outputVariableName} = ${removeVariableSymbol(
    identifer
  )}.${method}((${childGroupId}Value,${childGroupId}Index)=>{})`;
  const ast = parse(template);
  let stop = true;
  traverse(ast, {
    enter: (p) => {
      if (
        t.isVariableDeclaration(p.node) &&
        t.isVariableDeclarator(p.node.declarations[0]) &&
        t.isCallExpression(p.node.declarations[0].init) &&
        t.isArrowFunctionExpression(p.node.declarations[0].init.arguments[0]) &&
        stop
      ) {
        p.node.declarations[0].init.arguments[0].body = t.blockStatement(childStatements);
        stop = false;
      }
    },
  });
  return ast.program.body[0];
}

export function updateExpressionStatement_ArrowFunctionBody(
  identifer: string,
  method: string,
  childStatements: t.Statement[],
  { childGroupId }: InputClassesData
): t.Statement {
  const template = `${removeVariableSymbol(identifer)}.${method}((${childGroupId}Value,${childGroupId}Index)=>{})`;
  const ast = parse(template);
  let stop = true;
  traverse(ast, {
    enter: (p) => {
      if (
        t.isExpressionStatement(p.node) &&
        t.isCallExpression(p.node.expression) &&
        t.isArrowFunctionExpression(p.node.expression.arguments[0]) &&
        stop
      ) {
        p.node.expression.arguments[0].body = t.blockStatement(childStatements);
        stop = false;
      }
    },
  });
  return ast.program.body[0];
}
