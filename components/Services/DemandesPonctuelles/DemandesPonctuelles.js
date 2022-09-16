import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";

const DemandesPonctuelles = () => {
  const { t } = useTranslation();

  //Offer Data
  const infoOffer = {
    main: {
      type: "ponctuel",
      title: `${t("services.dp")}`,
      description: `${t("services.dpd")}`,
      price: `${t("services.dpp")}`,
      url: "/about06.png",
    },
    listWebsite: [""],
    listAfter: [
      `${t("services.dpla1")}`,
      `${t("services.dpla2")}`,
      `${t("services.dpla3")}`,
      `${t("services.dpla4")}`,
    ],
    listMore: [""],
  };
  return <Card infoOffer={infoOffer} />;
};

export default ServicesWrapper(
  MotionWrapper(DemandesPonctuelles, "app__works"),
  "DemandesPonctuelles",
  "app__primarybg"
);
