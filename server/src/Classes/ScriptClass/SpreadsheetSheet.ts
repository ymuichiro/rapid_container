import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateExpressionStatement_ClassMethod, updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type spreadsheetMethods = keyof GoogleAppsScript.Spreadsheet.Spreadsheet;
type sheetMethods = keyof GoogleAppsScript.Spreadsheet.Sheet;

export class DeleteSheet extends Classes.SpreadsheetSheetClasses.DeleteSheet implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: spreadsheetMethods = "deleteSheet";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GetRangeByString extends Classes.SpreadsheetSheetClasses.GetRangeByString implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "getRange";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GetRangeByInteger extends Classes.SpreadsheetSheetClasses.GetRangeByInteger implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "getRange";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GetDataRange extends Classes.SpreadsheetSheetClasses.GetDataRange implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "getDataRange";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class SheetAllClear extends Classes.SpreadsheetSheetClasses.SheetAllClear implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "clear";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class SheetCopy extends Classes.SpreadsheetSheetClasses.SheetCopy implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "copyTo";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GetLastRow extends Classes.SpreadsheetSheetClasses.GetLastRow implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "getLastRow";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GetLastColumn extends Classes.SpreadsheetSheetClasses.GetLastColumn implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "getLastColumn";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class AppendRow extends Classes.SpreadsheetSheetClasses.AppendRow implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "appendRow";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}
