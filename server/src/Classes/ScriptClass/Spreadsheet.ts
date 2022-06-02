import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof typeof SpreadsheetApp;
type sheetMethods = keyof GoogleAppsScript.Spreadsheet.Spreadsheet;

export class GetActiveSpreadsheet extends Classes.SpreadsheetClasses.GetActiveSpreadsheet implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getActiveSpreadsheet";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class OpenByUrl extends Classes.SpreadsheetClasses.OpenByUrl implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "openByUrl";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GetSheetByName extends Classes.SpreadsheetClasses.GetSheetByName implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "getSheetByName";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GetSheets extends Classes.SpreadsheetClasses.GetSheets implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: sheetMethods = "getSheets";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}
