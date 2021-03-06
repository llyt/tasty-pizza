import styles from './Header.module.sass'
import Logo from '../Logo/Logo'
import CartButton from '../CartButton/CartButton'
import Clock from '../../public/static/images/svg/clock.svg'
import Call from '../../public/static/images/svg/call.svg'

const Header = () => {
  return (
    <header className={styles.Header} id='header'>
      <div className='container'>
        <div className={styles.Content}>
          <div className={styles.Left}>
            <Logo />
            <div className={styles.TimePromise}>
              <Clock />
              <p>30 minutes at your doorstep</p>
            </div>
            <div className={styles.Phone}>
              <a
                href="tel:+498947575141"
                title='Call to us'
              >
                <span className={styles.Text}>+49 8947575141</span>
                <Call className={styles.Icon}/>
              </a>
            </div>
          </div>
          <div className={styles.Right}>
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
