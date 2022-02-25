import NavigationDots from '../Layout/NavigationDots';

const AppWrapper = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`${classNames} ${'app__container'}`}>
				<div className="app__wrapper app__flex">
					<Component />
				</div>
        <NavigationDots active={idName}/>
			</div>
		);
	};

export default AppWrapper;
