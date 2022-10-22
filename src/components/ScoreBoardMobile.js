import React from 'react';
import styled from 'styled-components';

// import { IoMdCloseCircle, IoMdCheckmarkCircle } from 'react-icons/io';
// import { BsCircle } from 'react-icons/bs';

const ScoreBoardMobile = ({ scoreBoard, music }) => {
	return (
		<StyledScoreBoardMobile className='br'>
			<div className='scoreboard-wrapper'>
				{music &&
					music.length >= 0 &&
					music.map((song, index) => (
						<div className='icon-wrapper' key={index}>
							{scoreBoard && !scoreBoard[index] ? (
								<div className='result-icon blank-icon'>&nbsp;</div>
							) : (
								<>
									{scoreBoard && scoreBoard[index].isCorrect === true ? (
										<div className='result-icon correct-icon'>&nbsp;</div>
									) : (
										<div className='result-icon wrong-icon'>&nbsp;</div>
									)}
								</>
							)}
						</div>
					))}
			</div>
		</StyledScoreBoardMobile>
	);
};
const StyledScoreBoardMobile = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	column-gap: 2rem;
	padding: 1rem;
	.scoreboard-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		flex: 1;
		/* padding: 1rem; */
		/* position: relative; */
		/* height: 5rem; */
		.icon-wrapper {
			/* display: grid;
			place-content: center; */
			/* background-color: ${({ theme }) => theme.white}; */
			z-index: 5;
			/* width: 4rem; */
			flex: 1 1 17%;
			.result-icon {
				/* font-size: 3rem; */
				background-color: ${({ theme }) => theme.bgLightGrey};
				/* width: 3rem; */
				height: 1rem;
				width: 100%;
			}
			.wrong-icon {
				/* border: 1px solid ${({ theme }) => theme.txtGrey}; */
				background-color: ${({ theme }) => theme.red};
				/* font-size: 3.8rem; */
			}
			.correct-icon {
				/* border: 1px solid ${({ theme }) => theme.txtGrey}; */
				background-color: ${({ theme }) => theme.green};
				/* font-size: 3.8rem; */
			}
		}
		/* &::before {
			content: '';
			background-color: ${({ theme }) => theme.txtGrey};
			top: 50%;
			left: 50%;
			height: 0.7rem;
			width: 90%;
			transform: translate(-50%, -50%);
			position: absolute;
		} */
	}
`;

export default ScoreBoardMobile;
