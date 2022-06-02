"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailAttachmentSetName = exports.GmailAttachmentGetSize = exports.GmailAttachmentGetName = exports.GmailAttachmentGetDataAsString = exports.GmailAttachmentGetContentType = exports.GmailAttachmentGetAs = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class GmailAttachmentGetAs extends lib_1.Classes.GmailAttachmentClasses.GmailAttachmentGetAs {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getAs";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailAttachmentGetAs = GmailAttachmentGetAs;
class GmailAttachmentGetContentType extends lib_1.Classes.GmailAttachmentClasses.GmailAttachmentGetContentType {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getContentType";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailAttachmentGetContentType = GmailAttachmentGetContentType;
class GmailAttachmentGetDataAsString extends lib_1.Classes.GmailAttachmentClasses.GmailAttachmentGetDataAsString {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getDataAsString";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailAttachmentGetDataAsString = GmailAttachmentGetDataAsString;
class GmailAttachmentGetName extends lib_1.Classes.GmailAttachmentClasses.GmailAttachmentGetName {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getName";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailAttachmentGetName = GmailAttachmentGetName;
class GmailAttachmentGetSize extends lib_1.Classes.GmailAttachmentClasses.GmailAttachmentGetSize {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getSize";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailAttachmentGetSize = GmailAttachmentGetSize;
class GmailAttachmentSetName extends lib_1.Classes.GmailAttachmentClasses.GmailAttachmentSetName {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "setName";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailAttachmentSetName = GmailAttachmentSetName;
