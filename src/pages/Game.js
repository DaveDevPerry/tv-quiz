import React from 'react';
import styled from 'styled-components';
import AudioPlayer from '../components/AudioPlayer';
import GameForm from '../components/GameForm';
// import LevelSelectButton from '../components/LevelSelectButton';
import { useGamesContext } from '../hooks/useGamesContext';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';

const Game = () => {
	// const { songs } = useSongsContext();
	// const { levels } = useLevelsContext();
	const { level, music } = useGamesContext();
	return (
		<StyledGame>
			<h1>Game page</h1>

			<h2>Category: {level.category}</h2>
			<h3>Difficulty: {level.difficulty}</h3>

			<p>8 seconds to guess the song</p>

			<p>user sets volume level prior to starting</p>

			<ul>
				<li>music</li>
				<li>{music && music.title}</li>
			</ul>

			<AudioPlayer music={music} />

			<GameForm />

			{/* <div className='level-select-container'>
				{levels &&
					levels.map((level) => (
						<LevelSelectButton key={level._id} level={level} />
					))}
			</div> */}
		</StyledGame>
	);
};
const StyledGame = styled.div`
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

export default Game;
