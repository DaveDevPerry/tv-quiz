import React from 'react';
import styled from 'styled-components';
import { useLevelsContext } from '../hooks/useLevelsContext';
import CategoryStatCard from './CategoryStatCard';
import { FaStar } from 'react-icons/fa';

const CategoryStatCardContainer = () => {
	const { levels, songsInLevels } = useLevelsContext();
	return (
		<StyledCategoryStatCardContainer className='br'>
			<div className='cat-stat-header'>
				<h2>categories</h2>
				<div className='star-container'>
					{levels &&
						levels.map((level, index) => (
							<div key={level._id} level={level} className='star-wrapper'>
								{songsInLevels && songsInLevels[index].length === 0 ? (
									<FaStar className='star-off' />
								) : (
									<>
										{(songsInLevels && songsInLevels[index].length) <
										(level && level.songs.length) ? (
											<FaStar className='star-off' />
										) : (
											<FaStar className='star-on' />
										)}
									</>
								)}
							</div>
						))}
				</div>
				{/* <div className='star-container'>
					{levels &&
						levels.map((level, index) => (
							<div key={level._id} level={level} className='star-wrapper'>
								{(songsInLevels && songsInLevels[index].length) <
								(level && level.songs.length) ? (
									<FaStar className='star-off' />
								) : (
									<FaStar className='star-on' />
								)}
							</div>
						))}
				</div> */}
			</div>
			{/* <div className='star-container'>
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
			</div> */}
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
		flex-wrap: wrap;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1rem;
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
	}
	/* .category-card-container {
		flex-wrap: wrap;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1rem;
	} */
`;

export default CategoryStatCardContainer;
