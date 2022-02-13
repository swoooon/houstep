import React from 'react'

import styles from '../assets/Icon.module.scss'
import { ReactComponent as StatusBar } from '../assets/statusBarDanger.svg'

const ReportDetailDanger = () => {
  return(
    <div>
      <StatusBar/>
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '1'}}>양호</div>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '2.7'}}>주의</div>
        <div style={{fontWeight: '600', color: '#FF5A56', flex: '1'}}>위험</div>
      </div>
    </div>
  )
}

export default ReportDetailDanger