import AppWrapper from "../../AppWrapper/AppWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";

const PackJeuneEntreprise = () => {
	return <div>PackJeuneEntreprise</div>;
};

export default AppWrapper(MotionWrapper(PackJeuneEntreprise, 'app__works'), 'PackJeuneEntreprise', 'app__primarybg');
