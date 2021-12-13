import styles from "../assets/Header.module.scss"
import { ReactComponent as Logo } from "../assets/logo.svg"
import { ReactComponent as MenuIcon } from "../assets/menuIcon.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <Logo/>
        <MenuIcon/>
      </div>
    </header>
  )
}

export default Header