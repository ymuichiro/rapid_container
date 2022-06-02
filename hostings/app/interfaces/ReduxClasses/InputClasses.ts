export type InputArgumentObject = {
  key: string;
  value: string;
  isObject: boolean;
};

export declare interface InputClassesData {
  id: string;
  outputVariableName: string;
  inputBaseValue: string;
  inputArgumentValue: InputArgumentObject[]; // CallExpressionの引数を定義
  categoryId: string;
  methodId: string;
  comment: string;
  groupId: string;
  childGroupId: string;
  parentGroup: {
    grouptId: string;
    id: string; // Card ID
  };
}
