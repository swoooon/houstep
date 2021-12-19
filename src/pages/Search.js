import React from "react";

import Layout from "../components/Layout";
import styles from '../assets/Icon.module.scss'
import { ReactComponent as Icon } from '../assets/icon.svg'
import { ReactComponent as Props } from '../assets/PROPS.svg'
import { BsSearch } from 'react-icons/bs'

const iconStyle = {
  marginTop: '40%'
}

const introStyle = {
  marginTop: '80%'
}

const Search = () => {
  return (
    <Layout>
      <Icon className={styles.icon} style={iconStyle}/>
      <Props className={styles.logo}/>
      <button className={styles.searchBar} type='button'> 
      &nbsp;&nbsp;&nbsp; 주소를 입력해 주세요 <BsSearch className={styles.bsSearch}/> </button>
      <div className={styles.intro} style={introStyle}> 안전한 계약을 위한 첫걸음 </div>
      {/**<form className="d-flex">
        <input style={ searchStyle } className="form-control me-2" type="search" 
        placeholder="주소를 입력해 주세요" aria-label="Search"/>
        <button style={ searchStyle } className="btn btn-outline-success" type="submit">Search</button>
      </form>**/}
    </Layout>
  );
};

export default Search;