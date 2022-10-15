import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLogin } from '../hooks/useLogin';
import { NavLink } from 'react-router-dom';
import AppDetails from '../components/AppDetails';

const Login = ({ theme }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<StyledLogin
			className='login-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <div className='brand-wrapper'>
				<h1 id='brand'>TV Quiz</h1>
			</div> */}

			<div className='form-page-container'>
				<form onSubmit={handleSubmit} className='login br'>
					<h3>Log in</h3>
					<div>
						<label>Email:</label>
						<input
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							autoComplete='current-email'
						/>
					</div>
					<div>
						<label>Password:</label>
						<input
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							autoComplete='current-password'
						/>
					</div>
					<button className='action-btn' disabled={isLoading}>
						Log in
					</button>
					{error && <div className='error'>{error}</div>}
				</form>

				<p>
					Need an account? Sign up<NavLink to='/signup'> here</NavLink>
				</p>
				<AppDetails theme={theme} />
			</div>

			{/* <div className='launch-wrapper'>
				<h1 className='launch-btn' id='lets-rock'>
					It's the CD's or Me
				</h1>
			</div> */}
		</StyledLogin>
	);
};
const StyledLogin = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	margin: 2rem auto;
	max-width: 42rem;
	overflow: hidden;
	transition: all 200ms linear;
	flex: 1;
	/* justify-content: space-between; */
	align-items: center;
	z-index: 600;

	.form-page-container {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		flex: 1;
		justify-content: flex-start;
	}
	.login {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 2rem;
		background-color: ${({ theme }) => theme.white};
		/* border: 0.2rem solid ${({ theme }) => theme.primaryColor}; */
		/* border-radius: 1rem; */
		/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
		z-index: 601;
		margin: 0 1rem;
		h3 {
			text-align: center;
			margin: 0;
			color: ${({ theme }) => theme.txtGrey};
		}
		input {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.white};
			flex: 1;
			&:focus {
				outline: none;
				border: none;
				border: 2px solid ${({ theme }) => theme.primaryColor};
				border-radius: 4px;
				box-sizing: border-box;
			}
		}
		.action-btn {
			color: ${({ theme }) => theme.white};
			font-weight: bolder;
			text-transform: uppercase;
			font-size: 1.6rem;
		}
	}
	p {
		text-align: center;
		color: ${({ theme }) => theme.txtGrey};
		a {
			color: ${({ theme }) => theme.secondaryColor};
			text-decoration: none;
		}
	}
`;

export default Login;
