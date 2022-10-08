import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import CategoryButton from '../components/CategoryButton';
// import LevelSelectButton from '../components/LevelSelectButton';
import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';

const Play = () => {
	// const { songs } = useSongsContext();
	const { levels } = useLevelsContext();
	return (
		<StyledPlay
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h2>choose a category</h2>

			{/* <ul>
				<li>SONGS</li>
				{songs && songs.map((song) => <li key={song._id}>{song.title}</li>)}
			</ul> */}

			<div className='level-select-container'>
				{/* <div className='level-select-container br'> */}
				{levels &&
					levels.map((level) => (
						<CategoryButton key={level._id} level={level} />
					))}
				{/* <LevelSelectButton key={level._id} level={level} /> */}
			</div>
		</StyledPlay>
	);
};
const StyledPlay = styled(motion.div)`
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	padding: 1rem; */
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	flex: 1;
	max-width: 42rem;
	padding: 0.5rem 0rem;
	/* padding: 0.5rem 1rem; */
	overflow-y: scroll;
	/* overflow: hidden; */
	/* overflow: hidden; */
	transition: all 200ms linear;
	/* margin: 0 auto; */
	h2 {
		/* color: ${({ theme }) => theme.primaryColor}; */
		text-transform: capitalize;
		text-align: center;
	}
	.level-select-container {
		padding: 1rem;
		flex: 1;
		/* border: 1px solid black; */
		display: flex;
		flex-direction: column;
		/* align-items: stretch; */
		justify-content: flex-start;
		justify-content: flex-start;
		row-gap: 1rem;
		/* width: 100%; */
		overflow-y: scroll;
	}
`;

export default Play;
