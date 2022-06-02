import { types } from "@babel/core";
import AbstractClasses from "../../hostings/app/interfaces/SystemClasses/AbstractClasses";
import AbstractRunOptions from "../../hostings/app/interfaces/SystemClasses/RunOptions";

// サーバーサイド用のClassesの形式を定義
export interface ServerClasses extends AbstractClasses {
  getAst: (args: any, entities?: any) => types.Statement;
}

// サーバーサイド用のClassesの形式を定義
export interface ServerRunOptionsClasses extends AbstractRunOptions {
  getAst: (args: any) => types.Statement;
}
