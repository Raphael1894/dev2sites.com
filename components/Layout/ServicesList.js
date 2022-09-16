import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import classes from "./ServiceList.module.scss";

/*Services List = navbar on the right*/
const ServicesList = () => {
  const { t } = useTranslation();
  const [showNav, setShowNav] = useState(false);

  /*Show or hide the ServicesList*/
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 350) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  return (
    <Fragment>
      {showNav ? (
        <div className={classes.ServiceList}>
          {/*Title*/}
          <p className={classes.title}>Services</p>
          {/*Jump to component*/}
          <Link href={`#PackJeuneEntreprise`}>{t("servicesList.pje")}</Link>
          <Link href={`#SiteVitrine`}>{t("servicesList.sv")}</Link>
          <Link href={`#WebLogiciel`}>{t("servicesList.wl")}</Link>
          <Link href={`#ForfaitGestion`}>{t("servicesList.fg")}</Link>
          <Link href={`#ForfaitMaintenance`}>{t("servicesList.fm")}</Link>
          <Link href={`#DemandesPonctuelles`}>{t("servicesList.dp")}</Link>
        </div>
      ) : (
        <div />
      )}
    </Fragment>
  );
};

export default ServicesList;
