"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMethodId = exports.isCategoryId = exports.getMethodPartialMatch = exports.getCategoryPartialMatch = exports.getSpecificClasses = exports.getAllMethods = exports.getAllCategory = void 0;
const index_1 = require("./ScriptClass/index");
/** 利用可能なカテゴリの一覧を返す */
function getAllCategory() {
  return index_1.SystemClasses.filter(
    (clsx, index) => index_1.SystemClasses.findIndex((e) => e.categoryId === clsx.categoryId) === index
  );
}
exports.getAllCategory = getAllCategory;
/** 利用可能なクラス一覧を返す */
function getAllMethods(categoryId) {
  if (categoryId === "") {
    return index_1.SystemClasses;
  } else {
    return index_1.SystemClasses.filter((clsx) => clsx.categoryId === categoryId);
  }
}
exports.getAllMethods = getAllMethods;
/** 利用するClassesを指定する */
function getSpecificClasses(categoryId, methodId) {
  return index_1.SystemClasses.filter((e1) => e1.categoryId === categoryId).find((e2) => e2.methodId === methodId);
}
exports.getSpecificClasses = getSpecificClasses;
/** CategoryId or nameにて部分一致検索を行う */
function getCategoryPartialMatch(query) {
  const _query = query
    .split(/[\s]/)
    .map((e) => e.toLowerCase())
    .filter((e) => !/[\s]/.test(e) && e !== "");
  return getAllCategory().filter((e) =>
    _query.every(
      (s) =>
        `${e.categoryId.toLowerCase()} ${e.categoryName.toLowerCase()} ${e.categoryDescription.toLowerCase()} ${e.keyword.toLowerCase()}`.indexOf(
          s
        ) !== -1
    )
  );
}
exports.getCategoryPartialMatch = getCategoryPartialMatch;
function getMethodPartialMatch(query, categoryId) {
  const _query = query
    .split(/[\s]/)
    .map((e) => e.toLowerCase())
    .filter((e) => !/[\s]/.test(e) && e !== "");
  return getAllMethods(categoryId).filter((e) =>
    _query.every(
      (s) =>
        `${e.methodId.toLowerCase()} ${e.methodName.toLowerCase()} ${e.methodDescription.toLowerCase()} ${e.keyword.toLowerCase()}`.indexOf(
          s
        ) !== -1
    )
  );
}
exports.getMethodPartialMatch = getMethodPartialMatch;
function isCategoryId(categoryId) {
  return getAllCategory().find((e) => e.categoryId === categoryId) !== undefined;
}
exports.isCategoryId = isCategoryId;
function isMethodId(categoryId, methodId) {
  return getAllMethods(categoryId).find((e) => e.methodId === methodId) !== undefined;
}
exports.isMethodId = isMethodId;
