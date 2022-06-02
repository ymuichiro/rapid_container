import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>
  createStyles({
    /* ====================================

    text styles

    ==================================== */
    text_h1: {
      fontSize: theme.typography.h2.fontSize,
      fontFamily: theme.typography.h1.fontFamily,
      fontWeight: "bolder",
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h3.fontSize,
      },
    },
    text_h2: {
      fontSize: theme.typography.h2.fontSize,
      fontFamily: theme.typography.h2.fontFamily,
      fontWeight: "bolder",
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h3.fontSize,
      },
    },
    text_h3: {
      fontSize: theme.typography.h3.fontSize,
      fontFamily: theme.typography.h3.fontFamily,
      fontWeight: "bolder",
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h4.fontSize,
      },
    },
    text_h4: {
      fontSize: theme.typography.h4.fontSize,
      fontFamily: theme.typography.h4.fontFamily,
      fontWeight: "bolder",
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
    text_h5: {
      fontSize: theme.typography.h5.fontSize,
      fontFamily: theme.typography.h5.fontFamily,
      fontWeight: "bolder",
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h6.fontSize,
      },
    },
    text_h6: {
      fontSize: theme.typography.h6.fontSize,
      fontFamily: theme.typography.h6.fontFamily,
      fontWeight: "bolder",
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.subtitle1.fontSize,
      },
    },
    text_body: {
      fontSize: theme.typography.body1.fontSize,
      fontFamily: theme.typography.body1.fontFamily,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    text_remark: {
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.caption.fontFamily,
    },
    text_align: {
      textAlign: "center",
    },
    text_error: {
      color: theme.palette.error.main,
    },
    text_secondary: {
      color: theme.palette.text.secondary,
    },
    text_primary: {
      color: theme.palette.text.primary,
    },
    text_noWrap: {
      whiteSpace: "nowrap",
      overflow: "scroll",
      // overflowX: "hidden",
      overflowY: "hidden",
    },

    /* ====================================

    modal styles

    ==================================== */
    modalBasic: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      padding: "2em",
      borderRadius: "10px",
      [theme.breakpoints.down("sm")]: {
        padding: "0.5em",
      },
    },
    /* ====================================

    card styles

    ==================================== */
    card_basic: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3],
      padding: "2em",
      [theme.breakpoints.down("sm")]: {
        padding: "1em",
      },
    },
    /* ====================================

    position styles

    ==================================== */
    positionCentering: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    positionRight: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    positionXCenterYBottom: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-end",
      width: "100%",
      height: "100%",
    },
    positionXCenterYTop: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      height: "100%",
    },
    positionFixedCentering: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    position_flex_col_y_centering: {
      display: "flex",
      flexWrap: "wrap",
      flex: "0 0 100%",
      justifyContent: "center",
      alignItems: "flexStart",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    },
    /* ====================================

    transition styles

    ==================================== */
    "@keyframes SimpleFadeIn": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
    transitionSimpleFadeIn: {
      animation: "$SimpleFadeIn",
      animationDuration: "1s",
      animationTimingFunction: theme.transitions.easing.easeInOut,
    },
    transitionFadeInDownPending: {
      opacity: 0,
      transform: "translateY(-10vh)",
    },
    transitionFadeInUpPending: {
      opacity: 0,
      transform: "translateY(10vh)",
    },
    transitionFadeInRightPending: {
      opacity: 0,
      transform: "translateX(100vw)",
    },
    transitionFadeInLeftPending: {
      opacity: 0,
      transform: "translateX(-100vw)",
    },
    transitionFadeInRun: {
      // 本来表示するべき位置へ戻す。
      transition: theme.transitions.create(["opacity", "transform"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut,
      }),
      opacity: 1,
      transform: "translateX(0px)",
    },
    transitionFadeInEnd: {
      opacity: 1,
      transform: "translateX(0px)",
    },
    /* ====================================

    other styles

    ==================================== */
    // サイトコンテンツに適用する設定
    contentSectionContainer: {
      maxWidth: theme.breakpoints.values.md,
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1),
      },
    },
    // body要素直下に適用するサイト全体への設定
    rootContainer: {
      overflow: "hidden",
      width: "100%",
    },
    drawerContainer: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    toolbar: theme.mixins.toolbar,
  })
);
