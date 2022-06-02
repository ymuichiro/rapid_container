"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnStartUpTrigger = void 0;
const lib_1 = require("../../../../hostings/app/lib");
const utils_1 = require("../../Lib/utils");
// on start up
class OnStartUpTrigger extends lib_1.OptionClasses.DocumentTriggerOptions.OnStartUpTrigger {
    constructor() {
        super();
    }
    getAst(_) {
        return (0, utils_1.codeParseOnly)([
            "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。ドキュメントを起動した際に実行するトリガーをセットします。",
            `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_OPEN && t.getHandlerFunction() === "${lib_1.ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.DOCUMENTS)){`,
            `  DocumentApp.getActiveDocument() && ScriptApp.newTrigger("${lib_1.ROOT_FUNCTION_NAME}").forDocument(DocumentApp.getActiveDocument()).onOpen().create()`,
            `  return;`,
            `}`,
            "",
        ].join("\n"));
    }
}
exports.OnStartUpTrigger = OnStartUpTrigger;
