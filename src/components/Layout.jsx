import Header from "./Header"
// eslint-disable-next-line no-unused-vars
import Footer from "./Footer"
import styles from "../assets/Layout.module.scss"

document.body.style.backgroundColor = "#EEF1F6";

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
      <Footer/>
    </>
  )
}

export default Layout