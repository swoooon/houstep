import styles from "../assets/Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>Logo</div>

        <button class="btn btn-light">Login</button>
      </div>
    </header>
  )
}

export default Header