import { Fragment } from 'react';
import Head from 'next/head';
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
			<Head>
				<title>Dev2sites - Services</title>
				<meta
					name="description"
					content="Trouvez les différents services proposés par dev2sites."
				/>
			</Head>
			<h2 className={`${classes.padding} ${'head-text'}`}>
				Page actuellement <span>en développement</span>
			</h2>
			<h2>Services</h2>
			<PackJeuneEntreprise />
			<SiteVitrine />
			<VitrineBdD />
			<ForfaitGestion />
			<ForfaitMaintenance />
			<DemandesPonctuelles />
		</Fragment>
	);
};

export default Services;
