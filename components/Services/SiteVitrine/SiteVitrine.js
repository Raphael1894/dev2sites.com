import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";

const SiteVitrine = () => {
	return <div>SiteVitrine</div>;
};

export default ServicesWrapper(MotionWrapper(SiteVitrine, 'app__works'), 'SiteVitrine', 'app__primarybg');
