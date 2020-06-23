import styles from './Button.module.sass'
import PropTypes from 'prop-types'

const Button = ({ type, action, solid, disabled, children }) => {
  const solidClass = solid ? styles.orange : ''
  return (
    <button
      type={type || 'button'}
      onClick={action}
      className={[styles.Button, solidClass].join(' ')}
      disabled={disabled}
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
  disabled: PropTypes.bool,
  solid: PropTypes.bool
}
