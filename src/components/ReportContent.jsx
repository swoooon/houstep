import React, { useState, useEffect } from 'react'

import styles from '../assets/Icon.module.scss'

const ReportContent = (props) => {
  const [ address, setAddress ] = useState({complexType: '', detailAddress: '', landCode: ''})
  
  useEffect(() => {
    setAddress(props.address)
  }, [props.state, props.address])

  return (
    <div className={styles.summaryBox}>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
        <div className={styles.summaryTitle}>주소</div>
        <div className={styles.summarySubTitle}>계약할 때 이 주소를 참고해주세요</div>
      </div>
      <div className={styles.summaryText}>{address.detailAddress} [{address.landCode}]</div>
    </div>
  )
}

export default ReportContent