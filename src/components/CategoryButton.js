import React from 'react';
import styled from 'styled-components';
import { log } from '../utils/helper';
import { useLevelsContext } from '../hooks/useLevelsContext';
import { useGamesContext } from '../hooks/useGamesContext';
import { useNavigate } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';

const CategoryButton = ({ level }) => {
	const navigate = useNavigate();
	const { levels } = useLevelsContext();
	const { dispatch } = useGamesContext();

	const compileLevelData = async (levelID) => {
		log(levelID, 'level in compile level data func');

		const clonedLevels = [...levels];
		// const getLevel = clonedLevels.find((Obj) => Obj._id === '123');
		const getLevel = clonedLevels.find((Obj) => Obj._id === levelID);
		log(getLevel, ' get level');

		if (!getLevel) {
			log('level not found');
		}
		if (getLevel) {
			log('level found');
			dispatch({ type: 'SET_GAME_DATA', payload: getLevel });
		}

		setTimeout(() => {
			navigate('/game');
		}, 2000);
		// const compileLevelData = async (levelID) => {
		//   log(levelID, 'level in compile level data func');

		//   const response = await fetch(
		//     `${process.env.REACT_APP_BACKEND_URL}/api/songs`,
		//   )
	};
	return (
		<StyledCategoryButton
			className='br'
			// className='br-field'
			onClick={() => {
				compileLevelData(level._id);
			}}
		>
			<div className='category-header'>
				<h3>{level && level.category}</h3>
				<h4>{level && level.difficulty}</h4>
				{/* <span>45%</span> */}
			</div>

			<div className='stars-container'>
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
			</div>
			{/* <p>
				category: <span>{level && level.category}</span>
			</p> */}
			{/* <p>
				difficulty: <span>{level && level.difficulty}</span>
			</p> */}
		</StyledCategoryButton>
	);
};
const StyledCategoryButton = styled.div`
	/* border: 1px solid red; */
	padding: 1rem 2rem;
	display: flex;
	justify-content: center;
	/* align-items: center; */
	flex-direction: column;
	row-gap: 0.5rem;
	/* background-color: ${({ theme }) => theme.bgGrey}; */
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
			/* flex: 1; */
		}
		h4 {
			font-style: italic;
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
