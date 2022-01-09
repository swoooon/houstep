import React from "react";

import Layout from '../components/Layout'
import styles from '../assets/Icon.module.scss'
import SearchAddress from "../components/SearchAddress";
import { ReactComponent as Icon } from '../assets/icon.svg'
import { ReactComponent as Props } from '../assets/PROPS.svg'

const iconStyle = {
  marginTop: '40%'
}

const introStyle = {
  marginTop: '70%'
}

const Search = () => {

  return (
    <Layout>
      <Icon className={styles.icon} style={iconStyle}/>
      <Props className={styles.logo}/>
      <SearchAddress/>
      <div className={styles.intro} style={introStyle}> 안전한 계약을 위한 첫걸음 </div>
    </Layout>
  );
};

export default Search;