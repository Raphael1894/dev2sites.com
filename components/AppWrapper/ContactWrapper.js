const ContactWrapper = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`${classNames} ${'app__container'}`}>
				<div className="app__wrapper app__flex">
					<Component />
				</div>
			</div>
		);
	};

export default ContactWrapper;
