import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import classes from './Navigation.module.scss';

const Navigation = () => {
	const [ toggle, setToggle ] = useState(false);
	return (
		<nav className={classes.app__navbar}>
			<div className={classes.app__navbar_logo}>
				<Image src={images.orangeLogo} alt="logo" />
			</div>
			<ul className={classes.app__navbar_links}>
				<li className="app__flex p-text">
					<div />
					<Link href="/">Home</Link>
				</li>
				<li className="app__flex p-text">
					<div />
					<Link href="/about">About</Link>
				</li>
			</ul>
			<div className={classes.app__navbar_menu}>
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div whileInView={{ x: [ 300, 0 ] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							<li>
								<Link onClick={() => setToggle(false)} href="/">
									Home
								</Link>
							</li>
							<li>
								<Link onClick={() => setToggle(false)} href="/about">
									About
								</Link>
							</li>
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;

/*

				*/
