import React from 'react';
import styled from 'styled-components';
import LevelSelectButton from '../components/LevelSelectButton';
import { useLevelsContext } from '../hooks/useLevelsContext';
import { useSongsContext } from '../hooks/useSongsContext';

const Home = () => {
	const { songs } = useSongsContext();
	const { levels } = useLevelsContext();
	return (
		<StyledHome>
			<h1>home page</h1>

			<ul>
				<li>SONGS</li>
				{songs && songs.map((song) => <li key={song._id}>{song.title}</li>)}
			</ul>

			<div className='level-select-container'>
				{levels &&
					levels.map((level) => (
						<LevelSelectButton key={level._id} level={level} />
					))}
			</div>
		</StyledHome>
	);
};
const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	padding: 1rem;
	.level-select-container {
		padding: 0.5rem;
		flex: 1;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 2rem;
	}
`;

export default Home;
