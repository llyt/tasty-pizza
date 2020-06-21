import styles from './Checkout.module.sass'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../store/user'

const InputMask = dynamic(
  () => import('react-input-mask'),
  { ssr: false }
)

const Checkout = () => {
  const dispatch = useDispatch()
  const {
    phone = '',
    name = '',
    address = '',
    comment = ''
  } = useSelector((state) => state.user)

  function handleContactInput (event) {
    const { name, value } = event.target
    dispatch(userActions.handleContactInput(name, value))
  }

  return (
    <div className='container'>
      <div className={styles.Checkout}>
        <h1>Order confirm</h1>
        <div className={styles.Row}>
          <label htmlFor='phone'>Phone number</label>
          <InputMask
            mask='+7 (\999) 999-99-99'
            value={phone}
            alwaysShowMask
            onChange={handleContactInput}
            name='phone'

          />
        </div>
        <div className={styles.Row}>
          <label htmlFor='name'>Your name</label>
          <input
            type='text'
            className={styles.NameInput}
            onChange={handleContactInput}
            placeholder='Enter your name'
            value={name}
            name='name'
          />
        </div>
        <div className={styles.Row}>
          <label>Address</label>
          <input
            type='text'
            className={styles.Address}
            onChange={handleContactInput}
            placeholder='Address'
            value={address}
            name='address'
          />
        </div>
        <div className={styles.Row}>
          <label>Comment</label>
          <textarea
            onChange={handleContactInput}
            placeholder='Comment'
            value={comment}
            name='comment'
          />
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
