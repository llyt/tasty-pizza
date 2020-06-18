import Head from 'next/head'
import Header from '../components/Header/Header'
import Catalog from '../components/Catalog/Catalog'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Tasty Pizza Delivery</title>
      </Head>
      <Header />
      <Catalog />
      <Footer />
    </>
  )
}

export default HomePage
