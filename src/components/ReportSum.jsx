import React, { useState, useEffect } from 'react'

import ReportSumSafe from './ReportSumSafe'
import ReportSumCaution from './ReportSumCaution'
import ReportSumDanger from './ReportSumDanger'
import ReportSumFree from './ReportSumFree'
import ReportSumHighlights from './ReportSumHighlights'

const ReportSum = (props) => {

  const [ reportState, setReportState ] = useState()
  const [ data, setData ] = useState()

  useEffect(() => {
    setReportState(props.state)
    setData(props.data)
  }, [props])

  return (
    <>
      {reportState === 'Safe' && 
        <>
          <ReportSumSafe/>
          <ReportSumHighlights data={data}/>
        </>
      }
      {reportState === 'Caution' && 
        <>
          <ReportSumCaution/>
          <ReportSumHighlights data={data}/>
        </>
      }
      {reportState === 'Danger' && 
        <>
          <ReportSumDanger/>
          <ReportSumHighlights data={data}/>
        </>
      }
      {reportState === 'Free' && 
        <>
          <ReportSumFree/>
          <ReportSumHighlights data={data}/>
        </>
      }
    </>
  )
}

export default ReportSum