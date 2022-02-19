import React, { useState, useEffect } from 'react'

import ReportDetailSafe from './ReportDetailSafe'
import ReportDetailCaution from './ReportDetailCaution'
import ReportDetailDanger from './ReportDetailDanger'
import ReportContent from './ReportContent'

import styles from '../assets/Icon.module.scss'

const ReportDetail = (props) => {
  const [ reportState, setReportState ] = useState()
  const [ address, setAddress ] = useState({complexType: '', detailAddress: '', landCode: ''})

  useEffect(() => {
    setReportState(props.state)
    setAddress(props.address)
  }, [props.state, props.address])

  return (
    <div>
      {reportState === 'Safe' && 
        <>
          <div className={styles.safeBackground}>
            <ReportDetailSafe/>
            <ReportContent address={address}/>
          </div>
        </>
      }
      {reportState === 'Caution' && 
        <>
          <div className={styles.cautionBackground}>
            <ReportDetailCaution/>
            <ReportContent address={address}/>
          </div>
        </>
      }
      {reportState === 'Danger' && 
        <>
          <div className={styles.dangerBackground}>
            <ReportDetailDanger/>
            <ReportContent address={address}/>
          </div>
        </>
      }
    </div>
  )
}

export default ReportDetail