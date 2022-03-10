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
				header: {
					badge1: 'Bonjour, et ',
					badge2: 'Bienvenue',
					tag1: 'Développeur Web',
					tag2: 'Freelance'
				},
				navigation: {
					home: 'Accueil'
				},
				servicesHeader: {
					offer: 'Détails ',
					details: 'Des Offres'
				}
			}
		},
		en: {
			translation: {
				header: {
					badge1: 'Hello there, and ',
					badge2: 'Welcome',
					tag1: 'Web Developper',
					tag2: 'Freelancer'
				},
				navigation: {
					home: 'Home'
				},
				servicesHeader: {
					offer: 'Offer',
					details: 'Details'
				}
			}
		}
	}
});

export default i18n;
