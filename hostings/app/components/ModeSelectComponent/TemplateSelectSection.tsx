import * as React from "react";
import Container from "@material-ui/core/Container";
import { Grid, InputAdornment, TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { TemplateContents } from "./template";
import { Editers, useAppDispatch } from "../../stores";
import { useRouter } from "next/router";
import EditersState from "../../interfaces/ReduxClasses/EditersState";
import useGlobalStyles from "../../styles/useGlobalStyles";
import useGlobalLogic from "../../interfaces/logic/useGlobalLogic";

interface TemplateSelectSectionArgs {
  contents: TemplateContents[];
}

const useStyle = makeStyles((theme) =>
  createStyles({
    searchInput: {
      padding: theme.spacing(1),
    },
    cardContainer: {
      width: "100%",
    },
    cardContentTitle: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
      marginTop: "0.5em",
      marginBottom: "1em",
    },
  })
);

/** テンプレートの読み込みを行う */
export default function TemplateSelectSection(props: TemplateSelectSectionArgs) {
  const ls = useStyle();
  const gs = useGlobalStyles();
  const [search, setSearch] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { clsxJoin } = useGlobalLogic();

  const searchInputHandle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  // ここでReduxを更新し、画面を切り替える
  const handleTemplateClick = (jsonCode: EditersState) => {
    dispatch(Editers.importJson(jsonCode));
    router.push(process.env.NEXT_PUBLIC_PATH_EDITER);
  };

  return (
    <Container>
      <div
        className={clsxJoin(gs.text_align, gs.text_h5, gs.text_primary)}
        style={{ padding: "1em", paddingTop: "2em" }}
      >
        テンプレート
      </div>
      <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            color="secondary"
            placeholder="検索します..."
            onChange={searchInputHandle}
            className={ls.searchInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon>search</Icon>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {props.contents
          .filter((e) => new RegExp(search).test(e.title) || new RegExp(search).test(e.description))
          .map((content, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <ListItem button onClick={(_) => handleTemplateClick(content.code)} style={{ height: "100%" }}>
                  <div
                    className={clsxJoin(ls.cardContainer, gs.card_basic)}
                    style={{ textAlign: "center", height: "100%" }}
                  >
                    <Icon fontSize="large" style={{ color: content.iconColor }}>
                      {content.icon}
                    </Icon>
                    <div className={clsxJoin(gs.text_h6, ls.cardContentTitle)}>{content.title}</div>
                    <div className={clsxJoin(gs.text_body)}>{content.description}</div>
                  </div>
                </ListItem>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
