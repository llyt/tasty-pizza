import styles from './Footer.module.sass'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className='container'>
        <div className={styles.Wrapper}>
          <div className={styles.Links}>
            <a href="#">About</a>
            <a href="#">Сompositions</a>
            <a href="#">Privacy</a>
          </div>
          <div className={styles.Center}>
            <Logo imgOnly />
          </div>
          <a
            href="tel:+498947575141"
            className={styles.Phone}
          >
            +49 8947575141
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
