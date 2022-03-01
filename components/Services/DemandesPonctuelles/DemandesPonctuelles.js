import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapperRight from "../../AppWrapper/MotionWrapperRight";
import Card from '../Card/Card'

const DemandesPonctuelles = () => {

	const infoOffer = {
		main: {
			type: 'ponctuel',
			title: 'Demandes ponctuelles',
			description: `Si vous avez besoin d'apporter une modification à votre site ou d'y faire de la maintenance`,
			price: '50€/heure',
			url: '/about06.png'
		},
		listWebsite: [ '' ],
		listAfter: [`Maintenance du site`, `Extension du forfait de maintenance`, 'Modifications du site', `Formation utilisation du site`],
		listMore: [''],
	};
	return (
	<Card infoOffer={infoOffer}/>
	);
};

export default ServicesWrapper(MotionWrapperRight(DemandesPonctuelles, 'app__works'), 'DemandesPonctuelles', 'app__primarybg');
