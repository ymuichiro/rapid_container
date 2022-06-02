"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnStartUpTrigger = void 0;
class Parent {
    constructor() {
        this.categoryId = "DocumentTrigger";
        this.categoryName = "ドキュメント操作時";
        this.categoryDescription = "ドキュメントが操作された時、実行します";
        this.cardCategoryIcon = "description";
    }
}
// on start up
class OnStartUpTrigger extends Parent {
    constructor() {
        super();
        this.methodId = "onStartUp";
        this.methodName = "起動時に実行";
        this.methodDescription = "ドキュメントの起動時にスクリプトを実行します";
        this.frequency1Argument = undefined;
        this.frequenct1ArgumentDescription = undefined;
        this.frequency2Argument = undefined;
        this.frequenct2ArgumentDescription = undefined;
    }
}
exports.OnStartUpTrigger = OnStartUpTrigger;
