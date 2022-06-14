"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarGetEventsForDay = exports.CalendarGetEvents = exports.CalendarGetEventById = exports.CalendarCreateEvent = exports.CalendarCreateAllDayEvent = exports.CalendarOpenDefault = exports.CalendarOpenByID = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
    constructor() {
        this.className = "CalendarApp";
        this.categoryId = "Calendar";
        this.categoryName = "Google Calendar";
        this.categoryDescription = "Calendarを操作";
        this.cardCategoryIcon = "event";
        this.hasNest = false;
    }
}
const COMMON_KEYWORD = "Calender calender カレンダー 予定 日程 スケジュール スケジューラ";
class CalendarOpenByID extends Parent {
    constructor() {
        super();
        this.methodId = "getCalendarById";
        this.methodName = "メールアドレスで開く";
        this.methodDescription = "操作したいGoogle Calendarをメールアドレスで指定して開きます";
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: GoogleTypes_1.default.CALENDAR, child: LiteralTypes_1.default.NONE };
        this.keyword = `${COMMON_KEYWORD} mail メール`;
        this.argumentType = [
            {
                name: "Gmailアドレス",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "mail",
                isMultiLine: false,
                isObject: false,
            },
        ];
    }
}
exports.CalendarOpenByID = CalendarOpenByID;
class CalendarOpenDefault extends Parent {
    constructor() {
        super();
        this.methodId = "openDefault";
        this.methodName = "実行者のカレンダーを開く";
        this.methodDescription = "スクリプト実行者のGoogleCalendarを開きます";
        this.inputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.outputType = { parent: GoogleTypes_1.default.CALENDAR, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
        this.keyword = `${COMMON_KEYWORD} ユーザー user active アクティブ`;
    }
}
exports.CalendarOpenDefault = CalendarOpenDefault;
class CalendarCreateAllDayEvent extends Parent {
    constructor() {
        super();
        this.methodId = "createAllDayEvent";
        this.methodName = "予定を作成 - 終日";
        this.methodDescription = "指定したカレンダーへ終日の予定を作成します";
        this.keyword = `${COMMON_KEYWORD} 一日 作る`;
        this.inputType = { parent: GoogleTypes_1.default.CALENDAR, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "タイトル",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "title",
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "開始日",
                type: { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "start",
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "終了日",
                type: { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "end",
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "備考欄",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: false,
                key: "description",
                isObject: true,
                isMultiLine: true,
            },
            {
                name: "場所",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: false,
                key: "location",
                isObject: true,
                isMultiLine: false,
            },
            {
                name: "ゲスト（,区切りメールアドレス）",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: false,
                key: "guests",
                isObject: true,
                isMultiLine: false,
            },
            {
                name: "招待メールを送りますか？",
                type: { parent: LiteralTypes_1.default.BOOLEAN, child: LiteralTypes_1.default.NONE },
                require: false,
                key: "sendInvites",
                isObject: true,
                isMultiLine: false,
            },
        ];
    }
}
exports.CalendarCreateAllDayEvent = CalendarCreateAllDayEvent;
class CalendarCreateEvent extends Parent {
    constructor() {
        super();
        this.methodId = "createEvent";
        this.methodName = "予定を作成";
        this.methodDescription = "指定したカレンダーへ予定を作成します";
        this.inputType = { parent: GoogleTypes_1.default.CALENDAR, child: LiteralTypes_1.default.NONE };
        this.keyword = `${COMMON_KEYWORD} 作る event イベント`;
        this.outputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "タイトル",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "title",
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "開始日",
                type: { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "start",
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "終了日",
                type: { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "end",
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "備考欄",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: false,
                key: "description",
                isObject: true,
                isMultiLine: true,
            },
            {
                name: "場所",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: false,
                key: "location",
                isObject: true,
                isMultiLine: false,
            },
            {
                name: "ゲスト（,区切りメールアドレス）",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: false,
                key: "guests",
                isObject: true,
                isMultiLine: false,
            },
            {
                name: "招待メールを送りますか？",
                type: { parent: LiteralTypes_1.default.BOOLEAN, child: LiteralTypes_1.default.NONE },
                require: false,
                key: "sendInvites",
                isObject: true,
                isMultiLine: false,
            },
        ];
    }
}
exports.CalendarCreateEvent = CalendarCreateEvent;
class CalendarGetEventById extends Parent {
    constructor() {
        super();
        this.methodId = "getEventById";
        this.methodName = "予定を取得 - イベントID指定";
        this.methodDescription = "指定したカレンダーよりID指定で予定を取得します";
        this.inputType = { parent: GoogleTypes_1.default.CALENDAR, child: LiteralTypes_1.default.NONE };
        this.keyword = `${COMMON_KEYWORD} イベント event 開く`;
        this.outputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.argumentType = [
            {
                name: "id",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "id",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.CalendarGetEventById = CalendarGetEventById;
class CalendarGetEvents extends Parent {
    constructor() {
        super();
        this.methodId = "getEventById";
        this.methodName = "予定を取得 - 期間指定";
        this.methodDescription = "指定したカレンダーより期間指定で予定を取得します";
        this.keyword = `${COMMON_KEYWORD} イベント event 開く 日付`;
        this.inputType = { parent: GoogleTypes_1.default.CALENDAR, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.CALENDAR_EVENT,
        };
        this.argumentType = [
            {
                name: "開始日",
                type: { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "start",
                isObject: false,
                isMultiLine: false,
            },
            {
                name: "終了日",
                type: { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "end",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.CalendarGetEvents = CalendarGetEvents;
class CalendarGetEventsForDay extends Parent {
    constructor() {
        super();
        this.methodId = "getEventsForDay";
        this.methodName = "予定を取得 - 日付指定";
        this.methodDescription = "指定したカレンダーより指定した日付の予定一覧を取得します";
        this.keyword = `${COMMON_KEYWORD} イベント event 開く`;
        this.inputType = { parent: GoogleTypes_1.default.CALENDAR, child: LiteralTypes_1.default.NONE };
        this.outputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.CALENDAR_EVENT,
        };
        this.argumentType = [
            {
                name: "指定日",
                type: { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "date",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.CalendarGetEventsForDay = CalendarGetEventsForDay;
