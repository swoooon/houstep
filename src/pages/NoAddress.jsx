import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Layout from '../components/LayoutNoHeader';

import styles from '../assets/Icon.module.scss'
import Previous from '../assets/previous.svg'

const NoAddress = () => {

  return (
    <Layout>
      <Link to='/search'>
        <div style={{ display: 'flex' }}>
          <img src={Previous} alt='Previous button' 
            style={{ marginLeft: '32px', marginTop: '35px', flex: '1' }}
          />
          <div style={{ flex: '100' }}></div>
        </div>
      </Link>
      <div className={styles.subTitleText} style={{ marginTop: '80px' }}>주소가 안나와요!</div>
      <div className={styles.box} style={{ marginTop: '80px', marginBottom: '110px' }}>
        <ul>
          <li className={styles.commonText}> 오타가 있는지 확인해보세요. </li>
          <li className={styles.commonText}> 도로명주소로 조회되지 않는 경우 지번주소를 입력해보세요. </li>
          <li className={styles.commonText} style={{marginBottom: '0'}}> 빌라/주택의 경우 검색결과가 건물 통째로 나올 수 있어요! </li>
          <li className={styles.commonText} style={{listStyle: 'none'}}> 내가 계약할 호수가 없다고 당황하지 말고 건물 주소로 안전도 분석을 받아주세요. </li>
          <li className={styles.commonText}> 지은지 얼마 안된 빌라/아파트/오피스텔의 경우 아직 등기부등본이 없을 수 있어요.</li>
        </ul>
        <Link to='/attention' style={{color: 'black', textUnderlinePosition: 'under'}}>
          <div className={styles.commonText} style={{textAlign: 'center', marginLeft: '1em', marginTop: '3em'}}>신축 빌라/아파트/오피스텔 거래 주의사항 보기</div>
        </Link>
      </div>
      <Link to='/cs' style={{color: 'black', textUnderlinePosition: 'under'}}>
        <div className={styles.commonText}>고객센터에 문의하기</div>
      </Link>
    </Layout>
  );
};

export default NoAddress;