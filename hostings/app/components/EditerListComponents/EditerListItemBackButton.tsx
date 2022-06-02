import * as React from "react";
import globalStyles from "../../styles/useGlobalStyles";
import { Editers, useAppDispatch } from "../../stores";
import Button from "@material-ui/core/Button";

export default function EditerListItemBackButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const gClasses = globalStyles();

  const clickHandle = () => {
    dispatch(Editers.movePrevWindow());
  };

  return (
    <div className={gClasses.positionCentering}>
      <Button color="secondary" variant="outlined" fullWidth onClick={clickHandle}>
        1つ上に戻る
      </Button>
    </div>
  );
}
