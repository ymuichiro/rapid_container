import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import React from "react";

const useStyle = makeStyles((_) =>
  createStyles({
    BasicInductionContainer: {
      animation: "$FuwaFuwaFadeIn",
      animationDuration: "3s",
      animationTimingFunction: "ease-in-out",
      animationDirection: "alternate",
      animationIterationCount: "infinite",
      borderLeft: "1px solid rgba(0, 0, 0, 0.54)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.54)",
      transform: "rotate(-45deg)",
      width: "24px",
      height: "24px",
    },
    "@keyframes FuwaFuwaFadeIn": {
      from: {
        opacity: 0.3,
        transform: "translateY(30px) rotate(-45deg)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0px) rotate(-45deg)",
      },
    },
  })
);

type BasicArgs = BasicComponentArgs;

export function BasicInduction(props: BasicArgs) {
  const classes = useStyle();
  return (
    <div className={classes.BasicInductionContainer + (!props.className ? "" : props.className)} style={props.style} />
  );
}
