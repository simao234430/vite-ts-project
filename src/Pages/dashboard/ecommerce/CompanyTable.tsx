 
 
import {Table, Card, Avatar, Typography } from '@simao234430/yoo-components'
import Col from '@simao234430/yoo-components/dist/Grid/col';
import Row from '@simao234430/yoo-components/dist/Grid/row';
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'
const colorsArr1 :Record<any, any>  = {
  Technology : 'rgba(115, 103, 240)',
  Grocery: 'rgba(40, 199, 111)',
  Fashion: 'rgba(255, 159, 67)'
}
 
const colorsArr :Record<any, any>  = {
  Technology : 'rgba(115, 103, 240, 0.12)',
  Grocery: 'rgba(40, 199, 111, 0.12)',
  Fashion: 'rgba(255, 159, 67, 0.12)'
}
const CompanyTable = () => {
 
  const columns: TableColumnProps[] = [
    {
      title: 'Company',
      dataIndex: 'company',
      render: (col, record, index) => (
        <Row align='center'>
          <Col span={4}>
                  <Avatar    size={24}     shape='square'>
          <img src={record.img}></img>
        </Avatar>
        </Col>
        <Col span={20}>
      <span className='font-weight-bolder mb-25'>{record.name}</span>
      <br/>
      <span >
      <Typography.Text type='secondary'>{record.email}</Typography.Text>
      </span>
         </Col>
  
 
      </Row>
      )
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: (col, record, index) => (
        <div className='d-flex align-items-center'> 
        <Avatar size={32}   style={{ color:colorsArr1[record.category], backgroundColor: colorsArr[record.category]  }}>
        
        {record.icon  }
        </Avatar>
        <span>   {record.category}</span>
      </div>
      )
    },
    {
      title: 'Views',
      dataIndex: 'views',
      render: (col, record, index) => (
      <div className='d-flex flex-column'>
      <span className='font-weight-bolder mb-25'>{record.views}</span>
      <br/>
      <span className='font-small-2 text-muted'>in {record.time}</span>
    </div>
          )
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      render: (col, record, index) => (
      <div>
        ${record.revenue}
      </div>
        )
    },
    {
      title: 'Sales',
      dataIndex: 'sales',
      render: (col, record, index) => (
        <Row  justify='center' align='center'>
        <Col  style={{margin: "auto"}}  span={8} >{record.sales}%  </Col>
        <Col span={8}> 
       { record.salesUp ? 
      ( <div style={{display: "flex"}}>
        <TrendingUp  size={15} color='red' className='text-success' />
        </div>)
     : 
     ( 
     <div style={{display: "flex"}}>
        <TrendingDown   size={15} color='green' className='text-danger' />
        </div>
        )
       }
      </Col>
      </Row>
      )
    },
  ];
  const data = [
      {
        key: '1',
        img:  '/assets/images/icons/toolbox.svg',
        name: 'Dixons',
        email: 'meguc@ruj.io',
        icon: <Monitor size={18} />,
        category: 'Technology',
        views: '23.4k',
        time: '24 hours',
        revenue: '891.2',
        sales: '68',
        salesUp: false
      },
      {
        key: '2',
        img:  '/assets/images/icons/parachute.svg',
        name: 'Motels',
        email: 'vecav@hodzi.co.uk',
        icon: <Coffee  size={18} />,
        category: 'Grocery',
        views: '78k',
        time: '2 days',
        revenue: '668.51',
        sales: '97',
        salesUp: true
      },
      {
        key: '3',
        img:  '/assets/images/icons/brush.svg',
        name: 'Zipcar',
        email: 'davcilse@is.gov',
        icon: <Watch size={18} />,
        category: 'Fashion',
        views: '162',
        time: '5 days',
        revenue: '522.29',
        sales: '62',
        salesUp: true
      },
      {
        key: '4',
        img:  '/assets/images/icons/star.svg',
        name: 'Owning',
        email: 'us@cuhil.gov',
        icon: <Monitor size={18} />,
        category: 'Technology',
        views: '214',
        time: '24 hour',
        revenue: '291.01',
        sales: '88',
        salesUp: true
      },
      {
        img:  '/assets/images/icons/book.svg' ,
        name: 'Cafés',
        email: 'pudais@jife.com',
        icon: <Coffee size={18} />,
        category: 'Grocery',
        views: '208',
        time: '1 week',
        revenue: '783.93',
        sales: '16',
        salesUp: true
      },
      {
        key: '5',
        img:  '/assets/images/icons/rocket.svg' ,
        name: 'Kmart',
        email: 'bipri@cawiw.com',
        icon: <Watch size={18} />,
        category: 'Fashion',
        views: '990',
        time: '1 month',
        revenue: '780.05',
        sales: '78',
        salesUp: false
      },
      {
        key: '6',
        img: '/assets/images/icons/speaker.svg',
        name: 'Payers',
        email: 'luk@izug.io',
        icon: <Watch size={18} />,
        category: 'Fashion',
        views: '12.9k',
        time: '12 hours',
        revenue: '531.49',
        sales: '42',
        salesUp: true
      }
    ]
 
 
  // const renderData = () => {
  //   return data.map(col => {
  //     const IconTag = col.salesUp ? (
  //       <TrendingUp size={15} className='text-success' />
  //     ) : (
  //       <TrendingDown size={15} className='text-danger' />
  //     )

  //     return (
  //       <tr key={col.name}>
  //         <td>
  //           <div className='d-flex align-items-center'>
  //             <div className='avatar rounded'>
  //               <div className='avatar-content'>
  //               {col.img}
  //                 {/* <img src={col.img} alt={col.name} /> */}
  //               </div>
  //             </div>
  //             <div>
  //               <div className='font-weight-bolder'>{col.name}</div>
  //               <div className='font-small-2 text-muted'>{col.email}</div>
  //             </div>
  //           </div>
  //         </td>
  //         <td>
  //           <div className='d-flex align-items-center'>
  //             {/* <Avatar className='mr-1'  icon={col.icon} /> */}
  //             <span>{col.category}</span>
  //           </div>
  //         </td>
  //         <td className='text-nowrap'>
  //           <div className='d-flex flex-column'>
  //             <span className='font-weight-bolder mb-25'>{col.views}</span>
  //             <span className='font-small-2 text-muted'>in {col.time}</span>
  //           </div>
  //         </td>
  //         <td>${col.revenue}</td>
  //         <td>
  //           <div className='d-flex align-items-center'>
  //             <span className='font-weight-bolder mr-1'>{col.sales}%</span>
  //             {IconTag}
  //           </div>
  //         </td>
  //       </tr>
  //     )
  //   })
  // }

  return (
    <Card className='card-company-table'>
     <Table columns={columns} data={data} />
      {/* <Table responsive>
        <thead>
          <tr>
            <th>Company</th>
            <th>Category</th>
            <th>Views</th>
            <th>Revenue</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table> */}
    </Card>
  )
}

export default CompanyTable
