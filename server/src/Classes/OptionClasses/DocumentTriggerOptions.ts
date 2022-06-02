import { types } from "@babel/core";
import ReduxRunOptions from "../../../../hostings/app/interfaces/ReduxClasses/ReduxRunOptions";
import { OptionClasses, ROOT_FUNCTION_NAME } from "../../../../hostings/app/lib";
import { codeParseOnly } from "../../Lib/utils";
import { ServerRunOptionsClasses } from "../../type";

// on start up
export class OnStartUpTrigger extends OptionClasses.DocumentTriggerOptions.OnStartUpTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(_: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。ドキュメントを起動した際に実行するトリガーをセットします。",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_OPEN && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.DOCUMENTS)){`,
        `  DocumentApp.getActiveDocument() && ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").forDocument(DocumentApp.getActiveDocument()).onOpen().create()`,
        `  return;`,
        `}`,
        "",
      ].join("\n")
    );
  }
}
