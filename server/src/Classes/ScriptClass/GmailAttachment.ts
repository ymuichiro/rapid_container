import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof GoogleAppsScript.Gmail.GmailAttachment;

export class GmailAttachmentGetAs extends Classes.GmailAttachmentClasses.GmailAttachmentGetAs implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getAs";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailAttachmentGetContentType extends Classes.GmailAttachmentClasses.GmailAttachmentGetContentType
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getContentType";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailAttachmentGetDataAsString extends Classes.GmailAttachmentClasses.GmailAttachmentGetDataAsString
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getDataAsString";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailAttachmentGetName extends Classes.GmailAttachmentClasses.GmailAttachmentGetName
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getName";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailAttachmentGetSize extends Classes.GmailAttachmentClasses.GmailAttachmentGetSize
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getSize";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailAttachmentSetName extends Classes.GmailAttachmentClasses.GmailAttachmentSetName
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "setName";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}
