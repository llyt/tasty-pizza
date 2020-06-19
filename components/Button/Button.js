import styles from './Button.module.sass'
import PropTypes from 'prop-types'

const Button = ({ data, type, action, solid, children }) => {
  const solidClass = solid ? styles.orange : ''
  return (
    <button
      data-tag={data}
      type={type || 'button'}
      onClick={action}
      className={[styles.Button, solidClass].join(' ')}
    >{children}
    </button>
  )
}

export default Button

Button.propTypes = {
  data: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  action: PropTypes.func,
  solid: PropTypes.bool
}
