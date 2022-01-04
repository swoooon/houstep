import React, { useState } from 'react'
import Modal from 'react-modal'

import styles from '../assets/Icon.module.scss'
import { BsSearch } from 'react-icons/bs'

const SearchButton = (props) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  return (
    <div>
      <button className={styles.searchBar} type='button' onClick={() => setModalIsOpen(true)}> 
      &nbsp;&nbsp;&nbsp; 주소를 입력해 주세요 <BsSearch className={styles.bsSearch}/> </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        This is Modal content
        <button onClick={() => setModalIsOpen(false)}>Modal Open</button>
      </Modal>
    </div>
  );
}

Modal.setAppElement('#root')

export default SearchButton;