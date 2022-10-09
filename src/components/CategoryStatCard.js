import React from 'react';
import styled from 'styled-components';
import ProgressBarWidget from './ProgressBarWidget';
// import { log } from '../utils/helper';

const CategoryStatCard = ({ level }) => {
	return (
		<StyledCategoryStatCard
			className='br'
			// className='br-field'
			// onClick={() => {
			// 	compileLevelData(level._id);
			// }}
		>
			<h2>{level && level.category}</h2>
			<div className='stat-card-ratio'>
				05/
				{level && level.songs.length < 10
					? `0${level.songs.length}`
					: level.songs.length}
			</div>
			<div className='stat-card-bar'>
				<ProgressBarWidget percentage={23} />
			</div>
		</StyledCategoryStatCard>
	);
};
const StyledCategoryStatCard = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	/* row-gap: 1rem; */
	flex: 1 1 40%;
	.stat-card-bar {
		/* border: 1px solid green; */
		padding: 0 1rem 0.5rem;
	}
	.stat-card-ratio {
		/* border: 1px solid blue; */
		text-align: center;
		font-size: 3rem;
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
