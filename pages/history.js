import Head from 'next/head'
import Header from '../components/Header/Header'
import History from '../components/History/History'
import Footer from '../components/Footer/Footer'

const HistoryPage = () => {
  return (
    <>
      <Head>
        <title>Order confirmed</title>
      </Head>
      <Header />
      <History />
      <Footer />
    </>
  )
}

export default HistoryPage
