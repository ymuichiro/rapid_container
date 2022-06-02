import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avater from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import { makeStyles, createStyles } from "@material-ui/core/styles";

interface ScrollListItem {
  itemTexts: { p: string; s: string; v: string; i: string }[];
  action: (value: string) => void;
}

const useStyle = makeStyles((theme) =>
  createStyles({
    listContainer: {
      maxHeight: "15em",
      overflow: "scroll",
      overflowX: "hidden",
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[2],
    },
  })
);

export default function ScrollListItem(props: ScrollListItem) {
  const { listContainer } = useStyle();

  const handleListItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const v = e.currentTarget.getAttribute("data-key");
    props.action(v);
  };

  return (
    <List className={listContainer}>
      {props.itemTexts.map((item, index) => (
        <ListItem key={index} divider button data-key={item.v} dense onClick={handleListItemClick}>
          <ListItemAvatar>
            <Avater>
              <Icon fontSize="small">{item.i}</Icon>
            </Avater>
          </ListItemAvatar>
          <ListItemText primary={item.p} secondary={item.s} />
        </ListItem>
      ))}
    </List>
  );
}
