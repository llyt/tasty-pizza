import Head from 'next/head'
import Header from '../components/Header/Header'
import Checkout from '../components/Checkout/Checkout'
import Footer from '../components/Footer/Footer'
import EmptyCart from '../components/EmptyCart/EmptyCart'
import { useSelector } from 'react-redux'

const CheckoutPage = () => {
  const { totalCount } = useSelector(state => state.cart)
  return (
    <>
      <Head>
        <title>Checkout and order</title>
      </Head>
      <Header />
      {totalCount ? <Checkout /> : <EmptyCart />}
      <Footer />
    </>
  )
}

export default CheckoutPage
