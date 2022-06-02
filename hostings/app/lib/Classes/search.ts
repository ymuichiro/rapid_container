import AbstractClasses from "../../interfaces/SystemClasses/AbstractClasses";
import { SystemClasses } from "./ScriptClass/index";

/** 利用可能なカテゴリの一覧を返す */
export function getAllCategory(): AbstractClasses[] {
  return SystemClasses.filter(
    (clsx, index) => SystemClasses.findIndex((e) => e.categoryId === clsx.categoryId) === index
  );
}

/** 利用可能なクラス一覧を返す */
export function getAllMethods(categoryId: string): AbstractClasses[] {
  if (categoryId === "") {
    return SystemClasses;
  } else {
    return SystemClasses.filter((clsx) => clsx.categoryId === categoryId);
  }
}

/** 利用するClassesを指定する */
export function getSpecificClasses(categoryId: string, methodId: string): AbstractClasses | undefined {
  return SystemClasses.filter((e1) => e1.categoryId === categoryId).find((e2) => e2.methodId === methodId);
}

/** CategoryId or nameにて部分一致検索を行う */
export function getCategoryPartialMatch(query: string): AbstractClasses[] {
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

export function getMethodPartialMatch(query: string, categoryId: string): AbstractClasses[] {
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

export function isCategoryId(categoryId: string): boolean {
  return getAllCategory().find((e) => e.categoryId === categoryId) !== undefined;
}

export function isMethodId(categoryId: string, methodId: string): boolean {
  return getAllMethods(categoryId).find((e) => e.methodId === methodId) !== undefined;
}
