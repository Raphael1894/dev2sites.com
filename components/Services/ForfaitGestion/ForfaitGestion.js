import ServicesWrapper from '../../AppWrapper/ServicesWrapper';
import MotionWrapper from '../../AppWrapper/MotionWrapper';
import Card from '../Card/Card';
import { useTranslation } from 'react-i18next';
import classes from './ForfaitGestion.module.scss';

const ForfaitGestion = () => {
	const { t } = useTranslation();

	const infoOffer = {
		main: {
			type: 'forfait',
			title: `${t('services.fg')}`,
			description: `${t('services.fgd')}`,
			price: `${t('services.fgp')}`,
			url: '/about04.png'
		},
		listWebsite: [ '' ],
		listAfter: [
			`${t('services.fgla1')}`,
			`${t('services.fgla2')}`,
			`${t('services.fgla3')}`,
			`${t('services.fgla4')}`,
			'_',
			`${t('services.fgla5')}`
		],
		listMore: [ `` ]
	};

	return <Card infoOffer={infoOffer} />;
};

export default ServicesWrapper(MotionWrapper(ForfaitGestion, 'app__works'), 'ForfaitGestion', 'app__primarybg');
