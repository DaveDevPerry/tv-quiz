import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

// import { useGamesContext } from '../hooks/useGamesContext';
import { log } from '../utils/helper';
import AudioPlayer from './AudioPlayer';
import GameForm from './GameForm';

const QuestionWidget = ({
	question,
	number,
	handleAnswerOptionClick,
	disableControls,
	setDisableControls,
	title,
	setTitle,
	setSongID,
	songID,
	questionCount,
	level,
}) => {
	// const { music } = useGamesContext();

	log(question && question, 'question');
	log(number, 'number');
	return (
		<StyledQuestionWidget
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className='br'
		>
			<h3>
				{level && level.category} - {number}/{questionCount}
			</h3>
			{/* <h3>
				Song {number} / {questionCount}
			</h3> */}
			<AudioPlayer
				music={question.fileName}
				disableControls={disableControls}
				setDisableControls={setDisableControls}
			/>
			{/* {question && <AudioPlayer music={question} />} */}

			<GameForm
				handleAnswerOptionClick={handleAnswerOptionClick}
				title={title}
				setTitle={setTitle}
				setSongID={setSongID}
				songID={songID}
			/>
		</StyledQuestionWidget>
	);
};
const StyledQuestionWidget = styled(motion.div)`
	transition: all 200ms linear;
	/* border: 2px solid green; */
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* flex: 1; */
	padding: 1rem;
	h3 {
		color: ${({ theme }) => theme.txtGrey};
		/* color: ${({ theme }) => theme.primaryColor}; */
		text-align: left;
		/* padding-left: 1rem; */
		padding: 1rem;
		text-transform: capitalize;
		/* text-align: center; */
	}
`;

export default QuestionWidget;
