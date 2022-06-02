import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import globalStyles from "../styles/useGlobalStyles";

/** Load中、index9999に表示し、ユーザーの操作を止める */
export function LoadingCircle(props: { loadFlag: boolean }) {
  const clsx = globalStyles();

  return (
    <div>
      {props.loadFlag ? (
        <div
          className={clsx.positionFixedCentering}
          style={{
            zIndex: 9995,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className={clsx.positionFixedCentering}>
            <CircularProgress
              color="secondary"
              style={{
                zIndex: 9999,
                opacity: 1,
                margin: "2em",
              }}
            />
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
