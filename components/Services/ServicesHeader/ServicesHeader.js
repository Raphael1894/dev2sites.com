import { Fragment } from "react";
import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import classes from "./ServicesHeader.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ServicesHeader = () => {
  const { t } = useTranslation();

  /*Animation for when comonent gets in vew*/
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Fragment>
      <div className={`${classes.app__header} ${"app__flex"}`}>
        {/*Left badge*/}
        <motion.div
          initial="hidden"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className={classes.app__header_info}
        >
          <div className={classes.app__header_badge}>
            <div className={`${classes.badge_cmp} ${"app__flex"}`}>
              <div style={{ marginLeft: 20 }}>
                {/*Badge top*/}
                <h1 className="head-text">
                  {t("servicesHeader.offer")}
                  <span>⭐</span>
                </h1>
                {/*Badge bottom*/}
                <p className="head-text">
                  <span>{t("servicesHeader.details")}</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={classes.app__header_img}
        >
          <span>
            {/*Center image*/}
            <img src="/servicesBg.svg" alt="Services image" />
          </span>
        </motion.div>
        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className={classes.app__header_circles}
        >
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
							{/*Right images*/}
              <img src="/circle.svg" alt="circle" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Fragment>
  );
};

export default ServicesWrapper(ServicesHeader, "ServicesHeader");
