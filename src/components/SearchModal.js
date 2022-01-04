import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'

const SearchModal = (props) => {
  const modalEl = useRef()
  let { isOpen, setOpen } = useState(false)

  isOpen = props

  const handleClickDoutside = ({ target }) => {
    if (isOpen && !modalEl.current.contains(target)) setOpen(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleClickDoutside)
    return () => {
      window.removeEventListener('click', handleClickDoutside)
    }
  }, [])

  return (
    isOpen &&
    <Modal ref={modalEl}>
      This is Modal contents
    </Modal>
  );
}

export default SearchModal;