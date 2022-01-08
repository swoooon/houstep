import React, { useState } from 'react'
import Modal from 'react-modal'

import styles from '../assets/Icon.module.scss'
import { BsSearch } from 'react-icons/bs'

const SearchButton = (props) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ searchClicked, setSearchClicked ] = useState(false);
  const [ address, setAddress ] = useState('');

  // When modal closed, call function initialize()
  const initialize = () => {
    setModalIsOpen(false);
    setSearchClicked(false);
  }

  // When search button in modal content clicked, call function checkAddress(value)
  const checkAddress = (value) => {
    setSearchClicked(true);
    setAddress(value);
    console.log(value);
  }

  return (
    <div>
      <button className={styles.searchBar} type='button' onClick={() => setModalIsOpen(true)}> 
      &nbsp;&nbsp;&nbsp; 주소를 입력해 주세요 <BsSearch className={styles.bsSearch}/> </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => initialize()}
        style= {{
          overlay: {
            position: 'fixed',
            width: '375px',
            margin: '0 auto',
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            width: '375px',
            marginTop: '88px',
            marginLeft: '-40px',
            marginBottom: '-40px',
            //paddingTop: '42px',
            //textAlign: 'center',
            borderRadius: '40px 40px 0px 0px'
          }
        }}
      >
        <div className={styles.searchDiv}>
          <input className={styles.searchBar} id='searchAddress'
            style={{
              width: '100%', 
              top: '-30px', 
              padding: '15px', 
              paddingRight: '45px'
            }} 
            type='text' placeholder='주소를 입력해 주세요'/>
          <BsSearch style={{
            position: 'absolute',
            top: '32px',
            right: '18px',
            }}
            onClick= {() => checkAddress(document.getElementById('searchAddress').value)}
          />
        </div>
        {searchClicked &&
          address
        }
        {!searchClicked && 
          <>
            <div className={styles.searchH2}>검색 Tip</div>
            <div className={styles.searchH3}>• 도로명 + 건물번호</div>
            <div className={styles.searchH3}>• 동/읍/면/리 + 번지</div>
            <div className={styles.searchH3}>• 건물명, 아파트명</div>

            <div className={styles.searchEx} >EX: 서울시 마포구 00아파트 제 00동 제 00호</div>
          </>
        }
      </Modal>
    </div>
  );
}

Modal.setAppElement('#root')

export default SearchButton;