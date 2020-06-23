import { useSelector } from 'react-redux'
import Link from 'next/link'
import styles from './Confirm.module.sass'
import Button from '../Button/Button'

const Confirm = () => {
  const { response } = useSelector((state) => state.user)
  return (
    <div className='container'>
      <div className={styles.Confirm}>
        {response
          ? (
            <>
              <h1>Order has been confirmed!</h1>
              <p>Your order № {response.orderId}</p>
              <p>Expect a call from the operator.</p>
              <Link href='/history' passHref>
                <a>
                  <Button solid>Orders history</Button>
                </a>
              </Link>
            </>
          )
          : (
            <>
              <h1>Oops! You have not made an order yet</h1>
              <Link href='/' passHref>
                <a>
                  <Button solid>Choose your Pizza</Button>
                </a>
              </Link>
            </>
          )}
      </div>
    </div>
  )
}

export default Confirm
