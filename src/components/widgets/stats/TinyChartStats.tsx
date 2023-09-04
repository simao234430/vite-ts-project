// ** Third Party Components
import { Card, Typography } from '@simao234430/yoo-components'
import PropTypes from 'prop-types'
import Chart from 'react-apexcharts'
 

const TinyChartStats = props => {
  // ** Props
  const { title, stats, options, series, type, height } = props

  return (
    <Card  title={(
        <>
        <Typography.Title style={{ margin:'0',color:'rgb(22, 93, 255)'}} heading={5}>{title}</Typography.Title>
        <Typography.Title style={{ margin:'0',color:'rgb(22, 93, 255)'}} heading={6}>{stats}</Typography.Title>
        {/* <h6>{title}</h6>
        <h4  >{stats}</h4> */}
        </>)
    } className='card-tiny-line-stats'>
 

        <Chart options={options} series={series} type={type} height={height} />
 
    </Card>
  )
}

export default TinyChartStats

// ** PropTypes
TinyChartStats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  series: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

// ** Default Props
TinyChartStats.defaultProps = {
  height: 100
}
