import Head from 'next/head'
import Header from '../components/Header/Header'
import Catalog from '../components/Catalog/Catalog'
import Footer from '../components/Footer/Footer'
import pizzas from '../mocs/Pizzas'

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

export function getStaticProps () {
  return {
    props: {
      initialReduxState: {
        catalog: [...pizzas],
        cart: {}
      }
    }
  }
}

export default HomePage
