import { motion } from 'framer-motion';
import AppWrapper from '../AppWrapper/AppWrapper';
import MotionWrapper from '../AppWrapper/MotionWrapper';
import { useTranslation } from 'react-i18next';
import classes from './Guarantees.module.scss';

const Guarantees = () => {
	const { t } = useTranslation();

	const guarantees = [
		{
			title: `${t('guarantees.titre1')}`,
			description: `${t('guarantees.description1')}`,
			url: '/about01.png'
		},
		{
			title: `${t('guarantees.titre2')}`,
			description: `${t('guarantees.description2')}`,
			url: '/about02.png'
		},
		{
			title: `${t('guarantees.titre3')}`,
			description: `${t('guarantees.description3')}`,
			url: '/about03.png'
		},
		{
			title: `${t('guarantees.titre4')}`,
			description: `${t('guarantees.description4')}`,
			url: '/about04.png'
		},
		{
			title: `${t('guarantees.titre5')}`,
			description: `${t('guarantees.description5')}`,
			url: '/about05.png'
		},
		{
			title: `${t('guarantees.titre6')}`,
			description: `${t('guarantees.description6')}`,
			url: '/about06.png'
		}
	];

	return (
		<div className={classes.app__guarantees}>
			<h2 className="head-text">
			{t('guarantees.titre01')}<span>{t('guarantees.titre02')}</span>
				<br />{t('guarantees.titre03')}<span>{t('guarantees.titre04')}</span>
			</h2>

			<div className={classes.app__profiles}>
				{guarantees.map((guarantee, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className={classes.app__profile_item}
						key={guarantee.title + index}
					>
						<div className={classes.image_wrapper}>
							<img src={guarantee.url} alt={guarantee.title} />
						</div>
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{guarantee.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{guarantee.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default AppWrapper(MotionWrapper(Guarantees, 'app__about'), 'guarantees', 'app__whitebg');
