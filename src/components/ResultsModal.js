import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useResultsContext } from '../hooks/useResultsContext';
import { useStateContext } from '../lib/context';
import { log } from '../utils/helper';
import { ImArrowRight } from 'react-icons/im';
import ResultsList from './ResultsList';
// import ResultsScore from './ResultsScore';
import ResultsRanking from './ResultsRanking';
import { motion } from 'framer-motion';
// import { ImCross, ImCheckmark, ImArrowRight } from 'react-icons/im';

const ResultsModal = ({ setScoreBoard, level }) => {
	// const { dispatch } = useGamesContext();
	// const { gameScore, setTempCorrectIDs, tempCorrectIDs } = useStateContext();
	const { user } = useAuthContext();
	const {
		dataLoaded,
		songCount,
		playedCount,
		correctSongsArray,
		correctSongCount,
		gameScore,
		setSongCount,
		// playedCount,
		setPlayedCount,
		// correctSongsArray,
		setCorrectSongsArray,
		// correctSongCount,
		setCorrectSongCount,
		// setDisplayResultsModal,
		// displayResultsModal,
	} = useStateContext();
	// const { dataLoaded, songCount, setSongCount, playedCount, setPlayedCount } =
	// 	useStateContext();

	// const { result } = useResultsContext();
	const { result, dispatch } = useResultsContext();

	// const resultsModal = useRef();

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

	// useEffect(() => {
	// 	// log(gameScore, 'gameScore');
	// 	if (displayResultsModal === true) {
	// 		resultsModal.open();
	// 	}
	// 	if (displayResultsModal === false) {
	// 		resultsModal.close();
	// 	}
	// }, [displayResultsModal]);

	const handleClose = () => {
		log('handle close');
		// clear game context
		dispatch({ type: 'CLEAR_GAME_DATA', payload: null });
		setScoreBoard([]);

		// navigate('/');
	};

	const compileResults = async () => {
		log('compile results func');
		log(songCount, 'songCount');
		log(correctSongCount, 'correctSongCount');
		log(playedCount, 'playedCount');
		log(result._id, 'result id');
		log(correctSongsArray, 'correctSongsArray');

		const resultData = {
			songCountToAdd: songCount,
			playedCountToAdd: playedCount,
			correctSongIds: correctSongsArray,
			correctSongCountToAdd: correctSongCount,
		};

		// update user results
		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/results/${result._id}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
				body: JSON.stringify({ resultData }),
			}
		);
		const json = await response.json();
		log(json, 'json user results updated');
		if (!response.ok) {
			log('error in patch');
		}
		if (response.ok) {
			log('results response ok in patch');
			log('check back end');
			log(json, 'json user results updated');
			dispatch({
				type: 'UPDATE_RESULT',
				payload: json,
			});
			// dispatch({
			// 	type: 'UPDATE_RESULTS',
			// 	payload: json,
			// });
		}
		setSongCount(0);
		setPlayedCount(0);
		setCorrectSongCount(0);
		setCorrectSongsArray([]);
		// resultsModal.close();
		// setDisplayResultsModal(false);
		navigate('/');
	};

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 1,
				staggerChildren: songCount + 1,
			},
			// transition: {
			// 	delayChildren: 1,
			// 	staggerChildren: 1,
			// },
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<StyledResultsModal open>
			{/* <StyledResultsModal open> */}
			<div className='results-box br'>
				<h2>results</h2>

				<div className='level-status-wrapper'>
					<div className='level-header-wrapper'>
						<p>category: </p> <span> {level.category}</span>
					</div>
					<div className='level-header-wrapper'>
						<p>difficulty: </p> <span> {level.difficulty}</span>
					</div>
				</div>

				<motion.div
					className='staggered-animation-container'
					variants={container}
					initial='hidden'
					animate='show'
				>
					<motion.div variants={item} className='staggered-wrapper'>
						<ResultsList gameScore={gameScore} />
					</motion.div>
					{/* <motion.div variants={item} className='staggered-wrapper'>
						<ResultsScore gameScore={gameScore} />
					</motion.div> */}
					<motion.div variants={item} className='staggered-wrapper'>
						<ResultsRanking gameScore={gameScore} />
					</motion.div>
					{/* <motion.div
						variants={item}
						className='add-results-to-user-btn'
						onClick={() => {
							compileResults();
							handleClose();
						}}
					>
						<p>CONTINUE</p>
						<ImArrowRight className='arrow-r-icon' />
					</motion.div> */}
				</motion.div>

				<div
					className='add-results-to-user-btn'
					onClick={() => {
						compileResults();
						handleClose();
					}}
				>
					<p>CONTINUE</p>
					<ImArrowRight className='arrow-r-icon' />
				</div>
			</div>
		</StyledResultsModal>
	);
};
const StyledResultsModal = styled.dialog`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100000;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-content: center;
	background-color: rgba(0, 0, 0, 0.8);
	border: none;
	/* border: 1px solid green; */
	/* ::backdrop {
	} */
	.results-box {
		padding: 2rem;
		/* height: 300px; */
		width: calc(100vw - 2rem);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 1rem;
		/* padding: 0.5rem; */
		max-width: 80rem;
		/* max-width: 42rem; */
		/* border: 2px solid blue; */
		padding: 2rem 1rem;
		/* padding: 0.5rem 1rem; */
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
		.level-status-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 0.5rem;
			.level-header-wrapper {
				flex: 1;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				text-transform: capitalize;
				column-gap: 0.5rem;
				p {
					font-weight: bolder;
				}
			}
		}
		.staggered-animation-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			row-gap: 1rem;
		}
		/* ol {
			padding: 2rem;
			padding-left: 4rem;
			li {
				display: list-item;
				.result-song-row {
					display: flex;
					justify-content: space-between;
					align-items: center;
					p {
						text-transform: capitalize;
					}
					.star-off {
						color: ${({ theme }) => theme.red};
					}
					.star-on {
						color: ${({ theme }) => theme.green};
					}
				}
			}
		} */
		/* .results-msg-wrapper {
			text-align: center;
			.result-msg {
				color: ${({ theme }) => theme.green};
				font-size: 4rem;
				font-weight: bolder;
				&.bad {
					color: ${({ theme }) => theme.red};
				}
			}
		} */
		/* .results-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 2rem;
			p {
				text-align: center;
				&.result-percentage {
					color: ${({ theme }) => theme.secondaryColor};
					font-size: 3rem;
					font-weight: bold;
				}
				span {
					font-size: 2rem;
				}
			}
		} */
		.add-results-to-user-btn {
			background-color: ${({ theme }) => theme.green};
			padding: 1rem 2rem;

			/* align-self: flex-end; */
			cursor: pointer;
			border-radius: 4px;
			box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
			/* margin-top: 1rem; */
			/* align-self: center; */
			position: relative;
			p {
				text-transform: uppercase;
				color: ${({ theme }) => theme.white};
				font-weight: bold;
				text-align: center;
				pointer-events: none;
			}
			.arrow-r-icon {
				position: absolute;
				font-size: 2rem;
				color: ${({ theme }) => theme.white};
				top: 50%;
				right: 0;
				transform: translate(-100%, -50%);
				pointer-events: none;
			}
		}
	}
`;

export default ResultsModal;
