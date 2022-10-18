import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

import Toggle from '../components/Toggler';
import TVAppLinks from '../components/TVAppLinks';

const Settings = ({ themeToggler, theme }) => {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	const { dataLoaded } = useStateContext();
	// const { isFormActive, setIsFormActive } = useStateContext();

	const handleClick = () => {
		logout();
		notify();
	};

	// create a toast
	const notify = () => {
		toast.success(`you are now logged out.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledSettings
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='wrapper br'>
				<h3>Settings</h3>

				<div className='account-details'>
					<h5 className='sub-heading'>account</h5>
					<ul className='user-details-list'>
						{user.username && (
							<li>
								<p>username:</p>
								<span id='full-name'>{user.username}</span>
							</li>
						)}

						<li>
							<p>email:</p>
							<span>{user.email}</span>
						</li>
					</ul>
				</div>

				<div className='preferences'>
					<h5 className='sub-heading'>preferences</h5>

					<Toggle toggleTheme={themeToggler} theme={theme} />
				</div>

				<TVAppLinks />

				{/* <Navbar targets={targets} /> */}

				{/* {targets && targets.length === 1 && <TargetWidget targets={targets} />} */}
				{/* <UserPreferences toggleTheme={themeToggler} theme={theme} /> */}

				{/* {!targets && <TargetForm />} */}
				{/* {!user.first_name && <UserForm />} */}

				<div className='btn-container'>
					<button onClick={handleClick}>Log out</button>
				</div>
			</div>
		</StyledSettings>
	);
};
const StyledSettings = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	flex: 1;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 2rem;
		padding: 1rem 2rem;
		background: ${({ theme }) => theme.white};
		flex: 1;
		transition: all 200ms linear;
		.account-details {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			/* row-gap: 0.5rem; */
			.sub-heading {
				color: ${({ theme }) => theme.secondaryColor};
				border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
				margin-bottom: 1rem;
				width: 100%;
			}
			.user-details-list {
				list-style: none;
				font-size: 1.4rem;
				li {
					display: flex;
					align-items: center;
					column-gap: 1rem;
					p {
						width: 6rem;
						text-align: right;
						font-weight: bold;
					}
					#full-name {
						text-transform: capitalize;
					}
				}
			}

			p {
				span {
					font-weight: bold;
					text-transform: capitalize;
				}
			}
			a {
				text-decoration: none;
			}
		}
		.preferences {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			/* flex: 1; */
			.sub-heading {
				color: ${({ theme }) => theme.secondaryColor};
				border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
				margin-bottom: 1rem;
				width: 100%;
			}
		}
		.btn-container {
			border-top: 1px solid ${({ theme }) => theme.secondaryColor};
			margin-top: 1rem;
			width: 100%;
			padding: 1rem 0rem;
			text-align: right;
			button {
				align-self: flex-end;
				background: ${({ theme }) => theme.white};
				color: ${({ theme }) => theme.secondaryColor};
				border: 2px solid ${({ theme }) => theme.secondaryColor};
				padding: 0.3rem 0.6rem;
				border-radius: 0.4rem;
				font-family: 'Signika', sans-serif;
				cursor: pointer;
				font-size: 1em;
			}
		}
	}
	h3 {
		text-align: center;
		/* position: relative; */
		color: ${({ theme }) => theme.secondaryColor};
		/* .close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.txtDarkGrey};
		} */
	}
`;

export default Settings;
