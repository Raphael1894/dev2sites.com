import { Fragment } from 'react';
import PackJeuneEntreprise from '../../components/Services/PackJeuneEntreprise/PackJeuneEntreprise';
import SiteVitrine from '../../components/Services/SiteVitrine/SiteVitrine';
import VitrineBdD from '../../components/Services/VitrineBdD/VitrineBdD';
import ForfaitGestion from '../../components/Services/ForfaitGestion/ForfaitGestion';
import ForfaitMaintenance from '../../components/Services/ForfaitMaintenance/ForfaitMaintenance';
import DemandesPonctuelles from '../../components/Services/DemandesPonctuelles/DemandesPonctuelles';
import classes from './Services.module.scss';

const Services = () => {
	return (
		<Fragment>
			<h2>Services</h2>
			<PackJeuneEntreprise />
			<SiteVitrine />
			<VitrineBdD />
			<ForfaitGestion/>
			<ForfaitMaintenance/>
			<DemandesPonctuelles/>
		</Fragment>
	);
};

export default Services;
