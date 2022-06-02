import { types } from "@babel/core";
import { ServerRunOptionsClasses } from "../../type";
import ReduxRunOptions from "../../../../hostings/app/interfaces/ReduxClasses/ReduxRunOptions";
import { OptionClasses, ROOT_FUNCTION_NAME } from "../../../../hostings/app/lib";
import { codeParseOnly } from "../../Lib/utils";

// every n minutes
export class EveryMinutesTrigger extends OptionClasses.TimeTriggerOptions.EveryMinutesTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(args: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 設定済みのトリガーがなければ指定間隔（hour）実行のトリガーをセットします",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
        `  ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").timeBased().everyMinutes(${args.frequency1Argument}).create();`,
        `}`,
        "",
      ].join("\n")
    );
  }
}

// every n hours
export class EveryHoursTrigger extends OptionClasses.TimeTriggerOptions.EveryHoursTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(args: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 設定済みのトリガーがなければ指定間隔（hour）実行のトリガーをセットします",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
        `  ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").timeBased().everyHours(${args.frequency1Argument}).create();`,
        `}`,
        "",
      ].join("\n")
    );
  }
}

// every days
export class EveryDaysTrigger extends OptionClasses.TimeTriggerOptions.EveryDaysTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(args: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 設定済みのトリガーがなければ毎日実行のトリガーをセットします",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
        `  ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").timeBased().atHour(${args.frequency1Argument}).everyDays(1).create();`,
        `}`,
        "",
      ].join("\n")
    );
  }
}

// every weeks
export class WeeklyTrigger extends OptionClasses.TimeTriggerOptions.WeeklyTrigger implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(args: ReduxRunOptions): types.Statement {
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
    return codeParseOnly(
      [
        "// 設定済みのトリガーがなければ毎週実行のトリガーをセットします",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
        `  ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").timeBased().onWeekDay(${weekDay}).atHour(${args.frequency2Argument}).create()`,
        `}`,
        "",
      ].join("\n")
    );
  }
}

// every month
export class MonthlyTrigger extends OptionClasses.TimeTriggerOptions.MonthlyTrigger implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(args: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 設定済みのトリガーがなければ毎月実行のトリガーをセットします",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
        `  ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").timeBased().onMonthDay(${args.frequency1Argument}).atHour(${args.frequency2Argument}).create();`,
        `}`,
        "",
      ].join("\n")
    );
  }
}

// specific date
export class SpecificDateTrigger extends OptionClasses.TimeTriggerOptions.SpecificDateTrigger
  implements ServerRunOptionsClasses {
  constructor() {
    super();
  }
  public getAst(args: ReduxRunOptions): types.Statement {
    return codeParseOnly(
      [
        "// 一度目の実行でトリガーを設定しトリガーでの実行時に本体の処理を行います",
        `if(!ScriptApp.getProjectTriggers().some(t => t.getEventType() === ScriptApp.EventType.CLOCK && t.getHandlerFunction() === "${ROOT_FUNCTION_NAME}" && t.getTriggerSource() === ScriptApp.TriggerSource.CLOCK)){`,
        `  ScriptApp.newTrigger("${ROOT_FUNCTION_NAME}").timeBased().at(new Date("${args.frequency1Argument}")).create();`,
        `  return;`,
        `}`,
        "",
      ].join("\n")
    );
  }
}
