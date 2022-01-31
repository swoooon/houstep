import React, { useState, useEffect } from 'react'

import ReportSumSafe from './ReportSumSafe'
import ReportSumCaution from './ReportSumCaution'
import ReportSumDanger from './ReportSumDanger'

const ReportSum = (props) => {

  const [reportState, setReportState] = useState()

  useEffect(() => {
    setReportState(props.state)
  }, [props.state])

  return (
    <>
      {reportState === 'Safe' && <ReportSumSafe/>}
      {reportState === 'Caution' && <ReportSumCaution/>}
      {reportState === 'Danger' && <ReportSumDanger/>}
    </>
  )
}

export default ReportSum