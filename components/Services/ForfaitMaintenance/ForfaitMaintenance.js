import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";

const ForfaitMaintenance = () => {
  const { t } = useTranslation();

  //Offer Data
  const infoOffer = {
    main: {
      type: "forfait",
      title: `${t("services.fm")}`,
      description: `${t("services.fmd")}`,
      price: `${t("services.fmp")}`,
      url: "/about05.png",
    },
    listWebsite: [""],
    listAfter: [`${t("services.fmla1")}`, `${t("services.fmla2")}`],
    listMore: [``],
  };

  return <Card infoOffer={infoOffer} />;
};

export default ServicesWrapper(
  MotionWrapper(ForfaitMaintenance, "app__works"),
  "ForfaitMaintenance",
  "app__whitebg"
);
