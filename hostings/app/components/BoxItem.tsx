// 小物を定義する
import React, { CSSProperties, FC, ReactNode } from "react";
import Paper from "@material-ui/core/Paper";
import useTheme from "@material-ui/core/styles/useTheme";

interface CylinderBoxArgs extends BasicComponentArgs {
  children: ReactNode;
}

/** 円筒型の箱を定義 */
export const CylinderBox: FC<CylinderBoxArgs> = (props) => {
  const theme = useTheme();
  const css: CSSProperties = {
    display: "inline-block",
    padding: "0.3em 1em 0.3em 1em",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
    margin: "0em 0.5em 1em 0.5em",
    borderRadius: "1em / 50%",
  };

  return <Paper style={{ ...css, ...props.style }}>{props.children}</Paper>;
};
