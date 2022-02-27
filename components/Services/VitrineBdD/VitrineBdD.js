import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";

const VitrineBdD = () => {
	return <div>VitrineBdD</div>;
};

export default ServicesWrapper(MotionWrapper(VitrineBdD, 'app__works'), 'VitrineBdD', 'app__primarybg');
