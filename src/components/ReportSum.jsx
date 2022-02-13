import React, { useState, useEffect } from 'react'

import ReportSumSafe from './ReportSumSafe'
import ReportSumCaution from './ReportSumCaution'
import ReportSumDanger from './ReportSumDanger'
import ReportSumHighlights from './ReportSumHighlights'

const ReportSum = (props) => {

  const [reportState, setReportState] = useState()
  const highlightProps = {
    joint: true,
    entireDanger: '주의1',
    buildType: 'AP',
    mortgage: 100000000,
    ownership: '회사',
    isGr2: true,
    eulguDangerList: ['임차권'],
    kapguDangerList: ['가처분'],
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