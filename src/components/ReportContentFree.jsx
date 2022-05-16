import React, { useState, useEffect } from 'react'
import { BrowserRouter as Link, Navigate } from 'react-router-dom'
import Modal from 'react-modal'
import styles from '../assets/Icon.module.scss'
import { ReactComponent as Seesaw } from '../assets/reportSeesaw.svg'
import { ReactComponent as Check } from '../assets/reportCheck.svg'
import { ReactComponent as Coin } from '../assets/reportCoinYellow.svg'
import { ReactComponent as Money } from '../assets/reportMoneyYellow.svg'
import { ReactComponent as Building } from '../assets/reportBuliding.svg'
import { ReactComponent as Hand } from '../assets/reportHand.svg'
import { ReactComponent as Mini } from '../assets/reportMini.svg'
const ReportContent = (props) => {
  const [data, setData] = useState({
    joint: false,
    mortgageDanger: '',
    buildType: '',
    mortgage: 0,
    ownership: '',
    isGr2: false,
    eulguDangerList: [],
    kapguDangerList: [],
  })
  const [simpledata, setSimpleData] = useState({
    complexType: "집합건물",
    isGuaranteeInsurance: true,
    isRepaymentSubject: true
  })
  const [ address, setAddress ] = useState();
  const [ payModalisOpen, setPayModalisOpen ] = useState(false)
  const overlayMargin = (window.innerHeight>812 ? ((window.innerHeight - 812) / 2) : '0px')

  const kakaoChannelButtonClicked = () => {
    setPayModalisOpen(true);
  }

  const requestButtonClicked = () => {
    window.open('https://forms.gle/K6Q2DyG7eZgEDDTU7', '_blank')
  }

  const million = 100000000

  useEffect(() => {
    setSimpleData(props.simpledata);
    setData(props.data);
    setAddress(props.address);
  }, [props])

  return (
    <div>
      <div style={{height: '35px'}}></div>
      <div className={styles.detailBox}>
        <div className={styles.summaryTitle}>주요 핵심 리포트</div>
        {simpledata &&
          <>
            {simpledata.isRepaymentSubject &&
              <>
                <Coin className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>최우선 변제가 가능할 수도 있어요!</div>
                <p className={styles.detailText}>
                  이 집으로 2021년 5월 11일 이전에 잡힌 빚만 없다면 최우선 변제가 가능할 것 같아 보여요!<br/><br/>
                  하지만 이 집을 담보로 받은 빚의 설정 일자에 따라 변제 여부와 변제 금액이 달라질 수 있어요!<br/><br/>
                  또한 등기부등본에 임차권 설정, 경매개시결정 등과 같은 위험한 권리문제가 있으면 최우선 변제가 불가능하다는 점 확인해 주세요!<br/><br/>
                </p>
              </>
            }
            {!simpledata.isRepaymentSubject &&
              <>
                <Coin className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>최우선 변제가 안되는 집이에요!</div>
                <p className={styles.detailText}>
                  이 집은 보증금이 높아 최우선 변제가 안되는 집이에요! 하지만 최우선 변제가 안된다고 무조건 보증금을 못 돌려 받는건 아니니 너무 걱정할 필요는 없어요.<br/><br/>
                  다만, 매매 시세 대비 보증금이 너무 높거나 등기부등본에 적힌 빚이 많다면 위험할 수 있으니 주의하시길 바랍니다!<br/><br/>
                </p>
              </>
            }
            {simpledata.complexType === "집합건물" &&
              <>
                <Building className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>이 집은 '집합 건물'이에요!</div>
                <p className={styles.detailText}>
                  이 집은 각 호수마다 각각의 집주인이 있는 ‘집합건물’이에요!<br/><br/>
                  집합건물의 경우 계약 시 반드시 정확한 동 호수를 계약서에 기재해야 해요. <br/><br/>
                  혹시 문패에 적힌 호수가 등기부등본, 건축물대장에 적힌 호수 이름과 다르지는 않은지 확인해 보세요!<br/><br/>
                  다르다면 반드시 서류상 주소지로 기재해야 한다는 점 명심해 주세요!<br/><br/>
                </p>
              </>
            }
            {simpledata.complexType !== "집합건물" &&
              <>
                <Building className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>이 집은 '일반 건물'이에요!</div>
                <p className={styles.detailText}>
                  이 집은 호수별로 각각의 집주인이 있는 아파트나 오피스텔 같은 집들과 달리 건물째로 집주인이 있는 ‘일반 건물' 이에요!<br/><br/>
                  이 경우 같은 건물에 살고있는 다른 세입자들의 보증금액의 합(선순위 보증금)이 얼마인지 공인중개사분께 여쭤봐야 해요!<br/><br/>
                  그리고 등기부등본상 적힌 빚과 선순위보증금의 합이 건물 예상 가격 대비 얼마나 많은지 확인해보시길 권고 드립니다.<br/><br/>
                </p>
              </>
            }
          </>
        }
        {!simpledata &&
          <>
            loading...
          </>
        }
        {/* default contents */}
        <div className={styles.detailSubTitleBox}>전입신고, 확정일자는 필수!</div>
        <p className={styles.detailText}>
          이사 당일 전입신고, 확정일자 발급을 반드시 받으셔야 합니다.<br/><br/>
          안받아뒀다면 나중에 문제가 생겨도 보증금을 돌려받기가 어려워요!<br/><br/>
        </p>
        <Money className={styles.detailIcon}/>
        <div className={styles.detailSubTitleBox}>보증금 사고, 공인중개사가 책임질까?</div>
        <p className={styles.detailText}>
          부동산을 통해 계약을 진행했어도 나중에 보증금을 돌려받는데 문제가 생기면 그 책임을 공인중개사에게 온전히 묻기는 어려워요!<br/><br/>
          실제로 보증금 사고가 났을 때 등기부등본과 같은 서류들을 직접 제대로 보지 않은 세입자에게 책임이 있다는 대법원의 판결이 있습니다.<br/><br/>
          따라서 계약 전 등기부등본과 건축물대장을 꼼꼼히 살펴보신 후 신중히 결정하시길 권고 드립니다!<br/><br/>
          혹시 등기부등본, 건축물대장 서류를 보는게 어려우시다면 하단의 부동산 전문가 서비스를 통해 빠르게 분석 받아 보세요!<br/>
        </p>
      </div>
      <div className={styles.detailBox}>
        <div className={styles.detailTitle} style={{fontSize: '20px'}}>우리 집 등기부등본 발급 받고<br/>부동산 전문가의 분석 받기</div>
        <div className={styles.summaryMents} style={{
          marginTop: '20px',
          fontSize: '12px'
          }}>등기부등본과 건축물대장을 바탕으로<br/>약 52가지 위험사항을 점검해요!</div>
        <Mini className={styles.detailIcon}/>
        <Hand className={styles.detailIcon}/>
        <button type='button' className='btn btn-outline-tertiary'
        style={{
          margin: 'auto',
          marginTop: '2em',
          display: 'block',
          width: '85%',
          fontWeight: '600',
          color: 'white',
          backgroundColor: '#1381FF',
          border: '1px solid lightgray',
          borderRadius: '20px',
          borderColor: 'transparent'
        }}
        onClick={() => kakaoChannelButtonClicked()}
        >결제하기</button>
      </div>
      <Modal isOpen={payModalisOpen}
        style={{
          overlay: {
            position: 'fixed',
            width: '375px',
            height: '812px',
            margin: '0 auto',
            marginTop: overlayMargin,
            backgroundColor: 'rgba(0, 0, 0, 0.85)'
          },
          content: {
            position: 'absolute',
            width: '293px',
            height: '309px',
            left: '41px', // (overlay width - content width) / 2
            top: '251.5px', // (overlay height - content height) / 2
            borderRadius: '20px',
            paddingLeft: '32px',
            paddingRight: '32px',
            paddingTop: '30px',
            paddingBottom: '30px'
          }
        }}>
        <div style={{fontSize: '1.1em', fontWeight: '700', textAlign: 'center'}}>4,900원 결제하기</div>
        <div style={{display: 'flex', marginTop: '15px'}}>
          <a href='#!' style={{textDecoration:'none', flex: '1'}}>
          <button type='button' className='btn btn-outline-primary'
            style={{
              height: '30px',
              fontWeight: '500',
              borderRadius: '20px',
              width: '100%',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setPayModalisOpen(false)}
          >취소</button>
          </a>
          <div style={{flex: '0.2'}}></div>
          <Navigate to={"/report"} state={{address}} 
            style={{ textDecoration:'none', flex: '1' }}>
            <button type='button' className='btn btn-primary'
              style={{
                height: '30px',
                fontWeight: '500',
                borderRadius: '20px',
                fontSize: '12px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >동의 및 결제</button>
          </Navigate>
        </div>
        <div className={styles.tips} style={{marginTop: '25px'}}>
          결제 금액은 등기부 등본, 건축물 대장
        </div>
        <div className={styles.tips}>
          서류 발급 대행비이며 안전도 해석 서비스는 무료입니다.
        </div>
      </Modal>
      <div className={styles.summaryMents}>저희 서비스는 법률 자문을 포함하지 않습니다.<br/><br/>
        권리의 득실·변경이나 충돌 여부, 우열관계 등의 분석을 제공하고 있지 않기 때문에 복잡한 권리 관계가 얽힌 경우 ‘일반 법률사무’를 제공하는 전문가(변호사)에게 조언을 구해야 합니다.<br/><br/>
        계약 선택에 대한 책임은 계약자 본인에게 있습니다.
      </div>
      <div className={styles.summaryMents} style={{marginTop: '6em', color: '#1381FF', marginBottom: '1px'}}>요청 글 남기기</div>
      <button type='button' className='btn btn-outline-quaternary'
        style={{
          margin: 'auto',
          marginTop: '-2.5em',
          marginBottom: '3em',
          display: 'block',
          width: '85%',
          fontWeight: '600',
          color: '#1381FF',
          backgroundColor: 'white',
          border: '1px solid lightgray',
          borderRadius: '20px',
          borderColor: 'transparent'
        }}
        onClick={() => requestButtonClicked()}
        >이 정보도 알려주세요!</button>
        <div style={{
          width: '0',
          height: '0',
          fontSize: '0',
          lineHeight: '0',
        }}>.</div>
    </div>
  )
}

export default ReportContent