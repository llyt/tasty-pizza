import styles from './Cart.module.sass'
import CartIcon from '../../public/static/images/svg/cart.svg'
const Cart = () => {
  return (
    <div className={styles.Cart}>
      <div className={styles.Button}>
        <CartIcon className={styles.Icon} />
        <span>2</span>
      </div>
    </div>
  )
}
export default Cart
