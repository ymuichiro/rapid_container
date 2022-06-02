import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "GmailApp";
  public readonly categoryId = "GmailDraft";
  public readonly categoryName = "Gmail下書き";
  public readonly categoryDescription = "Gmailの下書きを操作する";
  public readonly cardCategoryIcon = "drafts";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "メール メーラー Email 下書き draft";

export class GmailDraftDeleteDraft extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "deleteDraft";
  public readonly methodName = "メール下書きの削除";
  public readonly methodDescription = "Gmail下書きを削除する";
  public readonly keyword = `${COMMON_KEYWORD} delete`;
  public readonly inputType = {
    parent: Google.GMAIL_DRAFT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NONE, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailDraftGetId extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getId";
  public readonly methodName = "メール下書きのID取得";
  public readonly methodDescription = "Gmail下書きのIDを取得する";
  public readonly keyword = `${COMMON_KEYWORD} id 識別子`;
  public readonly inputType = {
    parent: Google.GMAIL_DRAFT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailDraftSend extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "send";
  public readonly methodName = "メール下書きの送信";
  public readonly methodDescription = "対象のGmail下書きを送信する";
  public readonly keyword = `${COMMON_KEYWORD} send 送る`;
  public readonly inputType = {
    parent: Google.GMAIL_DRAFT,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_MESSAGE,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailDraftUpdate extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "update";
  public readonly methodName = "メール下書きを更新";
  public readonly methodDescription = "対象のGmail下書きを更新する";
  public readonly keyword = `${COMMON_KEYWORD} update 上書き`;
  public readonly inputType = {
    parent: Google.GMAIL_DRAFT,
    child: Literal.NONE,
  };
  public readonly outputType = {
    parent: Google.GMAIL_DRAFT,
    child: Literal.NONE,
  };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "宛先アドレス（複数は,区切り）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      key: "recipient",
      isObject: false,
      isMultiLine: false,
    },
    {
      name: "件名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      isObject: false,
      isMultiLine: false,
      key: "subject",
    },
    {
      name: "本文（Plain Text形式）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: true,
      isObject: false,
      isMultiLine: true,
      key: "body",
    },
    {
      name: "添付ファイル",
      type: { parent: Literal.ARRAY, child: Google.BASE_BLOBSOURCE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "attachments",
    },
    {
      name: "BCCメールアドレス（複数は,区切り）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "bcc",
    },
    {
      name: "CCメールアドレス（複数は,区切り）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "cc",
    },
    {
      name: "FROMアドレス（送信元を変更する場合）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "from",
    },
    {
      name: "本文（HTML形式）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: true,
      key: "htmlBody",
    },
    {
      name: "送信者名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      require: false,
      isObject: true,
      isMultiLine: false,
      key: "name",
    },
  ];
}
