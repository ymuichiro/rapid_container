"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnUpdateTrigger = void 0;
class Parent {
    constructor() {
        this.categoryId = "CalenderTrigger";
        this.categoryName = "カレンダー操作時";
        this.categoryDescription = "カレンダーが操作された時、実行します";
        this.cardCategoryIcon = "event";
    }
}
// on update
class OnUpdateTrigger extends Parent {
    constructor() {
        super();
        this.methodId = "update";
        this.methodName = "対象カレンダーの更新時";
        this.methodDescription = "指定したカレンダーの更新時に実行します";
        this.frequency1Argument = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        this.frequenct1ArgumentDescription = "メールアドレスを入力して下さい";
        this.frequency2Argument = undefined;
        this.frequenct2ArgumentDescription = undefined;
    }
}
exports.OnUpdateTrigger = OnUpdateTrigger;
