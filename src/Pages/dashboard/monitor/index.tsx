import { useSelector } from 'react-redux'
import styles from './style/index.module.less'
 
import './mock'
 
import ChatPanel from './chat-panel';
import Studio from './studio';
import DataStatistic from './data-statistic';
import StudioStatus from './studio-status';
import QuickOperation from './quick-operation';
import StudioInformation from './studio-information';
import { Space } from '@simao234430/yoo-components';
 
export default function Monitor() {
  const userInfo = useSelector((state: any) => state.userInfo)
  return (
    <div>
      <div className={styles.layout}>
        <div className={styles['layout-left-side']}>
          <ChatPanel />
        </div>
        <div className={styles['layout-content']}>
          <Space size={16} direction="vertical" style={{ width: '100%' }}>
            <Studio userInfo={userInfo} />
            <DataStatistic />
          </Space>
        </div>
        <div className={styles['layout-right-side']}>
          <Space size={16} direction="vertical" style={{ width: '100%' }}>
            <StudioStatus />
            <QuickOperation />
            <StudioInformation />
          </Space>
        </div>
      </div>
    </div>
  )
}
