import React, { useState, useEffect } from 'react'

import styles from '../assets/Icon.module.scss'
import { ReactComponent as Seesaw } from '../assets/reportSeesaw.svg'
import { ReactComponent as Check } from '../assets/reportCheck.svg'

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

  const million = 100000000

  useEffect(() => {
    setData(props.data)
  }, [props])

  return (
    <div>
      <div style={{height: '35px'}}></div>
      <div className={styles.detailBox}>
        <div className={styles.summaryTitle}>우리 집 리포트</div>
        
        {data.joint &&  // 세부리포트 1 - 공동담보
          <>
            <div className={styles.detailTitle}>공동담보로 빚이 <span style={{color: '#FF5A56'}}>약 {data.mortgage/million}억</span> 있습니다.</div>
            <Seesaw className={styles.detailIcon}/>
            <div className={styles.detailSubTitleBox}>집주인이 다른 집과 같이 대출 받았어요</div>
            <p className={styles.detailText}> 
              현재 공동담보로 약 {data.mortgage/million}억원의 빚이 있어요. <br/><br/>
              공동담보란 쉽게 말해 집주인이 큰 액수의 빚을 대출받기 위해 다른 집을 같이 담보로 묶어 대출받은 것을 말해요. <br/><br/>
              공동담보로 설정된 빚의 경우 등기부등본만으로는 위험도를 판단하기 어렵기 때문에 전문가와의 상담이 필요해요. <br/><br/>
              예를 들어 집주인이 각각 2억씩 하는 집 10채를 담보 잡아 10억의 대출을 받았다면 각 집에 시세 대비 50% 정도의 빚이 있는 것으로 다소 주의가 필요한 집일 수 있습니다.
               하지만 만약 2억 인 집 100채를 담보 잡아 10억의 대출을 받았다면 각 집마다의 빚이 시세 대비 5% 정도로 적은 편에 속하게 됩니다. <br/><br/>
              따라서 공인중개사분께 해당 내역을 알 수 있는 ‘공동담보목록’을 보여달라고 요청하신 후 계약하고자 하는 호수로는 빚이 얼마 정도인지 물어보셔서 아래 식으로 안전한지 계산해 보시길 권고 드려요.
            </p>
            <div className={styles.detailRiskCalculator}>
              <div style={{fontSize: '14px', fontWeight: 700}}>위험도 계산식</div>
              <span style={{background: 'linear-gradient(to top, #FFCDC9 30%, transparent 50%)', fontSize: '13px', fontWeight: 700}}>
                내 보증금 + 선순위보증금 + 빚 〈 <span style={{textDecoration: 'underline'}}>예상거래가격</span> × 0.7
              </span>
            </div>
            <p className={styles.detailTextGray}>빚과 보증금의 합산액이 예상 거래가의 70% 이상이면 위험하다고 봐요!<br/><br/></p>
            <p className={styles.detailText}>
              경우에 따라 계산식의 보증금 부분에 내 보증금 뿐만 아니라 선순위 보증금(=다른 세입자들 보증금의 합)을 더해야 할 수도 있어요!<br/><br/>
              세부 리포트 상단 주소지에 ‘00호’까지 명시되어있다면 내 보증금만 더하면 되고, 호수 없이 건물째로 명시되어 있다면 선순위 보증금도 더해서 계산해 봐야 합니다.<br/><br/>
              선순위 보증금과 예상 거래가격(=시세)은 공인중개사분께 여쭤보시면 알 수 있어요!<br/><br/>
              또한 이 집을 담보로 집주인이 대출을 얼마든지 더 받을 수 있기 때문에 수시로 등기부등본을 확인해 보시길 권고 드립니다.<br/><br/>
            </p>
            <p className={styles.detailTextGray}>계약 전, 잔금 입금 전, 전입신고 전 이렇게 세 번 확인해 주세요!<br/></p>
            <div className={styles.detailSubTitleBox}>공동담보 해제 요청을 추천드려요!</div>
            <p className={styles.detailText}>
              공동담보는 말씀드린것 처럼 많은 집을 묶어 빚을 받은 것이기 때문에 임대인의 허락이 있다면 고객님이 계약하고자 하는 호수를 공동담보 목록에서 제외 시키고 계약을 진행할 수 있기도 합니다.<br/><br/>
              따라서 공인중개사와 임대인에게 고객님이 계약하고자 하는 호수를 공동담보에서 해제해줄 수 있는지 여쭤보시고 계약하시길 바랍니다.<br/><br/>
            </p>
          </>
        }
        {!data.joint && // !공동담보
          <>
            { (data.mortgageDanger === '위험' && data.buildType === 'JT') &&
              <>
                <div className={styles.detailTitle}>빚이 <span style={{color: '#FF5A56'}}>약 {data.mortgage/million}억</span> 있습니다.</div>
                <Seesaw className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>빚이 많은 편이에요!</div>
                <p className={styles.detailText}> 
                  이 집을 담보로 빚이 많은 편이라 주의가 필요해요! <br/><br/>
                  현재 등기부등본상 빚이 약 {data.mortgage/million}억 정도 있는데 예상 최소 가격 대비 nn% 정도예요!  <br/><br/>
                  등기부등본에 적혀있는 빚 외에도 선순위보증금(다른 세입자들 보증금의 합)을 공인중개사나 집주인에게 물어보신 후 계산해 보셔야 해요! <br/><br/>
                </p>
                <div className={styles.detailRiskCalculator}>
                  <div style={{fontSize: '14px', fontWeight: 700}}>위험도 계산식</div>
                  <span style={{background: 'linear-gradient(to top, #FFCDC9 30%, transparent 50%)', fontSize: '13px', fontWeight: 700}}>
                    보증금 + 빚 〈 <span style={{textDecoration: 'underline'}}>예상거래가격</span> × 0.7
                  </span>
                </div>
                <p className={styles.detailTextGray}>빚과 보증금의 합산액이 예상 거래가의 70% 이상이면 위험하다고 봐요!<br/><br/></p>
                <p className={styles.detailText}>
                  또한 이 집을 담보로 집주인이 대출을 얼마든지 더 받을 수 있기 때문에 수시로 등기부등본을 확인해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>계약 전, 잔금 입금 전, 전입신고 전 이렇게 세 번 확인해 주세요!<br/></p>
                <div className={styles.detailSubTitleBox}>공동담보 해제 요청을 추천드려요!</div>
                <p className={styles.detailText}>
                  공동담보는 말씀드린것 처럼 많은 집을 묶어 빚을 받은 것이기 때문에 임대인의 허락이 있다면 고객님이 계약하고자 하는 호수를 공동담보 목록에서 제외 시키고 계약을 진행할 수 있기도 합니다.<br/><br/>
                  따라서 공인중개사와 임대인에게 고객님이 계약하고자 하는 호수를 공동담보에서 해제해줄 수 있는지 여쭤보시고 계약하시길 바랍니다.<br/><br/>
                </p>
                <div className={styles.detailSubTitleBox}>토지등기부등본도 꼭 확인해주세요!</div>
                <p className={styles.detailText}>
                  이 집의 경우 ‘건물’ 말고 ‘땅’ 부분만 따로 담보 잡아 대출받는 것이 가능하기 때문에 토지등기부등본도 꼭 확인해 봐야 해요!<br/><br/>
                  토지등기부등본을 발급받아 토지로는 빚이 얼마 있는지 확인해 보신 후 위험도 계산식에 넣어 비교해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>토지등기부등본을 확인하는 자세한 방법은 리포트 하단의 부동산 거래 꿀 Tip! 에 나와있으니 참고해 주세요!<br/><br/></p>
              </>
            }
            { (data.mortgageDanger === '위험' && (data.buildType === 'AP' || data.buildType === 'OP' || data.buildType === 'DS')) &&
              <>
                <div className={styles.detailTitle}>빚이 <span style={{color: '#FF5A56'}}>약 {data.mortgage/million}억</span> 있습니다.</div>
                <Seesaw className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>빚이 많은 편이에요!</div>
                <p className={styles.detailText}> 
                  이 집을 담보로 빚이 많은 편이라 주의가 필요해요! <br/><br/>
                  현재 등기부등본상 빚이 약 {data.mortgage/million}억 정도 있는데 예상 최소 가격 대비 nn% 정도예요!  <br/><br/>
                </p>
                <div className={styles.detailRiskCalculator}>
                  <div style={{fontSize: '14px', fontWeight: 700}}>위험도 계산식</div>
                  <span style={{background: 'linear-gradient(to top, #FFCDC9 30%, transparent 50%)', fontSize: '13px', fontWeight: 700}}>
                    보증금 + 빚 〈 <span style={{textDecoration: 'underline'}}>예상거래가격</span> × 0.7
                  </span>
                </div>
                <p className={styles.detailTextGray}>빚과 보증금의 합산액이 예상 거래가의 70% 이상이면 위험하다고 봐요!<br/><br/></p>
                <p className={styles.detailText}>
                  또한 이 집을 담보로 집주인이 대출을 얼마든지 더 받을 수 있기 때문에 수시로 등기부등본을 확인해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>계약 전, 잔금 입금 전, 전입신고 전 이렇게 세 번 확인해 주세요!<br/></p>
              </>
            }
            { (data.mortgageDanger === '주의1' && data.buildType === 'JT') &&
              <>
                <div className={styles.detailTitle}>빚이 <span style={{color: '#FF5A56'}}>약 {data.mortgage/million}억</span> 있습니다.</div>
                <Seesaw className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>빚이 많은 편은 아니에요!</div>
                <p className={styles.detailText}> 
                  이 집을 담보로 빚이 많은 편은 아니지만 주의가 필요해요! <br/><br/>
                  현재 등기부등본상 빚이 약 {data.mortgage/million}억 정도 있는데 예상 최소 가격 대비 nn% 정도예요!  <br/><br/>
                  등기부등본에 적혀있는 빚 외에도 선순위보증금(다른 세입자들 보증금의 합)을 공인중개사나 집주인에게 물어보신 후 계산해 보셔야 해요! <br/><br/>
                </p>
                <div className={styles.detailRiskCalculator}>
                  <div style={{fontSize: '14px', fontWeight: 700}}>위험도 계산식</div>
                  <span style={{background: 'linear-gradient(to top, #FFCDC9 30%, transparent 50%)', fontSize: '13px', fontWeight: 700}}>
                    보증금 + 빚 〈 <span style={{textDecoration: 'underline'}}>예상거래가격</span> × 0.7
                  </span>
                </div>
                <p className={styles.detailTextGray}>빚과 보증금의 합산액이 예상 거래가의 70% 이상이면 위험하다고 봐요!<br/><br/></p>
                <p className={styles.detailText}>
                  또한 이 집을 담보로 집주인이 대출을 얼마든지 더 받을 수 있기 때문에 수시로 등기부등본을 확인해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>계약 전, 잔금 입금 전, 전입신고 전 이렇게 세 번 확인해 주세요!<br/></p>
                <div className={styles.detailSubTitleBox}>토지등기부등본도 꼭 확인해주세요!</div>
                <p className={styles.detailText}>
                  이 집의 경우 ‘건물’ 말고 ‘땅’ 부분만 따로 담보 잡아 대출받는 것이 가능하기 때문에 토지등기부등본도 꼭 확인해 봐야 해요!<br/><br/>
                  토지등기부등본을 발급받아 토지로는 빚이 얼마 있는지 확인해 보신 후 위험도 계산식에 넣어 비교해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>토지등기부등본을 확인하는 자세한 방법은 리포트 하단의 부동산 거래 꿀 Tip! 에 나와있으니 참고해 주세요!<br/><br/></p>
              </>
            }
            { (data.mortgageDanger === '주의1' && (data.buildType === 'AP' || data.buildType === 'OP' || data.buildType === 'DS')) &&
              <>
                <div className={styles.detailTitle}>빚이 <span style={{color: '#FF5A56'}}>약 {data.mortgage/million}억</span> 있습니다.</div>
                <Seesaw className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>빚이 많은 편은 아니에요!</div>
                <p className={styles.detailText}> 
                  이 집을 담보로 빚이 많은 편은 아니지만 주의가 필요해요! <br/><br/>
                  현재 등기부등본상 빚이 약 {data.mortgage/million}억 정도 있는데 예상 최소 가격 대비 nn% 정도예요!  <br/><br/>
                </p>
                <div className={styles.detailRiskCalculator}>
                  <div style={{fontSize: '14px', fontWeight: 700}}>위험도 계산식</div>
                  <span style={{background: 'linear-gradient(to top, #FFCDC9 30%, transparent 50%)', fontSize: '13px', fontWeight: 700}}>
                    보증금 + 빚 〈 <span style={{textDecoration: 'underline'}}>예상거래가격</span> × 0.7
                  </span>
                </div>
                <p className={styles.detailTextGray}>빚과 보증금의 합산액이 예상 거래가의 70% 이상이면 위험하다고 봐요!<br/><br/></p>
                <p className={styles.detailText}>
                  또한 이 집을 담보로 집주인이 대출을 얼마든지 더 받을 수 있기 때문에 수시로 등기부등본을 확인해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>계약 전, 잔금 입금 전, 전입신고 전 이렇게 세 번 확인해 주세요!<br/></p>
              </>
            }
            { (data.mortgageDanger === '주의2' && data.buildType === 'JT') &&
              <>
                <div className={styles.detailTitle}>빚이 <span style={{color: '#FF5A56'}}>약 {data.mortgage/million}억</span> 있습니다.</div>
                <Seesaw className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>빚이 조금 있는 편이에요!</div>
                <p className={styles.detailText}> 
                  이 집을 담보로 빚이 조금 있는 편이라 주의가 필요해요! <br/><br/>
                  현재 등기부등본상 빚이 약 {data.mortgage/million}억 정도 있는데 예상 최소 가격 대비 nn% 정도예요!  <br/><br/>
                  등기부등본에 적혀있는 빚 외에도 선순위보증금(다른 세입자들 보증금의 합)을 공인중개사나 집주인에게 물어보신 후 계산해 보셔야 해요! <br/><br/>
                </p>
                <div className={styles.detailRiskCalculator}>
                  <div style={{fontSize: '14px', fontWeight: 700}}>위험도 계산식</div>
                  <span style={{background: 'linear-gradient(to top, #FFCDC9 30%, transparent 50%)', fontSize: '13px', fontWeight: 700}}>
                    보증금 + 빚 〈 <span style={{textDecoration: 'underline'}}>예상거래가격</span> × 0.7
                  </span>
                </div>
                <p className={styles.detailTextGray}>빚과 보증금의 합산액이 예상 거래가의 70% 이상이면 위험하다고 봐요!<br/><br/></p>
                <p className={styles.detailText}>
                  또한 이 집을 담보로 집주인이 대출을 얼마든지 더 받을 수 있기 때문에 수시로 등기부등본을 확인해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>계약 전, 잔금 입금 전, 전입신고 전 이렇게 세 번 확인해 주세요!<br/></p>
                <div className={styles.detailSubTitleBox}>토지등기부등본도 꼭 확인해주세요!</div>
                <p className={styles.detailText}>
                  이 집의 경우 ‘건물’ 말고 ‘땅’ 부분만 따로 담보 잡아 대출받는 것이 가능하기 때문에 토지등기부등본도 꼭 확인해 봐야 해요!<br/><br/>
                  토지등기부등본을 발급받아 토지로는 빚이 얼마 있는지 확인해 보신 후 위험도 계산식에 넣어 비교해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>토지등기부등본을 확인하는 자세한 방법은 리포트 하단의 부동산 거래 꿀 Tip! 에 나와있으니 참고해 주세요!<br/><br/></p>
              </>
            }
            { (data.mortgageDanger === '주의2' && (data.buildType === 'AP' || data.buildType === 'OP' || data.buildType === 'DS')) &&
              <>
                <div className={styles.detailTitle}>빚이 <span style={{color: '#FF5A56'}}>약 {data.mortgage/million}억</span> 있습니다.</div>
                <Seesaw className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>빚이 조금 있는 편이에요!</div>
                <p className={styles.detailText}> 
                  이 집을 담보로 빚이 조금 있는 편이라 주의가 필요해요! <br/><br/>
                  현재 등기부등본상 빚이 약 {data.mortgage/million}억 정도 있는데 예상 최소 가격 대비 nn% 정도예요!  <br/><br/>
                </p>
                <div className={styles.detailRiskCalculator}>
                  <div style={{fontSize: '14px', fontWeight: 700}}>위험도 계산식</div>
                  <span style={{background: 'linear-gradient(to top, #FFCDC9 30%, transparent 50%)', fontSize: '13px', fontWeight: 700}}>
                    보증금 + 빚 〈 <span style={{textDecoration: 'underline'}}>예상거래가격</span> × 0.7
                  </span>
                </div>
                <p className={styles.detailTextGray}>빚과 보증금의 합산액이 예상 거래가의 70% 이상이면 위험하다고 봐요!<br/><br/></p>
                <p className={styles.detailText}>
                  또한 이 집을 담보로 집주인이 대출을 얼마든지 더 받을 수 있기 때문에 수시로 등기부등본을 확인해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>계약 전, 잔금 입금 전, 전입신고 전 이렇게 세 번 확인해 주세요!<br/></p>
              </>
            }
            { (data.mortgageDanger === '안전' && data.buildType === 'JT') &&
              <>
                <div className={styles.detailTitle}>집을 담보로 빚이 <span style={{color: '#FF5A56'}}> 0원</span>이에요!</div>
                <Seesaw className={styles.detailIcon}/>
                <div className={styles.detailSubTitleBox}>등기부등본상 빚이 없어요!</div>
                <p className={styles.detailText}> 
                  현재 등시부등본상 빚이 없는 집이에요! <br/><br/>
                  당장은 빚이 없어 덜 위험해 보일 수 있지만 언제든지 집주인이 이 집을 담보로 대출을 받을 수 있기 때문에 주기적인 등기부등본 확인과 특약조치가 필요해요!<br/><br/>
                </p>
                <p className={styles.detailTextGray}>계약 전, 잔금 입금 전, 전입신고 전 이렇게 세 번 확인해 주세요!<br/><br/></p>
                <p className={styles.detailText}> 외에도 선순위보증금(다른 세입자들 보증금의 합)을 공인중개사나 집주인에게 물어보신 후 계산해 보셔야 보다 정확한 위험도를 알 수 있어요.<br/><br/></p>
                <div className={styles.detailRiskCalculator}>
                  <div style={{fontSize: '14px', fontWeight: 700}}>위험도 계산식</div>
                  <span style={{background: 'linear-gradient(to top, #FFCDC9 30%, transparent 50%)', fontSize: '13px', fontWeight: 700}}>
                    보증금 + 빚 〈 <span style={{textDecoration: 'underline'}}>예상거래가격</span> × 0.7
                  </span>
                </div>
                <p className={styles.detailTextGray}>빚과 보증금의 합산액이 예상 거래가의 70% 이상이면 위험하다고 봐요!<br/><br/></p>
                <p className={styles.detailText}>
                  또한 이 집을 담보로 집주인이 대출을 얼마든지 더 받을 수 있기 때문에 수시로 등기부등본을 확인해 보시길 권고 드립니다.<br/><br/>
                </p>
                <p className={styles.detailTextGray}>계약 전, 잔금 입금 전, 전입신고 전 이렇게 세 번 확인해 주세요!<br/></p>
              </>
            }
            { (data.mortgageDanger === '안전' && (data.buildType === 'AP' || data.buildType === 'OP' || data.buildType === 'DS')) &&
              <div>세부리포트9</div>
            }
            { (data.buildType === 'BU' || data.buildType === 'GR') &&
              <div>세부리포트10</div>
            }

            {/* Ownership */}
            { (data.ownership.indexOf('공유자') !== -1) &&
              <div>세부리포트11</div>
            }
            { (data.ownership.indexOf('회사') !== -1) &&
              <div>세부리포트12</div>
            }

            {/* BuildType */}
            { (data.buildType === 'GR') &&
              <div>세부리포트13</div>
            }
            { (data.buildType === 'BU') &&
              <div>세부리포트14</div>
            }
            { (data.buildType === 'OP') &&
              <div>세부리포트15</div>
            }

            {/* isGr2 */}
            { (data.isGr2 === true) &&
              <div>세부리포트16</div>
            }

            {/* eulguDangerList */}
            { (data.eulguDangerList.indexOf('임차권') !== -1) &&
              <div>세부리포트17</div>
            }

            {/* kapguDangerList */}
            { (data.kapguDangerList.indexOf('가처분') !== -1) &&
              <div>세부리포트18</div>
            }
            { (data.kapguDangerList.indexOf('가등기') !== -1) &&
              <div>세부리포트19</div>
            }
            { (data.kapguDangerList.indexOf('가압류') !== -1) &&
              <div>세부리포트20</div>
            }
            { (data.kapguDangerList.indexOf('압류') !== -1) &&
              <div>세부리포트21</div>
            }
            { (data.kapguDangerList.indexOf('파산선고') !== -1) &&
              <div>세부리포트22</div>
            }
            { (data.kapguDangerList.indexOf('회생절차개시결정') !== -1) &&
              <div>세부리포트23</div>
            }
          </>
        }

        {/* default contents */}
        <Check className={styles.detailIcon}/>
        <div className={styles.detailSubTitleBox}>계약 당일 집주인의 신분증을 확인해주세요</div>
        <p className={styles.detailText}>
          이 집의 집주인은 저희가 하단에 첨부해 드린 등기부등본 ‘갑구’에서 확인해 볼 수 있어요!<br/><br/>
          계약 당일 갑구에 적힌 소유자와 집주인이 일치한지 신분증을 통해 확인해 보셔야 해요!<br/><br/>
          만약 집주인의 개인 사정으로 계약 시 대리인이 왔다면 살펴봐야 할 사항들이 몇 가지 있어요.<br/><br/>
          먼저 위임해 준 사람의 신분증과 인감도장을 확인해 주세요. (위임해 준 사람이 ‘갑구’의 소유자와 일치해야 해요!)<br/><br/>
          이후 위임장에 ‘위임자 A는 대리인 B에게 임대차 계약에 관한 일체의 권한을 위임한다'와 같은 내용이 적혀있는지 확인해 보시길 바랍니다.<br/><br/>
          마지막으로 위임해 준 당사자(=집주인)와의 전화 통화를 통해 위임한 사실이 맞는지 다시 한번 확인하셔서 꼼꼼히 계약하시길 추천드려요!<br/>
        </p>
        <div className={styles.detailSubTitleBox}>등기부등본만 확인하면 안전할까요?</div>
        <p className={styles.detailText}>
          집주인의 개인 사정으로 집이 경매에 넘어가는 경우도 종종 있어서 등기부등본만으로 안전 여부를 판단하기는 어렵습니다.<br/><br/>
          따라서 이 집을 중개한 부동산 측에 집주인과 기존에 거래해 본 적 있는지 여쭤보시고 문제가 있었던 적은 없는지 확인해 보시길 추천드려요.<br/><br/>
          해당 집을 담보로는 빚이 없어도 집주인의 개인 채무상태가 안 좋거나 미납국세(=밀린 세금)로 인해 집이 경매로 넘어가는 경우가 종종 있습니다.
           집주인의 개인 채무를 세입자가 모두 알기는 현실적으로 어려우나, 미납국세의 경우 집주인의 동의서를 받으면 세입자가 신청 후 조회해 볼 수 있어요.
            하지만 통상적으로 미납국세까지 확인하는 경우가 드물기 때문에 부동산과 집주인 측에서 비협조적으로 나올 수 있으니 참고 바랍니다.<br/><br/>
          이 밖에도 시세에 비해 현저히 낮은 금액으로 나온 매물의 경우 주변 다른 부동산에도 문의해 보시고 현장 방문을 통해 매물에 하자는 없는지 꼼꼼히 살펴본 후 계약하시길 권고 드립니다.<br/><br/>
          따라서 등기부등본만으로 무조건 안심하지 마시고 부동산에 이 집의 권리관계나 계약 시 유의사항을 여쭤보신 후 꼼꼼히 확인해 보시길 바랍니다.<br/><br/>
          보증금, 전세금액이 클 경우 보증보험을 통해 재산을 지키는 것도 하나의 방법이 될 수 있으니 추천드려요!<br/>
        </p>
        <div className={styles.detailSubTitleBox}>공인중개사분께 요청하세요!</div>
        <p className={styles.detailText}>
          이 집을 중개한 부동산이 해당 매물에 대해 누구보다 잘 알고 있을 거예요!<br/><br/>
          공인중개사분께 이 집의 권리관계에 대한 설명을 충분히 들으신 후 주의할 점은 없는지 물어보시길 바랍니다.<br/><br/>
          그리고 이 집의 특성에 맞는 특약사항을 요청하셔서 계약하시길 권고 드려요!<br/><br/>
          그럼 안전한 거래되시길 바라겠습니다 :)<br/><br/>
          감사합니다.<br/><br/>
        </p>
      </div>
      
      <div className={styles.detailBox}>
        <div className={styles.summaryTitle}>종합의견</div>
      </div>

      <div className={styles.detailBox}>
        <div className={styles.summaryTitle}>서류 원본 보기</div>
      </div>

      <div className={styles.detailBox}>
        <div className={styles.summaryTitle}>쉽게 보는 우리 집 등기부등본</div>
      </div>

      <div className={styles.detailBox}>
        <div className={styles.summaryTitle}>안전한 집 구하기 꿀 Tip</div>
      </div>
    </div>
  )
}

export default ReportContent