import Guarantees from '../components/Guarantees/Guarantees';
import Header from '../components/Header/Header';
import Offers from '../components/Offers/Offers';

const HomePage = () => {
	return (
		<div className="app">
			<Header />
			<Guarantees />
			<Offers />
		</div>
	);
};

export default HomePage;
