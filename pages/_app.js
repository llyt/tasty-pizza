import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import Head from 'next/head'
import('normalize.css')
import('../assets/styles/global.sass')

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <title>Tasty Pizza</title>
        <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no" />
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.object
  })
}
