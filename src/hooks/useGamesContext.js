import { GamesContext } from '../context/GameContext';
import { useContext } from 'react';

export const useGamesContext = () => {
	const context = useContext(GamesContext);

	if (!context) {
		throw Error('useGamesContext must be used inside a games Context Provider');
	}

	return context;
};
