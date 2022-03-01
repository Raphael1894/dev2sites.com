import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import classes from './ServiceList.module.scss';

const ServicesList = () => {
	const [ showNav, setShowNav ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 350) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, [])
  


	return (
		<Fragment>
			{showNav ? (
				<div className={classes.ServiceList}>
					<p className={classes.title}>Services</p>
					<Link href={`#PackJeuneEntreprise`}>Pack Jeune Entreprise</Link>
					<Link href={`#SiteVitrine`}>Site Vitrine</Link>
					<Link href={`#VitrineBdD`}>Site vitrine avec base de donnée</Link>
					<Link href={`#ForfaitGestion`}>Forfait Gestion</Link>
					<Link href={`#ForfaitMaintenance`}>Forfait maintenance</Link>
					<Link href={`#DemandesPonctuelles`}>Demandes ponctuelles</Link>
				</div>
			) : (
				<div />
			)}
		</Fragment>
	);
};

export default ServicesList;
