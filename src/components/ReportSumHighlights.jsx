import React, {useState, useEffect } from 'react'
import styles from '../assets/Icon.module.scss'

const ReportSumHighlights = (props) => {
  const [data, setData] = useState({})
  
  const million = 100000000

  useEffect(() => {
    setData(props.props)
  }, [props.props])
  console.log(data)

  return (
    <div className={styles.summaryBox}>
      {data &&
        <div>
          {data.joint &&
            <>
              <div>공동담보로 빚이 약 {data.mortgage/million}억원 있어요!</div>
              <div>다른 재산들을 같이 담보잡아 대출 받았어요!</div>
            </>
          }
          {!data.joint &&
            <>
              {
                data.entireDanger === '위험' &&
                  <div>
                    위험 페이지
                  </div>
              }
              {
                data.entireDanger === '주의1' &&
                  <div>
                    주의1 페이지
                  </div>
              }
            </>
          }
        </div>
      }
      {!data &&
        <>
          <div> hey </div>
        </>
      }
    </div>
  )
}

export default ReportSumHighlights