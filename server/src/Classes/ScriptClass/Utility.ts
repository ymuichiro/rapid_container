import { Statement } from "@babel/types";
import { Classes } from "../../../../hostings/app/lib";
import { ServerClasses } from "../../type";
import { codeParseOnly, removeVariableSymbol, updateExpressionStatement_ClassMethod } from "../../Lib/utils";
import { types } from "@babel/core";
import { parse } from "@babel/parser";
import { SystemClasses } from "..";
import { AstControler } from "../../Lib/AstControler";
import { isUndefined } from "../../../../hostings/app/lib/TextParser";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { InputClassesDataRoot } from "../../../../hostings/app/interfaces/ReduxClasses";

/*

Javascriptの各基本処理群を定義

*/

type consoleMethod = keyof typeof console;

/*

Console

*/

export class ConsoleLog extends Classes.UtilityClasses.ConsoleLog implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: consoleMethod = "log";
    return updateExpressionStatement_ClassMethod(this.className, m, args);
  }
}

export class ConsoleError extends Classes.UtilityClasses.ConsoleError implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: consoleMethod = "error";
    return updateExpressionStatement_ClassMethod(this.className, m, args);
  }
}

export class IfStatement extends Classes.UtilityClasses.IfStatement implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData, rootEntities: InputClassesDataRoot): Statement {
    const childStatements: types.Statement[] = rootEntities[args.childGroupId].map((e) => {
      const classesFilter = SystemClasses.find(
        (clsx) => clsx.categoryId === e.categoryId && clsx.methodId === e.methodId
      );
      if (isUndefined(classesFilter)) {
        throw new Error(`system error. unknown class property: ${e.categoryId} ${e.methodId}`);
      } else {
        if (classesFilter.hasNest) {
          return classesFilter.getAst(e, rootEntities);
        } else {
          return classesFilter.getAst(e) as types.Statement;
        }
      }
    });

    return new AstControler(
      parse(
        `if(${removeVariableSymbol(args.inputArgumentValue[0].value)}${removeVariableSymbol(
          args.inputArgumentValue[1].value
        )}${removeVariableSymbol(args.inputArgumentValue[2].value)}){}`
      )
    )
      .insertStatemtnsToIfStatement(childStatements)
      .getFile().program.body[0];
  }
}

export class DeleteAllTrigger extends Classes.UtilityClasses.DeleteAllTrigger implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(_: InputClassesData): Statement {
    return codeParseOnly(
      `${this.className}.getProjectTriggers().forEach(trigger => ScriptApp.deleteTrigger(trigger));`
    );
  }
}

export class RowScript extends Classes.UtilityClasses.RowScript implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const code = `const ${removeVariableSymbol(args.outputVariableName)} = () => {
      ${args.inputArgumentValue[0].value}
    }
    `;
    return codeParseOnly(code);
  }
}
