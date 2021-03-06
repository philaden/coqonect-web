import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link rel="stylesheet" href="/static/nprogress.css" />
          <link rel="stylesheet" href="/static/tachyons.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" key="viewport" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
