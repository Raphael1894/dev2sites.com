import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
	debug: true,
	fallbackLng: 'fr',
	interpolation: {
		escapeValue: false
	},
	resources: {
		fr: {
			translation: {
				navigation: {
					home: 'Accueil'
				},
				header: {
					badge1: 'Bonjour, et ',
					badge2: 'Bienvenue',
					tag1: 'Développeur Web',
					tag2: 'Freelance'
				},
				guarantees: {
					titre01: `Je sais que `,
					titre02: 'Bon Développement',
					titre03: '  est synonyme de ',
					titre04: 'Bon Business',
					titre1: 'Un site sécurisé',
					description1:
						'La sécurité sur un site internet est fondamentale et est au coeur de toutes mes offres',
					titre2: `Des fontionnalitées adaptées`,
					description2: `Selon vos besoins, je vous conseille pour trouver les meilleures éléments à développer`,
					titre3: `Adequation avec votre budget`,
					description3: `J'adapte les services selon vos besoin, et je recherche les hebergeur proposant les meilleures prix avec une excellente fiabilitée`,
					titre4: `De la transparence`,
					description4: `Pas de frais cachés et des décisions avant tout axés sur vos besoins`,
					titre5: `Une collaboration pérenne`,
					description5: `Je m'engage à développer mes compétences a fin d'offrir les meilleures prestations`,
					titre6: `0 maux de têtes`,
					description6: `Un interlocuteur, une expérience fluide`
				},
				offers: {
					titre: 'Mes divers',
					pje: 'Pack Jeune Entreprise',
					pjed: 'Pour démarrer simplement',
					pjep: '500€',
					sv: 'Site Vitrine',
					svd: 'Une vitrine sur mesure',
					svp: 'A partir de 1000€',
					wl: 'Web-Logiciel',
					wld: 'Un outil web',
					wlp: 'A partir de 1500€',
					fg: 'Forfait Gestion',
					fgd: 'Ça vous simplifie la vie',
					fgp: '200€/mois',
					fm: 'Forfait Maintenance',
					fmd: `Pour une tranquilitée d'esprit`,
					fmp: '200€/mois',
					dp: 'Demandes Ponctuelles',
					dpd: 'Pour toute autre raison',
					dpp: '50€/heure'
				},
				servicesHeader: {
					offer: 'Détails ',
					details: 'Des Offres'
				},
				servicesList: {
					pje: 'Pack Jeune Entreprise',
					sv: 'Site Vitrine',
					wl: 'Web-Logiciel',
					fg: 'Forfait Gestion',
					fm: 'Forfait Maintenance',
					dp: 'Demandes Ponctuelles',
				},
				services: {
					cardTitle: `Détails de l'offre`,
					cardSubT1: `Développement du site`,
					cardSubT2: `Après remise du site`,
					cardSubT3: `Exemples de demandes ponctuelles`,
					cardSubT4: `Autres`,
					pje: 'Pack Jeune Entreprise',
					pjed: `Le pack jeune entreprise est le meilleur moyen de démarrer sur internet avec un petit budget.`,
					pjelw1: 'Développé avec Wordpress',
					pjelw2: 'Séléction parmis plusieurs maquettes prédifinies',
					pjelw3: `Présentation générale de votre activité`,
					pjelw4: `Liens vers vos réseaux sociaux`,
					pjelw5: 'Formulaire de contact',
					pjelw6: '2 pages maximum (ex: Accueil, contact)',
					pjelw7: 'Site web tout support (ordinateur, mobile)',
					pjelw8: 'Optimisation du référencement (SEO)',
					pjela1: `Formation de l'utilisation du site`,
					pjela2: 'Maintenance offerte pendant la semaine suivant la remise du site',
					pjelm1: `Accompagnement pour l'achat du nom de domaine`,
					pjelm2: 'Rendez-vous avant le développement pour définir vos besoins',
					pjelm3: 'Retouches du site offerte pendant 3 jours suivant la remise du site',
					sv: 'Site Vitrine',
					svd: 'Un site fait sur mesure aves des technologies de pointe',
					svp: 'A partir de 1000€',
					svlw1: 'Développé avec Next.js et firebase',
					svlw2: 'Fait sur mesure',
					svlw3: 'Pas de limite de pages',
					svlw4: 'Site web tout support (ordinateur, mobile)',
					svlw5: 'Optimisation du référencement (SEO)',
					svla1: `Formation de l'utilisation du site`,
					svla2: `Maintenance offerte pour la semaine suivant la remise du site`,
					svla3: 'Accès à la plateforme de connexion sur ce site',
					svlm1: `Accompagnement pour l'achat du nom de domaine`,
					svlm2: 'Site évolutif',
					svlm3: 'Rendez-vous avant le développement pour définir vos besoins',
					svlm4: 'Retouches du site offertes pendant la semaine suivant la remise du site',
					wl: 'Web-Logiciel',
					wld: 'Un logiciel web développé pour une meilleure productivité',
					wlp: 'A partir de 1500€',
					wllw1: `Développé avec Next.js et firebase`,
					wllw2: `Fait sur mesure`,
					wllw3: `Pas de limite de pages`,
					wllw4: `Logiciel web tout support (ordinateur, mobile)`,
					wllw5: `Avec ou sans indexage Google Search`,
					wllw6: `Optimisation du référencement (SEO)`,
					wllw7: `Mise au normes RGPD (mentions légales et cookies)`,
					wlla1: `Formation de l'utilisation du logiciel`,
					wlla2: `Maintenance offerte pour la semaine suivant la remise du site`,
					wlla3: `Accès à la plateforme de connexion sur ce site`,
					wllm1: `Accompagnement pour l'achat du nom de domaine`,
					wllm2: `Logiciel évolutif`,
					wllm3: `Rendez-vous avant le développement pour définir vos besoins`,
					wllm4: `Retouches du logiciel offertes pendant la semaine suivant la remise du site`,
					fg: 'Forfait Gestion',
					fgd: `Le forfait gestion vous permet de ne plus vous inquieter du bon fonctionnement de votre site`,
					fgp: `200€/mois`,
					fgla1: `Gestion des dépendances (ex: GitHub, herbergement)`,
					fgla2: `Vérification hebdomadaire du bon fonctionnement du site`,
					fgla3: `Sauvegarde mensuelle du site`,
					fgla4: `0 maux de tête`,
					fgla5: `Si vous avez le forfait maintenance et si nécessaire, la maintenance sera effectuée suite à la vérification hebdomadaire`,
					fm: 'Forfait Maintenance',
					fmd: `Le forfait maintenance vous offre 5h de maintenance par mois afin de répondre au moindre problème le plus efficacement possible`,
					fmp: `200€/mois`,
					fmla1: `5 heures de maintenance incluses`,
					fmla2: `Début du dépannage sous 48 heures`,
					dp: 'Demandes Ponctuelles',
					dpd: `Si vous avez besoin d'apporter une modification à votre site ou d'y faire de la maintenance`,
					dpp: `50€/heure`,
					dpla1: `Maintenance du site`,
					dpla2: `Extension du forfait de maintenance`,
					dpla3: `Modifications du site`,
					dpla4: `Formation utilisation du site`
				},
				contact: {
					contactMe: 'Contactez-moi',
					name: 'Votre nom',
					email: 'Votre email',
					message: 'Votre message',
					send: 'Envoyer',
					sending: 'Envoie en cours',
					problem: `Un problème est survenue lors de l'envoie du message. Veuillez réessayer plus tard`,
					thankY: 'Merci pour votre ',
					mesg: 'Message'
				}
			}
		},
		en: {
			translation: {
				navigation: {
					home: 'Home'
				},
				header: {
					badge1: 'Hello there, and ',
					badge2: 'Welcome',
					tag1: 'Web Developper',
					tag2: 'Freelancer'
				},
				guarantees: {
					titre1: 'A secured website',
					description1: 'security on a website is fundamental and is at the heart of all my offers',
					titre2: `Adapted functionalities`,
					description2: `Depending on your needs, I advise you to find the best elements to develop`,
					titre3: `Adequacy with your budget`,
					description3: `I adapt the services according to your needs, and I look for the web hosting services offering the best prices with great reliability`,
					titre4: `Transparency`,
					description4: `No hidden costs and decisions focused above all on your needs`,
					titre5: `A long-lasting collaboration`,
					description5: `I am committed to developing my skills in order to offer the best services`,
					titre6: `0 headaches`,
					description6: `
					One interlocutor, a seamless experience`
				},
				offers: {
					titre01: 'I know that ',
					titre02: 'Good Development',
					titre03: ' means ',
					titre04: 'Good Business',
					titre: 'My various',
					pje: 'Young Business Starter',
					pjed: 'For an easy start',
					pjep: '500€',
					sv: 'Showcase Website',
					svd: 'A tailored website',
					svp: 'Starting at 1000€',
					wl: 'Web-Software',
					wld: 'A web tool',
					wlp: 'Starting at 1500€',
					fg: 'Management Package',
					fgd: 'It makes your life easier',
					fgp: '200€/month',
					fm: 'Maintenance Package',
					fmd: 'For peace of mind',
					fmp: '200€/month',
					dp: 'Punctual Requests',
					dpd: 'For any other reason',
					dpp: '50€/hour'
				},
				servicesHeader: {
					offer: 'Offer',
					details: 'Details'
				},
				servicesList: {
					pje: 'Young Business Starter',
					sv: 'Showcase Website',
					wl: 'Web-Software',
					fg: 'Management Package',
					fm: 'Maintenance Package',
					dp: 'Punctual Requests',
				},
				services: {
					cardTitle: `Offer details`,
					cardSubT1: `Website development`,
					cardSubT2: `After handing over the site`,
					cardSubT3: `Examples of punctual requests`,
					cardSubT4: `Others`,
					pje: 'Young Business Starter',
					pjed: `The Young Business Starteris the best way to start on the internet with a small budget`,
					pjelw1: 'Developed with Wordpress',
					pjelw2: 'Selection among several predefined models',
					pjelw3: `General presentation of your activity`,
					pjelw4: `Links to your social networks`,
					pjelw5: 'Contact form',
					pjelw6: '2 pages at most (ie: Home, contact)',
					pjelw7: 'Website for any medium (computer, mobile)',
					pjelw8: 'Search Engine Optimization (SEO)',
					pjela1: `Training in the use of the site`,
					pjela2: 'Maintenance offered during the week following the delivery of the site',
					pjelm1: `Support for the purchase of the domain name`,
					pjelm2: 'Meeting before development, to define your needs',
					pjelm3: 'Site retouching offered for 3 days following the delivery of the site',
					sv: 'Showcase website',
					svd: 'A tailor-made site with state-of-the-art technologies',
					svp: 'Starting at 1000€',
					svlw1: 'Developed with Next.js and firebase',
					svlw2: 'Custom made',
					svlw3: 'No page limit',
					svlw4: 'Website for any medium (computer, mobile)',
					svlw5: 'Search Engine Optimization (SEO)',
					svla1: `Training in the use of the site`,
					svla2: `Maintenance offered during the week following the delivery of the site`,
					svla3: 'Access to the connection platform on this site',
					svlm1: `Support for the purchase of the domain name`,
					svlm2: 'Scalable site',
					svlm3: 'Meeting before development, to define your needs',
					svlm4: 'Site retouching offered during the week following the delivery of the site',
					wl: 'Web-Software',
					wld: 'Web-based software developed for better productivity',
					wlp: 'Starting at 1500€',
					wllw1: `Developed with Next.js and firebase`,
					wllw2: `Custom made`,
					wllw3: `No page limit`,
					wllw4: `Web software for any medium (computer, mobile)`,
					wllw5: `With or without Google Search indexing`,
					wllw6: `Search Engine Optimization (SEO)`,
					wllw7: `GDPR compliance (legal notices and cookies)`,
					wlla1: `Training in the use of the software`,
					wlla2: `Maintenance offered during the week following the delivery of the site`,
					wlla3: `Access to the connection platform on this site`,
					wllm1: `Support for the purchase of the domain name`,
					wllm2: `Scalable software`,
					wllm3: `Meeting before development, to define your needs`,
					wllm4: `Software updates offered during the week following the delivery of the site`,
					fg: 'Management Package',
					fgd: `The management package allows you to no longer worry about the proper functioning of your site`,
					fgp: `200€/month`,
					fgla1: `Dependency management (ie: GitHub, hosting)`,
					fgla2: `Weekly verification of the proper functioning of the site`,
					fgla3: `Monthly site backup`,
					fgla4: `0 headaches`,
					fgla5: `If you have the maintenance plan and if necessary, maintenance will be carried out following the weekly check`,
					fm: 'Maintenance Package',
					fmd: `The maintenance package offers you 5 hours of maintenance per month in order to respond to the slightest problem as efficiently as possible`,
					fmp: `200€/month`,
					fmla1: `5 hours of maintenance included`,
					fmla2: `Start of troubleshooting within 48 hours`,
					dp: 'Punctual Requests',
					dpd: `If you need to make any changes or maintenance to your site`,
					dpp: `50€/hour`,
					dpla1: `Site maintenance`,
					dpla2: `Extension of the maintenance package`,
					dpla3: `Changes to the site`,
					dpla4: `Site use training`
				},
				contact: {
					contactMe: 'Contact me',
					name: 'Your name',
					email: 'Your email',
					message: 'Your message',
					send: 'Send',
					sending: 'Sending',
					problem: 'There has been a problem when sending the message. Please try again in a few minutes',
					thankY: 'Thank you for your ',
					msg: 'Message'
				}
			}
		}
	}
});

export default i18n;
