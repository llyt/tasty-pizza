import Head from 'next/head'
import Header from '../components/Header/Header'
import Checkout from '../components/Checkout/Checkout'
import Footer from '../components/Footer/Footer'

const CheckoutPage = () => {
  return (
    <>
      <Head>
        <title>Checkout and order</title>
      </Head>
      <Header />
      <Checkout />
      <Footer />
    </>
  )
}

export default CheckoutPage
