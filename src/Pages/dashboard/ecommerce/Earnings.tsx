import { Card } from '@simao234430/yoo-components'
import Col from '@simao234430/yoo-components/dist/Grid/col'
import Row from '@simao234430/yoo-components/dist/Grid/row'
import Chart from 'react-apexcharts'
 

const Earnings = ({ success }) => {
  const options = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: { show: false },
    comparedResult: [2, -3, 8],
    labels: ['App', 'Service', 'Product'],
    stroke: { width: 0 },
    colors: ['#28c76f66', '#28c76f33', success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15
            },
            value: {
              offsetY: -15,
              formatter(val) {
                return `${parseInt(val)} %`
              }
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'App',
              formatter(w) {
                return '53%'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 120
          }
        }
      },
      {
        breakpoint: 1065,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 120
          }
        }
      }
    ]
  }

  return (
    <Card className='earnings-card'>
 
        <Row>
          <Col xs={12}>
     
            <div className='font-small-2'>This Month</div>
            <h5 className='mb-1'>$4055.56</h5>
            <div>
              <span className='font-weight-bolder'>68.2%</span>
              <span> more earnings than last month.</span>
            </div>
          </Col>
          <Col xs={12}>
            <Chart options={options} series={[53, 16, 31]} type='donut' height={120} />
          </Col>
        </Row>
 
    </Card>
  )
}

export default Earnings
