import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

/*

日付Objectを作成する
明日や昨日といった相対的な出力を想定

*\

/** 共通のパラメーターを定義する */
class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly categoryId = "Date";
  public readonly categoryName = "日付を作成";
  public readonly categoryDescription = "日付情報を作成します";
  public readonly cardCategoryIcon = "today";
  public readonly hasNest = false;
  public readonly className = "Date";
}

const COMMON_KEYWORD = "日時 date";

export class TodayDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "TodayDate";
  public readonly methodName = "日付を作成 - 今日";
  public readonly methodDescription = "プログラムを実行した日付を作成します";
  public readonly keyword = `${COMMON_KEYWORD} script スクリプト program Script Program 作る`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType = [];
}

export class SpecificDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "SpecificDate";
  public readonly methodName = "日付を作成 - 指定日";
  public readonly methodDescription = "指定した日付を作成します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      name: "年",
      require: true,
      key: "year",
      isMultiLine: false,
      isObject: false,
    },
    {
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      name: "月",
      require: true,
      key: "month",
      isMultiLine: false,
      isObject: false,
    },
    {
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      name: "日",
      require: true,
      key: "date",
      isMultiLine: false,
      isObject: false,
    },
    {
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      name: "時",
      require: false,
      key: "hours",
      isMultiLine: false,
      isObject: false,
    },
    {
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      name: "分",
      require: false,
      key: "minutes",
      isMultiLine: false,
      isObject: false,
    },
    {
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      name: "秒",
      require: false,
      key: "seconds",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class DaysAgoDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "DaysAgoDate";
  public readonly methodName = "日付を作成 - X日前";
  public readonly methodDescription = "指定日のX日前の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "何日前にしますか",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class DaysLaterDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "DaysLaterDate";
  public readonly methodName = "日付を作成 - X日後";
  public readonly methodDescription = "指定日のX日後の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "何日後にしますか",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class WeeksAgoDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "WeeksAgoDate";
  public readonly methodName = "日付を作成 - X週間前";
  public readonly methodDescription = "指定日のX週間前の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "何週間前にしますか",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class WeeksLaterDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "WeeksLaterDate";
  public readonly methodName = "日付を作成 - X週間後";
  public readonly methodDescription = "指定日のX週間後の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "何週間後にしますか",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class MonthsAgoDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "MonthsAgoDate";
  public readonly methodName = "日付を作成 - Xヶ月前";
  public readonly methodDescription = "指定日のXヶ月前の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "何ヶ月前にしますか",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class MonthsLaterDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "MonthsLaterDate";
  public readonly methodName = "日付を作成 - Xヶ月後";
  public readonly methodDescription = "指定日のXヶ月後の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "何ヶ月後にしますか",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class YearLaterDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "YearLaterDate";
  public readonly methodName = "日付を作成 - X年後";
  public readonly methodDescription = "指定日のX年後の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "何年後にしますか",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class YearAgoDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "YearAgoDate";
  public readonly methodName = "日付を作成 - X年前";
  public readonly methodDescription = "指定日のX年前の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "何年前にしますか",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class MonthFirstDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "MonthFirstDate";
  public readonly methodName = "日付を作成 - 月初";
  public readonly methodDescription = "指定日の月初の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class MonthLastDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "MonthLastDate";
  public readonly methodName = "日付を作成 - 月末";
  public readonly methodDescription = "指定日の月末の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class MonthSpecificDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "MonthSpecificDate";
  public readonly methodName = "日付を作成 - 今月のX日";
  public readonly methodDescription = "指定日の月よりX日の日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "何日にしますか",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class WeekMondayDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "WeekMondayDate";
  public readonly methodName = "日付を作成 - 今週月曜日";
  public readonly methodDescription = "指定日の週より月曜日を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class WeekTuesdayDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "WeekMondayDate";
  public readonly methodName = "日付を作成 - 今週火曜日";
  public readonly methodDescription = "指定日の週より火曜日を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class WeekWednesdayDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "WeekWednesdayDate";
  public readonly methodName = "日付を作成 - 今週水曜日";
  public readonly methodDescription = "指定日の週より水曜日を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class WeekThursdayDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "WeekThursdayDate";
  public readonly methodName = "日付を作成 - 今週木曜日";
  public readonly methodDescription = "指定日の週より木曜日を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class WeekFrisdayDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "WeekFrisdayDate";
  public readonly methodName = "日付を作成 - 今週金曜日";
  public readonly methodDescription = "指定日の週より金曜日を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class WeekSaturdayDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "WeekSaturdayDate";
  public readonly methodName = "日付を作成 - 今週土曜日";
  public readonly methodDescription = "指定日の週より土曜日を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class WeekSundayDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "WeekSundayDate";
  public readonly methodName = "日付を作成 - 今週日曜日";
  public readonly methodDescription = "指定日の週より日曜日を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作る`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class DateSetHour extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "setHour";
  public readonly methodName = "時間変更 - 時";
  public readonly methodDescription = "日付データの時刻（時）を変更する";
  public readonly keyword = `${COMMON_KEYWORD} 更新`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "時刻（時）",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class DateSetMinutes extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "setMinutes";
  public readonly methodName = "時刻変更 - 分";
  public readonly methodDescription = "日付データの時刻（分）を変更する";
  public readonly keyword = `${COMMON_KEYWORD} 更新`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "時刻（分）",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class DateSetSeconds extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "setSeconds";
  public readonly methodName = "時刻変更 - 秒";
  public readonly methodDescription = "日付データの時刻（秒）を変更する";
  public readonly keyword = `${COMMON_KEYWORD} 更新`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "時刻（秒）",
      type: { parent: Literal.NUMBER, child: Literal.NONE },
      require: true,
      key: "num",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class DateGetFullYear extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getFullYear";
  public readonly methodName = "日時取得 - 年";
  public readonly methodDescription = "日付データの日時（年）を取得する";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class DateGetMonth extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getMonth";
  public readonly methodName = "日時取得 - 月（0~）";
  public readonly methodDescription = "日付データの日時（月）を取得する（0 始まり）";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class DateGetDate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDate";
  public readonly methodName = "日時取得 - 日";
  public readonly methodDescription = "日付データの日時（日）を取得する";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class DateGetHours extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getHours";
  public readonly methodName = "日時取得 - 時";
  public readonly methodDescription = "日付データの日時（時）を取得する";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class DateGetMinutes extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getMinutes";
  public readonly methodName = "日時取得 - 分";
  public readonly methodDescription = "日付データの日時（分）を取得する";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class DateGetSeconds extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getSeconds";
  public readonly methodName = "日時取得 - 秒";
  public readonly methodDescription = "日付データの日時（秒）を取得する";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class DateGetDay extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDay";
  public readonly methodName = "日時取得 - 曜日";
  public readonly methodDescription = "日付データの日時（曜日）を取得する";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class DateToLocaleString extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "toLocaleString";
  public readonly methodName = "日付変換 - 文字列へ";
  public readonly methodDescription = "日付データを文字列形式に変換する";
  public readonly keyword = `${COMMON_KEYWORD} キャスト Cast cast`;
  public readonly inputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}
