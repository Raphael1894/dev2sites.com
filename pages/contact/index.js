import { useState, useRef, Fragment } from 'react';
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import MotionWrapper from '../../components/AppWrapper/MotionWrapper';
import Head from 'next/head';
import emailjs from '@emailjs/browser';

import classes from './contact.module.scss';

const Contact = () => {
	const form = useRef();
	const [ formData, setFormData ] = useState({ name: '', email: '', message: '' });
	const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ sendFailed, setSendFailed ] = useState(false);

	const { name, email, message } = formData;

	const changeInputHandler = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const submitHandler = (e) => {
		//e.preventDefault();
		setLoading(true);
		emailjs.sendForm('dev2sites', 'Dev2siteContactForm', form.current, 'user_Q4jfQSULEqPvzasaxEyF0').then(
			(result) => {
				console.log(result.text);
				setFormData({ name: '', email: '', message: '' });
				setLoading(false);
				setIsFormSubmitted(true);
			},
			(error) => {
				console.log(error.text);
				setSendFailed(true);
				setLoading(false);
				setIsFormSubmitted(true);
			}
		);
	};

	return (
		<Fragment>
			<Head>
				<title>Dev2sites - Services</title>
				<meta name="description" content="Trouvez les différents services proposés par dev2sites." />
			</Head>

			<section className={classes.app__footer}>
				<h2 className="head-text">Contactez-moi</h2>
				<div className={classes.app__footer_cards}>
					<a href="mailto:contact@dev2sites.com" className="p-text">
						<div className={classes.app__footer_card}>
							<img src="/email.png" alt="email" />
							<span>contact@dev2sites.com</span>
						</div>
					</a>
					<a href="tel:0769953111" className="p-text">
						<div id={classes.app_footer_mobile} className={classes.app__footer_card}>
							<img src="/mobile.png" alt="mobile" />
							<span>07.69.95.31.11</span>
						</div>
					</a>
				</div>
				{!isFormSubmitted ? (
					<form ref={form} className={`${classes.app__footer_form} ${'app__flex'}`} onSubmit={submitHandler}>
						<div className="app__flex">
							<input
								required
								className="p-text"
								type="text"
								name="name"
								placeholder="Votre Nom"
								value={name}
								onChange={changeInputHandler}
							/>
						</div>
						<div className="app__flex">
							<input
								required
								className="p-text"
								type="email"
								name="email"
								placeholder="Votre email"
								value={email}
								onChange={changeInputHandler}
							/>
						</div>
						<div>
							<textarea
								required
								className="p-text"
								name="message"
								placeholder="Votre Message"
								value={message}
								onChange={changeInputHandler}
							/>
						</div>
						<button type="button" className="p-text" onClick={submitHandler}>
							{loading ? 'Envoie en cours' : 'Envoyer'}
						</button>
					</form>
				) : sendFailed ? (
					<div>
						<h3 className="head-text">
							Un problème est survenue lors de l'envoie du message. Veuillez réessayer plus tard
						</h3>
					</div>
				) : (
					<div>
						<h3 className="head-text">
							Merci pour votre <span>message</span> !
						</h3>
					</div>
				)}
			</section>
		</Fragment>
	);
};

export default AppWrapper(MotionWrapper(Contact, 'app__footer'), 'contact', 'app__whitebg');
