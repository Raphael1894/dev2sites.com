import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";
import Card from '../Card/Card'

const SiteVitrine = () => {

	const infoOffer = {
		main: {
			title: 'Site Vitrine',
			description: `Un site fait sur mesure aves des technologies de pointe`,
			price: 'A partir de 1000€',
			url: '/about02.png'
		},
		devTime: '3semaines'
	};


	return <Card infoOffer={infoOffer}/>;
};

export default ServicesWrapper(MotionWrapper(SiteVitrine, 'app__works'), 'SiteVitrine', 'app__primarybg');
