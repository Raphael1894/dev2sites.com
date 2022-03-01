import Card from '../Card/Card';
import ServicesWrapper from '../../AppWrapper/ServicesWrapper';
import MotionWrapper from '../../AppWrapper/MotionWrapper';
import classes from './PackJeuneEntreprise.module.scss';

const PackJeuneEntreprise = () => {

	const infoOffer = {
		main: {
			title: 'Pack Jeune Entreprise',
			description: `Le pack jeune entreprise est le meilleur moyen de démarrer sur internet avec un petit budget.`,
			price: '500€',
			url: '/about01.png'
		},
		devTime: '2 semaines'
	};

	return (
	<Card infoOffer={infoOffer}/>
	);
};

export default ServicesWrapper(MotionWrapper(PackJeuneEntreprise, 'app__works'), 'PackJeuneEntreprise', 'app__whitebg');
