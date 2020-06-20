import Head from 'next/head'
import Header from '../components/Header/Header'
import Cart from '../components/Cart/Cart'
import Footer from '../components/Footer/Footer'
import { useSelector } from 'react-redux'
import EmptyCart from '../components/EmptyCart/EmtpyCart'

const CartPage = () => {
  const { totalCount } = useSelector(state => state.cart)
  return (
    <>
      <Head>
        <title>Cart – set up your order</title>
      </Head>
      <Header />
      {totalCount ? <Cart /> : <EmptyCart />}
      <Footer />
    </>
  )
}

export default CartPage
