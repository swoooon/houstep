import styles from "../assets/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contents}>
        <h2 className={styles.title}>
          Contact Us - contact@houstep.co
        </h2>
      </div>
    </footer>
  )
}

export default Footer