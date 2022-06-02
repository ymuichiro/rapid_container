"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateToLocaleString = exports.DateGetDay = exports.DateGetSeconds = exports.DateGetMinutes = exports.DateGetHours = exports.DateGetDate = exports.DateGetMonth = exports.DateGetFullYear = exports.DateSetSeconds = exports.DateSetMinutes = exports.DateSetHour = exports.WeekSundayDate = exports.WeekSaturdayDate = exports.WeekFrisdayDate = exports.WeekThursdayDate = exports.WeekWednesdayDate = exports.WeekTuesdayDate = exports.WeekMondayDate = exports.MonthSpecificDate = exports.MonthLastDate = exports.MonthFirstDate = exports.YearLaterDate = exports.YearAgoDate = exports.MonthsLaterDate = exports.MonthsAgoDate = exports.WeeksLaterDate = exports.WeeksAgoDate = exports.DaysLaterDate = exports.DaysAgoDate = exports.SpecificDate = exports.TodayDate = void 0;
const parser_1 = require("@babel/parser");
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
class TodayDate extends lib_1.Classes.DateClasses.TodayDate {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.updateVariableDeclaration_NewInstance)(this.className, args);
    }
}
exports.TodayDate = TodayDate;
class SpecificDate extends lib_1.Classes.DateClasses.SpecificDate {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.updateVariableDeclaration_NewInstance)(this.className, args);
    }
}
exports.SpecificDate = SpecificDate;
class DaysAgoDate extends lib_1.Classes.DateClasses.DaysAgoDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setDate";
        const g = "getDate";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() - ${args.inputArgumentValue[0].value}))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.DaysAgoDate = DaysAgoDate;
class DaysLaterDate extends lib_1.Classes.DateClasses.DaysLaterDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setDate";
        const g = "getDate";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() + ${args.inputArgumentValue[0].value}))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.DaysLaterDate = DaysLaterDate;
class WeeksAgoDate extends lib_1.Classes.DateClasses.WeeksAgoDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setDate";
        const g = "getDate";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() - ${args.inputArgumentValue[0].value} * 7))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.WeeksAgoDate = WeeksAgoDate;
class WeeksLaterDate extends lib_1.Classes.DateClasses.WeeksLaterDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setDate";
        const g = "getDate";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() + ${args.inputArgumentValue[0].value} * 7))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.WeeksLaterDate = WeeksLaterDate;
class MonthsAgoDate extends lib_1.Classes.DateClasses.MonthsAgoDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setMonth";
        const g = "getMonth";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() - ${args.inputArgumentValue[0].value}))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.MonthsAgoDate = MonthsAgoDate;
class MonthsLaterDate extends lib_1.Classes.DateClasses.MonthsLaterDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setMonth";
        const g = "getMonth";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() + ${args.inputArgumentValue[0].value}))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.MonthsLaterDate = MonthsLaterDate;
class YearAgoDate extends lib_1.Classes.DateClasses.YearAgoDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setFullYear";
        const g = "getFullYear";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() - ${args.inputArgumentValue[0].value}))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.YearAgoDate = YearAgoDate;
class YearLaterDate extends lib_1.Classes.DateClasses.YearLaterDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setFullYear";
        const g = "getFullYear";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() + ${args.inputArgumentValue[0].value}))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.YearLaterDate = YearLaterDate;
class MonthFirstDate extends lib_1.Classes.DateClasses.MonthFirstDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setDate";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${s}(1))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.MonthFirstDate = MonthFirstDate;
class MonthLastDate extends lib_1.Classes.DateClasses.MonthLastDate {
    constructor() {
        super();
    }
    getAst(args) {
        const sm = "setMonth";
        const sd = "setDate";
        const gm = "getMonth";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${sd}(0))(new Date((m => m.${sm}(m.${gm}()+1))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))))`);
        return code.program.body[0];
    }
}
exports.MonthLastDate = MonthLastDate;
class MonthSpecificDate extends lib_1.Classes.DateClasses.MonthSpecificDate {
    constructor() {
        super();
    }
    getAst(args) {
        const sd = "setDate";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${sd}(${args.inputArgumentValue[0]}))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)}))`);
        return code.program.body[0];
    }
}
exports.MonthSpecificDate = MonthSpecificDate;
class WeekMondayDate extends lib_1.Classes.DateClasses.WeekMondayDate {
    constructor() {
        super();
    }
    getAst(args) {
        const sd = "setDate";
        const gd = "getDate";
        const gdy = "getDay";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${sd}(d.${gd}() + ${0}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)})))`);
        return code.program.body[0];
    }
}
exports.WeekMondayDate = WeekMondayDate;
class WeekTuesdayDate extends lib_1.Classes.DateClasses.WeekTuesdayDate {
    constructor() {
        super();
    }
    getAst(args) {
        const sd = "setDate";
        const gd = "getDate";
        const gdy = "getDay";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${sd}(d.${gd}() + ${1}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)})))`);
        return code.program.body[0];
    }
}
exports.WeekTuesdayDate = WeekTuesdayDate;
class WeekWednesdayDate extends lib_1.Classes.DateClasses.WeekWednesdayDate {
    constructor() {
        super();
    }
    getAst(args) {
        const sd = "setDate";
        const gd = "getDate";
        const gdy = "getDay";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${sd}(d.${gd}() + ${2}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)})))`);
        return code.program.body[0];
    }
}
exports.WeekWednesdayDate = WeekWednesdayDate;
class WeekThursdayDate extends lib_1.Classes.DateClasses.WeekThursdayDate {
    constructor() {
        super();
    }
    getAst(args) {
        const sd = "setDate";
        const gd = "getDate";
        const gdy = "getDay";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${sd}(d.${gd}() + ${3}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)})))`);
        return code.program.body[0];
    }
}
exports.WeekThursdayDate = WeekThursdayDate;
class WeekFrisdayDate extends lib_1.Classes.DateClasses.WeekFrisdayDate {
    constructor() {
        super();
    }
    getAst(args) {
        const sd = "setDate";
        const gd = "getDate";
        const gdy = "getDay";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${sd}(d.${gd}() + ${4}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)})))`);
        return code.program.body[0];
    }
}
exports.WeekFrisdayDate = WeekFrisdayDate;
class WeekSaturdayDate extends lib_1.Classes.DateClasses.WeekSaturdayDate {
    constructor() {
        super();
    }
    getAst(args) {
        const sd = "setDate";
        const gd = "getDate";
        const gdy = "getDay";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${sd}(d.${gd}() + ${5}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)})))`);
        return code.program.body[0];
    }
}
exports.WeekSaturdayDate = WeekSaturdayDate;
class WeekSundayDate extends lib_1.Classes.DateClasses.WeekSundayDate {
    constructor() {
        super();
    }
    getAst(args) {
        const sd = "setDate";
        const gd = "getDate";
        const gdy = "getDay";
        const code = (0, parser_1.parse)(`const ${(0, utils_1.removeVariableSymbol)(args.outputVariableName)} = new Date((d => d.${sd}(d.${gd}() + ${6}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${(0, utils_1.removeVariableSymbol)(args.inputBaseValue)})))`);
        return code.program.body[0];
    }
}
exports.WeekSundayDate = WeekSundayDate;
class DateSetHour extends lib_1.Classes.DateClasses.DateSetHour {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setHours";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateSetHour = DateSetHour;
class DateSetMinutes extends lib_1.Classes.DateClasses.DateSetMinutes {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setMinutes";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateSetMinutes = DateSetMinutes;
class DateSetSeconds extends lib_1.Classes.DateClasses.DateSetSeconds {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "setSeconds";
        return (0, utils_1.updateExpressionStatement_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateSetSeconds = DateSetSeconds;
class DateGetFullYear extends lib_1.Classes.DateClasses.DateGetFullYear {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "getFullYear";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateGetFullYear = DateGetFullYear;
class DateGetMonth extends lib_1.Classes.DateClasses.DateGetMonth {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "getMonth";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateGetMonth = DateGetMonth;
class DateGetDate extends lib_1.Classes.DateClasses.DateGetDate {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "getDate";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateGetDate = DateGetDate;
class DateGetHours extends lib_1.Classes.DateClasses.DateGetHours {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "getHours";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateGetHours = DateGetHours;
class DateGetMinutes extends lib_1.Classes.DateClasses.DateGetMinutes {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "getMinutes";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateGetMinutes = DateGetMinutes;
class DateGetSeconds extends lib_1.Classes.DateClasses.DateGetSeconds {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "getSeconds";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateGetSeconds = DateGetSeconds;
class DateGetDay extends lib_1.Classes.DateClasses.DateGetDay {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "getDay";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateGetDay = DateGetDay;
class DateToLocaleString extends lib_1.Classes.DateClasses.DateToLocaleString {
    constructor() {
        super();
    }
    getAst(args) {
        const s = "toLocaleDateString";
        return (0, utils_1.updateVariableDeclaration_ClassMethod)(args.inputBaseValue, s, args);
    }
}
exports.DateToLocaleString = DateToLocaleString;
