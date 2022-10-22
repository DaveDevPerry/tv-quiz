import React from 'react';
import styled from 'styled-components';

import { IoMdCloseCircle, IoMdCheckmarkCircle } from 'react-icons/io';
import { BsCircle } from 'react-icons/bs';

const ScoreBoard = ({ scoreBoard, music }) => {
	return (
		<StyledScoreBoard className='br'>
			<div className='scoreboard-wrapper'>
				{music &&
					music.length >= 0 &&
					music.map((song, index) => (
						<div className='icon-wrapper' key={index}>
							{scoreBoard && !scoreBoard[index] ? (
								<BsCircle className='result-icon blank-icon' />
							) : (
								<>
									{scoreBoard && scoreBoard[index].isCorrect === true ? (
										<IoMdCheckmarkCircle className='result-icon correct-icon' />
									) : (
										<IoMdCloseCircle className='result-icon wrong-icon' />
									)}
								</>
							)}
						</div>
					))}
			</div>
		</StyledScoreBoard>
	);
};
const StyledScoreBoard = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	column-gap: 2rem;
	padding: 1rem;
	.scoreboard-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		column-gap: 2rem;
		padding: 1rem;
		position: relative;
		height: 5rem;
		.icon-wrapper {
			display: grid;
			place-content: center;
			background-color: ${({ theme }) => theme.white};
			z-index: 5;
			width: 4rem;
			.result-icon {
				font-size: 3rem;
			}
			.wrong-icon {
				color: ${({ theme }) => theme.red};
				font-size: 3.8rem;
			}
			.correct-icon {
				color: ${({ theme }) => theme.green};
				font-size: 3.8rem;
			}
		}
		&::before {
			content: '';
			background-color: ${({ theme }) => theme.txtGrey};
			top: 50%;
			left: 50%;
			height: 0.7rem;
			width: 90%;
			transform: translate(-50%, -50%);
			position: absolute;
		}
	}
`;

export default ScoreBoard;
