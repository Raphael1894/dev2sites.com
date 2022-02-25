import Link from 'next/link';
import classes from './NavigationDots.module.scss';

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			<Link href={'/'}>
				<a className="app__navigation-dot" style={active === 'header' ? { backgroundColor: '#313BAC' } : {}} />
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
	);
};

export default NavigationDots;

/*

*/
