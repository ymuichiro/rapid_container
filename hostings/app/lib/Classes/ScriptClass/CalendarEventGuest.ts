import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "CalendarApp";
  public readonly categoryId = "CalendarEventGuest";
  public readonly categoryName = "Google Calendar Event Guest";
  public readonly categoryDescription = "Calendarのゲストを操作";
  public readonly cardCategoryIcon = "manage_accounts";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "Calender calender イベント event カレンダー 予定 日程 スケジュール スケジューラ 招待";

export class CalendarEventGuestGetEmail extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getEmail";
  public readonly methodName = "ゲストのメールアドレスを取得";
  public readonly methodDescription = "指定したゲストのメールアドレスを取得します";
  public readonly keyword = `${COMMON_KEYWORD}  mail Mail address Address`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT_GUEST,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class CalendarEventGuestGetName extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getName";
  public readonly methodName = "ゲストの名前を取得";
  public readonly methodDescription = "指定したゲストの名前を取得します";
  public readonly keyword = `${COMMON_KEYWORD} 氏名 名 名称 確認`;
  public readonly inputType = {
    parent: Google.CALENDAR_EVENT_GUEST,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}
