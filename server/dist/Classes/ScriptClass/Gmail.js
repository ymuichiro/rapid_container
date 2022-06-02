"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailSendEmail = exports.GmailSearch = exports.GmailGetThreadById = exports.GmailGetMessageById = exports.GmailGetInboxUnreadCount = exports.GmailGetInboxThreads = exports.GmailGetDrafts = exports.GmailGetDraftMessages = exports.GmailGetDraft = exports.GmailGetChatThreads = exports.GmailDeleteLabel = exports.GmailCreateLabel = exports.GmailCreateDraft = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class GmailCreateDraft extends lib_1.Classes.GmailClasses.GmailCreateDraft {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "createDraft";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailCreateDraft = GmailCreateDraft;
class GmailCreateLabel extends lib_1.Classes.GmailClasses.GmailCreateLabel {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "createLabel";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailCreateLabel = GmailCreateLabel;
class GmailDeleteLabel extends lib_1.Classes.GmailClasses.GmailDeleteLabel {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "deleteLabel";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailDeleteLabel = GmailDeleteLabel;
class GmailGetChatThreads extends lib_1.Classes.GmailClasses.GmailGetChatThreads {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getChatThreads";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailGetChatThreads = GmailGetChatThreads;
class GmailGetDraft extends lib_1.Classes.GmailClasses.GmailGetDraft {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getDraft";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailGetDraft = GmailGetDraft;
class GmailGetDraftMessages extends lib_1.Classes.GmailClasses.GmailGetDraftMessages {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getDraftMessages";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailGetDraftMessages = GmailGetDraftMessages;
class GmailGetDrafts extends lib_1.Classes.GmailClasses.GmailGetDrafts {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getDrafts";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailGetDrafts = GmailGetDrafts;
class GmailGetInboxThreads extends lib_1.Classes.GmailClasses.GmailGetInboxThreads {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getInboxThreads";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailGetInboxThreads = GmailGetInboxThreads;
class GmailGetInboxUnreadCount extends lib_1.Classes.GmailClasses.GmailGetInboxUnreadCount {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getInboxUnreadCount";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailGetInboxUnreadCount = GmailGetInboxUnreadCount;
class GmailGetMessageById extends lib_1.Classes.GmailClasses.GmailGetMessageById {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getMessageById";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailGetMessageById = GmailGetMessageById;
class GmailGetThreadById extends lib_1.Classes.GmailClasses.GmailGetThreadById {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getThreadById";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailGetThreadById = GmailGetThreadById;
class GmailSearch extends lib_1.Classes.GmailClasses.GmailSearch {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "search";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailSearch = GmailSearch;
class GmailSendEmail extends lib_1.Classes.GmailClasses.GmailSendEmail {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "sendEmail";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(this.className, m, args);
    }
}
exports.GmailSendEmail = GmailSendEmail;
