"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnSubmitFormTrigger = exports.OnStartUpTrigger = void 0;
class Parent {
  constructor() {
    this.categoryId = "FormTrigger";
    this.categoryName = "フォーム操作時";
    this.categoryDescription = "フォームが操作された時、実行します";
    this.cardCategoryIcon = "list";
  }
}
// on startup
class OnStartUpTrigger extends Parent {
  constructor() {
    super();
    this.methodId = "onStartUp";
    this.methodName = "起動時に実行";
    this.methodDescription = "フォームの起動時にスクリプトを実行します";
    this.frequency1Argument = undefined;
    this.frequenct1ArgumentDescription = undefined;
    this.frequency2Argument = undefined;
    this.frequenct2ArgumentDescription = undefined;
  }
}
exports.OnStartUpTrigger = OnStartUpTrigger;
// on submit
class OnSubmitFormTrigger extends Parent {
  constructor() {
    super();
    this.methodId = "onSubmitForm";
    this.methodName = "送信時に実行";
    this.methodDescription = "フォームの送信時にスクリプトを実行します";
    this.frequency1Argument = undefined;
    this.frequenct1ArgumentDescription = undefined;
    this.frequency2Argument = undefined;
    this.frequenct2ArgumentDescription = undefined;
  }
}
exports.OnSubmitFormTrigger = OnSubmitFormTrigger;
