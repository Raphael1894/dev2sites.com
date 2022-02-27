import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";

const DemandesPonctuelles = () => {
	return <div>DemandesPonctuelles</div>;
};

export default ServicesWrapper(MotionWrapper(DemandesPonctuelles, 'app__works'), 'DemandesPonctuelles', 'app__primarybg');
