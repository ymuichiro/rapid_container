import { Statement } from "@babel/types";
import { Classes } from "../../../../hostings/app/lib";
import { ServerClasses } from "../../type";
import { codeParseOnly, removeVariableSymbol, updateVariableDeclaration_Init } from "../../Lib/utils";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";

// gas-lib側で定義されている各クラスに対して、AST処理分を追記する
export class StringLiteral extends Classes.LiteralClasses.StringLiteral implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    return updateVariableDeclaration_Init(args);
  }
}

export class NumericLiteral extends Classes.LiteralClasses.NumericLiteral implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    return updateVariableDeclaration_Init(args);
  }
}

export class BooleanLiteral extends Classes.LiteralClasses.BooleanLiteral implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    return updateVariableDeclaration_Init(args);
  }
}

export class BlankArrayLiteral extends Classes.LiteralClasses.BlankArrayLiteral implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    return codeParseOnly(`const ${removeVariableSymbol(args.outputVariableName)} = new Array()`);
  }
}
