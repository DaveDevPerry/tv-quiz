import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
// import ProgressBarWidget from './ProgressBarWidget';
// import { log } from '../utils/helper';

const PlayerRankCard = () => {
	// const { songsInLevels } = useLevelsContext();
	const { currentUser, userCount, users } = useAuthContext();
	// const { songs } = useSongsContext();
	// const { currentUser } = useAuthContext();
	// const navigate = useNavigate();

	// const handleClick = () => {
	// 	dispatch({
	// 		type: 'SET_SONGS_IN_LEVEL',
	// 		payload: songsInLevels[levelIndex],
	// 	});
	// 	dispatch({
	// 		type: 'SET_LEVEL',
	// 		payload: level,
	// 	});
	// 	navigate('/category');
	// };
	return (
		<StyledPlayerRankCard
			className='br'
			// className='br-field'
			// onClick={() => {
			// 	handleClick(levelIndex, level);
			// }}
		>
			<h2>Player Rank</h2>
			<div className='stat-card-ratio'>
				{users &&
				users.findIndex((object) => {
					return object._id === currentUser._id;
				}) +
					1 <
					10
					? `0${
							users &&
							users.findIndex((object) => {
								return object._id === currentUser._id;
							}) + 1
					  }`
					: users &&
					  users.findIndex((object) => {
							return object._id === currentUser._id;
					  }) + 1}{' '}
				/ {userCount && userCount < 10 ? `0${userCount}` : userCount}
			</div>
			{/* <div className='stat-card-ratio'>
				05/
				{level && level.songs.length < 10
					? `0${level.songs.length}`
					: level.songs.length}
			</div> */}
			{/* <div className='stat-card-bar'>
				<ProgressBarWidget
					percentage={(
						((currentUser && currentUser.correctSongIDs.length) /
							(songs && songs.length)) *
						100
					).toFixed(2)}
				/>
			</div> */}
		</StyledPlayerRankCard>
	);
};
const StyledPlayerRankCard = styled.div`
	/* padding: 2em; */
	padding: 2rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: flex-start;
	/* row-gap: 0.5rem; */
	/* flex: 1 1 48%; */
	cursor: pointer;
	.stat-card-bar {
		/* border: 1px solid green; */
		/* padding: 0 1rem 0.5rem; */
		width: 100%;
		margin-top: 2rem;
	}
	.stat-card-ratio {
		/* border: 1px solid blue; */
		text-align: center;
		font-size: 2.5rem;
		font-weight: bolder;
		color: ${({ theme }) => theme.gold};
	}
	h2 {
		/* border: 1px solid red; */
		text-align: center;
		text-transform: capitalize;
	}
`;

export default PlayerRankCard;
