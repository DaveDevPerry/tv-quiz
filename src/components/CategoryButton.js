import React from 'react';
import styled from 'styled-components';
import { log } from '../utils/helper';
import { useLevelsContext } from '../hooks/useLevelsContext';
import { useGamesContext } from '../hooks/useGamesContext';
import { useNavigate } from 'react-router-dom';

// import { FaStar } from 'react-icons/fa';
import { MdOutlineQueueMusic } from 'react-icons/md';
// import { IoPlay } from 'react-icons/io5';
// import { CgSandClock } from 'react-icons/cg';
import CategoryDifficultyWidget from './CategoryDifficultyWidget';

const CategoryButton = ({ level, levelIndex }) => {
	const navigate = useNavigate();
	const { levels, songsInLevels } = useLevelsContext();
	// const { levels } = useLevelsContext();
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
			className='br temp-disable'
			// className='br-field'
			// onClick={() => {
			// 	compileLevelData(level._id);
			// }}
		>
			<div className='category-header'>
				<h3>{level && level.category}</h3>
				<div className='song-count-wrapper'>
					{/* <span> */}
					<MdOutlineQueueMusic className='song-icon' />
					{/* </span> */}
					<h4>
						{level && level.questionCount < 10
							? `0${level && level.questionCount}`
							: level && level.questionCount}
					</h4>
				</div>
				<div className='stat-card-ratio'>
					<p className='songs-correct'>
						{songsInLevels && songsInLevels[levelIndex].length < 10
							? `0${songsInLevels[levelIndex].length}`
							: songsInLevels[levelIndex].length}
						<span>
							-
							{level && level.songs.length < 10
								? `0${level.songs.length}`
								: level.songs.length}
						</span>
					</p>
				</div>
				{/* <span>
					<MdOutlineQueueMusic className='song-icon' />
				</span>
				<h4>{level && level.questionCount}</h4> */}
			</div>

			<div className='time-container'>
				{level &&
					level.difficultyTypes.map((type) => (
						<CategoryDifficultyWidget
							className='time-wrapper'
							key={type._id}
							handleClick={handleClick}
							level={level}
							compileLevelData={compileLevelData}
							type={type}
						/>
					))}
			</div>
			{/* <div className='time-container'>
				{level &&
					level.difficultyTypes.map((type) => (
						<div className='time-wrapper' key={type._id}>
							<p className='difficulty-type'>{type.name}</p>
							<p className='time-allotted'>
								<span>
									<CgSandClock className='timer-icon' />
								</span>
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
		</StyledCategoryButton>
	);
};
const StyledCategoryButton = styled.div`
	padding: 1rem;
	/* padding: 1rem 2rem; */
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
		column-gap: 2rem;
		pointer-events: none;
		border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
		h3 {
			/* color: ${({ theme }) => theme.primaryColor}; */
			text-transform: capitalize;
			/* font-weight: bold; */
			/* flex: 1; */
		}
		h4 {
			font-style: italic;
		}
		.song-count-wrapper {
			flex: 1;
			display: flex;
			justify-content: flex-start;
			align-items: center;

			h4 {
				font-style: italic;
				/* span {
					.song-icon {
					font-size: 2rem;
				}
			} */
			}
			/* span { */
			.song-icon {
				font-size: 2rem;
				color: ${({ theme }) => theme.green};
				/* color: ${({ theme }) => theme.primaryColor}; */
			}
			/* } */
		}
		.stat-card-ratio {
			/* color: ${({ theme }) => theme.green}; */
			font-weight: bolder;
			.songs-correct {
				color: ${({ theme }) => theme.green};
				span {
					color: ${({ theme }) => theme.txtGrey};
				}
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
		column-gap: 1rem;
		padding: 1rem 0;
		/* .time-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			row-gap: 0.3rem;
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
				border-radius: 4px;
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
		} */
	}
`;

export default CategoryButton;
