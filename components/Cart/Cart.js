import styles from '../Cart/Cart.module.sass'
import CartItem from '../CartItem/CartItem'
import Button from '../Button/Button'
import Link from 'next/link'

const Cart = () => {
  return (
    <section>
      <div className='container'>
        <div className={styles.Cart}>
          <h1>Cart</h1>
          <ul className={styles.List}>
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
          <div className={styles.Total}>
            <p>Pizza Items: 3</p>
            <p>Delivery: 3 €</p>
            <p className={styles.Summ}>Total: <span>15 €</span></p>
          </div>
          <div className={styles.Bottom}>
            <Link href='/' passHref>
              <a>
                <Button>To menu</Button>
              </a>
            </Link>
            <Link href='/address'>
              <a>
                <Button solid>Continue</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
