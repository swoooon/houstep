import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from "axios";

import Layout from '../components/LayoutNoHeader'
import ReportComponent from '../components/ReportComponent'
import ReportFailed from '../components/ReportFailed'
import { getCookie } from '../util/Cookie';


const Report = () => {
  const [ reportLoaded, setReportLoaded ] = useState(true);
  const [ reportState, setReportState ] = useState('Safe');  // Safe, Caution, Danger
  const [ address, setAddress ] = useState();
  const [ data, setData ] = useState();

  const props = useLocation();

  useEffect(() => {
    setAddress(props.state.address);
    const getData = async () => {
      await axios
      .post(
        `${String(
          process.env.REACT_APP_API_URL
        )}/api/v1/test/analyze`, {
          'uniqueNo': props.state.address.uniqueNo,
        }, {
          headers: {
            'Authorization' : `Bearer ${getCookie('access_token')}`
          }
        }
      )
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log("err: ", err);
        window.alert("정보를 불러오던 중 오류가 발생했습니다.");
      });
    }
    getData();
  }, [props]);
  
  return(
    <Layout>
      {reportLoaded && data &&
        <ReportComponent state={reportState} address={address} data={data}/>
      }
      {(!reportLoaded || !data) &&
        <ReportFailed/>
      }
    </Layout>
  );
}

export default Report;