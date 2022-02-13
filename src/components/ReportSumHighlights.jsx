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
                <div>요약리포트6</div>
              </>
            }
            {(data.buildType !== 'BU' && data.buildType !== 'GR') &&
              <>
                {
                  data.entireDanger === '위험' &&
                    <>
                      <div>요약리포트2</div>
                    </>
                }
                {
                  data.entireDanger === '주의1' &&
                    <>
                      <div>요약리포트3</div>
                    </>
                }
                {
                  data.entireDanger === '주의2' &&
                    <>
                      <div>요약리포트4</div>
                    </>
                }
                {
                  data.entireDanger === '안전' &&
                    <>
                      <div>요약리포트5</div>
                    </>
                }
              </>
            }
            {data.ownership.indexOf('공유자') !== -1 &&
              <>
                <div>요약리포트7</div>
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
                <div>요약리포트11</div>
              </>
            }
            {data.eulguDangerList.indexOf('임차권') !== -1 &&
              <>
                <div>요약리포트12</div>
              </>
            }
            {data.kapguDangerList.indexOf('가처분') !== -1 &&
              <>
                <div>요약리포트13</div>
              </>
            }
            {data.kapguDangerList.indexOf('가등기') !== -1 &&
              <>
                <div>요약리포트14</div>
              </>
            }
            {data.kapguDangerList.indexOf('가압류') !== -1 &&
              <>
                <div>요약리포트15</div>
              </>
            }
            {data.kapguDangerList.indexOf('압류') !== -1 &&
              <>
                <div>요약리포트16</div>
              </>
            }
            {data.kapguDangerList.indexOf('파산선고') !== -1 &&
              <>
                <div>요약리포트17</div>
              </>
            }
            {data.kapguDangerList.indexOf('회생절차개시결정') !== -1 &&
              <>
                <div>요약리포트18</div>
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