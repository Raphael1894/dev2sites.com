import ServicesWrapper from '../../AppWrapper/ServicesWrapper';
import MotionWrapper from '../../AppWrapper/MotionWrapper';
import Card from '../Card/Card';

const ForfaitMaintenance = () => {
	const infoOffer = {
		main: {
			title: 'Forfait maintenance',
			description: `Avec le forfait maintenance vous offre5h de maintenance par mois afin de répondre au moindre problème le plus efficacement possible`,
			price: '200€/mois',
			url: '/about05.png'
		},
		devTime: ''
	};

	return <Card infoOffer={infoOffer} />;
};

export default ServicesWrapper(MotionWrapper(ForfaitMaintenance, 'app__works'), 'ForfaitMaintenance', 'app__whitebg');
