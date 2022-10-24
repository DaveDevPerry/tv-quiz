import React from 'react';
import styled from 'styled-components';

// import { IoMdCloseCircle, IoMdCheckmarkCircle } from 'react-icons/io';
// import { BsCircle } from 'react-icons/bs';

const ScoreBoardMobile = ({ scoreBoard, music }) => {
	return (
		<StyledScoreBoardMobile>
			{/* <StyledScoreBoardMobile className='br'> */}
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
	/* padding: 1rem; */
	flex: 1;
	.scoreboard-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
		flex: 1;
		.icon-wrapper {
			z-index: 5;
			flex: 1 1 17%;
			.result-icon {
				background-color: ${({ theme }) => theme.bgLightGrey};
				height: 0.7rem;
				width: 100%;
			}
			.wrong-icon {
				background-color: ${({ theme }) => theme.red};
			}
			.correct-icon {
				background-color: ${({ theme }) => theme.green};
			}
		}
	}
	/* display: flex;
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
		.icon-wrapper {
			z-index: 5;
			flex: 1 1 17%;
			.result-icon {
				background-color: ${({ theme }) => theme.bgLightGrey};
				height: 1rem;
				width: 100%;
			}
			.wrong-icon {
				background-color: ${({ theme }) => theme.red};
			}
			.correct-icon {
				background-color: ${({ theme }) => theme.green};
			}
		}
	} */
`;

export default ScoreBoardMobile;
