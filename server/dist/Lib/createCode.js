"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAst = void 0;
const types = require("@babel/types");
const generator_1 = require("@babel/generator");
const index_1 = require("../Classes/index");
const createRootAst_1 = require("./createRootAst");
const AstControler_1 = require("./AstControler");
const parser_1 = require("@babel/parser");
const lib_1 = require("../../../hostings/app/lib");
const TextParser_1 = require("../../../hostings/app/lib/TextParser");
const index_2 = require("../Classes/OptionClasses/index");
/**
 * メソッドIDと入力値の配列を受け取り、Astを返す
 * editorStateは hosting/app/interfaceより参照
 */
function getAst(editerState) {
    var _a;
    console.log(editerState);
    // 起動時トリガー生成ロジック箇所の作成
    const triggerStatements = (_a = index_2.RunOptions.find((option) => option.categoryId === editerState.RunOptions.categoryId && option.methodId === editerState.RunOptions.methodId)) === null || _a === void 0 ? void 0 : _a.getAst(editerState.RunOptions);
    // 渡された配列を順番にクラスへ適用し、ASTの配列を作成する
    const statements = editerState.entities[lib_1.ROOT_KEY].map((e) => {
        const classesFilter = index_1.SystemClasses.find((clsx) => clsx.categoryId === e.categoryId && clsx.methodId === e.methodId);
        if ((0, TextParser_1.isUndefined)(classesFilter)) {
            throw new Error(`system error. unknown class property: ${e.categoryId} ${e.methodId}`);
        }
        else {
            try {
                if (classesFilter.hasNest) {
                    return classesFilter.getAst(e, editerState.entities);
                }
                else {
                    return classesFilter.getAst(e);
                }
            }
            catch (error) {
                console.error("発生箇所", classesFilter.categoryName, classesFilter.methodName);
                console.error("入力値", JSON.stringify(e));
                console.error(error);
                return types.expressionStatement((0, parser_1.parseExpression)("// error この行の処理をスキップしました"));
            }
        }
    });
    if (triggerStatements === undefined) {
        // ASTの配列をコードに変換する（トリガーの指定が正しくない or 設定がない時の処理）
        const rootAst = new AstControler_1.AstControler((0, createRootAst_1.createRootAst)(lib_1.ROOT_FUNCTION_NAME)).insertStatementToFunction(statements);
        return (0, generator_1.default)(rootAst.getFile()).code;
    }
    else {
        // ASTの配列をコードに変換する
        const rootAst = new AstControler_1.AstControler((0, createRootAst_1.createRootAst)(lib_1.ROOT_FUNCTION_NAME)).insertStatementToFunction([
            triggerStatements,
            ...statements,
        ]);
        return (0, generator_1.default)(rootAst.getFile()).code;
    }
}
exports.getAst = getAst;
