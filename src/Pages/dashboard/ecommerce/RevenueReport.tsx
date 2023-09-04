import { useEffect, useState } from 'react'
import axios from 'axios'

import { IconDown } from '@simao234430/yoo-components/icon/index.es'
import {
  Button,
  Card,
  Divider,
  Dropdown,
  Link,
  Menu,
  Spin,
} from '@simao234430/yoo-components'
import Row from '@simao234430/yoo-components/dist/Grid/row'
import Col from '@simao234430/yoo-components/dist/Grid/col'
import Chart from 'react-apexcharts'

const RevenueReport = (props: { primary: any; warning: any }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [menudata, setMenuData] = useState([])
 
  // const dropList = (
  //   // {data.years.map(item => (
  //   //   <DropdownItem className='w-100' key={item}>
  //   //     {item}
  //   //   </DropdownItem>
  //   // ))}
  //   <Menu>
  //     {data.years.map((item: {} | null | undefined) => (
  //       <Menu.Item key={item}>{item}</Menu.Item>
  //     ))}
  //     {/* <Menu.Item key='1'>Save now</Menu.Item>
  //     <Menu.Item key='2'>Save and Publish</Menu.Item> */}
  //   </Menu>
  // )
  const fetchData = () => {
    setLoading(true)
    axios
      .get('/api/card/revenue_report')
      .then((res) => {
        setData(res.data)
        setMenuData(res.data.years)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
  // useEffect(() => {
  //   axios.get('/api/card/card-analytics/revenue-report').then(res => setData(res.data))
  // }, [])

  const revenueOptions = {
      chart: {

        stacked: true,
        type: 'bar',
        toolbar: { show: false },
      },
      grid: {
        padding: {
          top: -10,
          bottom: -10,
        },
        yaxis: {
          lines: { show: false },
        },
      },
      xaxis: {

        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem',
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },

 
      colors: [props.primary, props.warning],
      plotOptions: {
        bar: {
          columnWidth: '17%',
          barHeight: '70%',
          borderRadius:  4,
          borderRadiusWhenStacked:  4,
          borderRadiusApplication:  'end'
          // endingShape: 'rounded',
        },
        distributed: true,
      },
      yaxis: {

        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem',
          },
        },
      },
    },
    revenueSeries = [
      {
        name: 'Earning',
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72],
      },
      {
        name: 'Expense',
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100],
      },
    ]

  const budgetSeries = [
      {
        data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62],
      },
      {
        data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27],
      },
    ],
    budgetOptions = {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        sparkline: { enabled: true },
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 5],
        width: [2],
      },
      colors: ['#dc34e3', '#dcdae3'],
      tooltip: {
        enabled: false,
      },
    }

  return (
    <Card extra={<Link>More</Link>}  title="Revenue Report">
      <Row>
        <Col md={16} xs={24}>
          <Chart
            type="bar"
            height="230"
            options={revenueOptions}
            series={revenueSeries}
          />
          {/* <Divider type='vertical' /> */}
        </Col>

        <Col md={8} xs={24}>
          <div
            style={{
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Dropdown.Button
              type="primary"
              droplist={
                <Menu>
      {menudata.map((item: {} | null | undefined) => (
        <Menu.Item key={item}>{item}</Menu.Item>
      ))}
      {/* <Menu.Item key='1'>Save now</Menu.Item>
      <Menu.Item key='2'>Save and Publish</Menu.Item> */}
    </Menu>    
              }
              icon={<IconDown />}
            >
              2020
            </Dropdown.Button>
            <h2 className="mb-25">${data.price}</h2>
            <div className="d-flex justify-content-center">
              <span className="font-weight-bolder mr-25">Budget:</span>
              <span>{data.budget}</span>
            </div>
            <div style={{ margin: 12 }}>
              <Spin loading={loading} style={{ display: 'block' }}>
                <Chart
                  id="budget-chart"
                  type="line"
                  height="80"
                  options={budgetOptions}
                  series={budgetSeries}
                />
              </Spin>
            </div>

            <Button size="large" type="primary">
              Increase Budget
            </Button>
          </div>
          {/* <SampleLine></SampleLine> */}
        </Col>
      </Row>
    </Card>
  )
}

export default RevenueReport
