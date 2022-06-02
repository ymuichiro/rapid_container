import { parse } from "@babel/parser";
import { Statement } from "@babel/types";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { Classes } from "../../../../hostings/app/lib";
import {
  updateVariableDeclaration_NewInstance,
  removeVariableSymbol,
  updateVariableDeclaration_ClassMethod,
  updateExpressionStatement_ClassMethod,
} from "../../Lib/utils";
import { ServerClasses } from "../../type";

type methods = keyof Date;

export class TodayDate extends Classes.DateClasses.TodayDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    return updateVariableDeclaration_NewInstance(this.className, args);
  }
}

export class SpecificDate extends Classes.DateClasses.SpecificDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    return updateVariableDeclaration_NewInstance(this.className, args);
  }
}

export class DaysAgoDate extends Classes.DateClasses.DaysAgoDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setDate";
    const g: methods = "getDate";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() - ${
        args.inputArgumentValue[0].value
      }))(${removeVariableSymbol(args.inputBaseValue)}))`
    );
    return code.program.body[0];
  }
}

export class DaysLaterDate extends Classes.DateClasses.DaysLaterDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setDate";
    const g: methods = "getDate";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() + ${
        args.inputArgumentValue[0].value
      }))(${removeVariableSymbol(args.inputBaseValue)}))`
    );
    return code.program.body[0];
  }
}

export class WeeksAgoDate extends Classes.DateClasses.WeeksAgoDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setDate";
    const g: methods = "getDate";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() - ${
        args.inputArgumentValue[0].value
      } * 7))(${removeVariableSymbol(args.inputBaseValue)}))`
    );
    return code.program.body[0];
  }
}

export class WeeksLaterDate extends Classes.DateClasses.WeeksLaterDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setDate";
    const g: methods = "getDate";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() + ${
        args.inputArgumentValue[0].value
      } * 7))(${removeVariableSymbol(args.inputBaseValue)}))`
    );
    return code.program.body[0];
  }
}

export class MonthsAgoDate extends Classes.DateClasses.MonthsAgoDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setMonth";
    const g: methods = "getMonth";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() - ${
        args.inputArgumentValue[0].value
      }))(${removeVariableSymbol(args.inputBaseValue)}))`
    );
    return code.program.body[0];
  }
}

export class MonthsLaterDate extends Classes.DateClasses.MonthsLaterDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setMonth";
    const g: methods = "getMonth";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() + ${
        args.inputArgumentValue[0].value
      }))(${removeVariableSymbol(args.inputBaseValue)}))`
    );
    return code.program.body[0];
  }
}

export class YearAgoDate extends Classes.DateClasses.YearAgoDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setFullYear";
    const g: methods = "getFullYear";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() - ${
        args.inputArgumentValue[0].value
      }))(${removeVariableSymbol(args.inputBaseValue)}))`
    );
    return code.program.body[0];
  }
}

export class YearLaterDate extends Classes.DateClasses.YearLaterDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setFullYear";
    const g: methods = "getFullYear";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${s}(d.${g}() + ${
        args.inputArgumentValue[0].value
      }))(${removeVariableSymbol(args.inputBaseValue)}))`
    );
    return code.program.body[0];
  }
}

export class MonthFirstDate extends Classes.DateClasses.MonthFirstDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setDate";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${s}(1))(${removeVariableSymbol(
        args.inputBaseValue
      )}))`
    );
    return code.program.body[0];
  }
}

export class MonthLastDate extends Classes.DateClasses.MonthLastDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const sm: methods = "setMonth";
    const sd: methods = "setDate";
    const gm: methods = "getMonth";
    const code = parse(
      `const ${removeVariableSymbol(
        args.outputVariableName
      )} = new Date((d => d.${sd}(0))(new Date((m => m.${sm}(m.${gm}()+1))(${removeVariableSymbol(
        args.inputBaseValue
      )}))))`
    );
    return code.program.body[0];
  }
}

export class MonthSpecificDate extends Classes.DateClasses.MonthSpecificDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const sd: methods = "setDate";
    const code = parse(
      `const ${removeVariableSymbol(args.outputVariableName)} = new Date((d => d.${sd}(${
        args.inputArgumentValue[0]
      }))(${removeVariableSymbol(args.inputBaseValue)}))`
    );
    return code.program.body[0];
  }
}

export class WeekMondayDate extends Classes.DateClasses.WeekMondayDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const sd: methods = "setDate";
    const gd: methods = "getDate";
    const gdy: methods = "getDay";
    const code = parse(
      `const ${removeVariableSymbol(
        args.outputVariableName
      )} = new Date((d => d.${sd}(d.${gd}() + ${0}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${removeVariableSymbol(
        args.inputBaseValue
      )})))`
    );
    return code.program.body[0];
  }
}

export class WeekTuesdayDate extends Classes.DateClasses.WeekTuesdayDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const sd: methods = "setDate";
    const gd: methods = "getDate";
    const gdy: methods = "getDay";
    const code = parse(
      `const ${removeVariableSymbol(
        args.outputVariableName
      )} = new Date((d => d.${sd}(d.${gd}() + ${1}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${removeVariableSymbol(
        args.inputBaseValue
      )})))`
    );
    return code.program.body[0];
  }
}

export class WeekWednesdayDate extends Classes.DateClasses.WeekWednesdayDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const sd: methods = "setDate";
    const gd: methods = "getDate";
    const gdy: methods = "getDay";
    const code = parse(
      `const ${removeVariableSymbol(
        args.outputVariableName
      )} = new Date((d => d.${sd}(d.${gd}() + ${2}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${removeVariableSymbol(
        args.inputBaseValue
      )})))`
    );
    return code.program.body[0];
  }
}

export class WeekThursdayDate extends Classes.DateClasses.WeekThursdayDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const sd: methods = "setDate";
    const gd: methods = "getDate";
    const gdy: methods = "getDay";
    const code = parse(
      `const ${removeVariableSymbol(
        args.outputVariableName
      )} = new Date((d => d.${sd}(d.${gd}() + ${3}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${removeVariableSymbol(
        args.inputBaseValue
      )})))`
    );
    return code.program.body[0];
  }
}

export class WeekFrisdayDate extends Classes.DateClasses.WeekFrisdayDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const sd: methods = "setDate";
    const gd: methods = "getDate";
    const gdy: methods = "getDay";
    const code = parse(
      `const ${removeVariableSymbol(
        args.outputVariableName
      )} = new Date((d => d.${sd}(d.${gd}() + ${4}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${removeVariableSymbol(
        args.inputBaseValue
      )})))`
    );
    return code.program.body[0];
  }
}

export class WeekSaturdayDate extends Classes.DateClasses.WeekSaturdayDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const sd: methods = "setDate";
    const gd: methods = "getDate";
    const gdy: methods = "getDay";
    const code = parse(
      `const ${removeVariableSymbol(
        args.outputVariableName
      )} = new Date((d => d.${sd}(d.${gd}() + ${5}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${removeVariableSymbol(
        args.inputBaseValue
      )})))`
    );
    return code.program.body[0];
  }
}

export class WeekSundayDate extends Classes.DateClasses.WeekSundayDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const sd: methods = "setDate";
    const gd: methods = "getDate";
    const gdy: methods = "getDay";
    const code = parse(
      `const ${removeVariableSymbol(
        args.outputVariableName
      )} = new Date((d => d.${sd}(d.${gd}() + ${6}))((d => new Date(d.${sd}((d.${gd}() - d.${gdy}()) + 1)))(${removeVariableSymbol(
        args.inputBaseValue
      )})))`
    );
    return code.program.body[0];
  }
}

export class DateSetHour extends Classes.DateClasses.DateSetHour implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setHours";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateSetMinutes extends Classes.DateClasses.DateSetMinutes implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setMinutes";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateSetSeconds extends Classes.DateClasses.DateSetSeconds implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "setSeconds";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateGetFullYear extends Classes.DateClasses.DateGetFullYear implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "getFullYear";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateGetMonth extends Classes.DateClasses.DateGetMonth implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "getMonth";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateGetDate extends Classes.DateClasses.DateGetDate implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "getDate";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateGetHours extends Classes.DateClasses.DateGetHours implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "getHours";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateGetMinutes extends Classes.DateClasses.DateGetMinutes implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "getMinutes";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateGetSeconds extends Classes.DateClasses.DateGetSeconds implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "getSeconds";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateGetDay extends Classes.DateClasses.DateGetDay implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "getDay";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, s, args);
  }
}

export class DateToLocaleString extends Classes.DateClasses.DateToLocaleString implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const s: methods = "toLocaleDateString";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, s, args);
  }
}
