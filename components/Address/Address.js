import styles from './Address.module.sass'
import Button from '../Button/Button'
import Link from 'next/link'

const Address = () => {
  return (
    <div className='container'>
      <div className={styles.Address}>
        <h1>Your address</h1>
        <form className={styles.Form}>
          <div className={styles.Row}>
            <input className={styles.fr7} placeholder='Street' type="text" name='street'/>
            <input className={styles.fr3} placeholder='House' type="text" name='house'/>
          </div>
          <div className={styles.Row}>
            <input className={styles.fr3} placeholder='Apartment' type="text" name='apartment'/>
            <input className={styles.fr3} placeholder='Gate' type="text" name='gate'/>
            <input className={styles.fr3} placeholder='Floor' type="text" name='floor'/>
          </div>
          <div className={styles.Row}>
            <textarea placeholder='Comment' name='comment'/>
          </div>
          <div className={styles.Bottom}>
            <Link href='/cart' passHref>
              <a>
                <Button>To Cart</Button>
              </a>
            </Link>
            <Button solid>Confirm</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Address
