import { Avatar, Card, Typography } from '@simao234430/yoo-components'
import styles from './style/index.module.less'
import classnames from 'classnames'
import { Grid } from '@simao234430/yoo-components';


const Row = Grid.Row;
const Col = Grid.Col;
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
 

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '230k',
      subtitle: 'Sales',
      color: '#C9E968',
      icon: <TrendingUp size={32} />
    },
    {
      title: '8.549k',
      subtitle: 'Customers',
      color: '#F9CC45',
      icon: <User size={32} />
    },
    {
      title: '1.423k',
      subtitle: 'Products',
      color: '#F76560',
      icon: <Box size={32} />
    },
    {
      title: '$9745',
      subtitle: 'Revenue',
      color: '#4080FF',
      icon: <DollarSign size={32} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col key={index} span={4}
   
        >
         
        <div style={{ gap: '24px',alignItems: 'center', justifyContent:'center',  display: 'flex' }}>
           <Avatar  style={{ backgroundColor:item.color}}  >
           {item.icon}
            </Avatar> 
 
            <div>
            <Typography.Title style={{marginBottom: '0',color:'rgb(22, 93, 255)'}} heading={5}>{item.title}</Typography.Title>
            <Typography.Text style={{color:'rgb(22, 93, 255)'}}  >{item.subtitle}</Typography.Text>
   
           </div>
           </div>
           
          {/* <Media>
            // <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              // <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media> */}
        </Col>
      )
    })
  }

  return (
 
    <Card 
    cover={
      <div style={{ height: 64}}>
 <Typography.Title style={{ margin:'16px',color:'rgb(22, 93, 255)'}} heading={4}>Statistics</Typography.Title>
      </div>
    }
     style={{ minHeight: '204px',height:'100%'}}   className='card-statistics'>
         <div style={{  }} > 
        {/* <Typography.Title style={{color:'rgb(22, 93, 255)'}} heading={5}>Statistics</Typography.Title> */}
        <Row  style={{ display: 'flex', alignItems:'center', justifyContent: 'space-around' }}>
        {renderData()}
        </Row>
        </div>
          {/* <Col span={4}>
            <div>col - 4</div>
          </Col>
          <Col span={4}>
            <div>col - 4</div>
          </Col>
          <Col span={4}>
            <div>col - 4</div>
          </Col>
          <Col span={4}>
            <div>col - 4</div> */
        /* </Col> */}

      {/* <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 1 month ago</CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        // <Row>{renderData()}</Row>
      </CardBody> */}
    </Card>
 
  )
}

export default StatsCard
