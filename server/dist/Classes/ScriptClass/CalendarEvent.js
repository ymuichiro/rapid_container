"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventSetTitle = exports.CalendarEventSetTime = exports.CalendarEventSetLocation = exports.CalendarEventSetDescription = exports.CalendarEventRemoveGuest = exports.CalendarEventGetTitle = exports.CalendarEventGetLocation = exports.CalendarEventGetLastUpdated = exports.CalendarEventGetId = exports.CalendarEventGetDescription = exports.CalendarEventGetDateCreated = exports.CalendarEventGetGuestList = exports.CalendarEventDelete = exports.CalendarEventAddGuest = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class CalendarEventAddGuest extends lib_1.Classes.CalendarEventClasses.CalendarEventAddGuest {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "addGuest";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventAddGuest = CalendarEventAddGuest;
class CalendarEventDelete extends lib_1.Classes.CalendarEventClasses.CalendarEventDelete {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "deleteEvent";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventDelete = CalendarEventDelete;
class CalendarEventGetGuestList extends lib_1.Classes.CalendarEventClasses.CalendarEventGetGuestList {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getGuestList";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventGetGuestList = CalendarEventGetGuestList;
class CalendarEventGetDateCreated extends lib_1.Classes.CalendarEventClasses.CalendarEventGetDateCreated {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getDateCreated";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventGetDateCreated = CalendarEventGetDateCreated;
class CalendarEventGetDescription extends lib_1.Classes.CalendarEventClasses.CalendarEventGetDescription {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getDescription";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventGetDescription = CalendarEventGetDescription;
class CalendarEventGetId extends lib_1.Classes.CalendarEventClasses.CalendarEventGetId {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getId";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventGetId = CalendarEventGetId;
class CalendarEventGetLastUpdated extends lib_1.Classes.CalendarEventClasses.CalendarEventGetLastUpdated {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getLastUpdated";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventGetLastUpdated = CalendarEventGetLastUpdated;
class CalendarEventGetLocation extends lib_1.Classes.CalendarEventClasses.CalendarEventGetLocation {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getLocation";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventGetLocation = CalendarEventGetLocation;
class CalendarEventGetTitle extends lib_1.Classes.CalendarEventClasses.CalendarEventGetTitle {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getTitle";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventGetTitle = CalendarEventGetTitle;
class CalendarEventRemoveGuest extends lib_1.Classes.CalendarEventClasses.CalendarEventRemoveGuest {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "removeGuest";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventRemoveGuest = CalendarEventRemoveGuest;
class CalendarEventSetDescription extends lib_1.Classes.CalendarEventClasses.CalendarEventSetDescription {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "setDescription";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventSetDescription = CalendarEventSetDescription;
class CalendarEventSetLocation extends lib_1.Classes.CalendarEventClasses.CalendarEventSetLocation {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "setLocation";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventSetLocation = CalendarEventSetLocation;
class CalendarEventSetTime extends lib_1.Classes.CalendarEventClasses.CalendarEventSetTime {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "setTime";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventSetTime = CalendarEventSetTime;
class CalendarEventSetTitle extends lib_1.Classes.CalendarEventClasses.CalendarEventSetTitle {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "setTitle";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarEventSetTitle = CalendarEventSetTitle;
