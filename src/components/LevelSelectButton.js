import React from 'react';
import styled from 'styled-components';
import { log } from '../helper';
import { useLevelsContext } from '../hooks/useLevelsContext';
import { useGamesContext } from '../hooks/useGamesContext';
import { useNavigate } from 'react-router-dom';

const LevelSelectButton = ({ level }) => {
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
		<StyledLevelSelectButton
			onClick={() => {
				compileLevelData(level._id);
			}}
		>
			<p>
				category: <span>{level && level.category}</span>
			</p>
			<p>
				difficulty: <span>{level && level.difficulty}</span>
			</p>
		</StyledLevelSelectButton>
	);
};
const StyledLevelSelectButton = styled.div`
	border: 1px solid red;
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 3rem;
	p {
		text-transform: capitalize;
		font-weight: bold;
		span {
			font-weight: light;
		}
	}
`;

export default LevelSelectButton;
