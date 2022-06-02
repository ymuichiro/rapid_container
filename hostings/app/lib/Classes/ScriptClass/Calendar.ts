import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "CalendarApp";
  public readonly categoryId = "Calendar";
  public readonly categoryName = "Google Calendar";
  public readonly categoryDescription = "Calendarを操作";
  public readonly cardCategoryIcon = "event";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "Calender calender カレンダー 予定 日程 スケジュール スケジューラ";

export class CalendarOpenByID extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getCalendarById";
  public readonly methodName = "メールアドレスで開く";
  public readonly methodDescription = "操作したいGoogle Calendarをメールアドレスで指定して開きます";
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Google.CALENDAR, child: Literal.NONE };
  public readonly keyword = `${COMMON_KEYWORD} mail メール`;
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "Gmailアドレス",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "mail",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class CalendarOpenDefault extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "openDefault";
  public readonly methodName = "実行者のカレンダーを開く";
  public readonly methodDescription = "スクリプト実行者のGoogleCalendarを開きます";
  public readonly inputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly outputType = { parent: Google.CALENDAR, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
  public readonly keyword = `${COMMON_KEYWORD} ユーザー user active アクティブ`;
}

export class CalendarCreateAllDayEvent extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "createAllDayEvent";
  public readonly methodName = "予定を作成 - 終日";
  public readonly methodDescription = "指定したカレンダーへ終日の予定を作成します";
  public readonly keyword = `${COMMON_KEYWORD} 一日 作る`;
  public readonly inputType = { parent: Google.CALENDAR, child: Literal.NONE };
  public readonly outputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "タイトル",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "title",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "開始日",
      type: { parent: Literal.DATE, child: Literal.NONE },
      require: true,
      key: "start",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "終了日",
      type: { parent: Literal.DATE, child: Literal.NONE },
      require: true,
      key: "end",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "備考欄",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      key: "description",
      isObject: true,
      isMultiLine: true,
    },
    {
      name: "場所",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      key: "location",
      isObject: true,
      isMultiLine: false,
    },
    {
      name: "ゲスト（,区切りメールアドレス）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      key: "guests",
      isObject: true,
      isMultiLine: false,
    },
    {
      name: "招待メールを送りますか？",
      type: { parent: Literal.BOOLEAN, child: Literal.NONE },
      require: false,
      key: "sendInvites",
      isObject: true,
      isMultiLine: false,
    },
  ];
}

export class CalendarCreateEvent extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "createEvent";
  public readonly methodName = "予定を作成";
  public readonly methodDescription = "指定したカレンダーへ予定を作成します";
  public readonly inputType = { parent: Google.CALENDAR, child: Literal.NONE };
  public readonly keyword = `${COMMON_KEYWORD} 作る event イベント`;
  public readonly outputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "タイトル",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "title",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "開始日",
      type: { parent: Literal.DATE, child: Literal.NONE },
      require: true,
      key: "start",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "終了日",
      type: { parent: Literal.DATE, child: Literal.NONE },
      require: true,
      key: "end",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "備考欄",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      key: "description",
      isObject: true,
      isMultiLine: true,
    },
    {
      name: "場所",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      key: "location",
      isObject: true,
      isMultiLine: false,
    },
    {
      name: "ゲスト（,区切りメールアドレス）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      key: "guests",
      isObject: true,
      isMultiLine: false,
    },
    {
      name: "招待メールを送りますか？",
      type: { parent: Literal.BOOLEAN, child: Literal.NONE },
      require: false,
      key: "sendInvites",
      isObject: true,
      isMultiLine: false,
    },
  ];
}

export class CalendarGetEventById extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getEventById";
  public readonly methodName = "予定を取得 - イベントID指定";
  public readonly methodDescription = "指定したカレンダーよりID指定で予定を取得します";
  public readonly inputType = { parent: Google.CALENDAR, child: Literal.NONE };
  public readonly keyword = `${COMMON_KEYWORD} イベント event 開く`;
  public readonly outputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "id",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "id",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class CalendarGetEvents extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getEventById";
  public readonly methodName = "予定を取得 - 期間指定";
  public readonly methodDescription = "指定したカレンダーより期間指定で予定を取得します";
  public readonly keyword = `${COMMON_KEYWORD} イベント event 開く 日付`;
  public readonly inputType = { parent: Google.CALENDAR, child: Literal.NONE };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.CALENDAR_EVENT,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "開始日",
      type: { parent: Literal.DATE, child: Literal.NONE },
      require: true,
      key: "start",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "終了日",
      type: { parent: Literal.DATE, child: Literal.NONE },
      require: true,
      key: "end",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class CalendarGetEventsForDay extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getEventsForDay";
  public readonly methodName = "予定を取得 - 日付指定";
  public readonly methodDescription = "指定したカレンダーより指定した日付の予定一覧を取得します";
  public readonly keyword = `${COMMON_KEYWORD} イベント event 開く`;
  public readonly inputType = { parent: Google.CALENDAR, child: Literal.NONE };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.CALENDAR_EVENT,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "指定日",
      type: { parent: Literal.DATE, child: Literal.NONE },
      require: true,
      key: "date",
      isObject: false,
      isMultiLine: false,
    },
  ];
}
