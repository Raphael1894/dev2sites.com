import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavigationDots = ({ active }) => {
  {
    /*We use the 'active' props to know on which component we are and to give it some styling*/
		/*useRouter is in use for navigation through the dots*/
  }
  const { pathname } = useRouter();

  return (
    <Fragment>
      <div className="app__navigation">
        <Link href={"/"}>
          <a
            className="app__navigation-dot"
            style={active === "header" ? { backgroundColor: "#313BAC" } : {}}
          />
        </Link>
        <Link href={`#guarantees`}>
          <a
            className="app__navigation-dot"
            style={
              active === "guarantees" ? { backgroundColor: "#313BAC" } : {}
            }
          />
        </Link>
        <Link href={`#offers`}>
          <a
            className="app__navigation-dot"
            style={active === "offers" ? { backgroundColor: "#313BAC" } : {}}
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default NavigationDots;
