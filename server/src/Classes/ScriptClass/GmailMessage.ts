import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof GoogleAppsScript.Gmail.GmailMessage;

export class GmailMessageCreateDraftReply extends Classes.GmailMessageClasses.GmailMessageCreateDraftReply
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "createDraftReply";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageCreateDraftReplyAll extends Classes.GmailMessageClasses.GmailMessageCreateDraftReplyAll
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "createDraftReplyAll";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageForward extends Classes.GmailMessageClasses.GmailMessageForward implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "forward";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetAttachments extends Classes.GmailMessageClasses.GmailMessageGetAttachments
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getAttachments";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetBcc extends Classes.GmailMessageClasses.GmailMessageGetBcc implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getAttachments";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetCc extends Classes.GmailMessageClasses.GmailMessageGetCc implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getCc";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetDate extends Classes.GmailMessageClasses.GmailMessageGetDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getDate";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetFrom extends Classes.GmailMessageClasses.GmailMessageGetFrom implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getFrom";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetHeader extends Classes.GmailMessageClasses.GmailMessageGetHeader implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getHeader";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetId extends Classes.GmailMessageClasses.GmailMessageGetId implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getId";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetPlainBody extends Classes.GmailMessageClasses.GmailMessageGetPlainBody
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getPlainBody";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetTo extends Classes.GmailMessageClasses.GmailMessageGetTo implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getTo";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetSubject extends Classes.GmailMessageClasses.GmailMessageGetSubject
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getSubject";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageGetThread extends Classes.GmailMessageClasses.GmailMessageGetThread implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getThread";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageReply extends Classes.GmailMessageClasses.GmailMessageReply implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "reply";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageReplyAll extends Classes.GmailMessageClasses.GmailMessageReplyAll implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "replyAll";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessageStar extends Classes.GmailMessageClasses.GmailMessageStar implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "star";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailMessagUnstar extends Classes.GmailMessageClasses.GmailMessagUnstar implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "unstar";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}
