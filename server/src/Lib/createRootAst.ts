import { AstControler } from "./AstControler";
import { parseSync, types } from "@babel/core";
import { isUndefinedOrNullError, systemError } from "../../../hostings/app/lib/TextParser/utilitiy";

/** コードの書き出し先となる関数を出力する */
export function createRootAst(functionName: string) {
  const ast = isUndefinedOrNullError(
    parseSync("function name(){}"),
    systemError("parseSyncがnullとなりました", createRootAst.name)
  ) as types.File;
  return new AstControler(ast).changeFunctionName(functionName).getFile();
}
