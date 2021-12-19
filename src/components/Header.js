import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styles from '../assets/Header.module.scss'
import logoStyles from '../assets/Icon.module.scss'
import Logo from '../assets/logo.svg'
import { ReactComponent as MenuIcon } from '../assets/menuIcon.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <button className={logoStyles.buttonLogo} type='button'> <Link to='/main'> <img src={Logo} alt='propsLogo'/> </Link> </button>
        <MenuIcon/>
      </div>
    </header>
  )
}

export default Header