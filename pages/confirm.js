import Head from 'next/head'
import Header from '../components/Header/Header'
import Confirm from '../components/Confirm/Confirm'
import Footer from '../components/Footer/Footer'

const CheckoutPage = () => {
  return (
    <>
      <Head>
        <title>Order confirmed</title>
      </Head>
      <Header />
      <Confirm />
      <Footer />
    </>
  )
}

export default CheckoutPage
