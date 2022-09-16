const ServicesWrapper = (Component, idName, classNames) =>
  function HOC() {
    /*Service wrapper here is used to know which component is rendered. It is then used for the navbar on the right.*/
    return (
      <div id={idName} className={`${classNames}`}>
        <Component />
      </div>
    );
  };

export default ServicesWrapper;
