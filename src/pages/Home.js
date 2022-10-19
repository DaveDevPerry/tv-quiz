import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
// import CategoryStatCard from '../components/CategoryStatCard';
// import CategoryStatWidget from '../components/CategoryStatWidget';
// import ProgressBarWidget from '../components/ProgressBarWidget';
import { useAuthContext } from '../hooks/useAuthContext';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { FaStar } from 'react-icons/fa';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import CorrectSongCard from '../components/CorrectSongCard';
import PlayerRankCard from '../components/PlayerRankCard';
import CategoryStatCardContainer from '../components/CategoryStatCardContainer';
import { useResultsContext } from '../hooks/useResultsContext';
import { log } from '../utils/helper';
import ResultWidget from '../components/ResultWidget';
// import ResultsModal from '../components/ResultsModal';

const Home = ({ handleClick, setShowDialog, showDialog }) => {
	// const { songs } = useSongsContext();
	// const { currentUser } = useAuthContext();
	// const { currentUser, userCount, users } = useAuthContext();
	// const { levels } = useLevelsContext();

	const { dataLoaded } = useStateContext();

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

	const { currentUser } = useAuthContext();
	const { results, result, dispatch } = useResultsContext();

	useEffect(() => {
		log(results, 'results - animated');
		log(currentUser, 'current user - animated');

		const findUserResult =
			results && results.find((obj) => obj.user_id === currentUser._id);
		log(findUserResult, 'findUserResult animated');

		dispatch({
			type: 'SET_RESULT',
			payload: findUserResult,
		});
	}, []);

	// const [showDialog, setShowDialog] = useState(false);

	// const handleClick = (e) => {
	// 	e.preventDefault();
	// 	setShowDialog(true);
	// };

	return (
		<StyledHome
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h3>Welcome, {currentUser && currentUser.username}</h3>

			<div className='test-wrapper'>
				<ResultWidget result={result && result} />
			</div>
			{/* {result && result} */}

			<div className='card-wrapper'>
				<PlayerRankCard />
				<CorrectSongCard />
			</div>
			{/* <PlayerRankCard />
			<CorrectSongCard /> */}

			<CategoryStatCardContainer />

			{/* <div className='category-card-container'>
				{levels &&
					levels.map((level, index) => (
						<CategoryStatCard
							key={level._id}
							level={level}
							levelIndex={index}
						/>
					))}
			</div> */}
		</StyledHome>
	);
};
const StyledHome = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow: hidden;
	.card-wrapper {
		display: flex;
		flex-direction: row;
		/* align-items: flex-start; */
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.song-total-widget {
		padding: 1rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		column-gap: 1rem;
		font-size: 2.5rem;
		.star-on {
			color: ${({ theme }) => theme.gold};
		}
	}
	.category-widget-container {
		padding: 0.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 1rem;
		overflow-y: scroll;
	}
	/* .category-card-container {
		flex-wrap: wrap;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1rem;
	} */
`;

export default Home;
