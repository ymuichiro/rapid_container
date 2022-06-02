"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnSubmitFormTrigger = exports.OnEditTrigger = exports.OnStartUpTrigger = void 0;
class Parent {
    constructor() {
        this.categoryId = "SpreadsheetTrigger";
        this.categoryName = "スプレッドシート操作時";
        this.categoryDescription = "スプレッドシートが操作された時、実行します";
        this.cardCategoryIcon = "table_rows";
    }
}
// on start up
class OnStartUpTrigger extends Parent {
    constructor() {
        super();
        this.methodId = "onStartUp";
        this.methodName = "起動時に実行";
        this.methodDescription = "スプレッドシートの起動時にスクリプトを実行します";
        this.frequency1Argument = undefined;
        this.frequenct1ArgumentDescription = undefined;
        this.frequency2Argument = undefined;
        this.frequenct2ArgumentDescription = undefined;
    }
}
exports.OnStartUpTrigger = OnStartUpTrigger;
// on edit
class OnEditTrigger extends Parent {
    constructor() {
        super();
        this.methodId = "onEdit";
        this.methodName = "編集時に実行";
        this.methodDescription = "スプレッドシートの編集時にスクリプトを実行します";
        this.frequency1Argument = undefined;
        this.frequenct1ArgumentDescription = undefined;
        this.frequency2Argument = undefined;
        this.frequenct2ArgumentDescription = undefined;
    }
}
exports.OnEditTrigger = OnEditTrigger;
// on Submit
class OnSubmitFormTrigger extends Parent {
    constructor() {
        super();
        this.methodId = "onSubmitForm";
        this.methodName = "フォーム受信時に実行";
        this.methodDescription = "スプレッドシートに紐づくフォームの受信時にスクリプトを実行します";
        this.frequency1Argument = undefined;
        this.frequenct1ArgumentDescription = undefined;
        this.frequency2Argument = undefined;
        this.frequenct2ArgumentDescription = undefined;
    }
}
exports.OnSubmitFormTrigger = OnSubmitFormTrigger;
