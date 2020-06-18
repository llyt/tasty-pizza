import styles from './Logo.module.sass'
import LogoIcon from '../../public/static/images/svg/logo.svg'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Logo = ({ imgOnly }) => {
  return (
    <div className={styles.Logo}>
      <Link href='/' passHref>
        <a title='To Main Page'><LogoIcon /></a>
      </Link>
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
