import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";
import FranceFlag from "../../assets/france.png";
import UkFlag from "../../assets/unitedKingdom.png";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const { t, i18n } = useTranslation();

  const [flag, setFlag] = useState();
  const isLoggedIn = authCtx.isLoggedIn;
  const [openProfilButton, setOpenProfilButton] = useState(false);
  const logoutHandler = () => {
    authCtx.logout();
  };

  useEffect(() => {
    if (i18n.resolvedLanguage === "en") {
      setFlag(UkFlag);
    } else {
      setFlag(FranceFlag);
    }
  }, [i18n.resolvedLanguage]);

  const changeLanguageHandler = () => {
    if (i18n.resolvedLanguage === "en") {
      i18n.changeLanguage("fr");
      setFlag(FranceFlag);
    } else {
      i18n.changeLanguage("en");
      setFlag(UkFlag);
    }
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Moins Seul</div>
      </Link>
      <nav>
        <ul>
          <div className={classes.flag}>
            <img
              src={flag}
              alt="current language"
              onClick={changeLanguageHandler}
            />
          </div>
          <Link to="/index">
            <li>Providers</li>
          </Link>
          {!isLoggedIn && (
            <li>
              <Link to="/sign-in">{t("navigation.linkConnect")}</Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <span
                className={classes.menuButton}
                onClick={() => setOpenProfilButton(!openProfilButton)}
              >
                &#9776;
              </span>
              {openProfilButton && (
                <div
                  className={classes.backdrop}
                  onClick={() => setOpenProfilButton(!openProfilButton)}
                >
                  <div className={classes.profilMenu}>
                    <Link to="/profile">{t("navigation.linkProfile")}</Link>
                    <Link to="/bookings">My bookings</Link>
                    <Link to="/messages">Messages</Link>
                    <span onClick={logoutHandler}>
                      {t("navigation.linkSignOff")}
                    </span>
                  </div>
                </div>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
