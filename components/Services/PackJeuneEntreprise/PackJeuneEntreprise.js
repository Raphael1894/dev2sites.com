import Card from '../Card/Card';
import ServicesWrapper from '../../AppWrapper/ServicesWrapper';
import MotionWrapper from '../../AppWrapper/MotionWrapper';
import classes from './PackJeuneEntreprise.module.scss';

const PackJeuneEntreprise = () => {
	const infoOffer = {
		main: {
			type: 'siteweb',
			title: 'Pack Jeune Entreprise',
			description: `Le pack jeune entreprise est le meilleur moyen de démarrer sur internet avec un petit budget.`,
			price: '500€',
			url: '/about01.png'
		},
		listWebsite: [ 'Développé avec Wordpress', 'Séléction parmis plusieurs maquettes prédifinies', `Présentation générale de votre activité`, `Liens vers vos réseaux sociaux`, 'Formulaire de contact', '2 pages maximum (ex: Accueil, contact)', 'Site web tout support (ordinateur, mobile)', `Optimisation du référencement (SEO)` ],
		listAfter: [`Formation de l'utilisation du site`, `Maintenance offerte pour la semaine suivant la remise du site`],
		listMore: [`Accompagnement pour l'achat du nom de domaine`, 'Rendez-vous avant le développement pour définir vos besoins', 'Retouches du site offerte pendant 3 jours suivant la remise du site'],
	};

	return <Card infoOffer={infoOffer} />;
};

export default ServicesWrapper(MotionWrapper(PackJeuneEntreprise, 'app__works'), 'PackJeuneEntreprise', 'app__whitebg');
