import { InputClassesDataRoot } from "../../interfaces/ReduxClasses";
import CandidateVariableList from "../../interfaces/ReduxClasses/CandidateVariableList";
import EditerStateCurrentArea from "../../interfaces/ReduxClasses/EditerStateCurrentArea";
import { InputClassesData } from "../../interfaces/ReduxClasses/InputClasses";
import Literal from "../../interfaces/SystemClasses/LiteralTypes";
import { ROOT_KEY, Classes } from "../../lib";
import { createHashKey, isUndefinedOrNullError, systemError } from "../../lib/TextParser/utilitiy";

/** 新しいGourpIDを生成する */
export const getNewGroupId = (entities: InputClassesDataRoot) => {
  const keys = Object.keys(entities);
  let counter = keys.length;
  while (keys.indexOf(`group${counter}`) !== -1) {
    counter++;
  }
  return `group${counter}`;
};

/** 現在のGroupID、ParentId情報を返す */
export const getCurrentGroupInfo = (current: EditerStateCurrentArea[]): EditerStateCurrentArea => {
  if (current.length === 0) {
    console.error("redux currentに値が存在しない為、修復します");
    return {
      currentGroupId: ROOT_KEY,
      currentParentCardId: ROOT_KEY,
      currentParentGroupId: ROOT_KEY,
      argsFromParent: [],
    };
  } else {
    return current[current.length - 1];
  }
};

/** Template変数群を生成する */
export const createTemplateValue = (): CandidateVariableList[] => {
  return [
    {
      type: { parent: Literal.BOOLEAN, child: Literal.NONE },
      name: "true",
      remark: `Literal/BooleanLiteral`,
      label: "template",
    },
    {
      type: { parent: Literal.BOOLEAN, child: Literal.NONE },
      name: "false",
      remark: `Literal/BooleanLiteral`,
      label: "template",
    },
    {
      type: { parent: Literal.IF_OPERATOR, child: Literal.NONE },
      name: "==",
      remark: `比較する値は同一か判定`,
      label: "template",
    },
    {
      type: { parent: Literal.IF_OPERATOR, child: Literal.NONE },
      name: "!==",
      remark: `比較する値は同一ではないか判定`,
      label: "template",
    },
    {
      type: { parent: Literal.IF_OPERATOR, child: Literal.NONE },
      name: "===",
      remark: `比較する値は厳密に同一か判定`,
      label: "template",
    },
    {
      type: { parent: Literal.IF_OPERATOR, child: Literal.NONE },
      name: "!==",
      remark: `比較する値は厳密に同一ではないか判定`,
      label: "template",
    },
    {
      type: { parent: Literal.IF_OPERATOR, child: Literal.NONE },
      name: ">",
      remark: `比較される値より小さいか判定`,
      label: "template",
    },
    {
      type: { parent: Literal.IF_OPERATOR, child: Literal.NONE },
      name: "<",
      remark: `比較される値より大きいか判定`,
      label: "template",
    },
    {
      type: { parent: Literal.IF_OPERATOR, child: Literal.NONE },
      name: ">=",
      remark: `比較される値以下であるか判定`,
      label: "template",
    },
    {
      type: { parent: Literal.IF_OPERATOR, child: Literal.NONE },
      name: "<=",
      remark: `比較される値以上であるか判定`,
      label: "template",
    },
  ];
};

/** 既存カードと被らないHashを生成する */
export const createNewHash = (cards: InputClassesData[]) => {
  let id = createHashKey();
  while (cards.map((e) => e.id).indexOf(id) !== -1) {
    id = createHashKey();
  }
  return id;
};

/** 利用可能な変数とその情報の一覧を取得する */
export const getCanUseVariables = (
  rootEntities: InputClassesDataRoot,
  currentInfo: EditerStateCurrentArea[],
  id: string
): { all: string[]; ago: CandidateVariableList[] } => {
  // 各親Groupの変数取得
  const parentVariableNames =
    currentInfo[currentInfo.length - 1].currentGroupId === ROOT_KEY
      ? []
      : currentInfo
          .map((info) => {
            const position = rootEntities[info.currentParentGroupId].findIndex(
              (e) => e.id === info.currentParentCardId
            );
            return rootEntities[info.currentParentGroupId]
              .filter((_, i) => i < position)
              .filter((e) => e.categoryId !== "")
              .filter((e) => e.methodId !== "")
              .filter((e) => e.outputVariableName !== "")
              .map<CandidateVariableList>((e) => {
                const current = isUndefinedOrNullError(
                  Classes.Search.getSpecificClasses(e.categoryId, e.methodId),
                  systemError(
                    "指定されたCategoryId,MethodIdが実装されていません。",
                    e.categoryId,
                    e.methodId,
                    getCanUseVariables.name
                  )
                );
                return {
                  type: current.outputType,
                  name: e.outputVariableName,
                  remark: `${current.categoryName}/${current.methodName}`,
                  label: "variable",
                };
              });
          })
          .flatMap((e) => e);

  // 親から渡される引数値の編集取得
  const argsFromParent =
    currentInfo[currentInfo.length - 1].currentGroupId === ROOT_KEY
      ? []
      : currentInfo.map((info) => info.argsFromParent).flatMap<CandidateVariableList>((e) => e);

  // 現Groupの変数取得
  const currentGourpPosition = rootEntities[currentInfo[currentInfo.length - 1].currentGroupId].findIndex(
    (e) => e.id === id
  );
  const currentVariableNames = rootEntities[currentInfo[currentInfo.length - 1].currentGroupId]
    .filter((_, i) => i < currentGourpPosition)
    .filter((e) => e.categoryId !== "")
    .filter((e) => e.methodId !== "")
    .filter((e) => e.outputVariableName !== "")
    .map<CandidateVariableList>((e) => {
      const current = isUndefinedOrNullError(
        Classes.Search.getSpecificClasses(e.categoryId, e.methodId),
        systemError(
          "指定されたCategoryId,MethodIdが実装されていません。",
          e.categoryId,
          e.methodId,
          getCanUseVariables.name
        )
      );
      return {
        type: current.outputType,
        name: e.outputVariableName,
        remark: `${current.categoryName}/${current.methodName}`,
        label: "variable",
      };
    })
    .flatMap((e) => e);

  return {
    all: [
      ...parentVariableNames.map((e) => e.name),
      ...argsFromParent.map((e) => e.name),
      ...currentVariableNames.map((e) => e.name),
    ],
    ago: [...parentVariableNames, ...argsFromParent, ...currentVariableNames, ...createTemplateValue()],
  };
};

/** 対象のカードを取得する */
export const getSpecificCard = (inputClassesDatas: InputClassesData[], id: string): InputClassesData => {
  return isUndefinedOrNullError(
    inputClassesDatas.find((e) => e.id === id),
    systemError("指定されたIDが見つかりません", getSpecificCard.name)
  );
};
