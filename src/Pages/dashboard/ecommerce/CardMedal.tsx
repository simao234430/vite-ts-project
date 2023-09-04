 
import { Button, Card, Image, Link, Typography } from '@simao234430/yoo-components'
import styles from './style/index.module.less'
 
const CardMedal = () => {
 
// let mapPicSrc = new URL(`@/assets/images/illustration/badge.svg`, import.meta.url).href
  return (
    <div  style={{position:'relative'}}> 
    <Card  >
          <h3>Congratulations 🎉 John!</h3>
          You have won gold medal
          <Typography.Title style={{color:'rgb(22, 93, 255)'}} heading={3}> $48.9k</Typography.Title>
      <Button size='large' style={{backgroundColor:'rgb(22, 93, 255)',color:"white"}}>View Sales</Button>
      <img className={styles.congratulation_medal} src='/assets/images/illustration/badge.svg' alt='Medal Pic' />  
    </Card>
 
  
        </div>
  )
}

export default CardMedal
