import ButtonGroup from "@material-ui/core/ButtonGroup";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import React, { useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import globalStyles from "../../styles/useGlobalStyles";
import { LoadingCircle } from "../LoadCircle";
import EditersState from "../../interfaces/ReduxClasses/EditersState";
import useGlobalLogic from "../../interfaces/logic/useGlobalLogic";
import Button from "@material-ui/core/Button";

interface ListItemCodeResultArgs {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  entities: EditersState;
}

export const ListItemCodeResult = (props: ListItemCodeResultArgs) => {
  const [mounted, setMounted] = React.useState<boolean>(false);
  const [code, setCode] = React.useState<string>("");
  const [isExecuted, setIsExecuted] = React.useState<boolean>(false);
  const { clsxJoin } = useGlobalLogic();
  // style
  const gs = globalStyles();
  const refs = React.useRef<HTMLInputElement>();

  useEffect(() => {
    let flag = true;
    if (!mounted) {
      fetch(`${location.protocol}//${document.domain}:3000/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.entities),
      })
        .then(async (result) => {
          const json = await result.json();
          if (flag) {
            setCode(json.body);
            setIsExecuted(true);
            flag = true;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setMounted(true);
    return () => {
      flag = false;
    };
  }, []);

  const handleModalChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  };

  const handleClipBoardCopyClick = () => {
    refs.current?.select();
    document.execCommand("copy");
    alert("コピーしました");
  };

  const handleDriveOpenClick = () => {
    window.open("https://drive.google.com/drive");
  };

  const handleScriptNewClick = () => {
    window.open("https://script.new/");
  };

  const handleSpreadsheetNewClick = () => {
    window.open("https://spreadsheet.new/");
  };

  const handleModalClose = () => {
    setCode("");
    setIsExecuted(false);
    props.setIsOpen(false);
  };

  return (
    <Modal open={props.isOpen} onClose={handleModalClose}>
      <div className={clsxJoin(gs.card_basic, gs.positionFixedCentering)} style={{ width: "90vw" }}>
        <LoadingCircle loadFlag={code === "" && !isExecuted} />
        <Collapse in={code !== "" || isExecuted} unmountOnExit>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <TextField
                value={code}
                onChange={handleModalChange}
                color="secondary"
                rows={5}
                rowsMax={10}
                multiline
                fullWidth
                variant="outlined"
                inputRef={refs}
                style={{ marginBottom: "1em" }}
              />
            </Grid>
            <Grid item>
              <ButtonGroup variant="contained" fullWidth>
                <Button color="secondary" onClick={handleClipBoardCopyClick}>
                  コピー
                </Button>
                <Button color="secondary" onClick={handleModalClose}>
                  閉じる
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                <Grid item xs={4}>
                  <div className={gs.positionCentering} style={{ width: "100%" }}>
                    <IconButton onClick={handleDriveOpenClick}>
                      <Icon color="secondary" fontSize="large">
                        folder_open
                      </Icon>
                    </IconButton>
                  </div>
                  <div className={clsxJoin(gs.text_body, gs.text_align, gs.text_secondary)}>ドライブを開く</div>
                </Grid>
                <Grid item xs={4}>
                  <div className={gs.positionCentering} style={{ width: "100%" }}>
                    <IconButton onClick={handleScriptNewClick}>
                      <Icon color="secondary" fontSize="large">
                        code
                      </Icon>
                    </IconButton>
                  </div>
                  <div className={clsxJoin(gs.text_body, gs.text_align, gs.text_secondary)}>新規スクリプト</div>
                </Grid>
                <Grid item xs={4}>
                  <div className={gs.positionCentering} style={{ width: "100%" }}>
                    <IconButton onClick={handleSpreadsheetNewClick}>
                      <Icon color="secondary" fontSize="large">
                        border_all
                      </Icon>
                    </IconButton>
                  </div>
                  <div className={clsxJoin(gs.text_body, gs.text_align, gs.text_secondary)}>新規スプレッドシート</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Collapse>
      </div>
    </Modal>
  );
};
