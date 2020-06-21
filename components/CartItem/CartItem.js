import styles from '../CartItem/CartItem.module.sass'
import Image from '../Image/Image'
import Delete from '../../public/static/images/svg/delete.svg'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

const CartItem = ({ id, image, title, description, startPrice, quantity }) => {
  const dispatch = useDispatch()

  function addToCart () {
    dispatch(cartActions.addToCart(id, startPrice))
  }

  function removeFromCart () {
    dispatch(cartActions.removeFromCart(id))
  }

  function totalRemoveFromCart () {
    dispatch(cartActions.totalRemoveFromCart(id))
  }

  return (
    <li className={styles.CartItem}>
      <div className={styles.Main}>
        <div className={styles.Image}>
          <Image src={image.src}/>
        </div>
        <div className={styles.Body}>
          <h2 className={styles.Title}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.Meta}>
        <div className={styles.Counter}>
          <button
            type='button'
            onClick={removeFromCart}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            type='button'
            onClick={addToCart}
          >
            +
          </button>
        </div>
        <span className={styles.Price}>{startPrice} €</span>
        <button
          className={styles.Delete}
          onClick={totalRemoveFromCart}
        >
          <Delete className={styles.DeleteIcon}/>
        </button>
      </div>
    </li>
  )
}

export default CartItem

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  startPrice: PropTypes.number
}
