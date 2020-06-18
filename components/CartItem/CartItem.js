import styles from '../CartItem/CartItem.module.sass'
import Image from '../Image/Image'
import Delete from '../../public/static/images/svg/delete.svg'

const CartItem = () => {
  return (
    <li className={styles.CartItem}>
      <div className={styles.Main}>
        <div className={styles.Image}>
          <Image src='cheese.jpg'/>
        </div>
        <div className={styles.Body}>
          <h2>Cheese</h2>
          <p>Large portion of mozzarella, tomato sauce</p>
        </div>
      </div>
      <div className={styles.Counter}>
        <button
          type='button'
        >
          -
        </button>
        <span>1</span>
        <button
          type='button'
        >
          +
        </button>
      </div>
      <span>4 €</span>
      <button className={styles.Delete}>
        <Delete className={styles.DeleteIcon}/>
      </button>
    </li>
  )
}

export default CartItem
