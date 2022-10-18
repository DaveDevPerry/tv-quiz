import React from 'react';
import styled from 'styled-components';
import { useLevelsContext } from '../hooks/useLevelsContext';
import CategoryStatCard from './CategoryStatCard';

const CategoryStatCardContainer = () => {
	const { levels } = useLevelsContext();
	return (
		<StyledCategoryStatCardContainer className='br'>
			<h2>categories</h2>
			<div className='category-card-container'>
				{levels &&
					levels.map((level, index) => (
						<CategoryStatCard
							key={level._id}
							level={level}
							levelIndex={index}
						/>
					))}
			</div>
		</StyledCategoryStatCardContainer>
	);
};
const StyledCategoryStatCardContainer = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	h2 {
		color: ${({ theme }) => theme.txtGrey};
		text-transform: capitalize;
	}
	.category-card-container {
		/* padding: 0.5rem; */
		/* flex: 1; */
		flex-wrap: wrap;
		/* border: 1px solid black; */
		display: flex;
		flex-direction: row;
		/* align-items: stretch; */
		justify-content: flex-start;
		/* justify-content: flex-start; */
		gap: 2rem;
		/* width: 100%; */
		/* overflow-y: scroll; */
	}
`;

export default CategoryStatCardContainer;
