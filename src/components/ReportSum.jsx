import React, { useState, useEffect } from 'react'

import ReportSumSafe from './ReportSumSafe'
import ReportSumCaution from './ReportSumCaution'
import ReportSumDanger from './ReportSumDanger'
import ReportSumHighlights from './ReportSumHighlights'

const ReportSum = (props) => {

  const [reportState, setReportState] = useState()
  const highlightProps = {
    joint: false,
    entireDanger: '주의1',
    buildType: 'AP',
    mortgage: 100000000
  }

  useEffect(() => {
    setReportState(props.state)
  }, [props.state])

  return (
    <>
      {reportState === 'Safe' && 
        <>
          <ReportSumSafe/>
          <ReportSumHighlights props={highlightProps}/>
        </>
      }
      {reportState === 'Caution' && 
        <>
          <ReportSumCaution/>
          <ReportSumHighlights props={highlightProps}/>
        </>
      }
      {reportState === 'Danger' && 
        <>
          <ReportSumDanger/>
          <ReportSumHighlights props={highlightProps}/>
        </>
      }
    </>
  )
}

export default ReportSum