"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificDateTrigger = exports.MonthlyTrigger = exports.WeeklyTrigger = exports.EveryDaysTrigger = exports.EveryHoursTrigger = exports.EveryMinutesTrigger = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
// every n minutes
class EveryMinutesTrigger extends lib_1.OptionClasses.TimeTriggerOptions.EveryMinutesTrigger {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.codeParseOnly)([
            "// 設定済みのトリガーがなければ指定間隔（hour）実行のトリガーをセットします",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
            `  ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").timeBased().everyMinutes(${args.frequency1Argument}).create();`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.EveryMinutesTrigger = EveryMinutesTrigger;
// every n hours
class EveryHoursTrigger extends lib_1.OptionClasses.TimeTriggerOptions.EveryHoursTrigger {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.codeParseOnly)([
            "// 設定済みのトリガーがなければ指定間隔（hour）実行のトリガーをセットします",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
            `  ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").timeBased().everyHours(${args.frequency1Argument}).create();`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.EveryHoursTrigger = EveryHoursTrigger;
// every days
class EveryDaysTrigger extends lib_1.OptionClasses.TimeTriggerOptions.EveryDaysTrigger {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.codeParseOnly)([
            "// 設定済みのトリガーがなければ毎日実行のトリガーをセットします",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
            `  ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").timeBased().atHour(${args.frequency1Argument}).everyDays(1).create();`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.EveryDaysTrigger = EveryDaysTrigger;
// every weeks
class WeeklyTrigger extends lib_1.OptionClasses.TimeTriggerOptions.WeeklyTrigger {
    constructor() {
        super();
    }
    getAst(args) {
        let weekDay = "";
        switch (args.frequency1Argument) {
            case "月":
                weekDay = "ScriptApp.WeekDay.MONDAY";
                break;
            case "火":
                weekDay = "ScriptApp.WeekDay.TUESDAY";
                break;
            case "水":
                weekDay = "ScriptApp.WeekDay.WEDNESDAY";
                break;
            case "木":
                weekDay = "ScriptApp.WeekDay.THURSDAY";
                break;
            case "金":
                weekDay = "ScriptApp.WeekDay.FRIDAY";
                break;
            case "土":
                weekDay = "ScriptApp.WeekDay.SATURDAY";
                break;
            default:
                weekDay = "ScriptApp.WeekDay.SUNDAY";
                break;
        }
        return (0, utils_1.codeParseOnly)([
            "// 設定済みのトリガーがなければ毎週実行のトリガーをセットします",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
            `  ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").timeBased().onWeekDay(${weekDay}).atHour(${args.frequency2Argument}).create()`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.WeeklyTrigger = WeeklyTrigger;
// every month
class MonthlyTrigger extends lib_1.OptionClasses.TimeTriggerOptions.MonthlyTrigger {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.codeParseOnly)([
            "// 設定済みのトリガーがなければ毎月実行のトリガーをセットします",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
            `  ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").timeBased().onMonthDay(${args.frequency1Argument}).atHour(${args.frequency2Argument}).create();`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.MonthlyTrigger = MonthlyTrigger;
// specific date
class SpecificDateTrigger extends lib_1.OptionClasses.TimeTriggerOptions.SpecificDateTrigger {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.codeParseOnly)([
            "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
            `  ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").timeBased().at(new Date("${args.frequency1Argument}")).create();`,
            `  return;`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.SpecificDateTrigger = SpecificDateTrigger;
