import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(){
    return(
      <html>
        <Head>
          <title>Next Starter App</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link rel="stylesheet" href="/static/spectre.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument