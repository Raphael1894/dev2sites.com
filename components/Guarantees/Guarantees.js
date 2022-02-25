import { motion } from 'framer-motion';
import { Fragment } from 'react';
import Image from 'next/image';
import { images } from '../../constants';
import AppWrapper from '../AppWrapper/AppWrapper';
import MotionWrapper from '../AppWrapper/MotionWrapper';
import classes from './Guarantees.module.scss';

const Guarantees = () => {
	const guarantees = [
		{
			title: 'Un site sécurisé',
			description: 'la sécurité sur un site internet est fondamentale et est au coeur de toutes mes offres',
			url: images.about01
		},
		{
			title: 'Des fontionnalitées adaptées',
			description: 'Selon vos besoins, je vous conseille pour trouver les meilleures éléments à développer',
			url: images.about02
		},
		{
			title: 'Adequation avec votre budget',
			description:
				"J'adapte les services selon vos besoin, et je recherche les hebergeur proposant les meilleures prix avec une bonne fiabilitée",
			url: images.about03
		},
		{
			title: 'De la transparence',
			description: 'Pas de frais cachés et des décisions avant tout axés sur vos besoins',
			url: images.about04
		},
		{
			title: 'Une collaboration pérenne',
			description: "Je m'engage à développer mes compétences a fin d'offrir les meilleures prestations'",
			url: images.about01
		},
		{
			title: '0 maux de têtes',
			description: 'Un interlocuteur, une expérience fluide',
			url: images.about02
		}
	];

	return (
		<div className={classes.app__guarantees}>
			<h2 className="head-text">
				I know that <span>Good Development</span>
				<br /> means <span>Good Business</span>
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
							<Image src={guarantee.url} alt={guarantee.title} />
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
