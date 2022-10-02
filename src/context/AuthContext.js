import { createContext, useReducer, useEffect } from 'react';

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
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
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
