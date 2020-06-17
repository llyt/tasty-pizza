import styles from './PizzaCard.module.sass'
import Image from '../Image/Image'
import Button from '../Button/Button'
import PropTypes from 'prop-types'

const PizzaCard = ({ image, title, description, startPrice }) => {
  return (
    <div className={styles.PizzaCard}>
      <div className={styles.Image}>
        <Image
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className={styles.Body}>
        <h2 className={styles.Title}>{title}</h2>
        <p className={styles.Description}>{description}</p>
        <div className={styles.Bottom}>
          <p className={styles.Price}><span>from</span> {startPrice} €</p>
          <Button
            action={() => {}}
            solid
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PizzaCard

PizzaCard.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startPrice: PropTypes.number.isRequired
}
