import { types } from "@babel/core";
import ReduxRunOptions from "../../../../hostings/app/interfaces/ReduxClasses/ReduxRunOptions";
import { OptionClasses, ROOT_FUNCTION_NAME } from "../../../../hostings/app/lib";
import { codeParseOnly } from "../../Lib/utils";
import { ServerRunOptionsClasses } from "../../type";

// on startup
export class OnStartUpTrigger extends OptionClasses.FormTriggerOptions.OnStartUpTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(_: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。フォームを起動した際に実行するトリガーをセットします。",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_OPEN && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.FORMS)){`,
        `  FormApp.getActiveForm() && ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").forForm(FormApp.getActiveForm()).onOpen().create();`,
        `  return;`,
        `}`,
        "",
      ].join("\n")
    );
  }
}

// on submit
export class OnSubmitFormTrigger extends OptionClasses.FormTriggerOptions.OnSubmitFormTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(_: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。フォームに投稿された際に実行するトリガーをセットします。",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_FORM_SUBMIT && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.FORMS)){`,
        `  FormApp.getActiveForm() && ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").forForm(FormApp.getActiveForm()).onFormSubmit().create();`,
        `  return;`,
        `}`,
        "",
      ].join("\n")
    );
  }
}
