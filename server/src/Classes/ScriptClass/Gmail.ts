import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateExpressionStatement_ClassMethod, updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof typeof GmailApp;

export class GmailCreateDraft extends Classes.GmailClasses.GmailCreateDraft implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "createDraft";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailCreateLabel extends Classes.GmailClasses.GmailCreateLabel implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "createLabel";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailDeleteLabel extends Classes.GmailClasses.GmailDeleteLabel implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "deleteLabel";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailGetChatThreads extends Classes.GmailClasses.GmailGetChatThreads implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getChatThreads";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailGetDraft extends Classes.GmailClasses.GmailGetDraft implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getDraft";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailGetDraftMessages extends Classes.GmailClasses.GmailGetDraftMessages implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getDraftMessages";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailGetDrafts extends Classes.GmailClasses.GmailGetDrafts implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getDrafts";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailGetInboxThreads extends Classes.GmailClasses.GmailGetInboxThreads implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getInboxThreads";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailGetInboxUnreadCount extends Classes.GmailClasses.GmailGetInboxUnreadCount implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getInboxUnreadCount";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailGetMessageById extends Classes.GmailClasses.GmailGetMessageById implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getMessageById";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailGetThreadById extends Classes.GmailClasses.GmailGetThreadById implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getThreadById";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailSearch extends Classes.GmailClasses.GmailSearch implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "search";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class GmailSendEmail extends Classes.GmailClasses.GmailSendEmail implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "sendEmail";
    return updateExpressionStatement_ClassMethod(this.className, m, args);
  }
}
