import React from 'react'

import styles from '../assets/Icon.module.scss'
import { ReactComponent as StatusBar } from '../assets/statusBarSafe.svg'
import { ReactComponent as Icon } from '../assets/iconSafe.svg'

const ReportSumSafe = () => {
  return(
    <div>
      <StatusBar/>
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <div style={{fontWeight: '600', color: '#5087FF', flex: '1'}}>양호</div>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '2.7'}}>주의</div>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '1'}}>위험</div>
      </div>
      <Icon/>
      <div className={styles.titleSafe}>몇가지 주의가 필요해요</div>
      <div style={{marginTop: '20px', fontWeight: '600', fontSize: '0.95em', color: 'gray'}}>아래 항목을 확인해주세요</div>
    </div>
  )
}

export default ReportSumSafe