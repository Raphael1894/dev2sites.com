import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";

const PackJeuneEntreprise = () => {
	return <div>PackJeuneEntreprise</div>;
};

export default ServicesWrapper(MotionWrapper(PackJeuneEntreprise, 'app__works'), 'PackJeuneEntreprise', 'app__primarybg');
