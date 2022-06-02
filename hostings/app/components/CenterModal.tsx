import * as React from "react";
import Modal from "@material-ui/core/Modal";
import globalStyles from "../styles/useGlobalStyles";
import useGlobalLogic from "../interfaces/logic/useGlobalLogic";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) =>
  createStyles({
    card: {
      width: "100%",
      overflow: "auto",
      padding: theme.spacing(0),
    },
  })
);

interface CenterModalArgs {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style: React.CSSProperties;
}

/** 画面中央に展開されるMODAL */
const CenterModal: React.FC<CenterModalArgs> = ({ open, onClose, children, style }) => {
  const g = globalStyles();
  const ls = useStyle();
  const { clsxJoin } = useGlobalLogic();

  return (
    <Modal open={open} onClose={onClose}>
      <div className={clsxJoin(g.card_basic, g.positionFixedCentering, ls.card)} style={style}>
        {children}
      </div>
    </Modal>
  );
};

export default CenterModal;
