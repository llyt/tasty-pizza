import { useSelector } from 'react-redux'
import styles from '../Cart/Cart.module.sass'
import CartList from '../CartList/CartList'
import Button from '../Button/Button'
import Link from 'next/link'
import { getDollarPrice } from '../../assets/utils'

function selectedItems (allItems, addedItems) {
  const itemsId = Object.keys(addedItems)
  return allItems.filter(({ _id }) => itemsId.includes(`${_id}`))
}

const Cart = () => {
  const { added: addedItems, totalCount, totalAmount, deliveryCost } = useSelector((state) => state.cart)
  const allItems = useSelector((state) => state.catalog.all)
  const selected = selectedItems(allItems, addedItems)
  return (
    <section>
      <div className='container'>
        <div className={styles.Cart}>
          <h1 className={styles.Title}>Cart</h1>
          <CartList
            selected={selected}
            addedItems={addedItems}
          />
          <div className={styles.Total}>
            <p>Pizza Items: {totalCount}</p>
            <p>Delivery: {deliveryCost} €</p>
            <div className={styles.Amount}>
              Total:
              <div className={styles.Currency}>
                <span>{totalAmount + deliveryCost} €</span>
                <span>/ {getDollarPrice(totalAmount + deliveryCost)} $</span>
              </div>
            </div>
          </div>
          <div className={styles.Bottom}>
            <Link href='/' passHref>
              <a>
                <Button>To menu</Button>
              </a>
            </Link>
            <Link href='/checkout'>
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
