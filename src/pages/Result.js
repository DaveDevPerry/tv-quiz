import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { log } from '../utils/helper';
// import { FaStar } from 'react-icons/fa';
// import {GiCheckMark} from 'react-icons/gi'
import { ImCross, ImCheckmark } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGamesContext } from '../hooks/useGamesContext';
// import { useAuthContext } from '../hooks/useAuthContext';

const Result = ({ setScoreBoard }) => {
	// const navigate = useNavigate();
	const { gameScore } = useStateContext();
	const { dispatch } = useGamesContext();
	// const { gameScore, setTempCorrectIDs, tempCorrectIDs } = useStateContext();
	// const { user, currentUser } = useAuthContext();
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

	useEffect(() => {
		// log(gameScore, 'gameScore');
	}, []);

	const handleClose = () => {
		log('handle close');
		// clear game context
		dispatch({ type: 'CLEAR_GAME_DATA', payload: null });
		setScoreBoard([]);
		// setGameScore(null);

		navigate('/');
	};

	// const compileResults = async () => {
	// 	// update user with song ids that user got correct
	// 	const clonedResults = [...gameScore];
	// 	const correctResults = clonedResults.filter(
	// 		(obj) => obj.isCorrect === true
	// 	);

	// 	const correctIDs = [];

	// 	correctResults.forEach((result) => {
	// 		log(result.songID, 'res.songID');
	// 		correctIDs.push(result.songID);
	// 		log(correctIDs, 'arr');
	// 	});

	// 	setTempCorrectIDs(correctIDs);

	// 	// setUserResults(correctIDs);

	// 	// const response = await fetch(
	// 	// 	`${process.env.REACT_APP_BACKEND_URL}/api/user/${}`,
	// 	// )
	// 	// navigate('/home');
	// };
	// useEffect(() => {
	// 	log(tempCorrectIDs);
	// }, [tempCorrectIDs]);

	// const setUserResults = async (arrOfIDs) => {
	// 	const response = await fetch(
	// 		`${process.env.REACT_APP_BACKEND_URL}/api/user/${currentUser._id}`,
	// 		{
	// 			method: 'PATCH',
	// 			headers: {
	// 				Authorization: `Bearer ${user.token}`,
	// 			},
	// 			body: arrOfIDs,
	// 		}
	// 	);
	// 	const json = await response.json();
	// 	log(json, 'json user updated');
	// 	if (!response.ok) {
	// 		log('error in patch');
	// 	}
	// 	if (response.ok) {
	// 		log('response ok in patch');
	// 		log('check back end');
	// 		// dispatch({
	// 		// 	type: 'UPDATE_RESULTS',			payload: getUser,
	// 		// });
	// 	}
	// };
	return (
		<StyledResult
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h2>Game Result</h2>

			<ol className='br'>
				{/* <li>SONGS</li> */}
				{gameScore &&
					gameScore.map((song, index) => (
						<li key={index}>
							<p>{song.title}</p>
							{song.isCorrect === true ? (
								<ImCheckmark className='star-on' />
							) : (
								<ImCross className='star-off' />
							)}
						</li>
					))}
			</ol>

			<div className='results-wrapper br'>
				<p className='result-percentage'>
					{(
						(gameScore.filter((obj) => {
							return obj.isCorrect === true;
						}).length /
							gameScore.length) *
						100
					).toFixed(2)}{' '}
					%
				</p>
				<p>
					{
						gameScore.filter((obj) => {
							return obj.isCorrect === true;
						}).length
					}{' '}
					out of {gameScore.length}
				</p>
			</div>

			<div
				className='add-results-to-user-btn'
				onClick={() => {
					// compileResults();
					handleClose();
				}}
			>
				SAVE PROGRESS
			</div>
			{/* <p>total score: {gameScore.reduce((count, value) => {
				return 
			})}</p> */}
		</StyledResult>
	);
};
const StyledResult = styled(motion.div)`
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
	ol {
		padding: 2rem;
		/* width: 100%; */
		/* flex: 1; */
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
				color: ${({ theme }) => theme.red};
				/* color: ${({ theme }) => theme.bgLightGrey}; */
			}
			.star-on {
				/* color: ${({ theme }) => theme.bgCircle}; */
				color: ${({ theme }) => theme.green};
				/* color: ${({ theme }) => theme.bgLightGrey}; */
			}
		}
	}
	.results-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem;
		/* width: 100%; */
		p {
			text-align: center;
			&.result-percentage {
				color: ${({ theme }) => theme.gold};
				font-size: 3rem;
				font-weight: bold;
			}
		}
	}
`;

export default Result;
