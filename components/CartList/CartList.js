import styles from './CartList.module.sass'
import CartItem from '../CartItem/CartItem'
import PropTypes from 'prop-types'

const CartList = ({ selected, addedItems }) => {
  return (
    <ul className={styles.CartList}>
      {selected.map(({ id, image, title, description, startPrice }, index) => {
        if (addedItems[id].count !== 0) {
          return (
            <CartItem
              key={index + title}
              id={id}
              quantity={addedItems[id].count}
              image={image}
              title={title}
              description={description}
              startPrice={startPrice}
            />
          )
        }
      })}
    </ul>
  )
}

export default CartList

CartList.propTypes = {
  selected: PropTypes.array,
  addedItems: PropTypes.shape({
    count: PropTypes.number
  })
}
