"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailDraftUpdate = exports.GmailDraftSend = exports.GmailDraftGetId = exports.GmailDraftDeleteDraft = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class GmailDraftDeleteDraft extends lib_1.Classes.GmailDraftClasses.GmailDraftDeleteDraft {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "deleteDraft";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailDraftDeleteDraft = GmailDraftDeleteDraft;
class GmailDraftGetId extends lib_1.Classes.GmailDraftClasses.GmailDraftGetId {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getId";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailDraftGetId = GmailDraftGetId;
class GmailDraftSend extends lib_1.Classes.GmailDraftClasses.GmailDraftSend {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "send";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailDraftSend = GmailDraftSend;
class GmailDraftUpdate extends lib_1.Classes.GmailDraftClasses.GmailDraftUpdate {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "update";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailDraftUpdate = GmailDraftUpdate;
