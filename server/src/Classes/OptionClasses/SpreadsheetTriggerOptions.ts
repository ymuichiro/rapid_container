import { types } from "@babel/core";
import ReduxRunOptions from "../../../../hostings/app/interfaces/ReduxClasses/ReduxRunOptions";
import { OptionClasses, ROOT_FUNCTION_NAME } from "../../../../hostings/app/lib";
import { codeParseOnly } from "../../Lib/utils";
import { ServerRunOptionsClasses } from "../../type";

// on start up
export class OnStartUpTrigger extends OptionClasses.SpreadsheetTriggerOptions.OnStartUpTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(_: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。Spreadsheetを起動した際に実行するトリガーをセットします。",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_OPEN && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.SPREADSHEETS)){`,
        `  SpreadsheetApp.getActiveSpreadsheet() && ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onOpen().create()`,
        `  return;`,
        `}`,
        "",
      ].join("\n")
    );
  }
}

// on edit
export class OnEditTrigger extends OptionClasses.SpreadsheetTriggerOptions.OnEditTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(_: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。Spreadsheetが編集された際に実行するトリガーをセットします。",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_EDIT && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.SPREADSHEETS)){`,
        `  SpreadsheetApp.getActiveSpreadsheet() && ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onEdit().create()`,
        `  return;`,
        `}`,
        "",
      ].join("\n")
    );
  }
}

// on Submit
export class OnSubmitFormTrigger extends OptionClasses.SpreadsheetTriggerOptions.OnSubmitFormTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(_: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。フォームが投稿された際に実行するトリガーをセットします。",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_FORM_SUBMIT && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.SPREADSHEETS)){`,
        `  SpreadsheetApp.getActiveSpreadsheet() && ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onFormSubmit().create()`,
        `  return;`,
        `}`,
        "",
      ].join("\n")
    );
  }
}
