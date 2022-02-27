import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";

const ForfaitMaintenance = () => {
	return <div>ForfaitMaintenance</div>;
};

export default ServicesWrapper(MotionWrapper(ForfaitMaintenance, 'app__works'), 'ForfaitMaintenance', 'app__primarybg');
