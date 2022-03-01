import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapperLeft from "../../AppWrapper/MotionWrapperLeft";
import Card from '../Card/Card'

const VitrineBdD = () => {

	const infoOffer = {
		main: {
			type: 'siteweb',
			title: 'Site Vitrine avec Base de donnée',
			description: `L'intégration d'une base de donnée avec votre site vitrine pour la sauvegarde de donnée ou pour mettre en avant vos produits de façon plus dynamique`,
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

export default ServicesWrapper(MotionWrapperLeft(VitrineBdD, 'app__works'), 'VitrineBdD', 'app__whitebg');
