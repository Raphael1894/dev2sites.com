import AppWrapper from "../../AppWrapper/AppWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";

const SiteVitrine = () => {
	return <div>SiteVitrine</div>;
};

export default AppWrapper(MotionWrapper(SiteVitrine, 'app__works'), 'SiteVitrine', 'app__primarybg');
