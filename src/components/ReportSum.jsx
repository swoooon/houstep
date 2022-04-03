import React, { useState, useEffect } from 'react'

import ReportSumSafe from './ReportSumSafe'
import ReportSumCaution from './ReportSumCaution'
import ReportSumDanger from './ReportSumDanger'
import ReportSumFree from './ReportSumFree'
import ReportSumHighlights from './ReportSumHighlights'
import ReportSumHighlightsFree from './ReportSumHighlightsFree'

const ReportSum = (props) => {

  const [ reportState, setReportState ] = useState()
  const [ simpledata, setSimpleData ] = useState()
  const [ data, setData ] = useState()
  

  useEffect(() => {
    setReportState(props.state)
    setSimpleData(props.simpledata)
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
          <ReportSumHighlightsFree data={data} simpledata={simpledata}/>
        </>
      }
    </>
  )
}

export default ReportSum