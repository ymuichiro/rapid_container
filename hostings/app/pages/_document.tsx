import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#01579b" />
          <meta
            name="description"
            content="Google Apps Scriptをコーディング不要で開発することが出来ます。非エンジニアの業務効率化を支援致します。"
          />
          <script defer src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>
          <script defer src="https://www.gstatic.com/firebasejs/8.6.2/firebase-analytics.js"></script>
          <script defer src="https://www.gstatic.com/firebasejs/8.6.2/firebase-functions.js"></script>
          <script defer src="https://www.gstatic.com/firebasejs/8.6.2/firebase-auth.js"></script>
          <link rel="dns-prefetch" href="//fonts.googleapis.com" crossOrigin="anonymous" />
          <style
            dangerouslySetInnerHTML={{
              __html: `</style><link
                  rel="preload"
                  href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
                  as="style"
                  type="text/css"
                  crossorigin="anonymous"
                  onload="this.rel = 'stylesheet';"
                /><style>`,
            }}
          ></style>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
