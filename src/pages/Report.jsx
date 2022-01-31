import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Layout from '../components/LayoutNoHeader'
import ReportComponent from '../components/ReportComponent'
import ReportFailed from '../components/ReportFailed'

const Report = () => {
  const [ reportLoaded, setReportLoaded ] = useState(true)
  const [ reportState, setReportState ] = useState('Good')  // Good, Caution, Danger

  return(
    <Layout>
      {reportLoaded &&
        <ReportComponent state={reportState}/>
      }
      {!reportLoaded &&
        <ReportFailed/>
      }
    </Layout>
  )
}

export default Report;