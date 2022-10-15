import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChartWidget from '../components/ChartWidget';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { FaStar } from 'react-icons/fa';
import LeaderboardTable from '../components/LeaderboardTable';
import LeaderboardTableMobile from '../components/LeaderboardTableMobile';
import { useViewport } from '../hooks/useViewport';
// import CategoryStatWidget from '../components/CategoryStatWidget';
import CategoryStatCard from '../components/CategoryStatCard';
import { useLevelsContext } from '../hooks/useLevelsContext';

const Leaderboard = () => {
	const { dataLoaded } = useStateContext();

	const { width } = useViewport();
	const breakpoint = 620;

	const { users } = useAuthContext();
	const { levels } = useLevelsContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
		// if (isMobile) {
		// 	log('is mobile');
		// } else {
		// 	log('is not mobile');
		// }
	}, [navigate, dataLoaded]);
	// const { songs } = useSongsContext();
	// const { levels } = useLevelsContext();
	return (
		<StyledLeaderboard
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h2>Leaderboard page</h2>

			<div className='category-card-container'>
				{/* <div className='level-select-container br'> */}
				{levels &&
					levels.map((level, index) => (
						<CategoryStatCard
							key={level._id}
							level={level}
							levelIndex={index}
						/>
					))}
				{/* <LevelSelectButton key={level._id} level={level} /> */}
			</div>

			{/* <CategoryStatWidget  */}

			{width < breakpoint ? (
				<LeaderboardTableMobile users={users} />
			) : (
				<LeaderboardTable users={users} />
			)}

			<ChartWidget users={users} />
		</StyledLeaderboard>
	);
};
const StyledLeaderboard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	/* padding: 0.5rem; */
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	padding: 0.5rem 1rem;
	overflow-y: hidden;
	/* overflow-y: scroll; */
	/* overflow: hidden; */
	z-index: 1;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	h2 {
		/* color: ${({ theme }) => theme.primaryColor}; */
		text-transform: capitalize;
		text-align: center;
	}
	.category-card-container {
		/* padding: 0.5rem; */
		/* flex: 1; */
		flex-wrap: wrap;
		/* border: 1px solid black; */
		display: flex;
		flex-direction: row;
		/* align-items: stretch; */
		justify-content: flex-start;
		/* justify-content: flex-start; */
		gap: 2rem;
		/* width: 100%; */
		/* overflow-y: scroll; */
	}
	ol {
		padding: 2rem;
		flex: 1;
		/* list-style:  */
		li {
			display: flex;
			/* display: list-item; */
			justify-content: space-between;
			align-items: center;
			p {
				text-transform: capitalize;
			}
			.star-off {
				/* color: ${({ theme }) => theme.bgCircle}; */
				color: ${({ theme }) => theme.borderLine};
				/* color: ${({ theme }) => theme.bgLightGrey}; */
			}
		}
	}
`;

export default Leaderboard;
