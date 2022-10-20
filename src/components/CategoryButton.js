import React from 'react';
import styled from 'styled-components';
import { log } from '../utils/helper';
import { useLevelsContext } from '../hooks/useLevelsContext';
import { useGamesContext } from '../hooks/useGamesContext';
import { useNavigate } from 'react-router-dom';

// import { FaStar } from 'react-icons/fa';
import { MdOutlineQueueMusic } from 'react-icons/md';
import { IoPlay } from 'react-icons/io5';

const CategoryButton = ({ level }) => {
	const navigate = useNavigate();
	const { levels } = useLevelsContext();
	const { dispatch } = useGamesContext();

	const compileLevelData = async (levelID, levelTime, levelDifficulty) => {
		log(levelID, 'level in compile level data func');
		log(levelTime, 'level time in compile level data func');

		const clonedLevels = [...levels];
		const getLevel = clonedLevels.find((Obj) => Obj._id === levelID);
		log(getLevel, ' get level');

		if (!getLevel) {
			log('level not found');
		}
		if (getLevel) {
			log('level found');
			getLevel.songLength = levelTime;
			getLevel.roundDifficulty = levelDifficulty;
			dispatch({ type: 'SET_GAME_DATA', payload: getLevel });
			// dispatch({ type: 'SET_GAME_DATA', payload: getLevel });
		}

		setTimeout(() => {
			navigate('/game');
		}, 500);
	};
	// const compileLevelData = async (levelID) => {
	// 	log(levelID, 'level in compile level data func');

	// 	const clonedLevels = [...levels];
	// 	const getLevel = clonedLevels.find((Obj) => Obj._id === levelID);
	// 	log(getLevel, ' get level');

	// 	if (!getLevel) {
	// 		log('level not found');
	// 	}
	// 	if (getLevel) {
	// 		log('level found');
	// 		dispatch({ type: 'SET_GAME_DATA', payload: getLevel });
	// 	}

	// 	setTimeout(() => {
	// 		navigate('/game');
	// 	}, 2000);
	// };

	const handleClick = (time) => {
		log(time, 'time clicked');
	};
	return (
		<StyledCategoryButton
			className='br'
			// className='br-field'
			// onClick={() => {
			// 	compileLevelData(level._id);
			// }}
		>
			<div className='category-header'>
				<h3>{level && level.category}</h3>
				<span>
					<MdOutlineQueueMusic className='song-icon' />
				</span>
				<h4>{level && level.questionCount}</h4>
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

			<div className='time-container'>
				{level &&
					level.difficultyTypes.map((type) => (
						<div className='time-wrapper' key={type._id}>
							<p className='difficulty-type'>{type.name}</p>
							{/* <div className='result-wrapper'>3 / 5</div> */}
							<p className='time-allotted'>
								{type.timeInMS / 1000}
								<span>
									{type.timeInMS / 1000 === 1 ? ' second' : ' seconds'}
								</span>
								{/* <span> seconds</span> */}
							</p>
							<div
								className='time-play-btn'
								onClick={() => {
									handleClick(type.timeInMS);
									compileLevelData(level._id, type.timeInMS, type.name);
								}}
							>
								{/* <div className='time-play-btn' onClick={handleClick}> */}
								<p>play</p>
								<IoPlay className='level-play-icon' />
							</div>
						</div>
					))}
			</div>
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
		</StyledCategoryButton>
	);
};
const StyledCategoryButton = styled.div`
	padding: 1rem 2rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	row-gap: 1rem;
	/* transform: skew(10deg) rotate(-2deg);
	-webkit-transform: skew(10deg) rotate(-2deg);
	-moz-transform: skew(10deg) rotate(-2deg);
	padding: 3% 2%; */
	.category-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		pointer-events: none;
		border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
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

export default CategoryButton;
