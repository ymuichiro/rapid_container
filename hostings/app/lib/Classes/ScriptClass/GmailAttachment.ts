import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";
import Google from "../../../interfaces/SystemClasses/GoogleTypes";
import Literal from "../../../interfaces/SystemClasses/LiteralTypes";

class Parent
  implements
    Pick<AbstractClasses, "categoryId" | "categoryName" | "categoryDescription" | "cardCategoryIcon" | "hasNest"> {
  public readonly className = "GmailApp";
  public readonly categoryId = "GmailAttachment";
  public readonly categoryName = "Gmail添付ファイル";
  public readonly categoryDescription = "Gmail添付ファイルを操作する";
  public readonly cardCategoryIcon = "description";
  public readonly hasNest = false;
}

const COMMON_KEYWORD = "メール メーラー Email email file ファイル attachment";

export class GmailAttachmentGetAs extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getAs";
  public readonly methodName = "添付ファイルの形式を変換";
  public readonly methodDescription = "ファイルを画像やPDFに変換する";
  public readonly keyword = `${COMMON_KEYWORD} コンバート convert pdf`;
  public readonly inputType = {
    parent: Google.GMAIL_ATTACHMENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Google.BASE_BLOB, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "ファイル形式（application/pdf,image/gif,image/jpeg,image/png）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "contentType",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailAttachmentGetContentType extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getContentType";
  public readonly methodName = "ファイル形式を取得";
  public readonly methodDescription = "添付ファイルの形式を取得する";
  public readonly keyword = COMMON_KEYWORD;
  public readonly inputType = {
    parent: Google.GMAIL_ATTACHMENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailAttachmentGetDataAsString extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getDataAsString";
  public readonly methodName = "添付ファイルを文字列化";
  public readonly methodDescription = "添付ファイルを文字列として取得する";
  public readonly keyword = `${COMMON_KEYWORD} 変換`;
  public readonly inputType = {
    parent: Google.GMAIL_ATTACHMENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "Encoding（例：UTF-8）",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "charset",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}

export class GmailAttachmentGetName extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getName";
  public readonly methodName = "Gmail添付ファイル - ファイル名取得";
  public readonly methodDescription = "添付ファイルのファイル名を取得する";
  public readonly keyword = `${COMMON_KEYWORD} 名称 件名 タイトル`;
  public readonly inputType = {
    parent: Google.GMAIL_ATTACHMENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.STRING, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailAttachmentGetSize extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "getSize";
  public readonly methodName = "Gmail添付ファイル - ファイルサイズ取得";
  public readonly methodDescription = "添付ファイルのファイルサイズを取得する";
  public readonly keyword = `${COMMON_KEYWORD} size 大きさ`;
  public readonly inputType = {
    parent: Google.GMAIL_ATTACHMENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Literal.NUMBER, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [];
}

export class GmailAttachmentSetName extends Parent implements AbstractClasses {
  constructor() {
    super();
  }
  public readonly methodId = "setName";
  public readonly methodName = "Gmail添付ファイル - ファイル名更新";
  public readonly methodDescription = "添付ファイルのファイル名を更新する";
  public readonly keyword = `${COMMON_KEYWORD} 件名 タイトル`;
  public readonly inputType = {
    parent: Google.GMAIL_ATTACHMENT,
    child: Literal.NONE,
  };
  public readonly outputType = { parent: Google.BASE_BLOB, child: Literal.NONE };
  public readonly argumentType: AbstractClasses["argumentType"] = [
    {
      name: "ファイル名",
      type: { parent: Literal.STRING, child: Literal.NONE },
      key: "name",
      require: true,
      isObject: false,
      isMultiLine: false,
    },
  ];
}
