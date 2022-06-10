"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventGuestGetName = exports.CalendarEventGuestGetEmail = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
  constructor() {
    this.className = "CalendarApp";
    this.categoryId = "CalendarEventGuest";
    this.categoryName = "Google Calendar Event Guest";
    this.categoryDescription = "Calendarのゲストを操作";
    this.cardCategoryIcon = "manage_accounts";
    this.hasNest = false;
  }
}
const COMMON_KEYWORD = "Calender calender イベント event カレンダー 予定 日程 スケジュール スケジューラ 招待";
class CalendarEventGuestGetEmail extends Parent {
  constructor() {
    super();
    this.methodId = "getEmail";
    this.methodName = "ゲストのメールアドレスを取得";
    this.methodDescription = "指定したゲストのメールアドレスを取得します";
    this.keyword = `${COMMON_KEYWORD}  mail Mail address Address`;
    this.inputType = {
      parent: GoogleTypes_1.default.CALENDAR_EVENT_GUEST,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.CalendarEventGuestGetEmail = CalendarEventGuestGetEmail;
class CalendarEventGuestGetName extends Parent {
  constructor() {
    super();
    this.methodId = "getName";
    this.methodName = "ゲストの名前を取得";
    this.methodDescription = "指定したゲストの名前を取得します";
    this.keyword = `${COMMON_KEYWORD} 氏名 名 名称 確認`;
    this.inputType = {
      parent: GoogleTypes_1.default.CALENDAR_EVENT_GUEST,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.CalendarEventGuestGetName = CalendarEventGuestGetName;
