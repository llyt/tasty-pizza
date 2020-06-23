import styles from './HistoryList.module.sass'
import PropTypes from 'prop-types'
import { formateDate, getTotalPrice, getDollarPrice } from '../../assets/utils'

const HistoryList = ({ list }) => {
  return list.length > 0
    ? (
      <div className={styles.HistoryList}>
        <ul className={styles.List}>
          {list.map(({ createAt, name, address, goods }, index) => {
            const totalInEuro = getTotalPrice(goods)
            return (
              <li
                key={index}
                className={styles.Item}
              >
                <p><span>Date:</span> {formateDate(createAt)}</p>
                <p><span>Name:</span> {name}</p>
                <p><span>Address:</span> {address}</p>
                <p><span>Total:</span> {totalInEuro} € / {getDollarPrice(totalInEuro)} $</p>
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
