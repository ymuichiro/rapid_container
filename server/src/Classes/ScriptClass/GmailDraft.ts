import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateExpressionStatement_ClassMethod, updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof GoogleAppsScript.Gmail.GmailDraft;

export class GmailDraftDeleteDraft extends Classes.GmailDraftClasses.GmailDraftDeleteDraft implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "deleteDraft";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailDraftGetId extends Classes.GmailDraftClasses.GmailDraftGetId implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getId";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailDraftSend extends Classes.GmailDraftClasses.GmailDraftSend implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "send";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailDraftUpdate extends Classes.GmailDraftClasses.GmailDraftUpdate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "update";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}
