import * as React from "react";
import Modal from "@material-ui/core/Modal";
// import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { isNull } from "../lib/TextParser/utilitiy";
import globalStyles from "../styles/useGlobalStyles";
import { Editers, useAppDispatch } from "../stores";
import { BasicFab } from "../components/fab";
import TemplateSelectSection from "../components/ModeSelectComponent/TemplateSelectSection";
import { templateProjectDatas } from "../components/ModeSelectComponent/template";
import Layout from "../components/Layout";
import EditersState from "../interfaces/ReduxClasses/EditersState";
import Head from "next/head";
import useGlobalLogic from "../interfaces/logic/useGlobalLogic";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((theme) =>
  createStyles({
    cardContainer: {
      width: "100%",
      padding: "5vh",
    },
    modalCardContainer: {
      minWidth: "40vw",
      maxWidth: "50vw",
    },
    icon: {
      fontSize: "7em",
      color: theme.palette.text.primary,
    },
  })
);

/**
 *  起動時に新規作成 or 読み込みを選択する起動画面を定義
 *  新規作成、読み込みボタンは画面最上部に設置
 *  その配下にテンプレート呼び出しカード・棚を設置する（別途 functionsの定義要）
 */
export default function ModeSelectContainer() {
  const ls = useStyle();
  const gs = globalStyles();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [importJson, setImportJson] = React.useState<string>("");
  const [importJsonName, setImportJsonName] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { clsxJoin } = useGlobalLogic();

  const clickNewProjectHandle = () => {
    router.push(process.env.NEXT_PUBLIC_PATH_EDITER);
  };

  const clickImportProjectHandle = () => {
    setImportJson("");
    setImportJsonName("");
    setModalOpen(true);
  };

  const fileUploadHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNull(e.currentTarget.files)) {
      setImportJsonName(e.currentTarget.files[0].name);
      e.currentTarget.files[0].text().then((txt) => {
        setImportJson(txt);
      });
    }
  };

  const clickImportSubmitHandle = () => {
    const json = JSON.parse(importJson) as EditersState;
    dispatch(Editers.importJson(json));
    setModalOpen(false);
    router.push(process.env.NEXT_PUBLIC_PATH_EDITER);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE} - テンプレート選択|GAS ローコード作成アプリ</title>
      </Head>
      <Layout>
        {/* テンプレート呼び出しカード */}
        <TemplateSelectSection contents={templateProjectDatas} />

        {/* 新規作成、読み込み選択画面 */}
        <BasicFab
          parentTitle="開く"
          parentIcon="folder"
          childButtonProperty={[
            {
              title: "新規プロジェクトを開く",
              icon: "add",
              handle: clickNewProjectHandle,
            },
            {
              title: "既存プロジェクトを開く",
              icon: "folder_open",
              handle: clickImportProjectHandle,
            },
          ]}
        />

        {/* 既存プロジェクト読み込み画面 */}
        <Modal open={modalOpen} onClose={handleModalClose}>
          <div className={clsxJoin(gs.card_basic, gs.positionFixedCentering, ls.modalCardContainer)}>
            <Button variant="contained" disabled={importJson !== ""} color="secondary" component="label" fullWidth>
              {importJson === "" ? "読み込み（.json）" : "プロジェクトファイルを読み込みました"}
              <input type="file" onChange={fileUploadHandle} style={{ display: "none" }} />
            </Button>
            {importJsonName.length !== 0 && (
              <div
                className={clsxJoin(gs.text_body, gs.text_secondary, gs.text_noWrap)}
                style={{ paddingTop: "1em", paddingBottom: "1em", overflowX: "hidden" }}
              >
                {importJsonName}
              </div>
            )}
            <Divider style={{ marginTop: "1em", marginBottom: "1em" }} />
            <Button
              disabled={importJson === ""}
              color={importJson === "" ? "primary" : "secondary"}
              variant="contained"
              fullWidth
              onClick={clickImportSubmitHandle}
            >
              {importJson === "" ? "プロジェクトファイルを読み込んで下さい" : "編集画面を開く"}
            </Button>
          </div>
        </Modal>
      </Layout>
    </React.Fragment>
  );
}
