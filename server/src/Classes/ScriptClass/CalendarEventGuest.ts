import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof GoogleAppsScript.Calendar.EventGuest;

export class CalendarEventGuestGetEmail extends Classes.CalendarEventGuestClasses.CalendarEventGuestGetEmail
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getEmail";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventGuestGetName extends Classes.CalendarEventGuestClasses.CalendarEventGuestGetName
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getName";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}
