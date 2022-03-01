import ServicesWrapper from '../../AppWrapper/ServicesWrapper';
import MotionWrapper from '../../AppWrapper/MotionWrapper';
import Card from '../Card/Card'
import classes from './ForfaitGestion.module.scss'

const ForfaitGestion = () => {
	
	const infoOffer = {
		main: {
			title: 'Forfait de gestion',
			description: `Le forfait gestion vous permet de ne plus vous inquieter du bon fonctionnement de votre site`,
			price: '200€/mois',
			url: '/about04.png'
		},
		devTime: ''
	};

	return (
	<Card infoOffer={infoOffer}/>
	);
};

export default ServicesWrapper(MotionWrapper(ForfaitGestion, 'app__works'), 'ForfaitGestion', 'app__primarybg');
