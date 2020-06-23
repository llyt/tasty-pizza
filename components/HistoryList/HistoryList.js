import styles from './HistoryList.module.sass'
import PropTypes from 'prop-types'

const HistoryList = ({ list }) => {
  return list.length > 0
    ? (
      <div className={styles.HistoryList}>
        <ul className={styles.List}>
          {list.map(({ createAt, name, address, goods }, index) => {
            return (
              <li
                key={index}
                className={styles.Item}
              >
                <p><span>Date:</span> {formateDate(createAt)}</p>
                <p><span>Name:</span> {name}</p>
                <p><span>Address:</span> {address}</p>
                <p><span>Total:</span> {getTotalPrice(goods)} €

                </p>
              </li>
            )
          })}
        </ul>
      </div>
    )
    : (
      <p>Orders not found</p>
    )
}
export default HistoryList

HistoryList.propTypes = {
  list: PropTypes.array
}

function formateDate(stamp) {
  return new Date(++stamp).toLocaleString()
}

function getTotalPrice(goods) {
  return goods.reduce((acc, item) => {
    acc = acc + (item.count * item.price)
    return acc
  }, 0)
}
