import styles from './PizzaCard.module.sass'
import Image from '../Image/Image'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'

const PizzaCard = ({ id, image, title, description, startPrice }) => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.cart[id])

  function addToCart (event) {
    const targetId = event.target.dataset.tag
    dispatch(actions.addToCart(targetId))
  }

  function removeFromCart (event) {
    const targetId = event.target.dataset.tag
    dispatch(actions.removeFromCart(targetId))
  }

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
          {!count
            ? (
              <Button
                data={id}
                action={addToCart}
                solid
              >
                Add
              </Button>
            )
            : (
              <div className={styles.Specifier}>
                <button
                  data-tag={id}
                  className={styles.Decrease}
                  type='button'
                  onClick={removeFromCart}
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  data-tag={id}
                  className={styles.Increase}
                  type='button'
                  onClick={addToCart}
                >
                  +
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default PizzaCard

PizzaCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startPrice: PropTypes.number.isRequired
}
