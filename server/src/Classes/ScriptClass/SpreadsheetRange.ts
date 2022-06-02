import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateExpressionStatement_ClassMethod, updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type rangeMethods = keyof GoogleAppsScript.Spreadsheet.Range;

export class GetValue extends Classes.SpreadsheetRangeClasses.GetValue implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: rangeMethods = "getValue";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GgetValues extends Classes.SpreadsheetRangeClasses.GgetValues implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: rangeMethods = "getValues";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class SetValue extends Classes.SpreadsheetRangeClasses.SetValue implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: rangeMethods = "setValue";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class SetValues extends Classes.SpreadsheetRangeClasses.SetValues implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: rangeMethods = "setValues";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class RangeClear extends Classes.SpreadsheetRangeClasses.RangeClear implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: rangeMethods = "clear";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}
