import * as React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { createHashKey } from "../../lib/TextParser/utilitiy";
import { EditerListContext } from "../../pages/EditerPage";
import { Editers, useAppDispatch } from "../../stores";
import { ListItemCodeResult } from "./ListItemCodeResult";
import { InputClassesData } from "../../interfaces/ReduxClasses/InputClasses";
import EditersState from "../../interfaces/ReduxClasses/EditersState";

interface ListItemInitialButtonArgs {
  entities: InputClassesData[];
  root: EditersState;
}

export default function ListItemInitialButton(props: ListItemInitialButtonArgs): JSX.Element {
  const [isDuration, setIsDuration] = React.useState<boolean>(false);
  const context = React.useContext(EditerListContext);
  const dispatch = useAppDispatch();
  const [isResultOpen, setIsResultOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isDuration) {
      setIsDuration(false);
      context.reducer({ type: "update", payload: { idForModal: props.entities[0].id, isModalOpen: true } });
    }
  }, [isDuration]);

  const handleInitialButtonClick = () => {
    dispatch(Editers.addBlankBox({ position: 0 }));
    setIsDuration(true);
  };

  const handleCodeOutputButton = () => {
    setIsResultOpen(true);
  };

  const handleExportButton = () => {
    const date = new Date();
    const fileName = `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getMinutes()}_${createHashKey()}.json`;
    const data = new Blob([JSON.stringify(props.root)], { type: "text/json" });
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = window.URL.createObjectURL(data);
    link.setAttribute("download", fileName);
    link.click();
    document.body.removeChild(link);
    alert("エクスポートを行いました。");
  };

  return (
    <React.Fragment>
      {props.entities.length === 0 ? (
        <Button color="secondary" variant="contained" fullWidth onClick={handleInitialButtonClick}>
          作成開始
        </Button>
      ) : (
        <ButtonGroup color="secondary" variant="contained" fullWidth>
          <Button onClick={handleCodeOutputButton}>コード出力</Button>
          <Button onClick={handleExportButton}>エクスポート</Button>
        </ButtonGroup>
      )}
      {isResultOpen && <ListItemCodeResult isOpen={isResultOpen} setIsOpen={setIsResultOpen} entities={props.root} />}
    </React.Fragment>
  );
}
