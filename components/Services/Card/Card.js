import { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

import classes from './Card.module.scss';

const Card = ({ infoOffer }) => {
	const [ animateCard, setAnimateCard ] = useState({ y: 0, opacity: 1 });
	const [ showDetails, setShowDetails ] = useState(false);
	const [ showArrowDown, setShowArrowDown ] = useState(true);
	const [ showArrowUp, setShowArrowUp ] = useState(false);

	const arrowDownHandler = () => {
		setShowArrowDown(false);
		setShowDetails(true);
		setShowArrowUp(true);
	};

	const arrowUpHandler = () => {
		setShowArrowUp(false);
		setShowDetails(false);
		setShowArrowDown(true);
	};

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	};

	return (
		<div className={classes.app__offers}>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={classes.app__offers_portfolio}
			>
				<div className={classes.app__offer_item}>
					<div className={classes.app__offer_tag}>
						<p>{infoOffer.main.price}</p>
					</div>

					<div className={classes.mainContent}>
						<div className={classes.app__offer_img}>
							<img src={infoOffer.main.url} alt="image service" />
						</div>
						<div className={classes.app__offer_content}>
							<h4 className={classes.bold_text}>{infoOffer.main.title}</h4>
							<p className={classes.p_text} style={{ marginTop: 10 }}>
								{infoOffer.main.description}
							</p>
						</div>
					</div>

					{showDetails && (
						<Fragment>
							<hr className={classes.hr} />
							<p className={classes.detailTitle}>Détails de l'offre</p>
							<div className={classes.detailsContainer}>
								<motion.ul variants={container} initial="hidden" animate="show" className={classes.cardUl}>
									<p className={classes.detailListTitle}>
										{infoOffer.main.type === 'siteweb' ? (
											'Développement du site'
										) : infoOffer.main.type === 'forfait' ? (
											''
										) : (
											''
										)}
									</p>

									{infoOffer.listWebsite.map((offer, index) => (
										<motion.li variants={item} key={index} className={classes.p_text}>
											{offer}
										</motion.li>
									))}
								</motion.ul>
								<motion.ul variants={container} initial="hidden" animate="show"  className={classes.cardUl}>
									<p className={classes.detailListTitle}>
										{infoOffer.main.type === 'siteweb' ? (
											'Après remise du site'
										) : infoOffer.main.type === 'forfait' ? (
											''
										) : (
											'Examples de demandes ponctuelles'
										)}
									</p>
									{infoOffer.listAfter.map((offer, index) => (
										<motion.li variants={item} key={index} className={classes.p_text}>
											{offer}
										</motion.li>
									))}
								</motion.ul>
								<motion.ul variants={container} initial="hidden" animate="show"  className={classes.cardUl}>
									<p className={classes.detailListTitle}>
										{infoOffer.main.type === 'siteweb' ? (
											'Autres'
										) : infoOffer.main.type === 'forfait' ? (
											''
										) : (
											''
										)}
									</p>

									{infoOffer.listMore.map((offer, index) => (
										<motion.li variants={item} key={index} className={classes.p_text}>
											{offer}
										</motion.li>
									))}
								</motion.ul>
							</div>

							<hr className={classes.hr} />
						</Fragment>
					)}
				</div>

				{showArrowDown ? (
					<div className={classes.arrowWrapper}>
						<BsFillArrowDownCircleFill onClick={arrowDownHandler} />
					</div>
				) : (
					<div className={classes.arrowWrapper}>
						<BsFillArrowUpCircleFill onClick={arrowUpHandler} />
					</div>
				)}
			</motion.div>
		</div>
	);
};

export default Card;
