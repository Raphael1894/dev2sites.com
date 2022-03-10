import Card from '../Card/Card';
import ServicesWrapper from '../../AppWrapper/ServicesWrapper';
import MotionWrapper from '../../AppWrapper/MotionWrapper';
import { useTranslation } from "react-i18next";
import classes from './PackJeuneEntreprise.module.scss';

const PackJeuneEntreprise = () => {
	const { t } = useTranslation();

	const infoOffer = {
		main: {
			type: 'siteweb',
			title: `${t('services.pje')}`,
			description: `${t('services.pjed')}`,
			price: '500€',
			url: '/about01.png'
		},
		listWebsite: [
			`${t('services.pjelw1')}`,
			`${t('services.pjelw2')}`,
			`${t('services.pjelw3')}`,
			`${t('services.pjelw4')}`,
			`${t('services.pjelw5')}`,
			`${t('services.pjelw6')}`,
			`${t('services.pjelw7')}`,
			`${t('services.pjelw8')}`
		],
		listAfter: [ `${t('services.pjela1')}`, `${t('services.pjela2')}` ],
		listMore: [ `${t('services.pjelm1')}`, `${t('services.pjelm2')}`, `${t('services.pjelm3')}`]
	};

	return <Card infoOffer={infoOffer} />;
};

export default ServicesWrapper(MotionWrapper(PackJeuneEntreprise, 'app__works'), 'PackJeuneEntreprise', 'app__whitebg');
