import Google from "./GoogleTypes";
import Literal from "./LiteralTypes";

export type Types = Literal | Google;

export default interface TypeTree {
  parent: Types;
  child: Types;
}
