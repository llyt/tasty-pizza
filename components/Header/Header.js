import styles from './Header.module.sass'
import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'
import Clock from '../../public/static/images/svg/clock.svg'
import Call from '../../public/static/images/svg/call.svg'
import Login from '../../public/static/images/svg/login.svg'

const Header = () => {
  return (
    <header className={styles.Header}>
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
            <button
              className={styles.Login}
              type='button'
              onClick={() => {}}
              title='Log In'
            >
              <Login />
            </button>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
