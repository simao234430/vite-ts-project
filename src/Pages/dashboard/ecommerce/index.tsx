import { Grid } from '@simao234430/yoo-components';
import CardMedal from './CardMedal';
import StatsCard from './StatsCard';
import styles from './style/index.module.less'
import RevenueReport from './RevenueReport';
import './mock'
import OrdersBarChart from './OrdersBarChart';
import ProfitLineChart from './ProfitLineChart';
import Earnings from './Earnings';
import CompanyTable from './CompanyTable';
import CardMeetup from './CardMeetup';

const Row = Grid.Row;
const Col = Grid.Col;
export default function Ecommerce() {
  return (
    <div>

 
        <Row  style={{ marginBottom: 24 }}  gutter={24}>
        <Col  xl={8} md={12} xs={24} span={12}>
            <CardMedal />
          </Col>
          <Col xl={16} md={12} xs={24}  span={12}>
            <StatsCard cols={3} />
          </Col>
        </Row>

        <Row style={{ marginBottom: 24 }}  className='match-height'  gutter={{ md: 8, lg: 24, xl: 32 }}>
        <Col lg={8} md={24}>
          <Row   gutter={[24, 12]}  >
            <Col lg={12} md={6} xs={12}    >
              <OrdersBarChart     />
            </Col>
            <Col lg={12} md={6} xs={12}   >
              <ProfitLineChart info='#20c997'/>
            </Col>
            <Col lg={24} md={12} xs={24}   >
              <Earnings success= '#28c76f' />
            </Col>
          </Row>
        </Col>
        <Col lg={16} md={24}>
          <RevenueReport primary={'#4080ff'} warning={'#ff7d00'} />
        </Col>
      </Row>

      <Row  gutter={{ md: 8, lg: 24, xl: 32 }} className='match-height'>
      <Col lg={16} xs={16}>
          <CompanyTable />
        </Col>
        <Col lg={8} md={8} xs={12}>
          <CardMeetup />
        </Col>
        <Col lg={4} md={6} xs={12}>
          {/* <CardBrowserStates colors={colors} trackBgColor={trackBgColor} /> */}
        </Col>
        <Col lg={4} md={6} xs={12}>
          {/* <GoalOverview success={colors.success.main} /> */}
        </Col>
        <Col lg={4} md={6} xs={12}>
          {/* <CardTransactions /> */}
        </Col>
      </Row>
    </div>
  )
}
