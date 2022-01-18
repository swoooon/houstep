import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Layout from '../components/Layout'
import styles from '../assets/Icon.module.scss'
import { ReactComponent as Icon } from '../assets/icon.svg'
import { ReactComponent as Props } from '../assets/PROPS.svg'
import KakaoLogin from '../assets/kakaoLogin.png'

const kakaoStyle = {
  marginTop: "70%"
}

const Main = () => {
  return (
    <Layout>
      <Icon className={styles.icon}/>
      <Props className={styles.logo}/>
      <div className={styles.intro}> 안전한 계약을 위한 첫걸음 </div>
      
      <button className={styles.buttonLogo} style={kakaoStyle} type='button'> 
      <Link to='/search'> <img src={KakaoLogin} alt='kakaoLogin'/> </Link> </button>
    </Layout>
  );
};

export default Main;