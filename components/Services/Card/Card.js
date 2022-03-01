import { useState } from 'react';
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
						<div className={classes.detailsContainer}>
							<div>
								<p className={classes.p_text}>{infoOffer.devTime}</p>
							</div>
						</div>
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
