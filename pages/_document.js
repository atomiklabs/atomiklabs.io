import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    return { ...page }
  }

  render() {
    return (
      <html>
        <Head>
          <script async data-uid="dea24244dd" src="https://atomik.ck.page/dea24244dd/index.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
