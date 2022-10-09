import { createContext, useReducer, useEffect } from 'react';
import { log } from '../utils/helper';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { user: action.payload };
		case 'LOGOUT':
			return { user: null };
		// case 'UPDATE_USER_FAVOURITE':
		// 	log(state, 'auth state');
		// 	log({ ...state }, 'auth state');
		// 	const updatedFavourites = [...state.user.favourites, action.payload];
		// 	return {
		// 		user: { ...state.user, favourites: updatedFavourites },
		// 	};
		case 'SET_USERS':
			return {
				...state,
				users: action.payload,
			};
		case 'SET_USER_COUNT':
			return {
				...state,
				userCount: action.payload,
			};
		case 'SET_USER':
			return {
				...state,
				currentUser: action.payload,
			};
		case 'UPDATE_USER':
			log(action.payload, 'payload - update user');
			log(state, 'state');
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		users: null,
		user: null,
		currentUser: null,
		userCount: null,
	});

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user-tv-quiz'));
		if (user) {
			dispatch({ type: 'LOGIN', payload: user });
		}
	}, []);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
