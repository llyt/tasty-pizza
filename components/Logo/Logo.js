import styles from './Logo.module.sass'
import LogoIcon from '../../public/static/images/svg/logo.svg'
import PropTypes from 'prop-types'

const Logo = ({ imgOnly }) => {
  return (
    <div className={styles.Logo}>
      <LogoIcon />
      {!imgOnly ? (
        <div className={styles.Title}>
          <p><span>Tasty</span> Pizza</p>
          <span>Fast Delivery</span>
        </div>
      ) : ''}

    </div>
  )
}

export default Logo

Logo.propTypes = {
  imgOnly: PropTypes.bool
}
