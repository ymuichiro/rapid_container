import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "CalendarApp";
  public readonly categoryId = "CalendarEvent";
  public readonly categoryName = "Calendar Event";
  public readonly categoryDescription = "Calendarの予定を操作";
  public readonly cardCategoryIcon = "book_online";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "Calender calender イベント event カレンダー 予定 日程 スケジュール スケジューラ";

export class CalendarEventAddGuest extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "addGuest";
  public readonly methodName = "ゲストを追加";
  public readonly methodDescription = "指定した予定にゲストを追加します";
  public readonly keyword = `${COMMON_KEYWORD} 招待`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "招待するメールアドレス",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "mail",
      isMultiLine: false,
      isObject: false,
    },
  ];
}

export class CalendarEventDelete extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "delete";
  public readonly methodName = "予定を削除";
  public readonly methodDescription = "指定した予定を削除します";
  public readonly keyword = `${COMMON_KEYWORD} 消す 破棄 取り消し 取消`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class CalendarEventGetGuestList extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getGuestList";
  public readonly methodName = "ゲスト一覧の取得";
  public readonly methodDescription = "予定に登録されているゲストの一覧を取得します";
  public readonly keyword = `${COMMON_KEYWORD} リスト 確認 招待`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Literal.ARRAY,
    child: Google.CALENDAR_EVENT_GUEST,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class CalendarEventGetDateCreated extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDateCreated";
  public readonly methodName = "予定作成日の取得";
  public readonly methodDescription = "指定された予定が作成された日付を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 作った 最初`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class CalendarEventGetDescription extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDescription";
  public readonly methodName = "予定備考欄の取得";
  public readonly methodDescription = "指定された予定に記載された備考欄を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 説明 補足 概要 詳細`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class CalendarEventGetId extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getId";
  public readonly methodName = "予定のIDを取得";
  public readonly methodDescription = "指定された予定に設定されたIDを取得します";
  public readonly keyword = `${COMMON_KEYWORD} 識別子 id`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class CalendarEventGetLastUpdated extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getLastUpdated";
  public readonly methodName = "予定の最終更新日を取得";
  public readonly methodDescription = "指定された予定が最後に更新された日を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 最後 date last ラスト 対象`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class CalendarEventGetLocation extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getLocation";
  public readonly methodName = "予定の場所欄を取得";
  public readonly methodDescription = "指定された予定に記載された場所を取得します";
  public readonly keyword = `${COMMON_KEYWORD} place 行先 部屋 URL url`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.DATE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class CalendarEventGetTitle extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getTitle";
  public readonly methodName = "予定のタイトルを取得";
  public readonly methodDescription = "指定された予定に記載されたタイトルを取得します";
  public readonly keyword = `${COMMON_KEYWORD} 件名 title Title TITLE subject Subject`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class CalendarEventRemoveGuest extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "removeGuest";
  public readonly methodName = "予定の指定ゲストを削除";
  public readonly methodDescription = "指定された予定に登録された指定ゲストを削除します";
  public readonly keyword = `${COMMON_KEYWORD} 対象 招待 メール mail メールアドレス address`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "メールアドレス",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "mail",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class CalendarEventSetDescription extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "setDescription";
  public readonly methodName = "予定の備考欄を更新";
  public readonly methodDescription = "指定された予定の備考欄を更新します";
  public readonly keyword = `${COMMON_KEYWORD} 説明 補足 概要 詳細`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "備考欄",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "description",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class CalendarEventSetLocation extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "setLocation";
  public readonly methodName = "予定の場所欄を更新";
  public readonly methodDescription = "指定された予定の場所欄を更新します";
  public readonly keyword = `${COMMON_KEYWORD} place 行先 部屋 URL url`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "場所欄",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "location",
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class CalendarEventSetTime extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "SetTime";
  public readonly methodName = "予定の開始・終了日を更新";
  public readonly methodDescription = "指定された予定の開始・終了日を更新します";
  public readonly keyword = `${COMMON_KEYWORD} start end Start End 時間 変更 リスケ`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
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

export class CalendarEventSetTitle extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "SetTitle";
  public readonly methodName = "予定のタイトルを更新";
  public readonly methodDescription = "指定された予定のタイトル欄を更新します";
  public readonly keyword = `${COMMON_KEYWORD} 件名 title Title TITLE subject Subject`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "タイトル欄",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "title",
      isObject: false,
      isMultiLine: false,
    },
  ];
}
