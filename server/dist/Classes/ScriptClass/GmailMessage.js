"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailMessagUnstar = exports.GmailMessageStar = exports.GmailMessageReplyAll = exports.GmailMessageReply = exports.GmailMessageGetThread = exports.GmailMessageGetSubject = exports.GmailMessageGetTo = exports.GmailMessageGetPlainBody = exports.GmailMessageGetId = exports.GmailMessageGetHeader = exports.GmailMessageGetFrom = exports.GmailMessageGetDate = exports.GmailMessageGetCc = exports.GmailMessageGetBcc = exports.GmailMessageGetAttachments = exports.GmailMessageForward = exports.GmailMessageCreateDraftReplyAll = exports.GmailMessageCreateDraftReply = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class GmailMessageCreateDraftReply extends lib_1.Classes.GmailMessageClasses.GmailMessageCreateDraftReply {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "createDraftReply";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageCreateDraftReply = GmailMessageCreateDraftReply;
class GmailMessageCreateDraftReplyAll extends lib_1.Classes.GmailMessageClasses.GmailMessageCreateDraftReplyAll {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "createDraftReplyAll";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageCreateDraftReplyAll = GmailMessageCreateDraftReplyAll;
class GmailMessageForward extends lib_1.Classes.GmailMessageClasses.GmailMessageForward {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "forward";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageForward = GmailMessageForward;
class GmailMessageGetAttachments extends lib_1.Classes.GmailMessageClasses.GmailMessageGetAttachments {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getAttachments";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetAttachments = GmailMessageGetAttachments;
class GmailMessageGetBcc extends lib_1.Classes.GmailMessageClasses.GmailMessageGetBcc {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getAttachments";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetBcc = GmailMessageGetBcc;
class GmailMessageGetCc extends lib_1.Classes.GmailMessageClasses.GmailMessageGetCc {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getCc";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetCc = GmailMessageGetCc;
class GmailMessageGetDate extends lib_1.Classes.GmailMessageClasses.GmailMessageGetDate {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getDate";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetDate = GmailMessageGetDate;
class GmailMessageGetFrom extends lib_1.Classes.GmailMessageClasses.GmailMessageGetFrom {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getFrom";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetFrom = GmailMessageGetFrom;
class GmailMessageGetHeader extends lib_1.Classes.GmailMessageClasses.GmailMessageGetHeader {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getHeader";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetHeader = GmailMessageGetHeader;
class GmailMessageGetId extends lib_1.Classes.GmailMessageClasses.GmailMessageGetId {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getId";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetId = GmailMessageGetId;
class GmailMessageGetPlainBody extends lib_1.Classes.GmailMessageClasses.GmailMessageGetPlainBody {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getPlainBody";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetPlainBody = GmailMessageGetPlainBody;
class GmailMessageGetTo extends lib_1.Classes.GmailMessageClasses.GmailMessageGetTo {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getTo";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetTo = GmailMessageGetTo;
class GmailMessageGetSubject extends lib_1.Classes.GmailMessageClasses.GmailMessageGetSubject {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getSubject";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetSubject = GmailMessageGetSubject;
class GmailMessageGetThread extends lib_1.Classes.GmailMessageClasses.GmailMessageGetThread {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getThread";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageGetThread = GmailMessageGetThread;
class GmailMessageReply extends lib_1.Classes.GmailMessageClasses.GmailMessageReply {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "reply";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageReply = GmailMessageReply;
class GmailMessageReplyAll extends lib_1.Classes.GmailMessageClasses.GmailMessageReplyAll {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "replyAll";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageReplyAll = GmailMessageReplyAll;
class GmailMessageStar extends lib_1.Classes.GmailMessageClasses.GmailMessageStar {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "star";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessageStar = GmailMessageStar;
class GmailMessagUnstar extends lib_1.Classes.GmailMessageClasses.GmailMessagUnstar {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "unstar";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailMessagUnstar = GmailMessagUnstar;
