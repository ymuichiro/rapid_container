"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailThreadReplyAll = exports.GmailThreadReply = exports.GmailThreadRemoveLabel = exports.GmailThreadMoveToTrash = exports.GmailThreadMoveToInbox = exports.GmailThreadMoveToArchive = exports.GmailThreadGetPermaLink = exports.GmailThreadGetMessages = exports.GmailThreadGetMessageCount = exports.GmailThreadGetLastMessageDate = exports.GmailThreadGetLabels = exports.GmailThreadGetId = exports.GmailThreadGetFirstMessageSubject = exports.GmailThreadCreateDraftReplyAll = exports.GmailThreadCreateDraftReply = exports.GmailThreadAddLabel = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class GmailThreadAddLabel extends lib_1.Classes.GmailThreadClasses.GmailThreadAddLabel {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "addLabel";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadAddLabel = GmailThreadAddLabel;
class GmailThreadCreateDraftReply extends lib_1.Classes.GmailThreadClasses.GmailThreadCreateDraftReply {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "createDraftReply";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadCreateDraftReply = GmailThreadCreateDraftReply;
class GmailThreadCreateDraftReplyAll extends lib_1.Classes.GmailThreadClasses.GmailThreadCreateDraftReplyAll {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "createDraftReplyAll";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadCreateDraftReplyAll = GmailThreadCreateDraftReplyAll;
class GmailThreadGetFirstMessageSubject extends lib_1.Classes.GmailThreadClasses.GmailThreadGetFirstMessageSubject {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getFirstMessageSubject";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadGetFirstMessageSubject = GmailThreadGetFirstMessageSubject;
class GmailThreadGetId extends lib_1.Classes.GmailThreadClasses.GmailThreadGetId {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getId";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadGetId = GmailThreadGetId;
class GmailThreadGetLabels extends lib_1.Classes.GmailThreadClasses.GmailThreadGetLabels {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getLabels";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadGetLabels = GmailThreadGetLabels;
class GmailThreadGetLastMessageDate extends lib_1.Classes.GmailThreadClasses.GmailThreadGetLastMessageDate {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getLastMessageDate";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadGetLastMessageDate = GmailThreadGetLastMessageDate;
class GmailThreadGetMessageCount extends lib_1.Classes.GmailThreadClasses.GmailThreadGetMessageCount {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getMessageCount";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadGetMessageCount = GmailThreadGetMessageCount;
class GmailThreadGetMessages extends lib_1.Classes.GmailThreadClasses.GmailThreadGetMessages {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getMessages";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadGetMessages = GmailThreadGetMessages;
class GmailThreadGetPermaLink extends lib_1.Classes.GmailThreadClasses.GmailThreadGetPermaLink {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getPermalink";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadGetPermaLink = GmailThreadGetPermaLink;
class GmailThreadMoveToArchive extends lib_1.Classes.GmailThreadClasses.GmailThreadMoveToArchive {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "moveToArchive";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadMoveToArchive = GmailThreadMoveToArchive;
class GmailThreadMoveToInbox extends lib_1.Classes.GmailThreadClasses.GmailThreadMoveToInbox {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "moveToInbox";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadMoveToInbox = GmailThreadMoveToInbox;
class GmailThreadMoveToTrash extends lib_1.Classes.GmailThreadClasses.GmailThreadMoveToTrash {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "moveToTrash";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadMoveToTrash = GmailThreadMoveToTrash;
class GmailThreadRemoveLabel extends lib_1.Classes.GmailThreadClasses.GmailThreadRemoveLabel {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "removeLabel";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadRemoveLabel = GmailThreadRemoveLabel;
class GmailThreadReply extends lib_1.Classes.GmailThreadClasses.GmailThreadReply {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "reply";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadReply = GmailThreadReply;
class GmailThreadReplyAll extends lib_1.Classes.GmailThreadClasses.GmailThreadReplyAll {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "replyAll";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailThreadReplyAll = GmailThreadReplyAll;
