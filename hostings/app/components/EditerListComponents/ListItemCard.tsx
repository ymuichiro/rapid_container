import * as React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Classes } from "../../lib";
import globalStyles from "../../styles/useGlobalStyles";
import { EditerListContext } from "../../pages/EditerPage";
import { InputClassesData } from "../../interfaces/ReduxClasses/InputClasses";

const useStyle = makeStyles((_) =>
  createStyles({
    Title: {
      paddingTop: "1em",
      paddingBottom: "1em",
      paddingRight: "1em",
    },
    Content: {
      padding: "1em",
    },
    ContentTable: {},
    ContentTableTd1: {
      padding: "0.4em",
    },
    ContentTableTd2: {
      padding: "0.4em",
    },
  })
);

interface ListItemCardArgs {
  currentClasses: InputClassesData;
}

export function ListItemCard(props: ListItemCardArgs) {
  const gs = globalStyles();
  const lClasses = useStyle();
  const context = React.useContext(EditerListContext);

  const clickHandle = () => {
    context.reducer({ type: "update", payload: { idForModal: props.currentClasses.id, isModalOpen: true } });
  };

  const getCurrentEditer = () => {
    return Classes.Search.getSpecificClasses(props.currentClasses.categoryId, props.currentClasses.methodId);
  };

  return (
    <div data-id={props.currentClasses.id} onClick={clickHandle} className={gs.card_basic}>
      {((current) => {
        if (current === null || current === undefined) return <div />;
        return (
          <React.Fragment>
            <Grid container>
              <Grid item xs={2}>
                <div className={gs.positionCentering}>
                  <Icon fontSize="large">event_available</Icon>
                </div>
              </Grid>
              <Grid item xs={1}>
                <Divider orientation="vertical" />
              </Grid>
              <Grid item xs={9}>
                <ListItemText
                  primary={current.methodName}
                  secondary={current.methodDescription}
                  className={lClasses.Title}
                />
              </Grid>
            </Grid>
            {/* 2段目 */}
            <Divider />
            <div className={lClasses.Content}>
              <table className={lClasses.ContentTable}>
                <tbody>
                  {props.currentClasses.inputBaseValue !== "" && (
                    <tr>
                      <td className={lClasses.ContentTableTd1}>
                        <div className={gs.text_body}>入力値</div>
                      </td>
                      <td className={lClasses.ContentTableTd2}>{props.currentClasses.inputBaseValue}</td>
                    </tr>
                  )}
                  {props.currentClasses.outputVariableName !== "" && (
                    <tr>
                      <td className={lClasses.ContentTableTd1}>
                        <div className={gs.text_body}>出力変数名</div>
                      </td>
                      <td className={lClasses.ContentTableTd2}>{props.currentClasses.outputVariableName}</td>
                    </tr>
                  )}
                  {props.currentClasses.inputArgumentValue
                    .filter((e) => e.value !== "")
                    .map((e, i) => (
                      <tr key={i}>
                        <td className={lClasses.ContentTableTd1}>引数-{e.key}</td>
                        <td className={lClasses.ContentTableTd2}>= {e.value}</td>
                      </tr>
                    ))}
                  {props.currentClasses.comment !== "" && (
                    <tr>
                      <td className={lClasses.ContentTableTd1}>
                        <div className={gs.text_body}>コメント</div>
                      </td>
                      <td className={lClasses.ContentTableTd2}>{props.currentClasses.comment}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        );
      })(getCurrentEditer())}
    </div>
  );
}
