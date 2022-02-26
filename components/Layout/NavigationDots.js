import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './NavigationDots.module.scss';

const NavigationDots = ({ active }) => {
	const { pathname } = useRouter();
	const [ path, setPath ] = useState(pathname);
	console.log(pathname);
	return (
		<Fragment>
			{path === '/' ? (
				<div className="app__navigation">
					<Link href={'/'}>
						<a
							className="app__navigation-dot"
							style={active === 'header' ? { backgroundColor: '#313BAC' } : {}}
						/>
					</Link>
					<Link href={`#guarantees`}>
						<a
							className="app__navigation-dot"
							style={active === 'guarantees' ? { backgroundColor: '#313BAC' } : {}}
						/>
					</Link>
					<Link href={`#offers`}>
						<a
							className="app__navigation-dot"
							style={active === 'offers' ? { backgroundColor: '#313BAC' } : {}}
						/>
					</Link>
					<Link href={`#contact`}>
						<a
							className="app__navigation-dot"
							style={active === 'contact' ? { backgroundColor: '#313BAC' } : {}}
						/>
					</Link>
				</div>
			) : (
				<div className="app__navigation">
					<Link href={'/'}>
						<a
							className="app__navigation-dot"
							style={active === 'PackJeuneEntreprise' ? { backgroundColor: '#313BAC' } : {}}
						/>
					</Link>
					<Link href={`#guarantees`}>
						<a
							className="app__navigation-dot"
							style={active === 'SiteVitrine' ? { backgroundColor: '#313BAC' } : {}}
						/>
					</Link>
					<Link href={`#offers`}>
						<a
							className="app__navigation-dot"
							style={active === 'VitrineBdD' ? { backgroundColor: '#313BAC' } : {}}
						/>
					</Link>
					<Link href={`#contact`}>
						<a
							className="app__navigation-dot"
							style={active === 'contact' ? { backgroundColor: '#313BAC' } : {}}
						/>
					</Link>
				</div>
			)}
		</Fragment>
	);
};

export default NavigationDots;

/*

*/
