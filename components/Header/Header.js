import classes from "./Header.module.scss";
import { motion } from "framer-motion";
import AppWrapper from "../AppWrapper/AppWrapper";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  /*Animation conf*/
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
    <div className={`${classes.app__header} ${"app__flex"}`}>
      {/*Left badge and tag*/}
			<motion.div
				initial="hidden"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className={classes.app__header_info}
			>
				<div className={classes.app__header_badge}>
          {/*Badge*/}
          <div className={`${classes.badge_cmp} ${"app__flex"}`}>
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">{t("header.badge1")}</p>
							<h1 className="head-text">{t("header.badge2")}</h1>
						</div>
					</div>

          <div className={`${classes.tag_cmp} ${"app__flex"}`}>
            {/*Tag*/}
						<p className="p-text">{t("header.tag1")}</p>
						<p className="p-text">{t("header.tag2")}</p>
					</div>
				</div>
			</motion.div>
      {/*Center image*/}
			<motion.div
        whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={classes.app__header_img}
			>
				<span>
          <img src="/programming.svg" alt="programming image" />
				</span>
        {/*Center circle background*/}
				<motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
					alt="circle"
					className={classes.overlay_circle}
				>
					<img src="/circle.svg" alt="circle"/>
				</motion.div>
			</motion.div>
      {/*Right side logos and circles*/}
      {/*Styling and animation of logos and circles is found in the header.module.scss*/}
			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className={classes.app__header_circles}
			>
        {["/firebase.png", "/react.png", "/sass.png"].map((circle, index) => (
          <div className={`${classes.circle_cmp} ${"app__flex"}`} key={index}>
            <img src={circle} alt="circle" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrapper(Header, "header");
