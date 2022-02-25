import classes from './Header.module.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import Image from 'next/image';
import AppWrapper from '../AppWrapper/AppWrapper';

const Header = () => {
	const scaleVariants = {
		whileInView: {
			scale: [ 0, 1 ],
			opacity: [ 0, 1 ],
			transition: {
				duration: 1,
				ease: 'easeInOut'
			}
		}
	};
	return (
		<div className={`${classes.app__header} ${'app__flex'}`}>
			<motion.div
				initial="hidden"
				whileInView={{ x: [ -100, 0 ], opacity: [ 0, 1 ] }}
				transition={{ duration: 0.5 }}
				className={classes.app__header_info}
			>
				<div className={classes.app__header_badge}>
					<div className={`${classes.badge_cmp} ${'app__flex'}`}>
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I am </p>
							<h1 className="head-text">Tester</h1>
						</div>
					</div>

					<div className={`${classes.tag_cmp} ${'app__flex'}`}>
						<p className="p-text">Web Developer </p>
						<p className="p-text">Freelancer</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [ 0, 1 ] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={classes.app__header_img}
			>
				<span>
					<Image
						src={images.programming}
						alt="programming image"
						width={'500%'}
						height={'500%'}
						objectFit={'contain'}
					/>
				</span>
				<motion.div
					whileInView={{ scale: [ 0, 1 ] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					className={classes.app__header_img}
					alt="circle"
					className={classes.overlay_circle}
				>
					<Image src={images.circle} alt="circle" />
				</motion.div>
			</motion.div>

			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className={classes.app__header_circles}
			>
				{[ images.html, images.react, images.sass ].map((circle, index) => (
					<div className={`${classes.circle_cmp} ${'app__flex'}`} key={index}>
						<Image src={circle} alt="circle" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrapper(Header, 'header');
