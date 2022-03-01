import NavigationDots from '../Layout/NavigationDots';

const ServicesWrapper = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`${classNames}`}>
				<Component />
			</div>
		);
	};

export default ServicesWrapper;
