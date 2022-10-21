import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useViewport } from '../hooks/useViewport';
// import { FaTasks } from 'react-icons/fa';

// import { IoSettingsOutline } from 'react-icons/io5';
// import { HiPresentationChartLine } from 'react-icons/hi';
// import { MdQueueMusic } from 'react-icons/md';
// import { GiPodium } from 'react-icons/gi';

const Header = () => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledHeader>
			<div className='container'>
				<Link to='/'>
					<h1>
						TERROR
						<span>
							<strong>QUIZ</strong>
						</span>
						ION
					</h1>
					{/* <h1>
						Terror<span>quiz</span>ion
					</h1> */}
				</Link>
				{width < breakpoint ? (
					<nav className='top-nav'>
						<NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<img
								src='./my_house-icon-dark.png'
								alt='home'
								className='my-home'
							/>
						</NavLink>
					</nav>
				) : (
					<nav className='top-nav desktop'>
						<NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>home</p>
						</NavLink>
						<NavLink
							to='/play'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>play</p>
						</NavLink>
						<NavLink
							to='/songs'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>songs</p>
						</NavLink>

						{/* <NavLink
							to='/stats'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>stats</p>
						</NavLink> */}
						<NavLink
							to='/leaderboard'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>rankings</p>
						</NavLink>

						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>settings</p>
						</NavLink>
					</nav>
				)}
			</div>
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
	background: ${({ theme }) => theme.primaryColor};
	transition: all 200ms linear;
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* background: ${({ theme }) => theme.white}; */
		z-index: 500;
		h1 {
			font-size: 2.2rem;
			color: ${({ theme }) => theme.secondaryColor};
			font-family: 'Signika', sans-serif;
			font-weight: lighter;
			span {
				color: ${({ theme }) => theme.green};
				font-weight: bolder;
				font-size: 2.4rem;
			}
		}
		a {
			display: grid;
			place-content: center;
			.search-icon {
				color: ${({ theme }) => theme.txtDarkGrey};
				font-size: 3.2rem;
			}
			.settings-icon {
				color: ${({ theme }) => theme.txtDarkGrey};
				font-size: 3rem;
			}
			.nav-icon {
				color: ${({ theme }) => theme.txtDarkGrey};
				font-size: 3rem;
			}
		}
		a.active {
			.search-icon {
				color: ${({ theme }) => theme.secondaryColor};
			}
			.settings-icon {
				color: ${({ theme }) => theme.secondaryColor};
			}
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
		/* .add-icon {
			color: ${({ theme }) => theme.primaryColor};
			font-size: 2.6rem;
		} */
		nav.top-nav {
			display: flex;
			align-items: center;
			column-gap: 1rem;
		}
		nav.top-nav.desktop {
			display: flex;
			align-items: center;
			column-gap: 3rem;
			a {
				display: grid;
				place-content: center;
				p {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 1.6rem;
					text-transform: uppercase;
				}
			}

			a.active {
				p {
					color: ${({ theme }) => theme.secondaryColor};
					font-weight: bolder;
				}
			}
		}
		/* a {
				color: ${({ theme }) => theme.secondaryColor};
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
					color: ${({ theme }) => theme.secondaryColor};
					-webkit-transition: all 0.5s ease;
					transition: all 0.5s ease;
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
						-webkit-transition: all 0.5s ease;
						transition: all 0.5s ease;
					}
				}

				p {
					text-transform: uppercase;
					font-size: 1.6rem;
					font-weight: normal;
				}
			}
		} */
	}
	.my-home {
		height: 2.8rem;
		aspect-ratio: 1/1;
	}
`;

export default Header;
