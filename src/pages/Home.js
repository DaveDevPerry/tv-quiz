import React from 'react';
import styled from 'styled-components';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';

const Home = () => {
	// const { songs } = useSongsContext();
	// const { levels } = useLevelsContext();
	return (
		<StyledHome>
			<h2>home page</h2>

			<p>this page contains basic player stats. eg</p>
			<ol>
				<li>welcome msg</li>
				<li>show user</li>
				<li>total players</li>
				<li>current rank</li>
			</ol>

			{/* <ul>
				<li>SONGS</li>
				{songs && songs.map((song) => <li key={song._id}>{song.title}</li>)}
			</ul> */}

			{/* <div className='level-select-container br'>
				{levels &&
					levels.map((level) => (
						<LevelSelectButton key={level._id} level={level} />
					))}
			</div> */}
		</StyledHome>
	);
};
const StyledHome = styled.div`
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
	padding: 0.5rem 1rem;
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
	margin: 0 auto;
	h2 {
		/* color: ${({ theme }) => theme.primaryColor}; */
		text-transform: capitalize;
		text-align: center;
	}
	ol {
		list-style: disc;
		li {
			display: list-item;
			/* padding-left: 2rem; */
			margin-left: 2rem;
		}
	}
`;

export default Home;
