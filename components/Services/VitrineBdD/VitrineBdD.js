import AppWrapper from "../../AppWrapper/AppWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";

const VitrineBdD = () => {
	return <div>VitrineBdD</div>;
};

export default AppWrapper(MotionWrapper(VitrineBdD, 'app__works'), 'VitrineBdD', 'app__primarybg');
