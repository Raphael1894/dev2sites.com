import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";

const SiteVitrine = () => {
  const { t } = useTranslation();

  //Offer Data
  const infoOffer = {
    main: {
      type: "siteweb",
      title: `${t("services.sv")}`,
      description: `${t("services.svd")}`,
      price: `${t("services.svp")}`,
      url: "/about02.png",
    },
    listWebsite: [
      `${t("services.svlw1")}`,
      `${t("services.svlw2")}`,
      `${t("services.svlw3")}`,
      `${t("services.svlw4")}`,
      `${t("services.svlw5")}`,
    ],
    listAfter: [
      `${t("services.svla1")}`,
      `${t("services.svla2")}`,
      `${t("services.svla3")}`,
    ],
    listMore: [
      `${t("services.svlm1")}`,
      `${t("services.svlm2")}`,
      `${t("services.svlm3")}`,
    ],
  };

  return <Card infoOffer={infoOffer} />;
};

export default ServicesWrapper(
  MotionWrapper(SiteVitrine, "app__works"),
  "SiteVitrine",
  "app__primarybg"
);
