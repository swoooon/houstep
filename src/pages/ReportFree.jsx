import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from "axios";

import Layout from '../components/LayoutNoHeader'
import ReportComponentFree from '../components/ReportComponentFree'
import ReportFailed from '../components/ReportFailed'
import { getCookie } from '../util/Cookie';

const ReportFree = () => {
  const [ reportLoaded, setReportLoaded ] = useState(true)
  const [ reportState, setReportState ] = useState('Free')  // Safe, Caution, Danger, Free
  const [ address, setAddress ] = useState()
  const [ trans, setTrans ] = useState()
  const [ simpledata, setSimpleData ] = useState()
  const [ data, setData ] = useState({
    joint: false,
    mortgageDanger: '안전',
    buildType: 'JT',
    mortgage: 100000000,
    ownership: '회사',
    isGr2: true,
    eulguDangerList: ['임차권'],
    kapguDangerList: ['가처분'],
  })

  const props = useLocation()

  useEffect(() => {
    setAddress(props.state.address)
    setTrans(props.state.trans)
    const getSimple = async () => {
      console.log("getSimple");
      await axios
      .post(
        `${String(
          process.env.REACT_APP_API_URL
        )}/api/v1/analyze/simple`, {
          'complexType': props.state.address.complexType,
          'detailAddress': props.state.address.detailAddress,
          'landCode': props.state.address.landCode,
          'uniqueNo': props.state.address.uniqueNo,
          'transAmount': props.state.trans.transAmount,
          'transType': props.state.trans.transType
        }, {
          headers: {
            'Authorization' : `Bearer ${getCookie('access_token')}`
          }
        }
      )
      .then((res) => {
        setSimpleData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log("err: ", err);
        window.alert("정보를 불러오던 중 오류가 발생했습니다.");
      });
    }
    getSimple()
  }, [props])

  
  return(
    <Layout>
      {reportLoaded &&
        <ReportComponentFree state={reportState} address={address} data={data} simpledata={simpledata}/>
      }
      {!reportLoaded &&
        <ReportFailed/>
      }
    </Layout>
  )
}

export default ReportFree;