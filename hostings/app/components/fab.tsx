import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";

const useStyle = makeStyles((theme) =>
  createStyles({
    parentFab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      background: theme.palette.secondary.main,
      color: "white",
    },
    childFab: {
      background: theme.palette.secondary.light,
      color: "white",
    },
    childModalCard: {
      position: "fixed",
      bottom: theme.spacing(11),
      right: theme.spacing(2),
    },
  })
);

export interface BasicFabArgs extends BasicComponentArgs {
  parentTitle: string;
  parentIcon: string;
  childButtonProperty: {
    title: string;
    icon: string;
    handle: () => void;
  }[];
}

export function BasicFab(props: BasicFabArgs) {
  const classes = useStyle();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const clickParentFabHandle = () => {
    setIsOpen(true);
  };

  const closeModalHandle = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title={props.parentTitle} placement="left">
        <Fab variant="round" className={classes.parentFab} onClick={clickParentFabHandle}>
          <Icon>{props.parentIcon}</Icon>
        </Fab>
      </Tooltip>

      <Modal open={isOpen} onClose={closeModalHandle} closeAfterTransition>
        <div className={classes.childModalCard}>
          <Grid container direction="column" justify="flex-end" spacing={2}>
            {props.childButtonProperty.map((iconProperty, index) => (
              <Grid item key={index}>
                <Grow in={isOpen}>
                  <div>
                    <Tooltip title={iconProperty.title} placement="left" open={true}>
                      <Fab variant="round" onClick={iconProperty.handle} className={classes.childFab}>
                        <Icon>{iconProperty.icon}</Icon>
                      </Fab>
                    </Tooltip>
                  </div>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </div>
      </Modal>
    </React.Fragment>
  );
}
