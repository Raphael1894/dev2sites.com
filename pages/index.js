import Head from "next/head";
import { Fragment } from "react";
import Guarantees from "../components/Guarantees/Guarantees";
import Header from "../components/Header/Header";
import Offers from "../components/Offers/Offers";

//HomePage main page
const HomePage = () => {
  return (
    <Fragment>
      {/*Description for websearch*/}
      <Head>
        <title>Dev2sites</title>
        <meta
          name="description"
          content="Dev2sites est là pour vous aidez à développer un site à votre image."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        {/*HomePage components*/}
        <Header />
        <Guarantees />
        <Offers />
      </div>
    </Fragment>
  );
};

export default HomePage;
