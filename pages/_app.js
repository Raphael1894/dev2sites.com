import Layout from "../components/Layout/Layout";
import "../translation/i18n";
import "../styles/globals.scss";

/*App init*/
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
