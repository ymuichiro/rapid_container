import * as types from "@babel/types";
import generate from "@babel/generator";
import { SystemClasses } from "../Classes/index";
import { createRootAst } from "./createRootAst";
import { AstControler } from "./AstControler";
import { parseExpression } from "@babel/parser";
import { ROOT_FUNCTION_NAME, ROOT_KEY } from "../../../hostings/app/lib";
import { isUndefined } from "../../../hostings/app/lib/TextParser";
import { RunOptions } from "../Classes/OptionClasses/index";

/**
 * メソッドIDと入力値の配列を受け取り、Astを返す
 * editorStateは hosting/app/interfaceより参照
 */
export function getAst(editerState: any) {
  console.log(editerState);
  // 起動時トリガー生成ロジック箇所の作成
  const triggerStatements: types.Statement | undefined = RunOptions.find(
    (option) =>
      option.categoryId === editerState.RunOptions.categoryId && option.methodId === editerState.RunOptions.methodId
  )?.getAst(editerState.RunOptions);

  // 渡された配列を順番にクラスへ適用し、ASTの配列を作成する
  const statements: types.Statement[] = editerState.entities[ROOT_KEY].map((e: any) => {
    const classesFilter = SystemClasses.find(
      (clsx) => clsx.categoryId === e.categoryId && clsx.methodId === e.methodId
    );
    if (isUndefined(classesFilter)) {
      throw new Error(`system error. unknown class property: ${e.categoryId} ${e.methodId}`);
    } else {
      try {
        if (classesFilter.hasNest) {
          return classesFilter.getAst(e, editerState.entities);
        } else {
          return classesFilter.getAst(e) as types.Statement;
        }
      } catch (error) {
        console.error("発生箇所", classesFilter.categoryName, classesFilter.methodName);
        console.error("入力値", JSON.stringify(e));
        console.error(error);
        return types.expressionStatement(parseExpression("// error この行の処理をスキップしました"));
      }
    }
  });

  if (triggerStatements === undefined) {
    // ASTの配列をコードに変換する（トリガーの指定が正しくない or 設定がない時の処理）
    const rootAst = new AstControler(createRootAst(ROOT_FUNCTION_NAME)).insertStatementToFunction(statements);
    return generate(rootAst.getFile()).code;
  } else {
    // ASTの配列をコードに変換する
    const rootAst = new AstControler(createRootAst(ROOT_FUNCTION_NAME)).insertStatementToFunction([
      triggerStatements,
      ...statements,
    ]);
    return generate(rootAst.getFile()).code;
  }
}
