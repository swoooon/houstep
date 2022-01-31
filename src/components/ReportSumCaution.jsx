import React from 'react'

import styles from '../assets/Icon.module.scss'
import { ReactComponent as StatusBar } from '../assets/statusBarCaution.svg'
import { ReactComponent as Icon } from '../assets/iconCaution.svg'

const ReportSumCaution = () => {
  return(
    <div>
      <StatusBar/>
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '1'}}>양호</div>
        <div style={{fontWeight: '600', color: '#F6953C', flex: '2.7'}}>주의</div>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '1'}}>위험</div>
      </div>
      <Icon/>
      <div className={styles.titleCaution}>주의가 필요한 집으로 보여요</div>
      <div style={{marginTop: '20px', fontWeight: '600', fontSize: '0.95em', color: 'gray'}}>아래 항목을 확인해주세요</div>
    </div>
  )
}

export default ReportSumCaution