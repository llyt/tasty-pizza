import Head from 'next/head'
import Header from '../components/Header/Header'
import Address from '../components/Address/Address'
import Footer from '../components/Footer/Footer'

const AddressPage = () => {
  return (
    <>
      <Head>
        <title>Input your delivery address</title>
      </Head>
      <Header />
      <Address />
      <Footer />
    </>
  )
}

export default AddressPage
