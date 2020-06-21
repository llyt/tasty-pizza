import styles from './EmptyCart.module.sass'
import Link from 'next/link'
import Button from '../Button/Button'
import Image from '../Image/Image'

const EmptyCart = () => {
  return (
    <section>
      <div className='container'>
        <div className={styles.EmptyCart}>
          <h1 className={styles.Title}>Cart is Empty</h1>
          <div className={styles.Image}>
            <Image src='emptycart.png'/>
          </div>
          <Link href='/' passHref>
            <a>
              <Button solid>Choose your pizza</Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EmptyCart
