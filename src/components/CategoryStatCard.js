import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLevelsContext } from '../hooks/useLevelsContext';
import ProgressBarWidget from './ProgressBarWidget';
// import { log } from '../utils/helper';

const CategoryStatCard = ({ level, levelIndex }) => {
	const { songsInLevels, dispatch } = useLevelsContext();
	const navigate = useNavigate();

	const handleClick = () => {
		dispatch({
			type: 'SET_SONGS_IN_LEVEL',
			payload: songsInLevels[levelIndex],
		});
		dispatch({
			type: 'SET_LEVEL',
			payload: level,
		});
		navigate('/category');
	};
	return (
		<StyledCategoryStatCard
			// className='br'
			className='br-inset'
			onClick={() => {
				handleClick(levelIndex, level);
			}}
		>
			<h2>{level && level.category}</h2>
			<div className='stat-card-ratio'>
				{songsInLevels && songsInLevels[levelIndex].length < 10
					? `0${songsInLevels[levelIndex].length}`
					: songsInLevels[levelIndex].length}
				/
				{level && level.songs.length < 10
					? `0${level.songs.length}`
					: level.songs.length}
			</div>
			{/* <div className='stat-card-ratio'>
				05/
				{level && level.songs.length < 10
					? `0${level.songs.length}`
					: level.songs.length}
			</div> */}
			<div className='stat-card-bar'>
				<ProgressBarWidget
					percentage={(
						(songsInLevels &&
							songsInLevels[levelIndex].length / level.songs.length) * 100
					).toFixed(2)}
				/>
			</div>
		</StyledCategoryStatCard>
	);
};
const StyledCategoryStatCard = styled.div`
	/* padding: 2em; */
	padding: 2rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: flex-start;
	/* row-gap: 0.5rem; */
	flex: 1 1 46%;
	cursor: pointer;
	.stat-card-bar {
		/* border: 1px solid green; */
		/* padding: 0 1rem 0.5rem; */
		width: 100%;
		/* margin-top: 2rem; */
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

export default CategoryStatCard;
