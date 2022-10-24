import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const ResultsScore = ({ gameScore }) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 1,
				staggerChildren: 1,
				// delay: 2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<StyledResultsScore
			className='results-wrapper br-inset'
			variants={container}
			initial='hidden'
			animate='show'
		>
			<motion.p variants={item}>
				{
					gameScore.filter((obj) => {
						return obj.isCorrect === true;
					}).length
				}{' '}
				out of {gameScore.length}
			</motion.p>
			<motion.p variants={item} className='result-percentage'>
				{(
					(gameScore.filter((obj) => {
						return obj.isCorrect === true;
					}).length /
						gameScore.length) *
					100
				).toFixed()}
				<span>%</span>
			</motion.p>
		</StyledResultsScore>
	);
};
const StyledResultsScore = styled(motion.div)`
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
`;

export default ResultsScore;
