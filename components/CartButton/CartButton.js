import styles from './CartButton.module.sass'
import CartIcon from '../../public/static/images/svg/cart.svg'
import Link from 'next/link'

const CartButton = () => {
  return (
    <div className={styles.CartButton}>
      <Link href="/order/checkout">
        <a className={styles.Button}>
          <CartIcon className={styles.Icon} />
          <span>2</span>
        </a>
      </Link>
    </div>
  )
}
export default CartButton
