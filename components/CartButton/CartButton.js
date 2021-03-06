import { useSelector } from 'react-redux'
import styles from './CartButton.module.sass'
import Link from 'next/link'

const CartButton = () => {
  const count = useSelector((state) => state.cart.totalCount) || 0

  return (
    <div className={styles.CartButton}>
      <Link href="/cart">
        <a className={styles.Button}>
          Cart
          <span>{count}</span>
        </a>
      </Link>
    </div>
  )
}

export default CartButton
