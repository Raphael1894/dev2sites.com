import { Fragment } from 'react';
import Head from 'next/head';
import PackJeuneEntreprise from '../../components/Services/PackJeuneEntreprise/PackJeuneEntreprise';
import SiteVitrine from '../../components/Services/SiteVitrine/SiteVitrine';
import VitrineBdD from '../../components/Services/VitrineBdD/VitrineBdD';
import ForfaitGestion from '../../components/Services/ForfaitGestion/ForfaitGestion';
import ForfaitMaintenance from '../../components/Services/ForfaitMaintenance/ForfaitMaintenance';
import DemandesPonctuelles from '../../components/Services/DemandesPonctuelles/DemandesPonctuelles';
import ServicesHeader from '../../components/Services/ServicesHeader/ServicesHeader';
import ServicesList from '../../components/Layout/ServicesList';

const Services = () => {
	return (
		<Fragment>
			<Head>
				<title>Dev2sites - Services</title>
				<meta name="description" content="Trouvez les différents services proposés par dev2sites." />
				<link rel='icon' href='/favicon.ico'/>
			</Head>
			<div className="app">
				<ServicesHeader />
				<ServicesList />
				<PackJeuneEntreprise />
				<SiteVitrine />
				<VitrineBdD />
				<ForfaitGestion />
				<ForfaitMaintenance />
				<DemandesPonctuelles />
			</div>
		</Fragment>
	);
};

export default Services;
