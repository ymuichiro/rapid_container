"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnSubmitFormTrigger = exports.OnStartUpTrigger = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
// on startup
class OnStartUpTrigger extends lib_1.OptionClasses.FormTriggerOptions.OnStartUpTrigger {
    constructor() {
        super();
    }
    getAst(_) {
        return (0, utils_1.codeParseOnly)([
            "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。フォームを起動した際に実行するトリガーをセットします。",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_OPEN && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.FORMS)){`,
            `  FormApp.getActiveForm() && ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").forForm(FormApp.getActiveForm()).onOpen().create();`,
            `  return;`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.OnStartUpTrigger = OnStartUpTrigger;
// on submit
class OnSubmitFormTrigger extends lib_1.OptionClasses.FormTriggerOptions.OnSubmitFormTrigger {
    constructor() {
        super();
    }
    getAst(_) {
        return (0, utils_1.codeParseOnly)([
            "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。フォームに投稿された際に実行するトリガーをセットします。",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_FORM_SUBMIT && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.FORMS)){`,
            `  FormApp.getActiveForm() && ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").forForm(FormApp.getActiveForm()).onFormSubmit().create();`,
            `  return;`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.OnSubmitFormTrigger = OnSubmitFormTrigger;
