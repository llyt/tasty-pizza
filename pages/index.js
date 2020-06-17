import Head from 'next/head'
import Header from '../components/Header/Header'
import Catalog from '../components/Catalog/Catalog'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Tasty Pizza Delivery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Catalog />
      <Footer />
    </>
  )
}

export default HomePage
