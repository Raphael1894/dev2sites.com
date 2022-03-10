import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import classes from './ServiceList.module.scss';

const ServicesList = () => {
	const { t } = useTranslation();
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
					<Link href={`#PackJeuneEntreprise`}>{t('servicesList.pje')}</Link>
					<Link href={`#SiteVitrine`}>{t('servicesList.sv')}</Link>
					<Link href={`#WebLogiciel`}>{t('servicesList.wl')}</Link>
					<Link href={`#ForfaitGestion`}>{t('servicesList.fg')}</Link>
					<Link href={`#ForfaitMaintenance`}>{t('servicesList.fm')}</Link>
					<Link href={`#DemandesPonctuelles`}>{t('servicesList.dp')}</Link>
				</div>
			) : (
				<div />
			)}
		</Fragment>
	);
};

export default ServicesList;
