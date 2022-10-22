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
import { RiUser3Fill } from 'react-icons/ri';
// import ResultsModal from '../components/ResultsModal';

const Home = ({ handleClick, setShowDialog, showDialog }) => {
	// const { songs } = useSongsContext();
	// const { currentUser } = useAuthContext();
	// const { currentUser, userCount, users } = useAuthContext();
	// const { levels } = useLevelsContext();

	const { dataLoaded, rankSuffix, setRankSuffix } = useStateContext();

	const { currentUser, users } = useAuthContext();
	// const { currentUser, userCount, users } = useAuthContext();

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

	// const { currentUser } = useAuthContext();
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

	useEffect(() => {
		const rankNumber =
			users &&
			users.findIndex((object) => {
				return object._id === currentUser._id;
			}) + 1;

		getRankSuffix(rankNumber);
	}, [users, currentUser]);

	const getRankSuffix = async (num) => {
		log(num, 'num in get rank suffix');
		const lastDigit2Str = String(num).slice(-1);
		const lastDigit2Num = Number(lastDigit2Str);
		log(lastDigit2Num, 'last digit');
		let suffix;
		switch (lastDigit2Num) {
			case 1:
				suffix = 'st';
				break;
			case 2:
				suffix = 'nd';
				break;
			case 3:
				suffix = 'rd';
				break;
			case 4:
				suffix = 'th';
				break;
			case 5:
				suffix = 'th';
				break;
			case 6:
				suffix = 'th';
				break;
			case 7:
				suffix = 'th';
				break;
			case 8:
				suffix = 'th';
				break;
			case 9:
				suffix = 'th';
				break;
			case 0:
				suffix = 'th';
				break;
			default:
				suffix = 'error';
				break;
		}
		setRankSuffix(suffix);
		return suffix;
	};

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
			<div className='home-header'>
				<div className='icon-wrapper'>
					<RiUser3Fill className='user-icon' />
					<p className='username'>{currentUser && currentUser.username}</p>
				</div>
				{/* <p className='username'>{currentUser && currentUser.username}</p> */}
				<p className='home-rank'>
					current rank:
					<span>
						{' '}
						{users &&
							users.findIndex((object) => {
								return object._id === currentUser._id;
							}) + 1}
						<sup>{rankSuffix && rankSuffix}</sup>
					</span>
				</p>
			</div>
			{/* <div className='home-header'>
				<h3>Welcome, {currentUser && currentUser.username}</h3>
				<p className='home-rank'>
					current rank:
					<span>
						{users &&
							users.findIndex((object) => {
								return object._id === currentUser._id;
							}) + 1}{' '}
						<sup>st</sup>
					</span>
				</p>
			</div> */}

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
	row-gap: 2rem;
	max-width: 80rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow: auto;
	/* overflow: hidden; */
	.home-header {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
		padding: 0 0.5rem;
		.icon-wrapper {
			display: flex;
			flex-direction: row;
			align-items: flex-end;
			justify-content: center;
			.user-icon {
				font-size: 2.2rem;
				color: ${({ theme }) => theme.green};
			}
			.username {
				font-size: 1.8rem;
				flex: 1;
			}
		}
		/* .username {
			font-size: 1.8rem;
			flex: 1;
		} */
		.home-rank {
			font-size: 1.8rem;
			span {
				color: ${({ theme }) => theme.green};
				font-weight: bolder;
				font-size: 2.4rem;
				sup {
					font-size: 1.4rem;
				}
			}
		}
	}
	.card-wrapper {
		display: flex;
		flex-direction: row;
		/* align-items: flex-start; */
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 1rem;
		display: none;
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
