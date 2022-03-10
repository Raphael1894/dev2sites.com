import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import classes from './Navigation.module.scss';

const Navigation = () => {
	const { t, i18n } = useTranslation();

	const [ toggle, setToggle ] = useState(false);
	const [ flag, setFlag ] = useState();

	useEffect(
		() => {
			if (i18n.resolvedLanguage === 'fr') {
				setFlag('/france.png');
			} else {
				setFlag('/unitedKingdom.png');
			}
		},
		[ i18n.resolvedLanguage ]
	);

	const changeLanguageHandler = () => {
		if (i18n.resolvedLanguage === 'fr') {
			i18n.changeLanguage('en');
			setFlag('/unitedKingdom.png');
		} else {
			i18n.changeLanguage('fr');
			setFlag('/france.png');
		}
	};

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
					<Link href="/">{t('navigation.home')}</Link>
				</li>
				<li className="app__flex p-text">
					<div />
					<Link href="/Services">Services</Link>
				</li>
			</ul>
			<ul className={classes.app__navbar_links}>
				<li className="app__flex p-text">
					<div />
					<Link href="/contact">Contact</Link>
				</li>

				{/*<li className="app__flex p-text">
					<div />
					<Link href="/login">
						<BiLogInCircle />
					</Link>
	</li>*/}
			</ul>
			<div className={classes.flag}>
				<img src={flag} alt="current language" onClick={changeLanguageHandler} />
			</div>
			<div className={classes.app__navbar_menu}>
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<Fragment>
						<motion.div
							whileInView={{ x: [ 300, 0 ], opacity: [ 0, 1 ] }}
							transition={{ duration: 0.85, ease: 'easeOut' }}
							className={classes.app__navbar_motion}
						>
							<HiX onClick={() => setToggle(false)} />
							<ul>
								<li onClick={() => setToggle(false)}>
									<Link href="/">{t('navigation.home')}</Link>
								</li>
								<li onClick={() => setToggle(false)}>
									<Link href="/Services">Services</Link>
								</li>
								<li onClick={() => setToggle(false)}>
									<Link href="/contact">Contact</Link>
								</li>
								{/*<li onClick={() => setToggle(false)}>
								<Link href="/login">Se connecter</Link>
				</li>*/}
							</ul>
						</motion.div>
					</Fragment>
				)}
			</div>
		</nav>
	);
};

export default Navigation;

/*

				*/
