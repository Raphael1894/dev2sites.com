import ServicesWrapper from '../../AppWrapper/ServicesWrapper';
import MotionWrapper from '../../AppWrapper/MotionWrapper';
import classes from './ForfaitGestion.module.scss'

const ForfaitGestion = () => {
	return <div className={classes.div}>ForfaitGestion</div>;
};

export default ServicesWrapper(MotionWrapper(ForfaitGestion, 'app__works'), 'ForfaitGestion', 'app__primarybg');
