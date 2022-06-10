"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificDateTrigger = exports.MonthlyTrigger = exports.WeeklyTrigger = exports.EveryDaysTrigger = exports.EveryHoursTrigger = exports.EveryMinutesTrigger = void 0;
class Parent {
  constructor() {
    this.categoryId = "TimeTrigger";
    this.categoryName = "時間";
    this.categoryDescription = "時間指定でトリガーを実行します";
    this.cardCategoryIcon = "schedule";
  }
}
// every n minutes
class EveryMinutesTrigger extends Parent {
  constructor() {
    super();
    this.methodId = "everyMinutes";
    this.methodName = "n分毎に実行";
    this.methodDescription = "指定した間隔（分）でスクリプトを実行します";
    this.frequency1Argument = /^(5|10|15|30)$/;
    this.frequenct1ArgumentDescription = "（時間）5、10、15、30の何れかを指定";
    this.frequency2Argument = undefined;
    this.frequenct2ArgumentDescription = undefined;
  }
}
exports.EveryMinutesTrigger = EveryMinutesTrigger;
// every n hours
class EveryHoursTrigger extends Parent {
  constructor() {
    super();
    this.methodId = "everyHours";
    this.methodName = "n時間毎に実行";
    this.methodDescription = "指定した間隔（時間）でスクリプトを実行します";
    this.frequency1Argument = /^(1|2|4|6|8|12)$/;
    this.frequenct1ArgumentDescription = "（時間）1、2、4、6、8、12の何れかを指定";
    this.frequency2Argument = undefined;
    this.frequenct2ArgumentDescription = undefined;
  }
}
exports.EveryHoursTrigger = EveryHoursTrigger;
// every days
class EveryDaysTrigger extends Parent {
  constructor() {
    super();
    this.methodId = "everyDays";
    this.methodName = "毎日指定の時間に実行";
    this.methodDescription = "毎日指定された時刻にスクリプトを実行します";
    this.frequency1Argument = /^([0-9]|1[0-9]|2[0-3])$/;
    this.frequenct1ArgumentDescription = "0~23の数値で入力してください";
    this.frequency2Argument = undefined;
    this.frequenct2ArgumentDescription = undefined;
  }
}
exports.EveryDaysTrigger = EveryDaysTrigger;
// every weeks
class WeeklyTrigger extends Parent {
  constructor() {
    super();
    this.methodId = "weekly";
    this.methodName = "毎週指定の曜日に実行";
    this.methodDescription = "毎日指定された曜日,時刻にスクリプトを実行します";
    this.frequency1Argument = /^(月|火|水|木|金|土|日)$/;
    this.frequenct1ArgumentDescription = "（曜日）月～日の曜日で入力してください";
    this.frequency2Argument = /^([0-9]|1[0-9]|2[0-3])$/;
    this.frequenct2ArgumentDescription = "（時刻）0~23の数値で入力してください";
  }
}
exports.WeeklyTrigger = WeeklyTrigger;
// every month
class MonthlyTrigger extends Parent {
  constructor() {
    super();
    this.methodId = "monthly";
    this.methodName = "毎月指定日に実行";
    this.methodDescription = "毎月指定された日,時刻にスクリプトを実行します";
    this.frequency1Argument = /^([1-9]|1[0-9]|2[0-9]|3[0-1])$/;
    this.frequenct1ArgumentDescription = "（日付）1～31で入力してください";
    this.frequency2Argument = /^([0-9]|1[0-9]|2[0-3])$/;
    this.frequenct2ArgumentDescription = "（時刻）0~23の数値で入力してください";
  }
}
exports.MonthlyTrigger = MonthlyTrigger;
// specific date
class SpecificDateTrigger extends Parent {
  constructor() {
    super();
    this.methodId = "specificDate";
    this.methodName = "指定日に実行";
    this.methodDescription = "指定された日時になったら実行します";
    this.frequency1Argument = /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01]) ([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    this.frequenct1ArgumentDescription = "yyyy/MM/dd HH:mm:ss （例：2000/01/01 01:00:00）";
    this.frequency2Argument = undefined;
    this.frequenct2ArgumentDescription = undefined;
  }
}
exports.SpecificDateTrigger = SpecificDateTrigger;
