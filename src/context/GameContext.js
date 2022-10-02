import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const GamesContext = createContext();

export const gamesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_GAME_DATA':
			log(action.payload, 'action payload set game data');
			const clonedSongs = [...action.payload.songs];
			log(clonedSongs, 'clonedSongs set game data');
			const randomNumber = Math.floor(Math.random() * clonedSongs.length);
			const songChosen = clonedSongs[randomNumber];

			return {
				...state,
				level: action.payload,
				music: songChosen,
				// songs: clonedSongs,
			};

		// case 'SET_LEVEL':
		// 	log(action.payload, 'action payload song');

		// 	return {
		// 		...state,
		// 		level: action.payload,
		// 	};

		// case 'CREATE_LEVEL':
		// 	return {
		// 		...state,
		// 		levels: action.payload,
		// 	};

		default:
			return state;
	}
};
// children represents everything the GamesContextProvider wraps
export const GamesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(gamesReducer, {
		// gameData: null,
		level: null,
		// songs: null,
		music: null,
		// favourite_songs: null,
	});

	return (
		<GamesContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GamesContext.Provider>
	);
};
