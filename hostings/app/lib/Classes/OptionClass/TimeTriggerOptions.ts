import AbstractRunOptions from "../../../interfaces/SystemClasses/RunOptions";

class Parent
  implements Pick<AbstractRunOptions, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon"> {
  public readonly categoryId = "TimeTrigger";
  public readonly categoryName = "時間";
  public readonly categoryDescription = "時間指定でトリガーを実行します";
  public readonly cardCategoryIcon = "schedule";
}

// every n minutes
export class EveryMinutesTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "everyMinutes";
  public readonly methodName = "n分毎に実行";
  public readonly methodDescription = "指定した間隔（分）でスクリプトを実行します";
  public readonly frequency1Argument = /^(5|10|15|30)$/;
  public readonly frequenct1ArgumentDescription = "（時間）5、10、15、30の何れかを指定";
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}

// every n hours
export class EveryHoursTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "everyHours";
  public readonly methodName = "n時間毎に実行";
  public readonly methodDescription = "指定した間隔（時間）でスクリプトを実行します";
  public readonly frequency1Argument = /^(1|2|4|6|8|12)$/;
  public readonly frequenct1ArgumentDescription = "（時間）1、2、4、6、8、12の何れかを指定";
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}

// every days
export class EveryDaysTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "everyDays";
  public readonly methodName = "毎日指定の時間に実行";
  public readonly methodDescription = "毎日指定された時刻にスクリプトを実行します";
  public readonly frequency1Argument = /^([0-9]|1[0-9]|2[0-3])$/;
  public readonly frequenct1ArgumentDescription = "0~23の数値で入力してください";
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}

// every weeks
export class WeeklyTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "weekly";
  public readonly methodName = "毎週指定の曜日に実行";
  public readonly methodDescription = "毎日指定された曜日,時刻にスクリプトを実行します";
  public readonly frequency1Argument = /^(月|火|水|木|金|土|日)$/;
  public readonly frequenct1ArgumentDescription = "（曜日）月～日の曜日で入力してください";
  public readonly frequency2Argument = /^([0-9]|1[0-9]|2[0-3])$/;
  public readonly frequenct2ArgumentDescription = "（時刻）0~23の数値で入力してください";
}

// every month
export class MonthlyTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "monthly";
  public readonly methodName = "毎月指定日に実行";
  public readonly methodDescription = "毎月指定された日,時刻にスクリプトを実行します";
  public readonly frequency1Argument = /^([1-9]|1[0-9]|2[0-9]|3[0-1])$/;
  public readonly frequenct1ArgumentDescription = "（日付）1～31で入力してください";
  public readonly frequency2Argument = /^([0-9]|1[0-9]|2[0-3])$/;
  public readonly frequenct2ArgumentDescription = "（時刻）0~23の数値で入力してください";
}

// specific date
export class SpecificDateTrigger extends Parent implements AbstractRunOptions {
  constructor() {
    super();
  }
  public readonly methodId = "specificDate";
  public readonly methodName = "指定日に実行";
  public readonly methodDescription = "指定された日時になったら実行します";
  public readonly frequency1Argument = /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01]) ([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
  public readonly frequenct1ArgumentDescription = "yyyy/MM/dd HH:mm:ss （例：2000/01/01 01:00:00）";
  public readonly frequency2Argument = undefined;
  public readonly frequenct2ArgumentDescription = undefined;
}
