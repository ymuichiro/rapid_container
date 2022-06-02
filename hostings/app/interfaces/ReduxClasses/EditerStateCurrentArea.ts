import CandidateVariableList from "./CandidateVariableList";

export default interface EditerStateCurrentArea {
  // group id of parent (戻る操作の時はここに戻る)
  currentParentGroupId: "root" | string;
  currentParentCardId: string;
  // current group id
  currentGroupId: "root" | string;
  // args from parent group
  argsFromParent: CandidateVariableList[];
}
