import React, { useState, useEffect } from 'react'

import ReportDetailSafe from './ReportDetailSafe'
import ReportDetailCaution from './ReportDetailCaution'
import ReportDetailDanger from './ReportDetailDanger'

const ReportDetail = (props) => {

  const [reportState, setReportState] = useState()

  useEffect(() => {
    setReportState(props.state)
  }, [props.state])

  return (
    <>
      {reportState === 'Safe' && 
        <>
          <ReportDetailSafe/>
        </>
      }
      {reportState === 'Caution' && 
        <>
          <ReportDetailCaution/>
        </>
      }
      {reportState === 'Danger' && 
        <>
          <ReportDetailDanger/>
        </>
      }
    </>
  )
}

export default ReportDetail