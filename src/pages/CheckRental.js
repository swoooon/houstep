import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import Layout from '../components/Layout'
import styles from '../assets/Icon.module.scss'
import { ReactComponent as ServicePreparing } from '../assets/servicePreparing.svg'

const CheckRental = props => {
  const [ clickedIndex, setClickedIndex ] = useState();
  const [ questionNumber, setQuestionNumber ] = useState(0);
  const [ guarantee, setGuarantee ] = useState();
  const [ num, setNum ] = useState('');
  
  const [ complexType, setComplexType ] = useState();
  const [ detailAddress, setDetailAddress ] = useState();
  const [ landCode, setLandCode ] = useState();

  const { state } = useLocation();

  const question = [
    {
      '0': '거래 형태가',
      '1': '어떻게 되시나요?'
    },
    {
      '0': '보증금/전세금이',
      '1': '어떻게 되시나요?'
    }
  ]

  const buttonClicked = (index) => {
    if (!complexType)
      setComplexType(state.address.complexType);
    if (!detailAddress)
      setDetailAddress(state.address.detailAddress);
    if (!landCode)
      setLandCode(state.address.landCode);

    setClickedIndex(index);

    switch (index) {
      case 1:
        console.log('전세 clicked');
        break;
      case 2:
        console.log('월세 clicked');
        break;
      case 3:
        console.log('매매 clicked');
        break;
      default:
        console.log('default');
    }
  }

  const nextClicked = (number) => {
    if (clickedIndex) {
      if (!guarantee)
        setQuestionNumber(number);
      else
        console.log(guarantee)
    }
  }

  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  const safetyButtonClicked = () => {
    setGuarantee(document.getElementById('guaranteeInput').value);
    console.log(complexType);
    console.log(detailAddress);
    console.log(landCode);
  }

  return (
    <Layout>
      {!(clickedIndex === 3 && !(questionNumber === 0)) &&  // 1번째 질문 페이지 or 전세, 월세 버튼을 눌렀을 때,
        <>
          <div className={styles.rentalQuestion} style={{ marginTop: '2em'}}>{question[questionNumber][0]}</div>
          <div className={styles.rentalQuestion}>{question[questionNumber][1]}</div>
        </>
      }

      {questionNumber === 0 &&  // 전세, 월세, 매매, + 이전, 다음 button, 1번째 질문 페이지
      <>
        <ul style={{ padding: '0', marginTop: '7.5em'}}>
          <button className={(clickedIndex === 1) ? styles.clickedRentalType : styles.rentalType}
            onClick={() => buttonClicked(1)}>전세</button>
          <button className={(clickedIndex === 2) ? styles.clickedRentalType : styles.rentalType}
            onClick={() => buttonClicked(2)}>월세</button>
          <button className={(clickedIndex === 3) ? styles.clickedRentalType : styles.rentalType}
            onClick={() => buttonClicked(3)}>매매</button>
        </ul>

        
        <div style={{ 
          position: 'absolute', 
          display: 'flex', 
          width: '375px',
          top: '700px',
          padding: '6%'
          }}>
          <Link to='/search' style={{ textDecoration:'none', flex: '1' }}>
            <button type="button" className="btn btn-outline-secondary"
              style={{
                margin: 'auto',
                display: 'block',
                width: '100%',
                fontWeight: '600',
                border: '1px solid lightgray',
                borderRadius: '20px'
              }}
            >이전</button>
          </Link>
          <div style={{flex: '0.7'}}></div>
          <Link to='/checkRental' style={{ textDecoration:'none', flex: '1' }}>
            <button type="button" className="btn btn-outline-secondary"
              style={{
                margin: 'auto',
                display: 'block',
                width: '100%',
                fontWeight: '600',
                border: '1px solid lightgray',
                borderRadius: '20px'
              }}
              onClick={() => nextClicked(1)}
            >다음</button>
          </Link>
        </div>
      </>
      }

      {(questionNumber === 1 && !(clickedIndex === 3)) && // 전세 or 월세 클릭 후 다음 버튼을 눌렀을 때, 2번째 질문 페이지
        <>
          <input className={styles.inputGuarantee}
            id='guaranteeInput'
            type='text' 
            placeholder='보증금액을 입력해주세요 (숫자)' 
            value={num}
            onChange={(e) => setNum(inputPriceFormat(e.target.value))}
          />
          <div style={{marginTop: '28em', color: 'grey', fontSize: '0.6em'}}>
            오픈 프로모션 (<strike>9,000원</strike>→4,900원)</div>
          <button type="button" className="btn btn-outline-secondary"
            style={{
              margin: 'auto',
              marginTop: '0.3em',
              display: 'block',
              width: '85%',
              fontWeight: '600',
              color: 'white',
              backgroundColor: '#1381FF',
              border: '1px solid lightgray',
              borderRadius: '20px',
              borderColor: 'transparent'
            }}
            onClick={() => safetyButtonClicked()}
          >안전도 알아보러 가기</button>
        </>
      }

      {(questionNumber === 1) && (clickedIndex === 3) &&  // 매매 클릭 후 다음 버튼을 눌렀을 때
        <>
          <ServicePreparing style={{marginTop: '140px'}}/>
          <div style={{marginTop: '55px', fontSize: '1.4em', fontWeight: '700'}}>서비스 준비중이에요!</div>
          <div style={{marginTop: '45px', fontSize: '0.8em', fontWeight: '600', color: 'gray'}}>현재는 주택 임대차 안전도 분석만 제공하고 있습니다.</div>
          <div style={{fontSize: '0.8em', fontWeight: '600', color: 'gray'}}>매매 서비스도 열심히 준비중이니 조금만 기다려주세요!</div>
          <div style={{marginTop: '25px', fontSize: '0.8em', fontWeight: '600', color: 'gray'}}>감사합니다.</div>
        </>
      }
      
    </Layout>
  );
};

export default CheckRental;