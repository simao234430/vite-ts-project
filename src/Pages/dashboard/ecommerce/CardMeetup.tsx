import { Calendar, MapPin } from 'react-feather'

import { Avatar, Card, Typography } from '@simao234430/yoo-components'
import Row from '@simao234430/yoo-components/dist/Grid/row'
import Col from '@simao234430/yoo-components/dist/Grid/col'
const AvatarGroup = Avatar.Group

const CardMeetup = () => {
  const data = [
    {
      title: 'Billy Hopkins',
      placement: 'bottom',
      img: '/assets/images/portrait/small/avatar-s-9.jpg',
      imgHeight: 33,
      imgWidth: 33,
    },
    {
      title: 'Amy Carson',
      placement: 'bottom',
      img: '/assets/images/portrait/small/avatar-s-6.jpg',
      imgHeight: 33,
      imgWidth: 33,
    },
    {
      title: 'Brandon Miles',
      placement: 'bottom',
      img: '/assets/images/portrait/small/avatar-s-8.jpg',
      imgHeight: 33,
      imgWidth: 33,
    },
    {
      title: 'Daisy Weber',
      placement: 'bottom',
      img: '/assets/images/portrait/small/avatar-s-7.jpg',
      imgHeight: 33,
      imgWidth: 33,
    },
    {
      title: 'Jenny Looper',
      placement: 'bottom',
      img: '/assets/images/portrait/small/avatar-s-20.jpg',
      imgHeight: 33,
      imgWidth: 33,
    },
    {
      meta: '+42',
    },
  ]
  function ListingCard() {
    const listingComponents = data.map((listing) => (
      <Avatar style={{ backgroundColor: '#14C9C9' }}>
        <img src={listing.img}></img>
      </Avatar>
    ))

    return (
      <AvatarGroup size={36} style={{ margin: 10 }}>
        {listingComponents}
      </AvatarGroup>
    )
  }
  return (
    <Card
      style={{ height: 566 }}
      cover={
        <img
          style={{ backgroundColor: 'rgba(115, 103, 240, 0.1)' }}
          src="/assets/images/illustration/email.svg"
          height="170"
        />
      }
    >
      <Row        style={{ height: 300 ,paddingTop:40}}  >
        <Col span={24}>
        <Row  align='center'>
            <Col flex="60px">
            <Col flex="auto">
              <Typography.Text>THU</Typography.Text>
              <br />
              <Typography.Text style={{ fontSize: 10 }} type="secondary">
24
              </Typography.Text>
            </Col>
            </Col>
            <Col flex="auto">
              <Typography.Text>Developer Meetup</Typography.Text>
              <br />
              <Typography.Text style={{ fontSize: 10 }} type="secondary">
              Meet world popular developers
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row  align='center'>
            <Col flex="60px">
              <Avatar style={{ margin: 'auto', backgroundColor: 'rgba(115, 103, 240, 0.1)'}} shape="square" size={34}>
              <Calendar color='#7367f0' size={24} />
              </Avatar>
            </Col>
            <Col flex="auto">
              <Typography.Text>Sat, May 25, 2020</Typography.Text>
              <br />
              <Typography.Text style={{ fontSize: 10 }} type="secondary">
                10:AM to 6:PM
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col span={24} >
          <Row  align='center'>
            <Col flex="60px">
            <Avatar style={{ margin: 'auto', backgroundColor:'rgba(115, 103, 240, 0.1)'}} shape="square" size={34}>
              <MapPin  color='#7367f0'  size={24} />
              </Avatar>
            </Col>
            <Col flex="auto">
              <div>
                <Typography.Text>Central Park</Typography.Text>
                <br />
                <Typography.Text type="secondary">
                  Manhattan, New york City
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <ListingCard></ListingCard>
          <span>+42</span>
        </Col>
      </Row>
    </Card>
  )
}

export default CardMeetup
