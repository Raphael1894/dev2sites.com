import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const [toggle, setToggle] = useState(false);
  const [flag, setFlag] = useState();

  /*Flag selection on navbar according to language in use */
  useEffect(() => {
    if (i18n.resolvedLanguage === "fr") {
      setFlag("/france.png");
    } else {
      setFlag("/unitedKingdom.png");
    }
  }, [i18n.resolvedLanguage]);

  /*Checks current used language and switches it*/
  const changeLanguageHandler = () => {
    if (i18n.resolvedLanguage === "fr") {
      i18n.changeLanguage("en");
      setFlag("/unitedKingdom.png");
    } else {
      i18n.changeLanguage("fr");
      setFlag("/france.png");
    }
  };

  return (
    <nav className={classes.app__navbar}>
      {/*Navigation code for desktop (conf with media querry)*/}
      <div className={classes.app__navbar_logo}>
        {/*Logo with route to homePage*/}
        <Link href="/">
          <img src="/orangeLogo.png" alt="logo" />
        </Link>
      </div>
      <ul className={classes.app__navbar_links}>
        {/*Main page route*/}
        <li className="app__flex p-text">
          <Link href="/">{t("navigation.home")}</Link>
        </li>
        {/*Services route*/}
        <li className="app__flex p-text">
          <Link href="/Services">Services</Link>
        </li>
      </ul>
      <ul className={classes.app__navbar_links}>
        {/*Contact route*/}
        <li className="app__flex p-text">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={classes.flag}>
        {/*Flag*/}
        <img
          src={flag}
          alt="current language"
          onClick={changeLanguageHandler}
        />
      </div>
      {/*Navigation code for movile devices (conf with media querry)*/}
      <div className={classes.app__navbar_menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <Fragment>
            <motion.div
              whileInView={{ x: [300, 0], opacity: [0, 1] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className={classes.app__navbar_motion}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <li onClick={() => setToggle(false)}>
                  <Link href="/">{t("navigation.home")}</Link>
                </li>
                <li onClick={() => setToggle(false)}>
                  <Link href="/Services">Services</Link>
                </li>
                <li onClick={() => setToggle(false)}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </motion.div>
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
