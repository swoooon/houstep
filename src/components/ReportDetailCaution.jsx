import React from 'react'

import styles from '../assets/Icon.module.scss'
import { ReactComponent as StatusBar } from '../assets/statusBarCaution.svg'

const ReportDetailCaution = () => {
  return(
    <div>
      <StatusBar/>
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '1'}}>양호</div>
        <div style={{fontWeight: '600', color: '#F6953C', flex: '2.7'}}>주의</div>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '1'}}>위험</div>
      </div>
    </div>
  )
}

export default ReportDetailCaution