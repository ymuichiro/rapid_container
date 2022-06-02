import React, { FC, CSSProperties } from "react";

interface ImageBaseArgs extends BasicComponentArgs {
  url: string;
}

/**
 * コンポーネント内の全面収まるイメージを定義（Google Photoを利用予定）
 * @param props
 */
export const InComponentFitImage: FC<ImageBaseArgs> = (props) => {
  return (
    <img
      className={props.className}
      src={props.url}
      style={{
        objectFit: "contain",
        maxHeight: "100%",
        maxWidth: "100%",
      }}
    />
  );
};

/**
 * Div element to apply abackground（Google Photoを利用予定）
 * @param props.url
 */
export const BackGroundImageDiv: FC<ImageBaseArgs> = (props) => {
  const css: CSSProperties = {
    backgroundImage: `url(${props.url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={!props.style ? css : { ...css, ...props.style }} className={props.className}>
      {!props.children ? <div /> : props.children}
    </div>
  );
};
