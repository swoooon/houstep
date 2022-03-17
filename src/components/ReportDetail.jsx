import React, { useState, useEffect } from 'react'

import ReportDetailSafe from './ReportDetailSafe'
import ReportDetailCaution from './ReportDetailCaution'
import ReportDetailDanger from './ReportDetailDanger'
import ReportContent from './ReportContent'
import ReportAddress from './ReportDetailAddress'

import styles from '../assets/Icon.module.scss'

const ReportDetail = (props) => {
  const [ reportState, setReportState ] = useState()
  const [ address, setAddress ] = useState()
  const [ data, setData ] = useState()

  useEffect(() => {
    setReportState(props.state)
    setAddress(props.address)
    setData(props.data)
  }, [props])

  return (
    <div>
      {reportState === 'Safe' &&  // need change to one switch case
        <>
          <div className={styles.safeBackground}>
            <ReportDetailSafe/>
            <ReportAddress address={address}/>
          </div>
          <div className={styles.safeBackgroundFull}>
            <ReportContent data={data}/>
          </div>
        </>
      }
      {reportState === 'Caution' && 
        <>
          <div className={styles.cautionBackground}>
            <ReportDetailCaution/>
            <ReportAddress address={address}/>
          </div>
          <div className={styles.cautionBackgroundFull}>
            <ReportContent data={data}/>
          </div>
        </>
      }
      {reportState === 'Danger' && 
        <>
          <div className={styles.dangerBackground}>
            <ReportDetailDanger/>
          </div>
          <div className={styles.dangerBackgroundFull}>
            <ReportContent data={data}/>
          </div>
        </>
      }
      {reportState === 'Free' && 
        <>
          <div className={styles.dangerBackground}>
            <ReportDetailDanger/>
          </div>
          <div className={styles.dangerBackgroundFull}>
            <ReportContent data={data}/>
          </div>
        </>
      }
    </div>
  )
}

export default ReportDetail