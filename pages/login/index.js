import AppWrapper from '../../components/AppWrapper/AppWrapper';
import MotionWrapper from '../../components/AppWrapper/MotionWrapper';

const Login = () => {
	return <div>login</div>;
};

export default AppWrapper(MotionWrapper(Login, 'app__works'), 'login', 'app__primarybg');
