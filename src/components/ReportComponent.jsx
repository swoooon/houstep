import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import styles from '../assets/Icon.module.scss'
import ReportSum from './ReportSum'
import ReportDetail from './ReportDetail'
import Previous from '../assets/previous.svg'

const Report = (props) => {
  const [ reportState, setReportState ] = useState()
  const [ tabState, setTabState ] = useState(0)

  useEffect(() => {
    setReportState(props.state)
  }, [props.state])

  const contents = {
    0: <ReportSum/>,
    1: <ReportDetail/>
  }

  return (
    <>
      <Link to='/search'>
        <div style={{ display: 'flex' }}>
            <img src={Previous} alt='Previous button'
              style={{ marginLeft: '32px', marginTop: '35px', flex: '1' }}
            />
            <div style={{ flex: '100' }}></div>
          </div>
      </Link>
      <div>리포트</div>

      <ul className={`${
        reportState === 'Good' ? styles.reportTabGood :
        reportState === 'Caution' ? styles.reportTabCaution :
        reportState === 'Danger' ? styles.reportTabDanger : ''
      }`}>
        <li className={`${tabState === 0? styles.active: ''}`} onClick={() => setTabState(0)}>요약 리포트</li>
        <li className={`${tabState === 1? styles.active: ''}`} onClick={() => setTabState(1)}>세부 리포트</li>
      </ul>

      <div>{reportState}</div>
      <div className='contentArea'>
        {contents[tabState]}
      </div>
    </>
  )
}

export default Report
