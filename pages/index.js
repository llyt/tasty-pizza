import Head from 'next/head'
import Header from '../components/Header/Header'
import Catalog from '../components/Catalog/Catalog'
import Footer from '../components/Footer/Footer'
import pizzas from '../mocs/Pizzas'
import { wrapper } from '../store'
import { catalogActions } from '../store/catalog'

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

export const getStaticProps = wrapper.getStaticProps(
  ({ store }) => {
    store.dispatch(catalogActions.initPizzasList(pizzas))
  }
)

export default HomePage
