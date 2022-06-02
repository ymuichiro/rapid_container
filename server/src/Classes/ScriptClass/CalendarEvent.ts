import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import { updateExpressionStatement_ClassMethod, updateVariableDeclaration_ClassMethod } from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof GoogleAppsScript.Calendar.CalendarEvent;

export class CalendarEventAddGuest extends Classes.CalendarEventClasses.CalendarEventAddGuest implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "addGuest";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventDelete extends Classes.CalendarEventClasses.CalendarEventDelete implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "deleteEvent";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventGetGuestList extends Classes.CalendarEventClasses.CalendarEventGetGuestList
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getGuestList";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventGetDateCreated extends Classes.CalendarEventClasses.CalendarEventGetDateCreated
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getDateCreated";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventGetDescription extends Classes.CalendarEventClasses.CalendarEventGetDescription
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getDescription";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventGetId extends Classes.CalendarEventClasses.CalendarEventGetId implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getId";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventGetLastUpdated extends Classes.CalendarEventClasses.CalendarEventGetLastUpdated
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getLastUpdated";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventGetLocation extends Classes.CalendarEventClasses.CalendarEventGetLocation
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getLocation";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventGetTitle extends Classes.CalendarEventClasses.CalendarEventGetTitle implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "getTitle";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventRemoveGuest extends Classes.CalendarEventClasses.CalendarEventRemoveGuest
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "removeGuest";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventSetDescription extends Classes.CalendarEventClasses.CalendarEventSetDescription
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "setDescription";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventSetLocation extends Classes.CalendarEventClasses.CalendarEventSetLocation
  implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "setLocation";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventSetTime extends Classes.CalendarEventClasses.CalendarEventSetTime implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "setTime";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class CalendarEventSetTitle extends Classes.CalendarEventClasses.CalendarEventSetTitle implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "setTitle";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}
