import { motion } from 'framer-motion';

const MotionWrapperLeft = (Component, classNames) =>
	function HOC() {
		return (
			<motion.div
				whileInView={{ x: [ 400, -200, 0 ], opacity: [ 0, 0, 1 ] }}
				transition={{ duration: 1 }}
				className={`${classNames} ${'app__flex'}`}
			>
				<Component />
			</motion.div>
		);
	};

export default MotionWrapperLeft;
