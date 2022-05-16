import React, { useState, useEffect } from 'react'

import ReportDetailSafe from './ReportDetailSafe'
import ReportDetailCaution from './ReportDetailCaution'
import ReportDetailDanger from './ReportDetailDanger'
import ReportDetailFree from './ReportDetailFree'
import ReportContent from './ReportContent'
import ReportContentFree from './ReportContentFree'
import ReportAddress from './ReportDetailAddress'

import styles from '../assets/Icon.module.scss'

const ReportDetail = (props) => {
  const [ reportState, setReportState ] = useState()
  const [ address, setAddress ] = useState()
  const [ simpledata, setSimpleData ] = useState()
  const [ data, setData ] = useState()

  useEffect(() => {
    setReportState(props.state)
    setAddress(props.address)
    setSimpleData(props.simpledata)
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
            <ReportAddress address={address}/>
          </div>
          <div className={styles.dangerBackgroundFull}>
            <ReportContent data={data}/>
          </div>
        </>
      }
      {reportState === 'Free' && 
        <>
          <div className={styles.safeBackground}>
            <ReportDetailFree/>
            <ReportAddress address={address}/>
          </div>
          <div className={styles.safeBackgroundFull}>
            <ReportContentFree data={data} simpledata={simpledata} address={address}/>
          </div>
        </>
      }
    </div>
  )
}

export default ReportDetail