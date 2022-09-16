import { useState, useRef, Fragment } from "react";
import ContactWrapper from "../../components/AppWrapper/ContactWrapper";
import MotionWrapper from "../../components/AppWrapper/MotionWrapper";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import classes from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

/*We are using emailJs to send the mails*/

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  const { name, email, message } = formData;

  /*Update form data values */
  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /*Emailjs config for sending the mail*/
  const submitHandler = (e) => {
    setLoading(true);
    emailjs
      .sendForm(
        "dev2sites",
        "Dev2siteContactForm",
        form.current,
        "user_Q4jfQSULEqPvzasaxEyF0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setSendFailed(true);
          setLoading(false);
          setIsFormSubmitted(true);
        }
      );
  };

  return (
    <Fragment>
      {/*Description for websearch*/}
      <Head>
        <title>Dev2sites - Contact</title>
        <meta
          name="description"
          content="Contactez-moi si vous avez une question ou si vous souhaitez prendre rendez-vous."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={classes.app__footer}>
        {/*Title*/}
        <h2 className="head-text">{t("contact.contactMe")}</h2>
        {/*Cards*/}
        <div className={classes.app__footer_cards}>
          {/*Mail*/}
          <a href="mailto:contact@dev2sites.com" className="p-text">
            <div className={classes.app__footer_card}>
              <img src="/email.png" alt="email" />
              <span>contact@dev2sites.com</span>
            </div>
          </a>
          {/*Phone*/}
          <a href="tel:0695887683" className="p-text">
            <div
              id={classes.app_footer_mobile}
              className={classes.app__footer_card}
            >
              <img src="/mobile.png" alt="mobile" />
              <span>06.95.88.76.83</span>
            </div>
          </a>
        </div>
        {/*Form*/}
        {!isFormSubmitted ? (
          <form
            ref={form}
            className={`${classes.app__footer_form} ${"app__flex"}`}
            onSubmit={submitHandler}
          >
            <div className="app__flex">
              {/*Name input*/}
              <input
                required
                className="p-text"
                type="text"
                name="name"
                placeholder={t("contact.name")}
                value={name}
                onChange={changeInputHandler}
              />
            </div>
            <div className="app__flex">
              {/*Email input*/}
              <input
                required
                className="p-text"
                type="email"
                name="email"
                placeholder={t("contact.email")}
                value={email}
                onChange={changeInputHandler}
              />
            </div>
            <div>
              {/*MEssage input*/}
              <textarea
                required
                className="p-text"
                name="message"
                placeholder={t("contact.message")}
                value={message}
                onChange={changeInputHandler}
              />
            </div>
            {/*Submit button*/}
            <button type="button" className="p-text" onClick={submitHandler}>
              {loading ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        ) : sendFailed ? (
          <div className={classes.problemMessage}>
            {/*In case of error*/}
            <p className={classes.errorMessage}>{t("contact.problem")}</p>
          </div>
        ) : (
          <div>
            <h3 className="head-text">
              {/*Thank you message*/}
              {t("contact.thankY")} <span>{t("contact.msg")}</span> !
            </h3>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default ContactWrapper(
  MotionWrapper(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
