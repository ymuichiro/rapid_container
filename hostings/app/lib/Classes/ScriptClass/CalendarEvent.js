"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventSetTitle = exports.CalendarEventSetTime = exports.CalendarEventSetLocation = exports.CalendarEventSetDescription = exports.CalendarEventRemoveGuest = exports.CalendarEventGetTitle = exports.CalendarEventGetLocation = exports.CalendarEventGetLastUpdated = exports.CalendarEventGetId = exports.CalendarEventGetDescription = exports.CalendarEventGetDateCreated = exports.CalendarEventGetGuestList = exports.CalendarEventDelete = exports.CalendarEventAddGuest = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
    constructor() {
        this.className = "CalendarApp";
        this.categoryId = "CalendarEvent";
        this.categoryName = "Calendar Event";
        this.categoryDescription = "Calendarの予定を操作";
        this.cardCategoryIcon = "book_online";
        this.hasNest = false;
    }
}
const COMMON_KEYWORD = "Calender calender イベント event カレンダー 予定 日程 スケジュール スケジューラ";
class CalendarEventAddGuest extends Parent {
    constructor() {
        super();
        this.methodId = "addGuest";
        this.methodName = "ゲストを追加";
        this.methodDescription = "指定した予定にゲストを追加します";
        this.keyword = `${COMMON_KEYWORD} 招待`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "招待するメールアドレス",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "mail",
                isMultiLine: false,
                isObject: false,
            },
        ];
    }
}
exports.CalendarEventAddGuest = CalendarEventAddGuest;
class CalendarEventDelete extends Parent {
    constructor() {
        super();
        this.methodId = "delete";
        this.methodName = "予定を削除";
        this.methodDescription = "指定した予定を削除します";
        this.keyword = `${COMMON_KEYWORD} 消す 破棄 取り消し 取消`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.CalendarEventDelete = CalendarEventDelete;
class CalendarEventGetGuestList extends Parent {
    constructor() {
        super();
        this.methodId = "getGuestList";
        this.methodName = "ゲスト一覧の取得";
        this.methodDescription = "予定に登録されているゲストの一覧を取得します";
        this.keyword = `${COMMON_KEYWORD} リスト 確認 招待`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = {
            parent: LiteralTypes_1.default.ARRAY,
            child: GoogleTypes_1.default.CALENDAR_EVENT_GUEST,
        };
        this.argumentType = [];
    }
}
exports.CalendarEventGetGuestList = CalendarEventGetGuestList;
class CalendarEventGetDateCreated extends Parent {
    constructor() {
        super();
        this.methodId = "getDateCreated";
        this.methodName = "予定作成日の取得";
        this.methodDescription = "指定された予定が作成された日付を取得します";
        this.keyword = `${COMMON_KEYWORD} 作った 最初`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.CalendarEventGetDateCreated = CalendarEventGetDateCreated;
class CalendarEventGetDescription extends Parent {
    constructor() {
        super();
        this.methodId = "getDescription";
        this.methodName = "予定備考欄の取得";
        this.methodDescription = "指定された予定に記載された備考欄を取得します";
        this.keyword = `${COMMON_KEYWORD} 説明 補足 概要 詳細`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.CalendarEventGetDescription = CalendarEventGetDescription;
class CalendarEventGetId extends Parent {
    constructor() {
        super();
        this.methodId = "getId";
        this.methodName = "予定のIDを取得";
        this.methodDescription = "指定された予定に設定されたIDを取得します";
        this.keyword = `${COMMON_KEYWORD} 識別子 id`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.CalendarEventGetId = CalendarEventGetId;
class CalendarEventGetLastUpdated extends Parent {
    constructor() {
        super();
        this.methodId = "getLastUpdated";
        this.methodName = "予定の最終更新日を取得";
        this.methodDescription = "指定された予定が最後に更新された日を取得します";
        this.keyword = `${COMMON_KEYWORD} 最後 date last ラスト 対象`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.CalendarEventGetLastUpdated = CalendarEventGetLastUpdated;
class CalendarEventGetLocation extends Parent {
    constructor() {
        super();
        this.methodId = "getLocation";
        this.methodName = "予定の場所欄を取得";
        this.methodDescription = "指定された予定に記載された場所を取得します";
        this.keyword = `${COMMON_KEYWORD} place 行先 部屋 URL url`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.DATE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.CalendarEventGetLocation = CalendarEventGetLocation;
class CalendarEventGetTitle extends Parent {
    constructor() {
        super();
        this.methodId = "getTitle";
        this.methodName = "予定のタイトルを取得";
        this.methodDescription = "指定された予定に記載されたタイトルを取得します";
        this.keyword = `${COMMON_KEYWORD} 件名 title Title TITLE subject Subject`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
        this.argumentType = [];
    }
}
exports.CalendarEventGetTitle = CalendarEventGetTitle;
class CalendarEventRemoveGuest extends Parent {
    constructor() {
        super();
        this.methodId = "removeGuest";
        this.methodName = "予定の指定ゲストを削除";
        this.methodDescription = "指定された予定に登録された指定ゲストを削除します";
        this.keyword = `${COMMON_KEYWORD} 対象 招待 メール mail メールアドレス address`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "メールアドレス",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "mail",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.CalendarEventRemoveGuest = CalendarEventRemoveGuest;
class CalendarEventSetDescription extends Parent {
    constructor() {
        super();
        this.methodId = "setDescription";
        this.methodName = "予定の備考欄を更新";
        this.methodDescription = "指定された予定の備考欄を更新します";
        this.keyword = `${COMMON_KEYWORD} 説明 補足 概要 詳細`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "備考欄",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "description",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.CalendarEventSetDescription = CalendarEventSetDescription;
class CalendarEventSetLocation extends Parent {
    constructor() {
        super();
        this.methodId = "setLocation";
        this.methodName = "予定の場所欄を更新";
        this.methodDescription = "指定された予定の場所欄を更新します";
        this.keyword = `${COMMON_KEYWORD} place 行先 部屋 URL url`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "場所欄",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "location",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.CalendarEventSetLocation = CalendarEventSetLocation;
class CalendarEventSetTime extends Parent {
    constructor() {
        super();
        this.methodId = "SetTime";
        this.methodName = "予定の開始・終了日を更新";
        this.methodDescription = "指定された予定の開始・終了日を更新します";
        this.keyword = `${COMMON_KEYWORD} start end Start End 時間 変更 リスケ`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
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
exports.CalendarEventSetTime = CalendarEventSetTime;
class CalendarEventSetTitle extends Parent {
    constructor() {
        super();
        this.methodId = "SetTitle";
        this.methodName = "予定のタイトルを更新";
        this.methodDescription = "指定された予定のタイトル欄を更新します";
        this.keyword = `${COMMON_KEYWORD} 件名 title Title TITLE subject Subject`;
        this.inputType = {
            parent: GoogleTypes_1.default.CALENDAR_EVENT,
            child: LiteralTypes_1.default.NONE,
        };
        this.outputType = { parent: LiteralTypes_1.default.NONE, child: LiteralTypes_1.default.NONE };
        this.argumentType = [
            {
                name: "タイトル欄",
                type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
                require: true,
                key: "title",
                isObject: false,
                isMultiLine: false,
            },
        ];
    }
}
exports.CalendarEventSetTitle = CalendarEventSetTitle;
