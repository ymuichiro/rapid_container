import { Statement } from "@babel/types";
import { Classes } from "../../../../hostings/app/lib";
import { ServerClasses } from "../../type";
import {
  codeParseOnly,
  removeVariableSymbol,
  updateVariableDeclaration_ClassCallExpression,
  updateVariableDeclaration_ClassMethod,
} from "../../Lib/utils";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";

/*

変数のCast処理群を定義する

*/

type NumericMethods = keyof number | "Number";
type StringMethods = keyof string;

/*

数値処理

*/

export class NumericToScring extends Classes.ParserClasses.NumericToScring implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: NumericMethods = "toString";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class NumericAddDigit extends Classes.ParserClasses.NumericAddDigit implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: NumericMethods = "toLocaleString";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class NumericZeroPadding extends Classes.ParserClasses.NumericZeroPadding implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const code = `${removeVariableSymbol(args.outputVariableName)} = "0".repeat(${
      removeVariableSymbol(args.inputArgumentValue[0].value) + 1
    }).slice(-${removeVariableSymbol(args.inputArgumentValue[0].value)})`;
    return codeParseOnly(code);
  }
}

/*

文字列処理

*/
export class StringToNumeric extends Classes.ParserClasses.StringToNumeric implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: NumericMethods = "Number";
    return updateVariableDeclaration_ClassCallExpression(m, args);
  }
}

export class StringSprit extends Classes.ParserClasses.StringSprit implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: StringMethods = "split";
    return updateVariableDeclaration_ClassCallExpression(m, args);
  }
}
