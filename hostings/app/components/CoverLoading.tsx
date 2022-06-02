import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import globalStyles from "../styles/useGlobalStyles";

// const useStyle = makeStyles((_) =>
//   createStyles({
//     '@keyframes FadeInCircleLoading': {
//       from: {
//         opacity: 0,
//       },
//       to: {
//         opacity: 1,
//       },
//     },
//   })
// )

export function CoverLoading() {
  const clsx = globalStyles();

  return (
    <div
      className={clsx.positionFixedCentering}
      style={{
        zIndex: 9995,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className={clsx.positionFixedCentering}>
        <CircularProgress
          color="primary"
          style={{
            zIndex: 9999,
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}
