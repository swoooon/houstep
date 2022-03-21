import React, {useState, useEffect } from 'react'
import styles from '../assets/Icon.module.scss'
import { ReactComponent as Bang } from '../assets/bangLogo.svg'
import { ReactComponent as Check } from '../assets/checkLogo.svg'

const ReportSumHighlightsFree = (props) => {
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
  
  const [simpleData, simpleSetData] = useState({
    complexType: "집합건물",
    isGuaranteeInsurance: true,
    isRepaymentSubject: false
  })

  const million = 100000000

  useEffect(() => {
    setData(props.data)
  }, [props])

  


  return (
    <div className={styles.summaryBox}>
      <div className={styles.summaryTitle} style={{marginBottom: '15px'}}>주요사항 요약</div>
      {data &&
        <div>
          {simpleData.isRepaymentSubject &&
            <>
              <Check className={styles.summaryBang}/>
              <div className={styles.summaryDiv}>최우선 변제가 가능할 수도 있어요!</div>
              <div className={styles.summarySpan}>최우선 변제의 가능성이 있는 집입니다.</div>
              <div className={styles.summaryBlock}/>
            </>
          }
          {!simpleData.isRepaymentSubject &&
            <>
              <Check className={styles.summaryBang}/>
              <div className={styles.summaryDiv}>최우선 변제가 안되는 집이에요!</div>
              <div className={styles.summarySpan}>최우선 변제의 조건을 만족하지 못하는 집입니다.</div>
              <div className={styles.summaryBlock}/>
            </>
          }
          {simpleData.complexType &&
            <>
              <Check className={styles.summaryBang}/>
              <div className={styles.summaryDiv}>이 집은 '일반 건물'이에요!</div>
              <div className={styles.summarySpan}></div>
              <div className={styles.summaryBlock}/>
            </>
          }
          {!simpleData.complexType &&
            <>
              <Check className={styles.summaryBang}/>
              <div className={styles.summaryDiv}>이 집은 '집합 건물'이에요!</div>
              <div className={styles.summarySpan}></div>
              <div className={styles.summaryBlock}/>
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

export default ReportSumHighlightsFree