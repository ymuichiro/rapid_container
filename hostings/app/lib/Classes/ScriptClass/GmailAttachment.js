"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailAttachmentSetName = exports.GmailAttachmentGetSize = exports.GmailAttachmentGetName = exports.GmailAttachmentGetDataAsString = exports.GmailAttachmentGetContentType = exports.GmailAttachmentGetAs = void 0;
const GoogleTypes_1 = require("../../../interfaces/SystemClasses/GoogleTypes");
const LiteralTypes_1 = require("../../../interfaces/SystemClasses/LiteralTypes");
class Parent {
  constructor() {
    this.className = "GmailApp";
    this.categoryId = "GmailAttachment";
    this.categoryName = "Gmail添付ファイル";
    this.categoryDescription = "Gmail添付ファイルを操作する";
    this.cardCategoryIcon = "description";
    this.hasNest = false;
  }
}
const COMMON_KEYWORD = "メール メーラー Email email file ファイル attachment";
class GmailAttachmentGetAs extends Parent {
  constructor() {
    super();
    this.methodId = "getAs";
    this.methodName = "添付ファイルの形式を変換";
    this.methodDescription = "ファイルを画像やPDFに変換する";
    this.keyword = `${COMMON_KEYWORD} コンバート convert pdf`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_ATTACHMENT,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: GoogleTypes_1.default.BASE_BLOB, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "ファイル形式（application/pdf,image/gif,image/jpeg,image/png）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        key: "contentType",
        require: true,
        isObject: false,
        isMultiLine: false,
      },
    ];
  }
}
exports.GmailAttachmentGetAs = GmailAttachmentGetAs;
class GmailAttachmentGetContentType extends Parent {
  constructor() {
    super();
    this.methodId = "getContentType";
    this.methodName = "ファイル形式を取得";
    this.methodDescription = "添付ファイルの形式を取得する";
    this.keyword = COMMON_KEYWORD;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_ATTACHMENT,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailAttachmentGetContentType = GmailAttachmentGetContentType;
class GmailAttachmentGetDataAsString extends Parent {
  constructor() {
    super();
    this.methodId = "getDataAsString";
    this.methodName = "添付ファイルを文字列化";
    this.methodDescription = "添付ファイルを文字列として取得する";
    this.keyword = `${COMMON_KEYWORD} 変換`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_ATTACHMENT,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "Encoding（例：UTF-8）",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        key: "charset",
        require: true,
        isObject: false,
        isMultiLine: false,
      },
    ];
  }
}
exports.GmailAttachmentGetDataAsString = GmailAttachmentGetDataAsString;
class GmailAttachmentGetName extends Parent {
  constructor() {
    super();
    this.methodId = "getName";
    this.methodName = "Gmail添付ファイル - ファイル名取得";
    this.methodDescription = "添付ファイルのファイル名を取得する";
    this.keyword = `${COMMON_KEYWORD} 名称 件名 タイトル`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_ATTACHMENT,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailAttachmentGetName = GmailAttachmentGetName;
class GmailAttachmentGetSize extends Parent {
  constructor() {
    super();
    this.methodId = "getSize";
    this.methodName = "Gmail添付ファイル - ファイルサイズ取得";
    this.methodDescription = "添付ファイルのファイルサイズを取得する";
    this.keyword = `${COMMON_KEYWORD} size 大きさ`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_ATTACHMENT,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: LiteralTypes_1.default.NUMBER, child: LiteralTypes_1.default.NONE };
    this.argumentType = [];
  }
}
exports.GmailAttachmentGetSize = GmailAttachmentGetSize;
class GmailAttachmentSetName extends Parent {
  constructor() {
    super();
    this.methodId = "setName";
    this.methodName = "Gmail添付ファイル - ファイル名更新";
    this.methodDescription = "添付ファイルのファイル名を更新する";
    this.keyword = `${COMMON_KEYWORD} 件名 タイトル`;
    this.inputType = {
      parent: GoogleTypes_1.default.GMAIL_ATTACHMENT,
      child: LiteralTypes_1.default.NONE,
    };
    this.outputType = { parent: GoogleTypes_1.default.BASE_BLOB, child: LiteralTypes_1.default.NONE };
    this.argumentType = [
      {
        name: "ファイル名",
        type: { parent: LiteralTypes_1.default.STRING, child: LiteralTypes_1.default.NONE },
        key: "name",
        require: true,
        isObject: false,
        isMultiLine: false,
      },
    ];
  }
}
exports.GmailAttachmentSetName = GmailAttachmentSetName;
