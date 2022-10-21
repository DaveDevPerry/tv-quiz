import React from 'react';
import styled from 'styled-components';
import { useLevelsContext } from '../hooks/useLevelsContext';
import CategoryStatCard from './CategoryStatCard';
import { FaStar } from 'react-icons/fa';

const CategoryStatCardContainer = () => {
	const { levels } = useLevelsContext();
	return (
		<StyledCategoryStatCardContainer className='br'>
			<div className='cat-stat-header'>
				<h2>categories</h2>
				<div className='star-container'>
					<div className='star-wrapper'>
						<FaStar className='star-on' />
					</div>
					<div className='star-wrapper'>
						<FaStar className='star-off' />
					</div>
					<div className='star-wrapper'>
						<FaStar className='star-off' />
					</div>
					<div className='star-wrapper'>
						<FaStar className='star-off' />
					</div>
				</div>
			</div>
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
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	.cat-stat-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		h2 {
			color: ${({ theme }) => theme.txtGrey};
			text-transform: capitalize;
			flex: 1;
		}
		.star-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			column-gap: 1rem;
			.star-wrapper {
				flex: 1;
				.star-off {
					color: ${({ theme }) => theme.bgLightGrey};
					font-size: 2.5rem;
				}
				.star-on {
					color: ${({ theme }) => theme.gold};
					font-size: 2.5rem;
				}
			}
		}
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
		gap: 1rem;
		/* width: 100%; */
		/* overflow-y: scroll; */
	}
`;

export default CategoryStatCardContainer;
