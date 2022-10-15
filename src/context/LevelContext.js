import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const LevelsContext = createContext();

export const levelsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_LEVELS':
			log(action.payload, 'action payload set songs');
			return {
				...state,
				levels: action.payload,
			};
		case 'SET_SONGS_IN_LEVELS':
			log(action.payload, 'action payload set songs in levels');
			return {
				...state,
				songsInLevels: action.payload,
			};
		case 'SET_SONGS_IN_LEVEL':
			log(action.payload, 'action payload set songs in level');
			return {
				...state,
				songsInLevel: action.payload,
			};

		// case 'SET_FAVOURITE_SONGS':
		// 	return {
		// 		songs: {
		// 			songs: state,
		// 			favourite_songs: action.payload,
		// 		},
		// 	};

		case 'SET_LEVEL':
			log(action.payload, 'action payload song');

			return {
				...state,
				level: action.payload,
			};

		case 'CREATE_LEVEL':
			return {
				...state,
				levels: action.payload,
			};

		default:
			return state;
	}
};
// children represents everything the LevelsContextProvider wraps
export const LevelsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(levelsReducer, {
		levels: null,
		level: null,
		songsInLevels: null,
		songsInLevel: null,
		// favourite_songs: null,
	});

	return (
		<LevelsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</LevelsContext.Provider>
	);
};
