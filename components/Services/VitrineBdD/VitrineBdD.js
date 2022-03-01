import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";
import Card from '../Card/Card'

const VitrineBdD = () => {

	const infoOffer = {
		main: {
			title: 'Site Vitrine avec Base de donnée',
			description: `L'intégration d'une base de donnée avec votre site vitrine pour la sauvegarde de donnée ou pour mettre en avant vos produits de façon plus dynamique`,
			price: 'A partir de 1500€',
			url: '/about03.png'
		},
		devTime: '4semaines'
	};

	return (
	<Card infoOffer={infoOffer}/>
	);
};

export default ServicesWrapper(MotionWrapper(VitrineBdD, 'app__works'), 'VitrineBdD', 'app__whitebg');
