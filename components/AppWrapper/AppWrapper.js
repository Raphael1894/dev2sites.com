import NavigationDots from "../Layout/NavigationDots";

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    /*AppWrapper here is used to insert the navigation dots on the right side of each component*/
    /*AppWrapper styling found in glocal styles  */
    return (
      <div id={idName} className={`${classNames} ${"app__container"}`}>
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        {/*AppWrapper sends down the idName of the current component in view*/}
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
