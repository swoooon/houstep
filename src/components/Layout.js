import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../assets/Layout.module.scss"

document.body.style.backgroundColor = "grey";

const Layout = (props) => {
  const tempDiv = ((window.innerHeight - 812) / 2 + 'px').toString()
  return (
    <>
      {(window.innerHeight > 812) && 
        <div style={{height: tempDiv}}></div>
      }
      <div className={styles.layout}>
        <Header />
        
        <main className={styles.main}>
          {props.children}
        </main>
      </div>
    </>
  )
}

export default Layout