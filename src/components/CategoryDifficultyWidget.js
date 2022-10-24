import React from 'react';
import styled from 'styled-components';
// import { IoPlay } from 'react-icons/io5';
import { CgSandClock } from 'react-icons/cg';
import { MdOutlineQueueMusic } from 'react-icons/md';

const CategoryDifficultyWidget = ({
	type,
	handleClick,
	compileLevelData,
	level,
}) => {
	return (
		<StyledCategoryDifficultyWidget>
			{/* <StyledCategoryDifficultyWidget className='br-inset'> */}
			<p className='difficulty-type'>{type.name}</p>

			<div className='settings-wrapper'>
				<div className='timer-container'>
					<CgSandClock className='timer-icon' />
					<p className='time-allotted'>
						{type.timeInMS / 1000 < 10
							? `0${type.timeInMS / 1000}`
							: type.timeInMS / 1000}
						{/* <span>{type.timeInMS / 1000 === 1 ? ' sec' : ' secs'}</span> */}
					</p>
				</div>
				<div className='timer-container'>
					<MdOutlineQueueMusic className='songs-icon' />
					<p className='time-allotted'>
						{(level && level.questionCount) < 10
							? `0${level && level.questionCount}`
							: level && level.questionCount}
						{/* <span>
							{level && level.questionCount === 1 ? ' song' : ' songs'}
						</span> */}
					</p>
				</div>
			</div>
			<div
				className='time-play-btn'
				onClick={() => {
					handleClick(type.timeInMS);
					compileLevelData(level._id, type.timeInMS, type.name);
				}}
			>
				<p>play</p>
				{/* <IoPlay className='level-play-icon' /> */}
			</div>
			{/* <p className='difficulty-type'>{type.name}</p>
			<p className='time-allotted'>
				<span>
					<CgSandClock className='timer-icon' />
				</span>
				{type.timeInMS / 1000}
				<span>{type.timeInMS / 1000 === 1 ? ' second' : ' seconds'}</span>
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
			</div> */}
		</StyledCategoryDifficultyWidget>
	);
};
const StyledCategoryDifficultyWidget = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	row-gap: 0.5rem;
	/* font-size: 2.5rem; */
	/* pointer-events: none; */
	flex: 1;
	padding-top: 0.3rem;
	/* box-shadow: none; */
	border: 1px solid lightgray;
	border-radius: 4px;
	.difficulty-type {
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
	}
	.result-wrapper {
		flex: 1;
	}
	.settings-wrapper {
		display: flex;
		flex-direction: row;
		/* justify-content: space-evenly; */
		justify-content: center;
		align-items: center;
		/* column-gap: 1rem; */
		.timer-container {
			display: flex;
			flex-direction: row;
			/* flex-direction: column; */
			align-items: center;
			/* column-gap: 0.2rem; */
			/* border: 1px solid; */
			justify-content: center;
			flex: 1 1 49%;
			.timer-icon {
				font-size: 1.6rem;
				color: ${({ theme }) => theme.green};
			}
			.songs-icon {
				font-size: 2rem;
				color: ${({ theme }) => theme.green};
			}
			.time-allotted {
				font-size: 1.6rem;
				font-weight: bolder;
				span {
					text-transform: lowercase;
					font-style: italic;
				}
			}
		}
	}
	.time-play-btn {
		background-color: ${({ theme }) => theme.primaryColor};
		text-transform: uppercase;
		padding: 0.3rem 0.5rem;
		/* padding: 0.3rem 1rem; */
		border-radius: 0 0 4px 4px;
		/* pointer-events: unset; */
		cursor: pointer;
		display: flex;
		align-items: center;
		text-align: center;
		column-gap: 0.3rem;
		justify-content: center;
		p {
			/* font-size: 1.4rem; */
			font-weight: bold;
			text-transform: uppercase;
		}
		/* .level-play-icon {
			font-size: 1.6rem;
		} */
	}
`;

export default CategoryDifficultyWidget;
