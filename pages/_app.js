import('normalize.css')

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>
        {`
          a {
            text-decoration: none;
          }
          
          button:focus {
            outline: none;
          }
          
          body {
            font-family: 'Rubik', sans-serif;
            font-size: 16px;
          }
          
          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
