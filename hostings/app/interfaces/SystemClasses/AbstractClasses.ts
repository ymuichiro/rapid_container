import TypeTree from "./TypeTree";

type ArgumentInClasses = {
  name: string;
  type: TypeTree;
  require: boolean;
  key: string;
  isMultiLine: boolean;
  isObject: boolean;
};

export default interface AbstractClasses {
  readonly categoryId: string;
  readonly categoryName: string;
  readonly categoryDescription: string;
  readonly methodId: string;
  readonly methodName: string;
  readonly methodDescription: string;
  readonly inputType: TypeTree;
  readonly outputType: TypeTree;
  readonly argumentType: ArgumentInClasses[];
  readonly cardCategoryIcon: string;
  readonly hasNest: boolean;
  readonly keyword: string;
}
