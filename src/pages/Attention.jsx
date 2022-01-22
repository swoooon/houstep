import { React } from 'react';
import Layout from '../components/LayoutNoHeader'
import styles from '../assets/Icon.module.scss'
import { ReactComponent as Icon } from '../assets/orangeIcon.svg'
import { ReactComponent as AttentionBar } from '../assets/attentionBar.svg'
import { ReactComponent as WarningIcon } from '../assets/warningIcon.svg';

const Attention = () => {
  return (
    <Layout>
      <Icon style={{ marginTop: '35px', marginLeft: '26px', float: 'left' }}/>
      <br/>
      <AttentionBar style={{ marginTop: '24px' }}/>
      {/** Attention Bar Text: 평범 주의 위험 */}
      <div style={{ marginTop: '5px', display: 'flex'}}>
        <div style={{flex: '1', color: '#BDBDBD', fontWeight: '600'}}>평범</div>
        <div style={{flex: '2.3', color: '#EA9950', fontWeight: '600'}}>주의</div>
        <div style={{flex: '1', color: '#BDBDBD', fontWeight: '600'}}>위험</div>
      </div>

      {/** Summary of Main contents */}
      <div className={styles.box} style={{marginTop: '46px', padding: '10px', height: '180px'}}>
        <div style={{margin: '10px', fontSize: '1.1em', fontWeight: '600'}}>주요사항 요약</div>
        <div style={{marginTop: '10px'}}>
          <WarningIcon style={{float: 'left', marginRight: '8px'}}/>
          <div style={{height: '45px', lineHeight: '45px', fontSize: '0.9em', fontWeight: '600'}}>
            신축 건물이라 아직 등기부가 없어요!</div>
        </div>
        <div style={{marginTop: '12.5px'}}>
          <WarningIcon style={{float: 'left', marginRight: '8px'}}/>
          <div style={{height: '45px', lineHeight: '22.5px', fontSize: '0.9em', fontWeight: '600'}}>
            계약시 소유자와 임대인이 동일한지 꼭 <br/> 확인해주세요.</div>
        </div>
      </div>
      
      {/** Report of Detailed diagnosis */}
      <div className={styles.box} style={{marginTop: '35px', height: '1492px'}}></div>

    </Layout>
  )
}

export default Attention;