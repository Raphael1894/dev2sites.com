import ServicesWrapper from "../../AppWrapper/ServicesWrapper";
import MotionWrapper from "../../AppWrapper/MotionWrapper";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";

const WebLogiciel = () => {
  const { t } = useTranslation();

  //Offer Data
  const infoOffer = {
    main: {
      type: "siteweb",
      title: `${t("services.wl")}`,
      description: `${t("services.wld")}`,
      price: `${t("services.wlp")}`,
      url: "/about03.png",
    },
    listWebsite: [
      `${t("services.wllw1")}`,
      `${t("services.wllw2")}`,
      `${t("services.wllw3")}`,
      `${t("services.wllw4")}`,
      `${t("services.wllw5")}`,
      `${t("services.wllw6")}`,
      `${t("services.wllw7")}`,
    ],
    listAfter: [
      `${t("services.wlla1")}`,
      `${t("services.wlla2")}`,
      `${t("services.wlla3")}`,
    ],
    listMore: [
      `${t("services.wllm1")}`,
      `${t("services.wllm2")}`,
      `${t("services.wllm3")}`,
      `${t("services.wllm4")}`,
    ],
  };

  return <Card infoOffer={infoOffer} />;
};

export default ServicesWrapper(
  MotionWrapper(WebLogiciel, "app__works"),
  "WebLogiciel",
  "app__whitebg"
);
