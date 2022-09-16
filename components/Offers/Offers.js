import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrapper from "../AppWrapper/AppWrapper";
import MotionWrapper from "../AppWrapper/MotionWrapper";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import classes from "./Offers.module.scss";

const Offers = () => {
  /**This component has three times the same code. Upgrade to new child component**/
  const { t } = useTranslation();
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  {
    /*Main offers list for the client	*/
  }
  const offersList = [
    {
      title: `${t("offers.pje")}`,
      description: `${t("offers.pjed")}`,
      price: `${t("offers.pjep")}`,
      url: "/about01.png",
      type: "PackJeuneEntreprise",
    },
    {
      title: `${t("offers.sv")}`,
      description: `${t("offers.svd")}`,
      price: `${t("offers.svp")}`,
      url: "/about02.png",
      type: "SiteVitrine",
    },
    {
      title: `${t("offers.wl")}`,
      description: `${t("offers.wld")}`,
      price: `${t("offers.wlp")}`,
      url: "/about03.png",
      type: "WebLogiciel",
    },
  ];

  {
    /*Packages list for the client	*/
  }
  const offerPackages = [
    {
      title: `${t("offers.fg")}`,
      description: `${t("offers.fgd")}`,
      price: `${t("offers.fgp")}`,
      url: "/about04.png",
      type: "ForfaitGestion",
    },
    {
      title: `${t("offers.fm")}`,
      description: `${t("offers.fmd")}`,
      price: `${t("offers.fmp")}`,
      url: "/about05.png",
      type: "ForfaitMaintenance",
    },
  ];

  {
    /*Ponctual work for the client	*/
  }
  const offerWork = [
    {
      title: `${t("offers.dp")}`,
      description: `${t("offers.dpd")}`,
      price: `${t("offers.dpp")}`,
      url: "/about06.png",
      type: "DemandesPonctuelles",
    },
  ];

  return (
    <div className={classes.app__offers}>
      {/*Title*/}
      <h2 className="head-text">
        {t("offers.titre")}
        <span> Services</span>
      </h2>
      {/*Main offers*/}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={classes.app__offers_portfolio}
      >
        {/*Offers map*/}
        {offersList.map((offer, index) => (
          <div
            className={`${classes.app__offer_item} ${"app__flex"}`}
            key={index}
          >
            <div className={`${classes.app__offer_img} ${"app__flex"}`}>
              {/*Image*/}
              <img src={offer.url} alt={offer.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`${classes.app__offer_hover} ${"app__flex"}`}
              >
                {/*Routing with style*/}
                <Link href={`/Services/#${offer.type}`}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            <div className={`${classes.app__offer_content} ${"app__flex"}`}>
              {/*Offer title*/}
              <h4 className="bold-text">{offer.title}</h4>
              {/*Offer description*/}
              <p className="p-text" style={{ marginTop: 10 }}>
                {offer.description}
              </p>
              <div className={`${classes.app__offer_tag} ${"app__flex"}`}>
                {/*Offer price*/}
                <p className="p-text">{offer.price}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={classes.app__offers_portfolio}
      >
        {/*Packages map*/}
        {offerPackages.map((offer, index) => (
          <div
            className={`${classes.app__offer_item} ${"app__flex"}`}
            key={index}
          >
            <div className={`${classes.app__offer_img} ${"app__flex"}`}>
              {/*Package image*/}
              <img src={offer.url} alt={offer.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`${classes.app__offer_hover} ${"app__flex"}`}
              >
                {/*Routing with style*/}
                <Link href={`/Services/#${offer.type}`}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            <div className={`${classes.app__offer_content} ${"app__flex"}`}>
              {/*Package title*/}
              <h4 className="bold-text">{offer.title}</h4>
              {/*Package description*/}
              <p className="p-text" style={{ marginTop: 10 }}>
                {offer.description}
              </p>
              <div className={`${classes.app__offer_tag} ${"app__flex"}`}>
                {/*Package price*/}
                <p className="p-text">{offer.price}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={classes.app__offers_portfolio}
      >
        {/*P.Work map*/}
        {offerWork.map((offer, index) => (
          <div
            className={`${classes.app__offer_item} ${"app__flex"}`}
            key={index}
          >
            <div className={`${classes.app__offer_img} ${"app__flex"}`}>
              {/*P.Work image*/}
              <img src={offer.url} alt={offer.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`${classes.app__offer_hover} ${"app__flex"}`}
              >
                {/*Routing with style*/}
                <Link href={`/Services/#${offer.type}`}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            <div className={`${classes.app__offer_content} ${"app__flex"}`}>
              {/*P.Work title*/}
              <h4 className="bold-text">{offer.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {/*P.Work description*/}
                {offer.description}
              </p>
              <div className={`${classes.app__offer_tag} ${"app__flex"}`}>
                {/*P.Work price*/}
                <p className="p-text">{offer.price}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(
  MotionWrapper(Offers, "app__works"),
  "offers",
  "app__primarybg"
);
