import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CategoryButton from '../components/CategoryButton';
// import LevelSelectButton from '../components/LevelSelectButton';
import { useLevelsContext } from '../hooks/useLevelsContext';
import { useStateContext } from '../lib/context';
// import { useSongsContext } from '../hooks/useSongsContext';

const Play = () => {
	// const { songs } = useSongsContext();
	const { levels } = useLevelsContext();
	const { dataLoaded } = useStateContext();

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
	return (
		<StyledPlay
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <h2>level select</h2> */}

			{/* <ul>
				<li>SONGS</li>
				{songs && songs.map((song) => <li key={song._id}>{song.title}</li>)}
			</ul> */}

			{/* <div className='level-select-container'>
				{levels &&
					levels.map((level) => (
						<div className='funky-container' key={level._id}>
							<CategoryButton level={level} />
						</div>
					))}
			</div> */}
			<div className='level-select-container'>
				{levels &&
					levels.map((level, index) => (
						<CategoryButton key={level._id} level={level} levelIndex={index} />
					))}
			</div>
		</StyledPlay>
	);
};
const StyledPlay = styled(motion.div)`
	/* overflow-y: scroll; */

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	/* padding: 0.5rem 0; */
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
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
	.level-select-container {
		padding: 0.5rem 1rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		justify-content: flex-start;
		row-gap: 1rem;
		overflow-y: auto;
		.temp-disable {
			&:nth-child(2) {
				display: none !important;
				pointer-events: none;
				cursor: unset;
			}
			&:nth-child(3) {
				display: none !important;
				pointer-events: none;
				cursor: unset;
			}
		}
		/* .funky-container {
			background: rgb(122, 206, 122);
			transform: skew(-10deg) rotate(2deg);
			-webkit-transform: skew(-10deg) rotate(2deg);
			-moz-transform: skew(-10deg) rotate(2deg);
		} */
	}
`;

export default Play;
