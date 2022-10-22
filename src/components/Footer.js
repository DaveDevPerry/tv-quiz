import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { BsPlusCircleFill } from 'react-icons/bs';
// import { BsPlusCircleFill, BsMusicNoteList } from 'react-icons/bs';
// import GigForm from './GigForm';
// import { useState } from 'react';
// import {  motion } from 'framer-motion';
// import { AnimatePresence, motion } from 'framer-motion';
// import { HiPresentationChartLine } from 'react-icons/hi';
import { FaTasks } from 'react-icons/fa';
// import {
// 	// RiMenuFoldFill,
// 	RiMenuUnfoldFill,
// 	// RiRoadMapLine,
// } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
// import { HiPresentationChartLine } from 'react-icons/hi';
// import { GrMap } from 'react-icons/gr';
// import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { MdQueueMusic } from 'react-icons/md';
import { GiPodium } from 'react-icons/gi';
// import { IoScale } from 'react-icons/io5';

const Footer = () => {
	const { user } = useAuthContext();
	// const [isFormActive, setIsFormActive] = useState(false);

	// const handleClick = () => {
	// 	// setIsFormActive(!isFormActive);
	// };

	return (
		<StyledFooter>
			<nav>
				{user && (
					<div>
						<NavLink
							to='/play'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<MdQueueMusic className='nav-icon' />
							<p>play</p>
						</NavLink>
						<NavLink
							to='/songs'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<FaTasks className='nav-icon' />
							<p>songs</p>
						</NavLink>

						{/* <NavLink
							to='/stats'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<HiPresentationChartLine className='nav-icon' />
							<p>stats</p>
						</NavLink> */}
						<NavLink
							to='/leaderboard'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<GiPodium className='nav-icon' />
							<p>rankings</p>
						</NavLink>

						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<IoSettingsOutline className='nav-icon' />
							<p>settings</p>
						</NavLink>
					</div>
				)}
			</nav>
		</StyledFooter>
	);
};
const StyledFooter = styled.footer`
	background: ${({ theme }) => theme.primaryColor};
	/* background: ${({ theme }) => theme.white}; */
	position: relative;
	transition: all 200ms linear;
	nav {
		max-width: 60rem;
		margin: 0 auto;
		div {
			max-width: 1400px;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			a {
				color: ${({ theme }) => theme.secondaryColor};
				/* color: ${({ theme }) => theme.txtDarkGrey}; */
				text-decoration: none;
				flex: 1;
				text-align: center;
				text-transform: uppercase;
				font-weight: bold;
				padding: 1rem 0 0.5rem 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.nav-icon {
					font-size: 2.4rem;
					color: ${({ theme }) => theme.secondaryColor};
					/* color: ${({ theme }) => theme.txtGrey}; */
					position: relative;
				}
				&:hover {
					color: ${({ theme }) => theme.secondaryColor};
					-webkit-transition: all 0.5s ease;
					transition: all 0.5s ease;
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
						-webkit-transition: all 0.5s ease;
						transition: all 0.5s ease;
					}
				}
				&.active {
					color: ${({ theme }) => theme.green};
					-webkit-transition: all 0.5s ease;
					transition: all 0.5s ease;
					.nav-icon {
						color: ${({ theme }) => theme.green};
						-webkit-transition: all 0.5s ease;
						transition: all 0.5s ease;
					}
					p {
						text-transform: uppercase;
						font-size: 1.2rem;
						font-weight: bolder;
					}
				}

				p {
					text-transform: uppercase;
					font-size: 1.2rem;
					font-weight: normal;
				}
			}
			a:before,
			a:after {
				position: absolute;
				-webkit-transition: all 0.8s ease;
				transition: all 0.8s ease;
				/* -webkit-transition: all 0.5s ease;
				transition: all 0.5s ease; */
			}
			a:before {
				/* top: 5px; */
				top: 0;
				display: block;
				height: 3px;
				width: 0%;
				content: '';
				background-color: ${({ theme }) => theme.green};
				/* background-color: #c0392b; */
			}
			a:after {
				left: 0;
				/* top: 5px; */
				top: 0;
				padding: 0.5em 0;
				position: absolute;
				content: '';
				color: #ffffff;
				white-space: nowrap;
				max-width: 0%;
				overflow: hidden;
			}
			a:hover:before {
				opacity: 1;
				width: 4.5rem;
			}
			a.active:before {
				opacity: 1;
				width: 4.5rem;
			}
			a:hover:after {
				/* opacity: 1; */
				max-width: 100%;
			}
			.add-icon {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 3.5rem;
			}
		}
	}
`;

// const StyledGigModel = styled(motion.div)`
// 	position: absolute;
// 	top: 0;
// 	left: 50%;
// 	width: max-content;

// 	transform: translate(-50%, -100%);

// `;

export default Footer;
