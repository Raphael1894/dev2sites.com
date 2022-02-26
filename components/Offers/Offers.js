import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGitHub } from 'react-icons/ai';
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
			description: 'la sécurité sur un site internet est fondamentale et est au coeur de toutes mes offres',
			price: '500euros',
			url: images.about01,
			type: 'PackJeuneEntreprise'
		},
		{
			title: 'Site vitrine',
			description: 'la sécurité sur un site internet est fondamentale et est au coeur de toutes mes offres',
			price: 'A partir de 1000euros',
			url: images.about02,
			type: 'SiteVitrine'
		},
		{
			title: 'Site vitrine BdD',
			description: 'la sécurité sur un site internet est fondamentale et est au coeur de toutes mes offres',
			price: 'A partir de 1500euros',
			url: images.about03,
			type: 'VitrineBdD'
		}
	];
	return (
		<div className={classes.app__works}>
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
							<div className={classes.image_wrapper}>
								<Image src={offer.url} alt={offer.title} width={'150px'} height={'150px'} />
							</div>
							<motion.div
								whileHover={{ opacity: [ 0, 1 ] }}
								transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
								className={`${classes.app__offer_hover} ${'app__flex'}`}
							>
                {console.log(index)}
                <Link href={`/Services/#${offer.type}`}>{offer.title}

              </Link>
							</motion.div>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrapper(MotionWrapper(Offers, 'app__works'), 'offers', 'app__primarybg');
//  {index === 0 ? (<Link href='/Services/#PackJeuneEntreprise'/>) : index === 1 ? (<Link href='/Services/#SiteVitrine'/>) : index === 2 ? (<Link href='/Services/#VitrineBdD'/>) : <div/>}