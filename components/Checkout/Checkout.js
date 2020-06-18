import styles from './Checkout.module.sass'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Button from '../Button/Button'

const InputMask = dynamic(
  () => import('react-input-mask'),
  { ssr: false }
)

const Checkout = () => {
  return (
    <div className='container'>
      <div className={styles.Checkout}>
        <h1>Order confirm</h1>
        <div className={styles.Row}>
          <label htmlFor='name'>Your name</label>
          <input
            className={styles.NameInput}
            placeholder='Enter your name'
            type="text"
            name='name'
          />
        </div>
        <div className={styles.Row}>
          <label htmlFor='phone'>Phone number</label>
          <InputMask
            mask="+4\9 999-99-99"
            alwaysShowMask
            onChange={() => {}}
          />
        </div>
        <div className={styles.Row}>
          <label>Address</label>
          <div className={styles.Address}>
            <p>Enhuberstraße 10, Gate 2, Floor 3</p>
          </div>
        </div>
        <div className={styles.Bottom}>
          <Link href='/cart' passHref>
            <a>
              <Button>To Cart</Button>
            </a>
          </Link>
          <Link href='/order' passHref>
            <a>
              <Button solid>Order</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout
