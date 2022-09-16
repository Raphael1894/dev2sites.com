import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { useTranslation } from "react-i18next";
import classes from "./Card.module.scss";

const Card = ({ infoOffer }) => {
  const { t } = useTranslation();
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [showDetails, setShowDetails] = useState(false);
  const [showArrowDown, setShowArrowDown] = useState(true);
  const [showArrowUp, setShowArrowUp] = useState(false);

  /*Handle elements when arrow is pressed */
  const arrowDownHandler = () => {
    setShowArrowDown(false);
    setShowDetails(true);
    setShowArrowUp(true);
  };

  /*Handle elements when arrow is pressed */
  const arrowUpHandler = () => {
    setShowArrowUp(false);
    setShowDetails(false);
    setShowArrowDown(true);
  };

  /*Animation container (3 columns)*/
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  /*Animation text lines in 'drawer'*/
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className={classes.app__offers}>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={classes.app__offers_portfolio}
      >
        <div className={classes.app__offer_item}>
          <div className={classes.app__offer_tag}>
            {/*Price tag top right*/}
            <p>{infoOffer.main.price}</p>
          </div>

          <div className={classes.mainContent}>
            <div className={classes.app__offer_img}>
              {/*Image top left*/}
              <img src={infoOffer.main.url} alt="image service" />
            </div>
            <div className={classes.app__offer_content}>
              {/*Title and descrption of offer*/}
              <h4 className={classes.bold_text}>{infoOffer.main.title}</h4>
              <p className={classes.p_text} style={{ marginTop: 10 }}>
                {infoOffer.main.description}
              </p>
            </div>
          </div>
          {/*Drawer*/}
          {showDetails && (
            <Fragment>
              <hr className={classes.hr} />
              <div className={classes.detailsContainer}>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className={classes.cardUl}
                >
                  {/*Column 1 title (or nothing)*/}
                  <p className={classes.detailListTitle}>
                    {infoOffer.main.type === "siteweb"
                      ? `${t("services.cardSubT1")}`
                      : infoOffer.main.type === "forfait"
                      ? ""
                      : ""}
                  </p>
                  {/*Data map*/}
                  {infoOffer.listWebsite.map((offer, index) => (
                    <motion.li
                      variants={item}
                      key={index}
                      className={classes.p_text}
                    >
                      {/*Data*/}
                      {offer}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className={classes.cardUl}
                >
                  {/*Column 2 title*/}
                  <p className={classes.detailListTitle}>
                    {infoOffer.main.type === "siteweb"
                      ? `${t("services.cardSubT2")}`
                      : infoOffer.main.type === "forfait"
                      ? `${t("services.cardTitle")}`
                      : `${t("services.cardSubT3")}`}
                  </p>
                  {/*Data map*/}
                  {infoOffer.listAfter.map((offer, index) => (
                    <motion.li
                      variants={item}
                      key={index}
                      className={classes.p_text}
                    >
                      {/*Data*/}
                      {offer}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className={classes.cardUl}
                >
                  {/*Column 3 title (or nothing)*/}
                  <p className={classes.detailListTitle}>
                    {infoOffer.main.type === "siteweb"
                      ? `${t("services.cardSubT4")}`
                      : infoOffer.main.type === "forfait"
                      ? ""
                      : ""}
                  </p>
                  {/*Data map*/}
                  {infoOffer.listMore.map((offer, index) => (
                    <motion.li
                      variants={item}
                      key={index}
                      className={classes.p_text}
                    >
                      {/*Data*/}
                      {offer}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <hr className={classes.hr} />
            </Fragment>
          )}
        </div>
        {/*Arrow button*/}
        {showArrowDown ? (
          <div className={classes.arrowWrapper}>
            <BsFillArrowDownCircleFill onClick={arrowDownHandler} />
          </div>
        ) : (
          <div className={classes.arrowWrapper}>
            <BsFillArrowUpCircleFill onClick={arrowUpHandler} />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Card;
