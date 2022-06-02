import { parseExpression } from "@babel/parser";
import { Statement, returnStatement } from "@babel/types";
import { SystemClasses } from "../index";
import { ServerClasses } from "../../type";
import { types } from "@babel/core";
import {
  codeParseOnly,
  removeVariableSymbol,
  updateExpressionStatement_ArrowFunctionBody,
  updateExpressionStatement_ClassMethod,
  updateVariableDeclaration_ArrowFunctionBody,
  updateVariableDeclaration_ClassMethod,
} from "../../Lib/utils";
import { Classes } from "../../../../hostings/app/lib";
import { isUndefined } from "../../../../hostings/app/lib/TextParser";
import { InputClassesData } from "../../../../hostings/app/interfaces/ReduxClasses/InputClasses";
import { InputClassesDataRoot } from "../../../../hostings/app/interfaces/ReduxClasses";

type methods = keyof typeof Array.prototype;

export class ArrayForEach extends Classes.ArrayClasses.ArrayForEach implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData, rootEntities: InputClassesDataRoot): Statement {
    const m: methods = "forEach";
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
    return updateExpressionStatement_ArrowFunctionBody(args.inputBaseValue, m, childStatements, args);
  }
}

export class ArrayMap extends Classes.ArrayClasses.ArrayMap implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData, rootEntities: InputClassesDataRoot): Statement {
    const m: methods = "map";
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
    return updateVariableDeclaration_ArrowFunctionBody(args.inputBaseValue, m, childStatements, args);
  }
}

export class ArrayReturn extends Classes.ArrayClasses.ArrayReturn implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const statement = returnStatement(parseExpression(removeVariableSymbol(args.inputBaseValue))) as Statement;
    return statement;
  }
}

export class ArrayIndexAccess extends Classes.ArrayClasses.ArrayIndexAccess implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const code = `const ${removeVariableSymbol(args.outputVariableName)} = ${removeVariableSymbol(
      args.inputBaseValue
    )}[${removeVariableSymbol(args.inputArgumentValue[0].value)}]`;
    return codeParseOnly(code);
  }
}

export class ArrayUnshift extends Classes.ArrayClasses.ArrayUnshift implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "unshift";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArrayPush extends Classes.ArrayClasses.ArrayPush implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "push";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArrayShift extends Classes.ArrayClasses.ArrayShift implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "shift";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArrayPop extends Classes.ArrayClasses.ArrayPop implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "pop";
    return updateExpressionStatement_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArrayCopy extends Classes.ArrayClasses.ArrayCopy implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "concat";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArraySplice extends Classes.ArrayClasses.ArraySplice implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "splice";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArrayConcat extends Classes.ArrayClasses.ArrayConcat implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "concat";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArraySlice extends Classes.ArrayClasses.ArraySlice implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "slice";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArrayReverse extends Classes.ArrayClasses.ArrayReverse implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "reverse";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArrayJoin extends Classes.ArrayClasses.ArrayJoin implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "join";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArrayIncludes extends Classes.ArrayClasses.ArrayIncludes implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "includes";
    return updateVariableDeclaration_ClassMethod(args.inputBaseValue, m, args);
  }
}

export class ArrayLength extends Classes.ArrayClasses.ArrayLength implements ServerClasses {
  constructor() {
    super();
  }
  public getAst(args: InputClassesData): Statement {
    const m: methods = "length";
    return codeParseOnly(
      `const ${removeVariableSymbol(args.outputVariableName)} = ${removeVariableSymbol(args.inputBaseValue)}.${m}`
    );
  }
}
