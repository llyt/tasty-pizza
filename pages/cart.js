import Head from 'next/head'
import Header from '../components/Header/Header'
import Cart from '../components/Cart/Cart'
import Footer from '../components/Footer/Footer'

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Cart – set up your order</title>
      </Head>
      <Header />
      <Cart />
      <Footer />
    </>
  )
}

export default CartPage
