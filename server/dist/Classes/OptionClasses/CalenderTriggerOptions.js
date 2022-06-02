"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnUpdateTrigger = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
// on update
class OnUpdateTrigger extends lib_1.OptionClasses.CalenderTriggerOptions.OnUpdateTrigger {
    constructor() {
        super();
    }
    getAst(args) {
        return (0, utils_1.codeParseOnly)([
            "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。指定したカレンダーが編集された際に実行するトリガーをセットします。",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_EVENT_UPDATED && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CALENDAR)){`,
            `  ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").forUserCalendar("${args.frequency1Argument}").onEventUpdated().create();`,
            `  return;`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.OnUpdateTrigger = OnUpdateTrigger;
