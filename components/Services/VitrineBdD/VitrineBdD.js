import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";
import Card from '../Card/Card'

const VitrineBdD = () => {

	const infoOffer = {
		main: {
			type: 'siteweb',
			title: 'Site Vitrine avec Base de donnée',
			description: `Un site vitrine avec une base de donnée pour garder en mémoire tout ce dont vous avez besoin`,
			price: 'A partir de 1500€',
			url: '/about03.png'
		},
		listWebsite: [ 'Développé avec Next.js et firebase', 'Fait sur mesure', `Pas de limite de pages`, 'Site web tout support (ordinateur, mobile)', `Optimisation du référencement (SEO)`, 'Mise au normes RGPD (mentions légales et cookies)', 'Page administrateur pour que vous puissiez mettre vos listes facilement à jour' ],
		listAfter: [`Formation de l'utilisation du site`, `Maintenance offerte pour la semaine suivant la remise du site`, 'Accès à la plateforme de connexion sur ce site'],
		listMore: [`Accompagnement pour l'achat du nom de domaine`, 'Site évolutif', 'Rendez-vous avant le développement pour définir vos besoins', 'Retouches du site offertes pendant la semaine suivant la remise du site'],
	};

	return (
	<Card infoOffer={infoOffer}/>
	);
};

export default ServicesWrapper(MotionWrapper(VitrineBdD, 'app__works'), 'VitrineBdD', 'app__whitebg');
