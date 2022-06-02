"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarGetEventsForDay = exports.CalendarGetEvents = exports.CalendarGetEventById = exports.CalendarCreateEvent = exports.CalendarCreateAllDayEvent = exports.CalendarOpenDefault = exports.CalendarOpenByID = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class CalendarOpenByID extends lib_1.Classes.CalendarClasses.CalendarOpenByID {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getCalendarById";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.CalendarOpenByID = CalendarOpenByID;
class CalendarOpenDefault extends lib_1.Classes.CalendarClasses.CalendarOpenDefault {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getDefaultCalendar";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(this.className, m, args);
    }
}
exports.CalendarOpenDefault = CalendarOpenDefault;
class CalendarCreateAllDayEvent extends lib_1.Classes.CalendarClasses.CalendarCreateAllDayEvent {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "createAllDayEvent";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarCreateAllDayEvent = CalendarCreateAllDayEvent;
class CalendarCreateEvent extends lib_1.Classes.CalendarClasses.CalendarCreateEvent {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "createEvent";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarCreateEvent = CalendarCreateEvent;
class CalendarGetEventById extends lib_1.Classes.CalendarClasses.CalendarGetEventById {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getEventById";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarGetEventById = CalendarGetEventById;
class CalendarGetEvents extends lib_1.Classes.CalendarClasses.CalendarGetEvents {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getEvents";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarGetEvents = CalendarGetEvents;
class CalendarGetEventsForDay extends lib_1.Classes.CalendarClasses.CalendarGetEventsForDay {
    constructor() {
        super();
    }
    getAst(args) {
        const m = "getEventsForDay";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, m, args);
    }
}
exports.CalendarGetEventsForDay = CalendarGetEventsForDay;
