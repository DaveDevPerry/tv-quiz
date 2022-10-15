import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSignup } from '../hooks/useSignup';
import { NavLink } from 'react-router-dom';
import AppDetails from '../components/AppDetails';

const Signup = ({ theme }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const { signup, isLoading, error } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(email, password, username);
	};

	return (
		<StyledSignup
			className='signup-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='form-page-container'>
				<form onSubmit={handleSubmit} className='signup br'>
					<h3>Sign up</h3>
					<div>
						<label>Email:</label>
						<input
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div>
						<label>Password:</label>
						<input
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div>
						<label>username:</label>
						<input
							type='text'
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						/>
					</div>

					<button className='action-btn' disabled={isLoading}>
						Sign up
					</button>
					{error && <div className='error'>{error}</div>}
				</form>

				<p>
					Got an account? Log in<NavLink to='/login'> here</NavLink>
				</p>
				<AppDetails theme={theme} />
			</div>
		</StyledSignup>
	);
};
const StyledSignup = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	margin: 2rem auto;
	max-width: 42rem;
	overflow: hidden;
	transition: all 200ms linear;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	z-index: 600;

	.form-page-container {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		flex: 1;
		justify-content: flex-start;
	}
	.signup {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 2rem;
		background-color: ${({ theme }) => theme.white};
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
			color: ${({ theme }) => theme.txtGrey};
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
			color: ${({ theme }) => theme.secondaryColor};
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
	/* label,
	input {
		display: block;
		color: ${({ theme }) => theme.white};
	}
	input {
		padding: 10px;
		margin-top: 10px;
		margin-bottom: 20px;
		width: 100%;
		border: 2px solid ${({ theme }) => theme.borderGrey};
		border-radius: 4px;
		box-sizing: border-box;
	}
	input:focus {
		outline: none;
		border: none;
		border: 2px solid ${({ theme }) => theme.primaryColor};
		border-radius: 4px;
		box-sizing: border-box;
	}
	form button {
		background: ${({ theme }) => theme.primaryColor};
		border: 0;
		color: #fff;
		padding: 1rem;
		border-radius: 4px;
		cursor: pointer;
	}
	div.error {
		padding: 1rem;
		background: ${({ theme }) => theme.bgError};
		border: 1px solid ${({ theme }) => theme.error};
		color: ${({ theme }) => theme.error};
		border-radius: 4px;
	}
	input.error {
		border: 1px solid ${({ theme }) => theme.error};
	} */
`;

export default Signup;
