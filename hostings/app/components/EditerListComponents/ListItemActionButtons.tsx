import * as React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import globalStyles from "../../styles/useGlobalStyles";
import { Editers, useAppDispatch } from "../../stores";
import { InputClassesData } from "../../interfaces/ReduxClasses/InputClasses";
import Literal from "../../interfaces/SystemClasses/LiteralTypes";
import AbstractClasses from "../../interfaces/SystemClasses/AbstractClasses";
import EditerStateCurrentArea from "../../interfaces/ReduxClasses/EditerStateCurrentArea";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((theme) =>
  createStyles({
    ListItemCardActionButtons: {
      margin: "0em 0.5em 0.5em",
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.default,
    },
  })
);

interface ListItemActionButtonsArgs {
  /** カードが保有する唯一性のある識別子 */
  id: InputClassesData["id"];
  childGroup: InputClassesData["childGroupId"];
  currentGroup: EditerStateCurrentArea;
  systemClasses: AbstractClasses;
}

const actionButtonsFlag = {
  up: "up",
  down: "down",
  close: "close",
  nest: "nest",
};

export function ListItemActionButtons(props: ListItemActionButtonsArgs) {
  const dispatch = useAppDispatch();
  const gClasses = globalStyles();
  const lClasses = useStyle();

  const clickHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.getAttribute("data-flag")) {
      case actionButtonsFlag.up:
        return dispatch(Editers.swapUp({ id: props.id }));
      case actionButtonsFlag.down:
        return dispatch(Editers.swapDown({ id: props.id }));
      case actionButtonsFlag.close:
        if (props.systemClasses.hasNest) dispatch(Editers.deleteGroup({ groupId: props.childGroup }));
        return dispatch(Editers.remove({ id: props.id }));
      case actionButtonsFlag.nest:
        return dispatch(
          Editers.moveNextWindow({
            currentGroupId: props.childGroup,
            currentParentCardId: props.id,
            currentParentGroupId: props.currentGroup.currentGroupId,
            argsFromParent: [
              {
                type:
                  props.systemClasses.inputType.parent === Literal.ARRAY2
                    ? { parent: Literal.ARRAY, child: props.systemClasses.inputType.child }
                    : { parent: props.systemClasses.inputType.child, child: Literal.NONE },
                remark: `親グループからの引数値:${
                  props.systemClasses.inputType.parent === Literal.ARRAY2
                    ? `${Literal.ARRAY}.${props.systemClasses.inputType.child}`
                    : `${props.systemClasses.inputType.child}`
                }`,
                label: "variable",
                name: `${props.childGroup}Value`,
              },
            ],
          })
        );
      default:
        console.error("error", ListItemActionButtons.name, `指定した要素 "data-flag" がありません`);
    }
  };

  return (
    <div style={{ width: "100%" }} className={gClasses.positionRight}>
      {props.systemClasses.hasNest && (
        <Button
          className={lClasses.ListItemCardActionButtons}
          variant="text"
          size="small"
          color="secondary"
          data-flag={actionButtonsFlag.nest}
          onClick={clickHandle}
        >
          ＞＞ ネストを開く
        </Button>
      )}
      <Button
        className={lClasses.ListItemCardActionButtons}
        variant="text"
        size="small"
        data-flag={actionButtonsFlag.up}
        onClick={clickHandle}
      >
        <Icon>expand_less</Icon>
      </Button>
      <Button
        className={lClasses.ListItemCardActionButtons}
        variant="text"
        size="small"
        data-flag={actionButtonsFlag.down}
        onClick={clickHandle}
      >
        <Icon>expand_more</Icon>
      </Button>
      <Button
        variant="text"
        size="small"
        data-flag={actionButtonsFlag.close}
        className={lClasses.ListItemCardActionButtons}
        onClick={clickHandle}
      >
        <Icon>close</Icon>
      </Button>
    </div>
  );
}
