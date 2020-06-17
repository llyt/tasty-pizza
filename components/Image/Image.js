import PropTypes from 'prop-types'

const Image = ({ src, alt }) => {
  return (
    <>
      <img src={`/static/images/${src}` } alt={alt} />
      <style jsx>
        {
          `
          img {
            width: 100%;
            height: auto;
          }
          `
        }
      </style>
    </>
  )
}

export default Image

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}
