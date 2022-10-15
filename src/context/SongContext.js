import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const SongsContext = createContext();

export const songsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SONGS':
			log(action.payload, 'action payload set songs');
			return {
				...state,
				songs: action.payload,
			};

		case 'SET_CATEGORY_SONGS':
			return {
				...state,
				categorySongs: action.payload,
			};

		// case 'SET_FAVOURITE_SONGS':
		// 	return {
		// 		songs: {
		// 			songs: state,
		// 			favourite_songs: action.payload,
		// 		},
		// 	};

		case 'SET_SONG':
			log(action.payload, 'action payload song');

			return {
				...state,
				song: action.payload,
			};

		case 'CREATE_SONG':
			return {
				// songs: {
				// 	...state.songs,
				// 	gigs: [action.payload, ...state.gigCounterData.gigs],
				// },
			};

		default:
			return state;
	}
};
// children represents everything the SongsContextProvider wraps
export const SongsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(songsReducer, {
		songs: null,
		song: null,
		categorySongs: null,
		// favourite_songs: null,
	});

	return (
		<SongsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</SongsContext.Provider>
	);
};
