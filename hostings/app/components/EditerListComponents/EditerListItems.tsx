import * as React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { ListItemActionButtons } from "./ListItemActionButtons";
import { ListItemBetweenButton } from "./ListItemBetweenButton";
import { ListItemCard } from "./ListItemCard";
import { Classes } from "../../lib";
import { isUndefined } from "../../lib/TextParser";
import { InputClassesData } from "../../interfaces/ReduxClasses/InputClasses";
import EditerStateCurrentArea from "../../interfaces/ReduxClasses/EditerStateCurrentArea";

interface EditerListItemArgs {
  entities: InputClassesData[];
  currentGroup: EditerStateCurrentArea;
}

export default function EditerListItem(props: EditerListItemArgs): JSX.Element {
  return (
    <List>
      {props.entities.map((list, index) => {
        const currentSystemClasses = Classes.Search.getSpecificClasses(list.categoryId, list.methodId);
        if (isUndefined(currentSystemClasses)) return <div key={index} />;
        return (
          <Grid container alignItems="center" justify="center" key={index}>
            <Grid item xs={12}>
              <ListItemActionButtons
                id={list.id}
                childGroup={list.childGroupId}
                currentGroup={props.currentGroup}
                systemClasses={currentSystemClasses}
              />
            </Grid>
            <Grid item xs={12}>
              <ListItemCard currentClasses={list} />
            </Grid>
            <Grid item xs={5}>
              <Divider variant="middle" />
            </Grid>
            <Grid item xs={2}>
              <ListItemBetweenButton id={list.id} index={index} entities={props.entities} />
            </Grid>
            <Grid item xs={5}>
              <Divider variant="middle" />
            </Grid>
          </Grid>
        );
      })}
    </List>
  );
}
