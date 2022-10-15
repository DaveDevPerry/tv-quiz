import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const ResultsContext = createContext();

export const resultsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_RESULTS':
			return {
				...state,
				results: action.payload,
			};

		case 'SET_RESULT':
			log(action.payload, 'action payload result');

			return {
				// results: state,
				// result: action.payload,
				...state,
				result: action.payload,
			};

		case 'CREATE_RESULT':
			log(state, 'current result state');
			log(action.payload, 'new result');
			log([action.payload, ...state.results], 'new result array');
			return {
				...state,
				results: [action.payload, ...state.results],
			};
		case 'UPDATE_RESULT':
			log(action.payload, 'result context');
			log(state, 'state, update result');
			return {
				// results: [...state]
				// ...state,
				// results: action.payload,
			};
		// return {
		// 	users: state.users.filter((user) => user._id === action.payload._id),
		// };
		case 'DELETE_RESULT':
			log(action.payload, 'delete result context');
			log(state, 'state, delete result');
			log(
				state.results.filter((result) => result._id !== action.payload._id),
				'test'
			);
			return {
				// users: state.users.filter((user) => user._id === action.payload._id),
				results: state.results.filter(
					(result) => result._id !== action.payload._id
				),
			};

		default:
			return state;
	}
};
// children represents everything the ResultsContextProvider wraps
export const ResultsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(resultsReducer, {
		results: null,
		result: null,
	});

	return (
		<ResultsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ResultsContext.Provider>
	);
};
