"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemError = exports.isUndefinedOrNullError = exports.switchNull = exports.switchUndefined = exports.isNotUndefinedAndNull = exports.isNull = exports.isUndefined = exports.createHashKey = exports.swapDown = exports.swapUp = exports.insertValueInBetween = void 0;
/** 配列の途中に値を挿入する */
function insertValueInBetween(arr, position, insertValue) {
    return [...arr.slice(0, position), insertValue, ...arr.slice(position)];
}
exports.insertValueInBetween = insertValueInBetween;
/**
 * 指定されたIndexの位置を1つ大きい側に移動する
 */
function swapUp(array, index) {
    const _ = [...array];
    if (index < 0 || index > array.length - 2) {
        return _;
    }
    else {
        _.splice(index, 2, _[index + 1], _[index]);
        return _;
    }
}
exports.swapUp = swapUp;
/**
 * 指定されたIndexを１つ小さい側に移動する
 */
function swapDown(array, index) {
    const _ = [...array];
    if (index <= 0 || index > array.length - 1) {
        return _;
    }
    else {
        _.splice(index - 1, 2, _[index], _[index - 1]);
        return _;
    }
}
exports.swapDown = swapDown;
/**
 * ランダムなHash値を取得する
 */
function createHashKey() {
    const digit = 100000000000;
    const randNums = [
        new Date().getTime(),
        Math.round(Math.random() * digit) + digit,
        Math.round(Math.random() * digit) + digit,
    ];
    let hash_key = "";
    randNums.forEach((byte) => (hash_key += byte < 0 ? (byte += 256).toString(16) : byte.toString(16)));
    return hash_key;
}
exports.createHashKey = createHashKey;
const isUndefined = (v) => {
    return v === undefined;
};
exports.isUndefined = isUndefined;
const isNull = (v) => {
    return v === null;
};
exports.isNull = isNull;
const isNotUndefinedAndNull = (v) => {
    return v !== undefined && v !== null;
};
exports.isNotUndefinedAndNull = isNotUndefinedAndNull;
const switchUndefined = (v, isValue, isNotValue) => {
    if ((0, exports.isUndefined)(v)) {
        return isValue;
    }
    else {
        return isNotValue;
    }
};
exports.switchUndefined = switchUndefined;
const switchNull = (v, isValue, isNotValue) => {
    if ((0, exports.isNull)(v)) {
        return isValue;
    }
    else {
        return isNotValue;
    }
};
exports.switchNull = switchNull;
const isUndefinedOrNullError = (v, error) => {
    if ((0, exports.isNotUndefinedAndNull)(v)) {
        return v;
    }
    else {
        throw error;
    }
};
exports.isUndefinedOrNullError = isUndefinedOrNullError;
class SystemError extends Error {
    constructor(message) {
        super(message);
        this.name = "SystemError";
    }
}
/** format system error */
const systemError = (message, ...method) => {
    return new SystemError(`${message} (${method.join(".")})`);
};
exports.systemError = systemError;
