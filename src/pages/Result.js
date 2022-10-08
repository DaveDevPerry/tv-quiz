import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { log } from '../utils/helper';
// import { FaStar } from 'react-icons/fa';
// import {GiCheckMark} from 'react-icons/gi'
import { ImCross, ImCheckmark } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Result = () => {
	const navigate = useNavigate();
	const { gameScore, setTempCorrectIDs } = useStateContext();

	useEffect(() => {
		log(gameScore, 'gameScore');
	}, []);

	const compileResults = async () => {
		// update user with song ids that user got correct
		const clonedResults = [...gameScore];
		const correctResults = clonedResults.filter(
			(obj) => obj.isCorrect === true
		);

		const correctIDs = [];

		correctResults.forEach((result) => {
			correctIDs.push(result.songID);
		});

		setTempCorrectIDs(correctIDs);

		// const response = await fetch(
		// 	`${process.env.REACT_APP_BACKEND_URL}/api/user/${}`,
		// )
		navigate('/home');
	};
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
					compileResults();
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
	/* justify-content: flex-start; */
	row-gap: 1rem;
	/* padding: 1rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	row-gap: 1rem; */

	flex: 1;
	max-width: 42rem;
	padding: 0.5rem 1rem;
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
	/* margin: 0 auto; */
	/* .level-select-container {
		padding: 0.5rem;
		flex: 1;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 2rem;
	} */
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
