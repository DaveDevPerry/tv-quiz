import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useResultsContext } from '../hooks/useResultsContext';
import { useStateContext } from '../lib/context';
import { log } from '../utils/helper';
import { ImCross, ImCheckmark } from 'react-icons/im';

const ResultsModal = ({ setScoreBoard }) => {
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
	} = useStateContext();
	// const { dataLoaded, songCount, setSongCount, playedCount, setPlayedCount } =
	// 	useStateContext();

	// const { result } = useResultsContext();
	const { result, dispatch } = useResultsContext();

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
		navigate('/');
	};

	return (
		<StyledResultsModal open>
			<div className='results-box br'>
				<h2>results</h2>
				<ol className='br-inset'>
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

				<div className='results-wrapper br-inset'>
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
						compileResults();
						handleClose();
					}}
				>
					SAVE PROGRESS
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
	background-color: rgba(0, 0, 0, 0.5);
	border: 1px solid green;
	::backdrop {
	}
	.results-box {
		padding: 2rem;
		height: 300px;
		width: calc(100vw - 2rem);
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
	}
`;

export default ResultsModal;