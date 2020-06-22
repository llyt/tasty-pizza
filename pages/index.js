import Head from 'next/head'
import Header from '../components/Header/Header'
import Catalog from '../components/Catalog/Catalog'
import Footer from '../components/Footer/Footer'
import { wrapper } from '../store'
import { END } from 'redux-saga'
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
  async ({ store }) => {
    store.dispatch(catalogActions.loadPizzaList())
    store.dispatch(END)

    await store.sagaTask.toPromise()
  }
)

export default HomePage
