import React from 'react';
import styled from 'styled-components';
// import { log } from '../utils/helper';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useGamesContext } from '../hooks/useGamesContext';
// import { useNavigate } from 'react-router-dom';

// import { FaStar } from 'react-icons/fa';
import { MdOutlineQueueMusic } from 'react-icons/md';
// import { IoPlay } from 'react-icons/io5';

const CategoryStatWidget = ({ level }) => {
	return (
		<StyledCategoryStatWidget className='br'>
			<div className='category-header'>
				<h3>{level && level.category}</h3>
				<span>
					<MdOutlineQueueMusic className='song-icon' />
				</span>
				<h4>
					{level && level.songs.length < 10
						? `0${level.songs.length}`
						: level.songs.length}
				</h4>
				{/* <h4>
					<span>
						<MdOutlineQueueMusic className='song-icon' />
					</span>
					{level && level.questionCount}
				</h4> */}
				{/* <h4>
					{level && level.questionCount}
					{' songs'}
				</h4> */}
				{/* <h4>{level && level.difficulty}</h4> */}
				{/* <span>45%</span> */}
			</div>

			{/* <div className='time-container'>
				{level &&
					level.difficultyTypes.map((type) => (
						<div className='time-wrapper' key={type._id}>
							<p className='difficulty-type'>{type.name}</p>
							<p className='time-allotted'>
								{type.timeInMS / 1000}
								<span>
									{type.timeInMS / 1000 === 1 ? ' second' : ' seconds'}
								</span>
							</p>
							<div
								className='time-play-btn'
								onClick={() => {
									handleClick(type.timeInMS);
									compileLevelData(level._id, type.timeInMS, type.name);
								}}
							>
								<p>play</p>
								<IoPlay className='level-play-icon' />
							</div>
						</div>
					))}
			</div> */}
			{/* <div className='time-container'>
				{level &&
					level.difficultyTypes.map((type) => (
						<div className='time-wrapper' key={type._id}>
							<p className='difficulty-type'>{type.name}</p>
							<div className='result-wrapper'>3 / 5</div>
							<p className='time-allotted'>
								{type.timeInMS / 1000}
								<span>
									{type.timeInMS / 1000 === 1 ? ' second' : ' seconds'}
								</span>
							</p>
							<div className='time-play-btn' onClick={handleClick}>
								play
							</div>
						</div>
					))}
			</div> */}

			{/* <div className='stars-container'>
				<div className='wrapper'>
					<FaStar className='star-on' />
				</div>
				<div className='wrapper'>
					<FaStar className='star-off' />
				</div>
				<div className='wrapper'>
					<FaStar className='star-off' />
				</div>
				<div className='wrapper'>
					<FaStar className='star-off' />
				</div>
				<div className='wrapper'>
					<FaStar className='star-off' />
				</div>
				<div className='wrapper'>
					<p className='cat-percentage'>45%</p>
				</div>
			</div> */}
		</StyledCategoryStatWidget>
	);
};
const StyledCategoryStatWidget = styled.div`
	/* border: 1px solid red; */
	/* padding: 1rem; */
	padding: 1rem;
	display: flex;
	justify-content: center;
	/* align-items: center; */
	flex-direction: column;
	/* row-gap: 0.5rem; */
	row-gap: 1rem;
	/* background-color: ${({ theme }) => theme.bgGrey}; */
	.category-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		pointer-events: none;
		/* border-bottom: 2px solid ${({ theme }) => theme.primaryColor}; */
		h3 {
			/* color: ${({ theme }) => theme.primaryColor}; */
			text-transform: capitalize;
			/* font-weight: bold; */
			flex: 1;
		}
		h4 {
			font-style: italic;
		}
		h4 {
			font-style: italic;
			/* span {
				.song-icon {
					font-size: 2rem;
				}
			} */
		}
		span {
			.song-icon {
				font-size: 2rem;
				/* color: ${({ theme }) => theme.primaryColor}; */
			}
		}
		p {
			text-transform: capitalize;
			font-weight: bold;
			flex: 1;
		}
		span {
			font-weight: light;
		}
	}
	.time-container {
		display: flex;
		/* flex-direction: column; */
		justify-content: space-between;
		align-items: center;
		/* font-size: 2.5rem; */
		/* pointer-events: none; */
		column-gap: 2rem;
		.time-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			row-gap: 0.3rem;
			/* font-size: 2.5rem; */
			/* pointer-events: none; */
			flex: 1;
			.difficulty-type {
				font-weight: bold;
				text-transform: uppercase;
			}
			.result-wrapper {
				flex: 1;
			}
			.time-allotted {
				font-size: 1.4rem;
				span {
					text-transform: lowercase;
					font-style: italic;
				}
			}
			.time-play-btn {
				background-color: ${({ theme }) => theme.primaryColor};
				text-transform: uppercase;
				padding: 0.3rem 0.5rem;
				/* padding: 0.3rem 1rem; */
				border-radius: 4px;
				/* pointer-events: unset; */
				cursor: pointer;
				display: flex;
				align-items: center;
				column-gap: 0.3rem;
				p {
					font-size: 1.4rem;
				}
				.level-play-icon {
					font-size: 1.6rem;
				}
			}
		}
	}
	.stars-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 2.5rem;
		pointer-events: none;
		.wrapper {
			.star-on {
				color: ${({ theme }) => theme.gold};
			}
			.star-off {
				/* color: ${({ theme }) => theme.bgGrey}; */
				/* color: ${({ theme }) => theme.borderLine}; */
				color: ${({ theme }) => theme.bgLightGrey};
			}
			.cat-percentage {
				font-size: 2.2rem;
				font-weight: bold;
			}
		}
	}
`;

export default CategoryStatWidget;
