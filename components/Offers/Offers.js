import { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import AppWrapper from '../AppWrapper/AppWrapper';
import MotionWrapper from '../AppWrapper/MotionWrapper';
import Link from 'next/link';
import { images } from '../../constants';
import Image from 'next/image';
import classes from './Offers.module.scss';

const Offers = () => {
	const [ animateCard, setAnimateCard ] = useState({ y: 0, opacity: 1 });

	const offersList = [
		{
			title: 'Pack Jeune Entreprise',
			description: 'Pour démarrer simplement',
			price: '500€',
			url: images.about01,
			type: 'PackJeuneEntreprise'
		},
		{
			title: 'Site Vitrine',
			description: 'Une vitrine sur mesure',
			price: 'A partir de 1000€',
			url: images.about02,
			type: 'SiteVitrine'
		},
		{
			title: 'Site Vitrine BdD',
			description: 'Elle répond à toutes vos envies',
			price: 'A partir de 1500€',
			url: images.about03,
			type: 'VitrineBdD'
		},
		{
			title: 'Forfait Gestion',
			description: 'Ça vous simplifie la vie',
			price: '200€/mois',
			url: images.about04,
			type: 'ForfaitGestion'
		},
		{
			title: 'Forfait Maintenance',
			description: `Pour une tranquilitée d'esprit`,
			price: '200€/mois',
			url: images.about05,
			type: 'ForfaitMaintenance'
		}
	];

	const offerWork = [
		{
			title: 'Demandes Ponctuelles',
			description: 'Pour toute autre raison',
			price: '50€/heure',
			url: images.about06,
			type: 'DemandesPonctuelles'
		}
	];
	return (
		<div className={classes.app__offers}>
			<h2 className="head-text">
				Mes Differents<span> Services</span>
			</h2>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={classes.app__offers_portfolio}
			>
				{offersList.map((offer, index) => (
					<div className={`${classes.app__offer_item} ${'app__flex'}`} key={index}>
						<div className={`${classes.app__offer_img} ${'app__flex'}`}>
							<Image src={offer.url} alt={offer.title} layout={'fill'} />
							<motion.div
								whileHover={{ opacity: [ 0, 1 ] }}
								transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
								className={`${classes.app__offer_hover} ${'app__flex'}`}
							>
								<Link href={`/Services/#${offer.type}`}>
									<motion.div
										whileInView={{ scale: [ 0, 1 ] }}
										whileHover={{ scale: [ 1, 0.9 ] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillEye />
									</motion.div>
								</Link>
							</motion.div>
						</div>
						<div className={`${classes.app__offer_content} ${'app__flex'}`}>
							<h4 className="bold-text">{offer.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{offer.description}
							</p>
							<div className={`${classes.app__offer_tag} ${'app__flex'}`}>
								<p className="p-text">{offer.price}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={classes.app__offers_portfolio}
			>
				{offerWork.map((offer, index) => (
					<div className={`${classes.app__offer_item} ${'app__flex'}`} key={index}>
						<div className={`${classes.app__offer_img} ${'app__flex'}`}>
							<Image src={offer.url} alt={offer.title} layout={'fill'} />
							<motion.div
								whileHover={{ opacity: [ 0, 1 ] }}
								transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
								className={`${classes.app__offer_hover} ${'app__flex'}`}
							>
								<Link href={`/Services/#${offer.type}`}>
									<motion.div
										whileInView={{ scale: [ 0, 1 ] }}
										whileHover={{ scale: [ 1, 0.9 ] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillEye />
									</motion.div>
								</Link>
							</motion.div>
						</div>
						<div className={`${classes.app__offer_content} ${'app__flex'}`}>
							<h4 className="bold-text">{offer.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{offer.description}
							</p>
							<div className={`${classes.app__offer_tag} ${'app__flex'}`}>
								<p className="p-text">{offer.price}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrapper(MotionWrapper(Offers, 'app__works'), 'offers', 'app__primarybg');