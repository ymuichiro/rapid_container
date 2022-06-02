import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateExpressionStatement_ClassMethod, updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof GoogleAppsScript.Gmail.GmailThread;

export class GmailThreadAddLabel extends Classes.GmailThreadClasses.GmailThreadAddLabel implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "addLabel";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadCreateDraftReply extends Classes.GmailThreadClasses.GmailThreadCreateDraftReply
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "createDraftReply";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadCreateDraftReplyAll extends Classes.GmailThreadClasses.GmailThreadCreateDraftReplyAll
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "createDraftReplyAll";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadGetFirstMessageSubject extends Classes.GmailThreadClasses.GmailThreadGetFirstMessageSubject
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getFirstMessageSubject";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadGetId extends Classes.GmailThreadClasses.GmailThreadGetId implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getId";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadGetLabels extends Classes.GmailThreadClasses.GmailThreadGetLabels implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getLabels";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadGetLastMessageDate extends Classes.GmailThreadClasses.GmailThreadGetLastMessageDate
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getLastMessageDate";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadGetMessageCount extends Classes.GmailThreadClasses.GmailThreadGetMessageCount
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getMessageCount";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadGetMessages extends Classes.GmailThreadClasses.GmailThreadGetMessages implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getMessages";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadGetPermaLink extends Classes.GmailThreadClasses.GmailThreadGetPermaLink
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getPermalink";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadMoveToArchive extends Classes.GmailThreadClasses.GmailThreadMoveToArchive
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "moveToArchive";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadMoveToInbox extends Classes.GmailThreadClasses.GmailThreadMoveToInbox implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "moveToInbox";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadMoveToTrash extends Classes.GmailThreadClasses.GmailThreadMoveToTrash implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "moveToTrash";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadRemoveLabel extends Classes.GmailThreadClasses.GmailThreadRemoveLabel implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "removeLabel";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadReply extends Classes.GmailThreadClasses.GmailThreadReply implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "reply";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class GmailThreadReplyAll extends Classes.GmailThreadClasses.GmailThreadReplyAll implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "replyAll";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}
