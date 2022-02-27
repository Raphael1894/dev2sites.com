import { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import classes from './Navigation.module.scss';

const Navigation = () => {
	const [ toggle, setToggle ] = useState(false);

	return (
		<nav className={classes.app__navbar}>
			<div className={classes.app__navbar_logo}>
				<Link href="/">
					<img src="/orangeLogo.png" alt="logo" />
				</Link>
			</div>
			<ul className={classes.app__navbar_links}>
				<li className="app__flex p-text">
					<div />
					<Link href="/">Accueil</Link>
				</li>
				<li className="app__flex p-text">
					<div />
					<Link href="/Services">Services</Link>
				</li>
			</ul>
			<div className={classes.app__navbar_menu}>
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div
						whileInView={{ x: [ 300, 0 ], opacity: [ 0, 1 ] }}
						transition={{ duration: 0.85, ease: 'easeOut' }}
						className={classes.app__navbar_motion}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							<li onClick={() => setToggle(false)}>
								<Link href="/">Accueil</Link>
							</li>
							<li onClick={() => setToggle(false)}>
								<Link href="/Services">Services</Link>
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
