import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const ResultsRanking = ({ gameScore }) => {
	// const container = {
	// 	hidden: { opacity: 0 },
	// 	show: {
	// 		opacity: 1,
	// 		transition: {
	// 			delayChildren: 1,
	// 			staggerChildren: 1,
	// 		},
	// 	},
	// };

	// const item = {
	// 	hidden: { opacity: 0 },
	// 	show: { opacity: 1 },
	// };
	return (
		<StyledResultsRanking
		// variants={container}
		// 	initial='hidden'
		// 	animate='show'
		>
			{(gameScore.filter((obj) => {
				return obj.isCorrect === true;
			}).length /
				gameScore.length) *
				100 ===
			100 ? (
				<p className='result-msg'>Shit 'ot</p>
			) : (gameScore.filter((obj) => {
					return obj.isCorrect === true;
			  }).length /
					gameScore.length) *
					100 >=
			  50 ? (
				<p className='result-msg average'>Well played</p>
			) : (
				<p className='result-msg bad'>Not so hot</p>
			)}
			{/* {(gameScore.filter((obj) => {
				return obj.isCorrect === true;
			}).length /
				gameScore.length) *
				100 ===
			100 ? (
				<motion.p variants={item} className='result-msg'>Shit 'ot</motion.p>
			) : (
				<motion.p variants={item} className='result-msg bad'>Not so hot</motion.p>
			)} */}
		</StyledResultsRanking>
	);
};
const StyledResultsRanking = styled(motion.div)`
	text-align: center;
	.result-msg {
		color: ${({ theme }) => theme.green};
		font-size: 3rem;
		font-weight: bolder;
		&.average {
			color: ${({ theme }) => theme.orange};
		}
		&.bad {
			color: ${({ theme }) => theme.red};
		}
	}
`;
export default ResultsRanking;
