import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateExpressionStatement_ClassMethod, updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof GoogleAppsScript.Gmail.GmailLabel;

export class GmailLabelGetUserLabelByName extends Classes.GmailLabelClasses.GmailLabelGetUserLabelByName
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: keyof typeof GmailApp = "getUserLabelByName";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailLabelDeleteLabel extends Classes.GmailLabelClasses.GmailLabelDeleteLabel implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "deleteLabel";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailLabelGetName extends Classes.GmailLabelClasses.GmailLabelGetName implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getName";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailLabelGetThreads extends Classes.GmailLabelClasses.GmailLabelGetThreads implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getThreads";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailDraftAddToThread extends Classes.GmailLabelClasses.GmailDraftAddToThread implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "addToThread";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailDraftAddToThreads extends Classes.GmailLabelClasses.GmailDraftAddToThreads implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "addToThreads";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}
