import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Layout from '../components/LayoutNoHeader'
import ReportComponent from '../components/ReportComponent'
import ReportFailed from '../components/ReportFailed'

const Report = () => {
  const [ reportLoaded, setReportLoaded ] = useState(true)
  const [ reportState, setReportState ] = useState('Safe')  // Safe, Caution, Danger
  const [ address, setAddress ] = useState()
  const [ data, setData ] = useState({
    joint: true,
    mortgageDanger: '주의1',
    buildType: 'AP',
    mortgage: 100000000,
    ownership: '회사',
    isGr2: true,
    eulguDangerList: ['임차권'],
    kapguDangerList: ['가처분'],
  })

  const props = useLocation()

  useEffect(() => {
    setAddress(props.state.address)
  }, [props])
  
  return(
    <Layout>
      {reportLoaded &&
        <ReportComponent state={reportState} address={address} data={data}/>
      }
      {!reportLoaded &&
        <ReportFailed/>
      }
    </Layout>
  )
}

export default Report;