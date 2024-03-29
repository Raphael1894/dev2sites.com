import { Fragment } from "react";
import Navigation from "./Navigation";
import Footer from "../Footer/Footer";

/*Layout configuration*/

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
