import AppWrapper from '../AppWrapper/AppWrapper'
import MotionWrapper from '../AppWrapper/MotionWrapper'
import classes from './Offers.module.scss'

const Offers = () => {
  return (
    <div>Offers</div>
  )
}


export default AppWrapper(MotionWrapper(Offers, 'app__works'), 'offers', 'app__primarybg');