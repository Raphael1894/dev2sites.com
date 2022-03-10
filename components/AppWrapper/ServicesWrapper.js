const ServicesWrapper = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`${classNames}`}>
				<Component />
			</div>
		);
	};

export default ServicesWrapper;
