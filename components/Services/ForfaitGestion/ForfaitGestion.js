import ServicesWrapper from '../../AppWrapper/ServicesWrapper';
import MotionWrapperRight from '../../AppWrapper/MotionWrapperRight';
import Card from '../Card/Card'
import classes from './ForfaitGestion.module.scss'

const ForfaitGestion = () => {
	
	const infoOffer = {
		main: {
			type: 'forfait',
			title: 'Forfait de gestion',
			description: `Le forfait gestion vous permet de ne plus vous inquieter du bon fonctionnement de votre site`,
			price: '200€/mois',
			url: '/about04.png'
		},
		listWebsite: [ '' ],
		listAfter: ['Gestion des dépendances (ex: GitHub, herbergement)', `Vérification hebdomadaire du bon fonctionnement du site`, 'Sauvegarde mensuelle du site', '0 maux de tête', '_', 'Si vous avez le forfait maintenance et si nécessaire, la maintenance sera effectuée suite à la vérification hebdomadaire'],
		listMore: [``],
	};

	return (
	<Card infoOffer={infoOffer}/>
	);
};

export default ServicesWrapper(MotionWrapperRight(ForfaitGestion, 'app__works'), 'ForfaitGestion', 'app__primarybg');
