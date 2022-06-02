import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon"> {
  public readonly className = "Array";
  public readonly categoryId = "Array";
  public readonly categoryName = "配列操作";
  public readonly categoryDescription = "配列形式のデータを操作します";
  public readonly cardCategoryIcon = "table_chart";
}

const COMMON_KEYWORD = "配列 array";

export class ArrayIndexAccess extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "indexAccess";
  public readonly methodName = "指定位置の値にアクセスする";
  public readonly methodDescription = "配列の指定位置（順番）の値にアクセスする";
  public readonly hasNest = true;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.ANY, child: Literal.ANY };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "指定位置",
      type: { parent: Literal.NUMBER, child: Literal.ANY },
      require: true,
      key: "value",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class ArrayForEach extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "forEach";
  public readonly methodName = "1次元配列の値で順に処理";
  public readonly methodDescription = "1次元配列内の各値に対して繰り返し処理を行う";
  public readonly hasNest = true;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
  public readonly keyword = COMMON_KEYWORD;
}

export class ArrayMap extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "map";
  public readonly methodName = "1次元配列の値で順に処理し値を返す";
  public readonly methodDescription = "配列の値で順に処理した結果で再度配列を生成します";
  public readonly hasNest = true;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
  public readonly keyword = COMMON_KEYWORD;
}

export class ArrayReturn extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "return";
  public readonly methodName = "map処理の値を返す";
  public readonly methodDescription = "map処理で値を返す際に利用する";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ANY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
  public readonly keyword = COMMON_KEYWORD;
}

export class ArrayUnshift extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "unshift";
  public readonly methodName = "配列の先頭へ値追加";
  public readonly methodDescription = "配列の先頭に値を追加する";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "追加する値",
      type: { parent: Literal.ANY, child: Literal.ANY },
      require: true,
      key: "value",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class ArrayPush extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "push";
  public readonly methodName = "配列の最後へ値追加";
  public readonly methodDescription = "配列の最後に値を追加する";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "追加する値",
      type: { parent: Literal.ANY, child: Literal.ANY },
      require: true,
      key: "value",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class ArrayShift extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "shift";
  public readonly methodName = "配列の先頭から値削除";
  public readonly methodDescription = "配列の先頭から値を削除する";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class ArrayPop extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "shift";
  public readonly methodName = "配列の最後から値削除";
  public readonly methodDescription = "配列の最後から値を削除する";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class ArrayCopy extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "copy";
  public readonly methodName = "配列をコピー";
  public readonly methodDescription = "配列をコピーして新規変数に格納する";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class ArraySplice extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "splice";
  public readonly methodName = "配列の特定位置の値を削除";
  public readonly methodDescription = "配列の位置を指定して値を削除する";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.NONE, child: Literal.ANY };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class ArrayConcat extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "concat";
  public readonly methodName = "配列と配列を結合する";
  public readonly methodDescription = "２つの配列を結合し、１つの配列にする";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class ArraySlice extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "slice";
  public readonly methodName = "指定区間の値を取得";
  public readonly methodDescription = "配列から指定区間の値を取り出し新たな配列を生成する";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "開始位置",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "start",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "終了位置",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: false,
      key: "end",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class ArrayReverse extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "reverse";
  public readonly methodName = "逆順処理";
  public readonly methodDescription = "配列の並びを逆順に並び替える";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class ArrayJoin extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "join";
  public readonly methodName = "結合処理";
  public readonly methodDescription = "配列を指定した区切り文字で結合する";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "区切り文字",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "value",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class ArrayIncludes extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "includes";
  public readonly methodName = "指定文字の存在確認";
  public readonly methodDescription = "指定した値が配列内に存在するか確認する。";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.BOOLEAN, child: Literal.NONE };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "検索する値",
      type: { parent: Literal.ANY, child: Literal.NONE },
      require: true,
      key: "value",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class ArrayLength extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "length";
  public readonly methodName = "配列の長さ取得";
  public readonly methodDescription = "渡された配列の長さを数値で取得";
  public readonly hasNest = false;
  public readonly inputType = { parent: Literal.ARRAY, child: Literal.ANY };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly keyword = COMMON_KEYWORD;
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}
