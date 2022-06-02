import Head from "next/head";
import * as React from "react";
import Layout from "../components/Layout";
import useGlobalLogic from "../interfaces/logic/useGlobalLogic";
import globalStyles from "../styles/useGlobalStyles";

/** ユーザーからの問合せ受付を行う */
export default function HelpPage() {
  const gs = globalStyles();
  const { clsxJoin } = useGlobalLogic();

  return (
    <React.Fragment>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE} - お問合せ|GAS ローコード作成アプリ</title>
      </Head>
      <Layout>
        <h1 className={clsxJoin(gs.text_align, gs.text_h3)} style={{ margin: "1em", fontWeight: "bold" }}>
          お問合せ
        </h1>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "95vh",
            overflow: "scroll",
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScU7HmF9Nq5hIkzDlI0Gkotp5tmTIKcm4D7OW8eIwLOl50Qnw/viewform?embedded=true"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            読み込んでいます…
          </iframe>
        </div>
      </Layout>
    </React.Fragment>
  );
}
