"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailDraftAddToThreads = exports.GmailDraftAddToThread = exports.GmailLabelGetThreads = exports.GmailLabelGetName = exports.GmailLabelDeleteLabel = exports.GmailLabelGetUserLabelByName = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class GmailLabelGetUserLabelByName extends lib_1.Classes.GmailLabelClasses.GmailLabelGetUserLabelByName {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getUserLabelByName";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.GmailLabelGetUserLabelByName = GmailLabelGetUserLabelByName;
class GmailLabelDeleteLabel extends lib_1.Classes.GmailLabelClasses.GmailLabelDeleteLabel {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "deleteLabel";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailLabelDeleteLabel = GmailLabelDeleteLabel;
class GmailLabelGetName extends lib_1.Classes.GmailLabelClasses.GmailLabelGetName {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getName";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailLabelGetName = GmailLabelGetName;
class GmailLabelGetThreads extends lib_1.Classes.GmailLabelClasses.GmailLabelGetThreads {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getThreads";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailLabelGetThreads = GmailLabelGetThreads;
class GmailDraftAddToThread extends lib_1.Classes.GmailLabelClasses.GmailDraftAddToThread {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "addToThread";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailDraftAddToThread = GmailDraftAddToThread;
class GmailDraftAddToThreads extends lib_1.Classes.GmailLabelClasses.GmailDraftAddToThreads {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "addToThreads";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.GmailDraftAddToThreads = GmailDraftAddToThreads;
