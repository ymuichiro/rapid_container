import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Layout from "../components/Layout";
import { ModalFormContainer } from "../components/ModalFormComponent/ModalFormContainer";
import { systemError } from "../lib/TextParser/utilitiy";
import { useAppSelector } from "../stores";
import { getCurrentGroupInfo } from "../stores/editers/functions";
import EditerListItemBackButton from "../components/EditerListComponents/EditerListItemBackButton";
import EditerListItem from "../components/EditerListComponents/EditerListItems";
import ListItemInitialButton from "../components/EditerListComponents/ListItemInitialButton";
import Container from "@material-ui/core/Container";
import EditerListRunOptions from "../components/EditerListComponents/EditerListRunOptions";
import Head from "next/head";

export interface EditerListReducerState {
  isModalOpen: boolean;
  idForModal: string;
}

export type ACTIONTYPE = { type: "update"; payload: EditerListReducerState };

interface EditerListContext {
  state: EditerListReducerState;
  reducer: React.Dispatch<ACTIONTYPE>;
}

const INITIAL_STATE: EditerListReducerState = {
  idForModal: "",
  isModalOpen: false,
};

export const EditerListContext = React.createContext<EditerListContext>({} as EditerListContext);

function localReducer(_: EditerListReducerState, action: ACTIONTYPE): EditerListReducerState {
  switch (action.type) {
    case "update":
      return action.payload;
    default:
      throw systemError("定義されていないActionが渡されました", localReducer.name, EditerPage.name);
  }
}

export default function EditerPage() {
  const editers = useAppSelector((e) => e.editers);
  const [state, reducer] = React.useReducer(localReducer, INITIAL_STATE);
  const [currentGroupId, setCurrentGroupId] = React.useState<string>("root");

  React.useEffect(() => {
    setCurrentGroupId(getCurrentGroupInfo(editers.current).currentGroupId);
  }, [editers.current]);

  return (
    <React.Fragment>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE} - 編集画面|GAS ローコード作成アプリ</title>
      </Head>
      <Layout>
        <Container maxWidth="md">
          <EditerListContext.Provider value={{ state, reducer }}>
            {state.idForModal !== "" && (
              <ModalFormContainer
                entities={editers.entities[currentGroupId]}
                root={editers.entities}
                current={editers.current}
              />
            )}
            <Grid container spacing={3} style={{ marginTop: "1em" }}>
              <Grid item xs={12}>
                {editers.current.length !== 1 ? <EditerListItemBackButton /> : <EditerListRunOptions />}
              </Grid>
              <Grid item xs={12}>
                <EditerListItem
                  entities={editers.entities[currentGroupId]}
                  currentGroup={editers.current[editers.current.length - 1]}
                />
              </Grid>
              <Grid item xs={12}>
                <ListItemInitialButton entities={editers.entities[currentGroupId]} root={editers} />
              </Grid>
            </Grid>
            <div style={{ height: "1em" }} />
          </EditerListContext.Provider>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
