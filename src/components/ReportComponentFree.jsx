import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import styles from '../assets/Icon.module.scss'
import ReportSum from './ReportSum'
import ReportDetail from './ReportDetail'
import Previous from '../assets/previous.svg'
import NextWarn from '../assets/nextWarn.svg'

const Report = (props) => {
  const [ reportState, setReportState ] = useState()
  const [ tabState, setTabState ] = useState(0)
  const [ address, setAddress ] = useState()
  const [ simpledata, setSimpleData ] = useState()
  const [ data, setData ] = useState()

  useEffect(() => {
    setReportState(props.state)
    setAddress(props.address)
    setSimpleData(props.simpledata)
    setData(props.data)
  }, [props])

  const contents = {
    0: <ReportSum state={reportState} data={data} simpledata={simpledata}/>,
    1: <ReportDetail state={reportState} address={address} data={data} simpledata={simpledata}/>
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
      <div style={{fontWeight: '600', marginBottom: '6px'}}>리포트</div>

      <ul className={`${
        reportState === 'Safe' ? styles.reportTabSafe :
        reportState === 'Caution' ? styles.reportTabCaution :
        reportState === 'Danger' ? styles.reportTabDanger : 
        reportState === 'Free' ? styles.reportTabFree : ''
      }`}>
        <li className={`${tabState === 0? styles.active: ''}`} onClick={() => setTabState(0)}>맞춤형 유의사항</li>
        <li className={`${tabState === 1? styles.active: ''}`} onClick={() => setTabState(1)}>맞춤형 리포트</li>
      </ul>

      <div className='contentArea'>
        {contents[tabState]}
      </div>

      {tabState === 0 && 
        <>
          <div className={styles.summaryDetails} style={{marginTop: '60px'}}>
            <div style={{marginLeft: '20px'}} onClick={() => setTabState(1)}>더 자세히 알고싶어요! <img className={styles.summaryNext} src={NextWarn} alt='Next button'/> </div>
          </div>
          <div className={styles.summaryMents} style={{marginTop: '30px'}}>
            <div>해당 리포트는 AI가 부동산 공부(公簿)의 사실관계를 나열한 것으로</div>
            <div>법률자문을 포함하고 있지 않습니다.</div>
          </div>
        </>
      }
    </>
  )
}

export default Report
