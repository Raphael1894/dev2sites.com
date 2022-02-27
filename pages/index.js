import Head from 'next/head';
import { Fragment } from 'react';
import Guarantees from '../components/Guarantees/Guarantees';
import Header from '../components/Header/Header';
import Offers from '../components/Offers/Offers';

const HomePage = () => {
	return (
		<Fragment>
			<Head>
				<title>Dev2sites</title>
				<meta
					name="description"
					content="Dev2sites est là pour vous aidez à développer un site à votre image."
				/>
			</Head>
			<div className="app">
				<Header />
				<Guarantees />
				<Offers />
			</div>
		</Fragment>
	);
};

export default HomePage;
