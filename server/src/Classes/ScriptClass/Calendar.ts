import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof typeof CalendarApp;

export class CalendarOpenByID extends Classes.CalendarClasses.CalendarOpenByID implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getCalendarById";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class CalendarOpenDefault extends Classes.CalendarClasses.CalendarOpenDefault implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getDefaultCalendar";
    return updateVariableDeclaration_ClassMethod(this.className, m, args);
  }
}

export class CalendarCreateAllDayEvent extends Classes.CalendarClasses.CalendarCreateAllDayEvent
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "createAllDayEvent";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarCreateEvent extends Classes.CalendarClasses.CalendarCreateEvent implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "createEvent";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarGetEventById extends Classes.CalendarClasses.CalendarGetEventById implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getEventById";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarGetEvents extends Classes.CalendarClasses.CalendarGetEvents implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getEvents";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarGetEventsForDay extends Classes.CalendarClasses.CalendarGetEventsForDay implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getEventsForDay";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}
