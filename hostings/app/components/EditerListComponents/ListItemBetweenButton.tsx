import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import globalStyles from "../../styles/useGlobalStyles";
import { Editers, useAppDispatch } from "../../stores";
import { EditerListContext } from "../../pages/EditerPage";
import { InputClassesData } from "../../interfaces/ReduxClasses/InputClasses";

interface ListItemBetweenButtonArgs {
  id: string;
  index: number;
  entities: InputClassesData[];
}

export function ListItemBetweenButton(props: ListItemBetweenButtonArgs) {
  const dispath = useAppDispatch();
  const gClasses = globalStyles();
  const context = React.useContext(EditerListContext);
  const [isDuration, setIsDuration] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isDuration) {
      setIsDuration(false);
      context.reducer({
        type: "update",
        payload: {
          idForModal: props.entities[props.index + 1].id,
          isModalOpen: true,
        },
      });
    }
  }, [props.entities]);

  const clickHandle = () => {
    setIsDuration(true);
    dispath(Editers.addBlankBox({ position: props.index + 1 }));
  };

  return (
    <div className={gClasses.positionCentering}>
      <IconButton color="secondary" onClick={clickHandle}>
        <Icon>add_circle</Icon>
      </IconButton>
    </div>
  );
}
