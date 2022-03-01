import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapperRight from "../../AppWrapper/MotionWrapperRight";
import Card from '../Card/Card'

const SiteVitrine = () => {

	const infoOffer = {
		main: {
			type: 'siteweb',
			title: 'Site Vitrine',
			description: `Un site fait sur mesure aves des technologies de pointe`,
			price: 'A partir de 1000€',
			url: '/about02.png'
		},
		listWebsite: [ 'Développé avec Next.js', 'Fait sur mesure', `Pas de limite de pages`, 'Site web tout support (ordinateur, mobile)', `Optimisation du référencement (SEO)` ],
		listAfter: [`Formation de l'utilisation du site`, `Maintenance offerte pour la semaine suivant la remise du site`, 'Accès à la plateforme de connexion sur ce site'],
		listMore: [`Accompagnement pour l'achat du nom de domaine`, 'Site évolutif', 'Rendez-vous avant le développement pour définir vos besoins', 'Retouches du site offertes pendant la semaine suivant la remise du site'],
	};


	return <Card infoOffer={infoOffer}/>;
};

export default ServicesWrapper(MotionWrapperRight(SiteVitrine, 'app__works'), 'SiteVitrine', 'app__primarybg');
