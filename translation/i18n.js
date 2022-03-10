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
				offers: {
					titre: 'Mes divers',
					pje: 'Pack Jeune Entreprise',
					pjed: 'Pour démarrer simplement',
					sv: 'Site Vitrine',
					svd: 'Une vitrine sur mesure',
					wl: 'Web-Logiciel',
					wld: 'Un outil web',
					fg: 'Forfait Gestion',
					fgd: 'Ça vous simplifie la vie',
					fm: 'Forfait Maintenance',
					fmd: `Pour une tranquilitée d'esprit`,
					dp: 'Demandes Ponctuelles',
					dpd: 'Pour toute autre raison',
				},
				servicesHeader: {
					offer: 'Détails ',
					details: 'Des Offres'
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
				offers: {
					titre: 'My various',
					pje: 'Young Business Starter',
					pjed: 'For an easy start',
					sv: 'Showcase Website',
					svd: 'A tailored website',
					wl: 'Web-Software',
					wld: 'A web tool',
					fg: 'Management Package',
					fgd: 'It makes your life easier',
					fm: 'Maintenance Package',
					fmd: 'For peace of mind',
					dp: 'Punctual Requests',
					dpd: 'For any other reason',
				},
				servicesHeader: {
					offer: 'Offer',
					details: 'Details'
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
