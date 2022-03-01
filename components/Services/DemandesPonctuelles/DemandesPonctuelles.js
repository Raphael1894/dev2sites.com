import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";
import Card from '../Card/Card'

const DemandesPonctuelles = () => {

	const infoOffer = {
		main: {
			title: 'Demandes ponctuelles',
			description: `Si vous avez besoin d'apporter une modification à votre site ou d'y faire de la maintenance`,
			price: '50€/heure',
			url: '/about06.png'
		},
		devTime: 'sur devis'
	};

	return (
	<Card infoOffer={infoOffer}/>
	);
};

export default ServicesWrapper(MotionWrapper(DemandesPonctuelles, 'app__works'), 'DemandesPonctuelles', 'app__primarybg');
