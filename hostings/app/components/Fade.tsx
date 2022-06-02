import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import globalStyles from "../styles/useGlobalStyles";

type PositionStatus = "up" | "down" | "in";

type FadeArgs = {
  nowHeight: number;
  children: ReactNode;
  /** class名にて適用するアニメーションを指定する */
  transitionType: string;
};

/** 要素が画面内に入ったか否かを判定する */
const positionStatus = (now: number, bottom: number, offsetTop: number): PositionStatus => {
  if (offsetTop > bottom) {
    return "up";
  } else if (offsetTop - 100 < bottom && offsetTop - 100 < now) {
    return "down";
  } else {
    return "in";
  }
};

export const Fade: FC<FadeArgs> = ({ nowHeight, children, transitionType }) => {
  const ref = useRef<HTMLDivElement>(null);
  const clsx = globalStyles();
  const [first, setFirst] = useState<boolean>(false);
  const [clsxName, setClsxName] = useState<string>(transitionType);

  useEffect(() => {
    if (!first) {
      const bottom = nowHeight + window.innerHeight / 1.3;
      const offsetTop = ref.current?.offsetTop;
      if (offsetTop !== undefined) {
        const status = positionStatus(nowHeight, bottom, offsetTop);
        if (status === "up") {
          first ? setClsxName(clsx.transitionFadeInEnd) : setClsxName(transitionType);
        } else {
          setFirst(true);
          setClsxName(clsx.transitionFadeInRun);
        }
      }
    }
  }, [nowHeight]);

  return (
    <div ref={ref} className={clsxName}>
      {children}
    </div>
  );
};
