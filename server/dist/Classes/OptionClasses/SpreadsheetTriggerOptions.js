"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnSubmitFormTrigger = exports.OnEditTrigger = exports.OnStartUpTrigger = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
// on start up
class OnStartUpTrigger extends lib_1.OptionClasses.SpreadsheetTriggerOptions.OnStartUpTrigger {
    constructor() {
        super();
    }
    getAst(_) {
        return (0, utils_1.codeParseOnly)([
            "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。Spreadsheetを起動した際に実行するトリガーをセットします。",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_OPEN && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.SPREADSHEETS)){`,
            `  SpreadsheetApp.getActiveSpreadsheet() && ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onOpen().create()`,
            `  return;`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.OnStartUpTrigger = OnStartUpTrigger;
// on edit
class OnEditTrigger extends lib_1.OptionClasses.SpreadsheetTriggerOptions.OnEditTrigger {
    constructor() {
        super();
    }
    getAst(_) {
        return (0, utils_1.codeParseOnly)([
            "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。Spreadsheetが編集された際に実行するトリガーをセットします。",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_EDIT && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.SPREADSHEETS)){`,
            `  SpreadsheetApp.getActiveSpreadsheet() && ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onEdit().create()`,
            `  return;`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.OnEditTrigger = OnEditTrigger;
// on Submit
class OnSubmitFormTrigger extends lib_1.OptionClasses.SpreadsheetTriggerOptions.OnSubmitFormTrigger {
    constructor() {
        super();
    }
    getAst(_) {
        return (0, utils_1.codeParseOnly)([
            "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。フォームが投稿された際に実行するトリガーをセットします。",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_FORM_SUBMIT && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.SPREADSHEETS)){`,
            `  SpreadsheetApp.getActiveSpreadsheet() && ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onFormSubmit().create()`,
            `  return;`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.OnSubmitFormTrigger = OnSubmitFormTrigger;
