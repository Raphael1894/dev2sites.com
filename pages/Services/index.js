import { Fragment } from 'react';
import PackJeuneEntreprise from '../../components/Services/PackJeuneEntreprise/PackJeuneEntreprise';
import SiteVitrine from '../../components/Services/SiteVitrine/SiteVitrine';
import VitrineBdD from '../../components/Services/VitrineBdD/VitrineBdD';
import classes from './Services.module.scss';

const Services = () => {
	return (
		<Fragment>
			<h2>Services</h2>
			<PackJeuneEntreprise />
			<SiteVitrine />
			<VitrineBdD />
		</Fragment>
	);
};

export default Services;
