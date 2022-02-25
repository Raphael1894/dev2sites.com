import AppWrapper from '../AppWrapper/AppWrapper';
import MotionWrapper from '../AppWrapper/MotionWrapper';
import { images } from '../../constants';
import Image from 'next/image';
import classes from './Footer.module.scss';
import emailjs from '@emailjs/browser';
import { Fragment, useState } from 'react';

const Footer = () => {
	const [ formData, setFormData ] = useState({ name: '', email: '', message: '' });
	const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
	const [ loading, setLoading ] = useState(false);

	const { name, email, message } = formData;

	const changeInputHandler = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
		emailjs.sendForm('dev2sites', 'Dev2siteContactForm', form.current, 'user_Q4jfQSULEqPvzasaxEyF0').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		setLoading(false);
	};

	return (
		<Fragment>
			<h2 className="head-text">Contactez-moi</h2>
			<div className={classes.app_footer_cards}>
				<div className={classes.app__footer_card}>
					<Image src={images.email} alt="email" />
					<a href="mailto:contact@dev2sites.com" className="p-text">
						contact@dev2sites.com
					</a>
				</div>
				<div className={classes.app__footer_card}>
					<Image src={images.mobile} alt="mobile" />
					<a href="tel:0769953111" className="p-text">
						07.69.95.31.11
					</a>
				</div>
			</div>
      <form className={`${classes.app__footer_form} ${'app__flex'}`}  onSubmit={submitHandler}>
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
		</Fragment>
	);
};

export default AppWrapper(MotionWrapper(Footer, 'app__footer'), 'contact', 'app__whitebg');
