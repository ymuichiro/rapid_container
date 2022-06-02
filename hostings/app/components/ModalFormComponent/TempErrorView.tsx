import * as React from "react";
import useGlobalLogic from "../../interfaces/logic/useGlobalLogic";
import useGlobalStyles from "../../styles/useGlobalStyles";

export const TempErrorView: React.FC = (props) => {
  const gs = useGlobalStyles();
  const { clsxJoin } = useGlobalLogic();
  return (
    <div className={clsxJoin(gs.text_body, gs.text_secondary)} style={{ width: "100%" }}>
      {props.children}
    </div>
  );
};
