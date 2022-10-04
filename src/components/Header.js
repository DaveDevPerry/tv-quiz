import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { IoSettingsOutline } from 'react-icons/io5';
// import { HiPresentationChartLine } from 'react-icons/hi';
// import { RiHomeLine } from 'react-icons/ri';
// import { MdManageSearch } from 'react-icons/md';

const Header = () => {
	return (
		<StyledHeader>
			<div className='container'>
				<Link to='/'>
					<h1>TerrorQuizion</h1>
				</Link>
				{/* <NavLink
					to='/search'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<MdManageSearch className='search-icon' />
				</NavLink> */}
				<nav className='top-nav'>
					<NavLink
						to='/home'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						{/* <RiHomeLine className='nav-icon' /> */}
						<img
							src='./my_house-icon-dark.png'
							alt='home'
							className='my-home'
						/>
					</NavLink>
					{/* <NavLink
						to='/statistics'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<HiPresentationChartLine className='nav-icon' />
					</NavLink> */}
					{/* <NavLink
						to='/settings'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<IoSettingsOutline className='settings-icon' />
					</NavLink> */}
				</nav>
			</div>
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
	background: ${({ theme }) => theme.primaryColor};
	transition: all 200ms linear;
	.container {
		max-width: 60rem;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		h1 {
			font-size: 2rem;
			color: ${({ theme }) => theme.secondaryColor};
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
		.add-icon {
			color: ${({ theme }) => theme.primaryColor};
			font-size: 2.6rem;
		}
		nav.top-nav {
			display: flex;
			align-items: center;
			column-gap: 1rem;
		}
	}
	.my-home {
		height: 2.8rem;
		aspect-ratio: 1/1;
	}
`;

export default Header;
