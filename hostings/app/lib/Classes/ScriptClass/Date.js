"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateToLocaleString = exports.DateGetDay = exports.DateGetSeconds = exports.DateGetMinutes = exports.DateGetHours = exports.DateGetDate = exports.DateGetMonth = exports.DateGetFullYear = exports.DateSetSeconds = exports.DateSetMinutes = exports.DateSetHour = exports.WeekSundayDate = exports.WeekSaturdayDate = exports.WeekFrisdayDate = exports.WeekThursdayDate = exports.WeekWednesdayDate = exports.WeekTuesdayDate = exports.WeekMondayDate = exports.MonthSpecificDate = exports.MonthLastDate = exports.MonthFirstDate = exports.YearAgoDate = exports.YearLaterDate = exports.MonthsLaterDate = exports.MonthsAgoDate = exports.WeeksLaterDate = exports.WeeksAgoDate = exports.DaysLaterDate = exports.DaysAgoDate = exports.SpecificDate = exports.TodayDate = void 0;
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
/*

日付Objectを作成する
明日や昨日といった相対的な出力を想定

*\

/** 共通のパラメーターを定義する */
class Parent {
  constructor() {
    this.categoryId = "Date";
    this.categoryName = "日付を作成";
    this.categoryDescription = "日付情報を作成します";
    this.cardCategoryIcon = "today";
    this.hasNest = false;
    this.className = "Date";
  }
}
const COMMON_KEYWORD = "日時 date";
class TodayDate extends Parent {
  constructor() {
    super();
    this.methodId = "TodayDate";
    this.methodName = "日付を作成 - 今日";
    this.methodDescription = "プログラムを実行した日付を作成します";
    this.keyword = `${COMMON_KEYWORD} script スクリプト program Script Program 作る`;
    this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.TodayDate = TodayDate;
class SpecificDate extends Parent {
  constructor() {
    super();
    this.methodId = "SpecificDate";
    this.methodName = "日付を作成 - 指定日";
    this.methodDescription = "指定した日付を作成します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        name: "年",
        require: true,
        key: "year",
        isMultiLine: false,
        isObject: false,
      },
      {
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        name: "月",
        require: true,
        key: "month",
        isMultiLine: false,
        isObject: false,
      },
      {
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        name: "日",
        require: true,
        key: "date",
        isMultiLine: false,
        isObject: false,
      },
      {
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        name: "時",
        require: false,
        key: "hours",
        isMultiLine: false,
        isObject: false,
      },
      {
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        name: "分",
        require: false,
        key: "minutes",
        isMultiLine: false,
        isObject: false,
      },
      {
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        name: "秒",
        require: false,
        key: "seconds",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.SpecificDate = SpecificDate;
class DaysAgoDate extends Parent {
  constructor() {
    super();
    this.methodId = "DaysAgoDate";
    this.methodName = "日付を作成 - X日前";
    this.methodDescription = "指定日のX日前の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "何日前にしますか",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.DaysAgoDate = DaysAgoDate;
class DaysLaterDate extends Parent {
  constructor() {
    super();
    this.methodId = "DaysLaterDate";
    this.methodName = "日付を作成 - X日後";
    this.methodDescription = "指定日のX日後の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "何日後にしますか",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.DaysLaterDate = DaysLaterDate;
class WeeksAgoDate extends Parent {
  constructor() {
    super();
    this.methodId = "WeeksAgoDate";
    this.methodName = "日付を作成 - X週間前";
    this.methodDescription = "指定日のX週間前の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "何週間前にしますか",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.WeeksAgoDate = WeeksAgoDate;
class WeeksLaterDate extends Parent {
  constructor() {
    super();
    this.methodId = "WeeksLaterDate";
    this.methodName = "日付を作成 - X週間後";
    this.methodDescription = "指定日のX週間後の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "何週間後にしますか",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.WeeksLaterDate = WeeksLaterDate;
class MonthsAgoDate extends Parent {
  constructor() {
    super();
    this.methodId = "MonthsAgoDate";
    this.methodName = "日付を作成 - Xヶ月前";
    this.methodDescription = "指定日のXヶ月前の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "何ヶ月前にしますか",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.MonthsAgoDate = MonthsAgoDate;
class MonthsLaterDate extends Parent {
  constructor() {
    super();
    this.methodId = "MonthsLaterDate";
    this.methodName = "日付を作成 - Xヶ月後";
    this.methodDescription = "指定日のXヶ月後の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "何ヶ月後にしますか",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.MonthsLaterDate = MonthsLaterDate;
class YearLaterDate extends Parent {
  constructor() {
    super();
    this.methodId = "YearLaterDate";
    this.methodName = "日付を作成 - X年後";
    this.methodDescription = "指定日のX年後の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "何年後にしますか",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.YearLaterDate = YearLaterDate;
class YearAgoDate extends Parent {
  constructor() {
    super();
    this.methodId = "YearAgoDate";
    this.methodName = "日付を作成 - X年前";
    this.methodDescription = "指定日のX年前の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "何年前にしますか",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.YearAgoDate = YearAgoDate;
class MonthFirstDate extends Parent {
  constructor() {
    super();
    this.methodId = "MonthFirstDate";
    this.methodName = "日付を作成 - 月初";
    this.methodDescription = "指定日の月初の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.MonthFirstDate = MonthFirstDate;
class MonthLastDate extends Parent {
  constructor() {
    super();
    this.methodId = "MonthLastDate";
    this.methodName = "日付を作成 - 月末";
    this.methodDescription = "指定日の月末の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.MonthLastDate = MonthLastDate;
class MonthSpecificDate extends Parent {
  constructor() {
    super();
    this.methodId = "MonthSpecificDate";
    this.methodName = "日付を作成 - 今月のX日";
    this.methodDescription = "指定日の月よりX日の日付を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "何日にしますか",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.MonthSpecificDate = MonthSpecificDate;
class WeekMondayDate extends Parent {
  constructor() {
    super();
    this.methodId = "WeekMondayDate";
    this.methodName = "日付を作成 - 今週月曜日";
    this.methodDescription = "指定日の週より月曜日を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.WeekMondayDate = WeekMondayDate;
class WeekTuesdayDate extends Parent {
  constructor() {
    super();
    this.methodId = "WeekMondayDate";
    this.methodName = "日付を作成 - 今週火曜日";
    this.methodDescription = "指定日の週より火曜日を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.WeekTuesdayDate = WeekTuesdayDate;
class WeekWednesdayDate extends Parent {
  constructor() {
    super();
    this.methodId = "WeekWednesdayDate";
    this.methodName = "日付を作成 - 今週水曜日";
    this.methodDescription = "指定日の週より水曜日を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.WeekWednesdayDate = WeekWednesdayDate;
class WeekThursdayDate extends Parent {
  constructor() {
    super();
    this.methodId = "WeekThursdayDate";
    this.methodName = "日付を作成 - 今週木曜日";
    this.methodDescription = "指定日の週より木曜日を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.WeekThursdayDate = WeekThursdayDate;
class WeekFrisdayDate extends Parent {
  constructor() {
    super();
    this.methodId = "WeekFrisdayDate";
    this.methodName = "日付を作成 - 今週金曜日";
    this.methodDescription = "指定日の週より金曜日を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.WeekFrisdayDate = WeekFrisdayDate;
class WeekSaturdayDate extends Parent {
  constructor() {
    super();
    this.methodId = "WeekSaturdayDate";
    this.methodName = "日付を作成 - 今週土曜日";
    this.methodDescription = "指定日の週より土曜日を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.WeekSaturdayDate = WeekSaturdayDate;
class WeekSundayDate extends Parent {
  constructor() {
    super();
    this.methodId = "WeekSundayDate";
    this.methodName = "日付を作成 - 今週日曜日";
    this.methodDescription = "指定日の週より日曜日を取得します";
    this.keyword = `${COMMON_KEYWORD} 作る`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.WeekSundayDate = WeekSundayDate;
class DateSetHour extends Parent {
  constructor() {
    super();
    this.methodId = "setHour";
    this.methodName = "時間変更 - 時";
    this.methodDescription = "日付データの時刻（時）を変更する";
    this.keyword = `${COMMON_KEYWORD} 更新`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "時刻（時）",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.DateSetHour = DateSetHour;
class DateSetMinutes extends Parent {
  constructor() {
    super();
    this.methodId = "setMinutes";
    this.methodName = "時刻変更 - 分";
    this.methodDescription = "日付データの時刻（分）を変更する";
    this.keyword = `${COMMON_KEYWORD} 更新`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "時刻（分）",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.DateSetMinutes = DateSetMinutes;
class DateSetSeconds extends Parent {
  constructor() {
    super();
    this.methodId = "setSeconds";
    this.methodName = "時刻変更 - 秒";
    this.methodDescription = "日付データの時刻（秒）を変更する";
    this.keyword = `${COMMON_KEYWORD} 更新`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "時刻（秒）",
        type: { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE },
        require: true,
        key: "num",
        isMultiLine: false,
        isObject: false,
      },
    ];
  }
}
exports.DateSetSeconds = DateSetSeconds;
class DateGetFullYear extends Parent {
  constructor() {
    super();
    this.methodId = "getFullYear";
    this.methodName = "日時取得 - 年";
    this.methodDescription = "日付データの日時（年）を取得する";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.DateGetFullYear = DateGetFullYear;
class DateGetMonth extends Parent {
  constructor() {
    super();
    this.methodId = "getMonth";
    this.methodName = "日時取得 - 月（0~）";
    this.methodDescription = "日付データの日時（月）を取得する（0 始まり）";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.DateGetMonth = DateGetMonth;
class DateGetDate extends Parent {
  constructor() {
    super();
    this.methodId = "getDate";
    this.methodName = "日時取得 - 日";
    this.methodDescription = "日付データの日時（日）を取得する";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.DateGetDate = DateGetDate;
class DateGetHours extends Parent {
  constructor() {
    super();
    this.methodId = "getHours";
    this.methodName = "日時取得 - 時";
    this.methodDescription = "日付データの日時（時）を取得する";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.DateGetHours = DateGetHours;
class DateGetMinutes extends Parent {
  constructor() {
    super();
    this.methodId = "getMinutes";
    this.methodName = "日時取得 - 分";
    this.methodDescription = "日付データの日時（分）を取得する";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.DateGetMinutes = DateGetMinutes;
class DateGetSeconds extends Parent {
  constructor() {
    super();
    this.methodId = "getSeconds";
    this.methodName = "日時取得 - 秒";
    this.methodDescription = "日付データの日時（秒）を取得する";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.DateGetSeconds = DateGetSeconds;
class DateGetDay extends Parent {
  constructor() {
    super();
    this.methodId = "getDay";
    this.methodName = "日時取得 - 曜日";
    this.methodDescription = "日付データの日時（曜日）を取得する";
    this.keyword = COMMON_KEYWORD;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.DateGetDay = DateGetDay;
class DateToLocaleString extends Parent {
  constructor() {
    super();
    this.methodId = "toLocaleString";
    this.methodName = "日付変換 - 文字列へ";
    this.methodDescription = "日付データを文字列形式に変換する";
    this.keyword = `${COMMON_KEYWORD} キャスト Cast cast`;
    this.inputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.DateToLocaleString = DateToLocaleString;
