"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventGuestGetName = exports.CalendarEventGuestGetEmail = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class CalendarEventGuestGetEmail extends lib_1.Classes.CalendarEventGuestClasses.CalendarEventGuestGetEmail {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getEmail";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventGuestGetEmail = CalendarEventGuestGetEmail;
class CalendarEventGuestGetName extends lib_1.Classes.CalendarEventGuestClasses.CalendarEventGuestGetName {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getName";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventGuestGetName = CalendarEventGuestGetName;
