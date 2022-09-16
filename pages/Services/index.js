import { Fragment } from "react";
import Head from "next/head";
import PackJeuneEntreprise from "../../components/Services/PackJeuneEntreprise/PackJeuneEntreprise";
import SiteVitrine from "../../components/Services/SiteVitrine/SiteVitrine";
import WebLogiciel from "../../components/Services/WebLogiciel/WebLogiciel";
import ForfaitGestion from "../../components/Services/ForfaitGestion/ForfaitGestion";
import ForfaitMaintenance from "../../components/Services/ForfaitMaintenance/ForfaitMaintenance";
import DemandesPonctuelles from "../../components/Services/DemandesPonctuelles/DemandesPonctuelles";
import ServicesHeader from "../../components/Services/ServicesHeader/ServicesHeader";
import ServicesList from "../../components/Layout/ServicesList";

/*Services main page */
const Services = () => {
  return (
    <Fragment>
      {/*Description for websearch*/}
      <Head>
        <title>Dev2sites - Services</title>
        <meta
          name="description"
          content="Trouvez les différents services proposés par dev2sites."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        {/*Services Page components*/}
        <ServicesHeader />
        <ServicesList />
        <PackJeuneEntreprise />
        <SiteVitrine />
        <WebLogiciel />
        <ForfaitGestion />
        <ForfaitMaintenance />
        <DemandesPonctuelles />
      </div>
    </Fragment>
  );
};

export default Services;
