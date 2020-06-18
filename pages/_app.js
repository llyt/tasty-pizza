import App from 'next/app'
import Head from 'next/head'
import('normalize.css')
import('../assets/styles/global.sass')

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Tasty Pizza</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/static/images/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
        </Head>
        <style jsx global>
          {`
          a {
            text-decoration: none;
          }
          
          button:focus {
            outline: none;
          }
          
          body {
            font-family: 'Rubik', sans-serif;
            font-size: 16px;
          }
          
          .container {
            min-width: 280px;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}
        </style>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
