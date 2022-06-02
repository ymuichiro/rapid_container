import TypeTree from "../SystemClasses/TypeTree";

/** Reduxから取り出す変数候補一覧の構造 */
export default interface CandidateVariableList {
  name: string;
  type: TypeTree;
  label: "variable" | "template";
  remark: string;
}
