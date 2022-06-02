import { InputClassesDataRoot } from ".";
import EditerStateCurrentArea from "./EditerStateCurrentArea";
import ReduxRunOptions from "./ReduxRunOptions";

export default interface EditersState {
  // current group info
  current: EditerStateCurrentArea[];
  // user input data to send server
  entities: InputClassesDataRoot;
  // trigger settings
  RunOptions: ReduxRunOptions;
}
