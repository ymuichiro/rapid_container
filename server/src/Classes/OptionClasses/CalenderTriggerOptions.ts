import { types } from "@babel/core";
import ReduxRunOptions from "../../../../hostings/app/interfaces/ReduxClasses/ReduxRunOptions";
import { OptionClasses, ROOT_FUNCTION_NAME } from "../../../../hostings/app/lib";
import { codeParseOnly } from "../../Lib/utils";
import { ServerRunOptionsClasses } from "../../type";

// on update
export class OnUpdateTrigger extends OptionClasses.CalenderTriggerOptions.OnUpdateTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(args: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います。指定したカレンダーが編集された際に実行するトリガーをセットします。",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.ON_EVENT_UPDATED && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CALENDAR)){`,
        `  ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").forUserCalendar("${args.frequency1Argument}").onEventUpdated().create();`,
        `  return;`,
        `}`,
        "",
      ].join("\n")
    );
  }
}
