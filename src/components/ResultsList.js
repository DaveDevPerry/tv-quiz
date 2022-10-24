import React from 'react';
import styled from 'styled-components';
import { ImCross, ImCheckmark } from 'react-icons/im';
import { motion } from 'framer-motion';

const ResultsList = ({ gameScore }) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 2,
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
		<StyledResultsList
			className='br-inset'
			variants={container}
			initial='hidden'
			animate='show'
		>
			{/* 
			<motion.li variants={item}>
				<div className='result-song-row'>
					<p>one</p>
					<ImCheckmark className='star-on' />
				</div>
			</motion.li>
			<motion.li variants={item}>
				<div className='result-song-row'>
					<p>one</p>
					<ImCross className='star-off' />
				</div>
			</motion.li>
			<motion.li variants={item}>
				<div className='result-song-row'>
					<p>one</p>
					<ImCheckmark className='star-on' />
				</div>
			</motion.li> */}

			{gameScore &&
				gameScore.map((song, index) => (
					<motion.li variants={item} key={index}>
						<div className='result-song-row'>
							<p>{song.title}</p>
							{song.isCorrect === true ? (
								<ImCheckmark className='star-on' />
							) : (
								<ImCross className='star-off' />
							)}
						</div>
					</motion.li>
				))}
		</StyledResultsList>
	);
};
const StyledResultsList = styled(motion.ol)`
	padding: 2rem;
	/* width: 100%; */
	/* flex: 1; */
	/* list-style:  */
	padding-left: 4rem;
	li {
		display: list-item;
		/* padding-left: 2rem; */
		.result-song-row {
			display: flex;
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
`;

export default ResultsList;
