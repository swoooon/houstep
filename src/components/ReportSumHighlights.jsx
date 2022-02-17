import React, {useState, useEffect } from 'react'
import styles from '../assets/Icon.module.scss'
import { ReactComponent as Bang } from '../assets/bangLogo.svg'

const ReportSumHighlights = (props) => {
  const [data, setData] = useState({
    joint: false,
    entireDanger: '',
    buildType: '',
    mortgage: 0,
    ownership: '',
    isGr2: false,
    eulguDangerList: [],
    kapguDangerList: [],
  })
  
  const million = 100000000

  useEffect(() => {
    setData(props.props)
  }, [props.props])
  console.log(data)

  return (
    <div className={styles.summaryBox}>
      <div className={styles.summaryTitle}>주요사항 요약</div>
      {data &&
        <div>
          {data.joint &&
            <>
              <Bang className={styles.summaryBang}/>
              <div className={styles.summaryDiv}>공동담보로 빚이 약 {data.mortgage/million}억원 있어요!</div>
              <div className={styles.summarySpan}>= 다른 재산들을 같이 담보잡아 대출 받았어요!</div>
            </>
          }
          {!data.joint &&
            <>
            {(data.buildType === 'BU' || data.buildType === 'GR') &&
              <>
              <Bang className={styles.summaryBang}/>
              <div className={styles.summaryDiv}>빚이 약 {data.mortgage}원인 집이에요!</div>
              </>
            }
            {(data.buildType !== 'BU' && data.buildType !== 'GR') &&
              <>
                {
                  data.entireDanger === '위험' &&
                    <>
                      <Bang className={styles.summaryBang}/>
                      <div className={styles.summaryDiv}>빚이 약 {data.mortgage}원인 집이에요!</div>
                      <div className={styles.summarySpan}>= 빚이 많은 편이에요!</div>
                    </>
                }
                {
                  data.entireDanger === '주의1' &&
                    <>
                      <Bang className={styles.summaryBang}/>
                      <div className={styles.summaryDiv}>빚이 약 {data.mortgage}원인 집이에요!</div>
                      <div className={styles.summarySpan}>= 빚이 많은 편은 아니에요!</div>
                    </>
                }
                {
                  data.entireDanger === '주의2' &&
                    <>
                      <Bang className={styles.summaryBang}/>
                      <div className={styles.summaryDiv}>빚이 약 {data.mortgage}원인 집이에요!</div>
                      <div className={styles.summarySpan}>= 빚이 조금 있는 편이에요!</div>
                    </>
                }
                {
                  data.entireDanger === '안전' &&
                    <>
                      <Bang className={styles.summaryBang}/>
                      <div className={styles.summaryDiv}>빚이 없는 집이에요!</div>
                      <div className={styles.summarySpan}>등기부등본상 빚은 없지만 방심은 금물!</div>
                    </>
                }
              </>
            }
            {data.ownership.indexOf('공유자') !== -1 &&
              <>
                <Bang className={styles.summaryBang}/>
                <div className={styles.summaryDiv}>공동소유의 집이에요.</div>
                <div className={styles.summarySpan}>= 소유자(집주인)가 여러 명이에요!</div>
              </>
            }
            {data.ownership.indexOf('회사') !== -1 &&
              <>
                <div>요약리포트8</div>
              </>
            }
            {data.buildType === 'BU' &&
              <>
                <div>요약리포트10</div>
              </>
            }
            {data.isGr2 &&
              <>
                <Bang className={styles.summaryBang}/>
                <div className={styles.summaryDiv}>근린생활시설인지 확인해 주세요!</div>
                <div className={styles.summarySpan}>= 주거용</div>
              </>
            }
            {data.eulguDangerList.indexOf('임차권') !== -1 &&
              <>
                <Bang className={styles.summaryBang}/>
                <div className={styles.summaryDiv}>임차권 설정이 되어 있어요!</div>
                <div className={styles.summarySpan}>= 이전 세입자가 보증금을 못돌려받았어요!</div>
              </>
            }
            {data.kapguDangerList.indexOf('가처분') !== -1 &&
              <>
                <Bang className={styles.summaryBang}/>
                <div className={styles.summaryDiv}>가처분이 설정된 집이에요!</div>
                <div className={styles.summarySpan}>= 권리나 법률관계로 다툼이 있는 집이에요!</div>
              </>
            }
            {data.kapguDangerList.indexOf('가등기') !== -1 &&
              <>
                <Bang className={styles.summaryBang}/>
                <div className={styles.summaryDiv}>가등기가 설정된 집이에요!</div>
                <div className={styles.summarySpan}>= 곧 소유권이 넘어갈 수 있어요!</div>
              </>
            }
            {data.kapguDangerList.indexOf('가압류') !== -1 &&
              <>
                <Bang className={styles.summaryBang}/>
                <div className={styles.summaryDiv}>가압류가 설정된 집이에요!</div>
                <div className={styles.summarySpan}>= 집주인이 이 집을 마음대로 처분할 수 없어요!</div>
              </>
            }
            {data.kapguDangerList.indexOf('압류') !== -1 &&
              <>
                <Bang className={styles.summaryBang}/>
                <div className={styles.summaryDiv}>압류가 설정된 집이에요!</div>
                <div className={styles.summarySpan}>= 집주인이 이 집을 마음대로 처분할 수 없어요!</div>
              </>
            }
            {data.kapguDangerList.indexOf('파산선고') !== -1 &&
              <>
                <Bang className={styles.summaryBang}/>
                <div className={styles.summaryDiv}>파산선고가 된 집이에요!</div>
                <div className={styles.summarySpan}>= 집주인이 파산했어요!</div>
              </>
            }
            {data.kapguDangerList.indexOf('회생절차개시결정') !== -1 &&
              <>
                <Bang className={styles.summaryBang}/>
                <div className={styles.summaryDiv}>회생절차개시결정이 된 집이에요!</div>
                <div className={styles.summarySpan}>= 집주인이 심각한 재정적 어려움을 겪고 있어요!</div>
              </>
            }
            </>
          }
        </div>
      }
      {!data &&
        <>
          <div> loading... </div>
        </>
      }
    </div>
  )
}

export default ReportSumHighlights