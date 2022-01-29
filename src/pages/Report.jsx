import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Layout from '../components/LayoutNoHeader'
import ReportFailed from '../components/ReportFailed'

const Report = () => {
  const [ reportState, setReportState ] = useState(false)

  return(
    <Layout>
      {reportState &&
        <>
          <div>success</div>
        </>
      }
      {!reportState &&
        <ReportFailed/>
      }
    </Layout>
  )
}

export default Report;