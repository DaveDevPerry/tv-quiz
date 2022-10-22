// import { useStateContext } from '../lib/context';
import { useStateContext } from '../lib/context';
import { useAuthContext } from './useAuthContext';
import { useGamesContext } from './useGamesContext';
import { useLevelsContext } from './useLevelsContext';
import { useResultsContext } from './useResultsContext';
// import { usePlaylistsContext } from './usePlaylistsContext';
// import { usePlayerContext } from './usePlayerContext';
import { useSongsContext } from './useSongsContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: songsDispatch } = useSongsContext();
	const { dispatch: levelsDispatch } = useLevelsContext();
	const { dispatch: resultsDispatch } = useResultsContext();
	const { dispatch: gamesDispatch } = useGamesContext();
	// const { dispatch: playlistsDispatch } = usePlaylistsContext();
	// const {dispatch: playerDispatch} = usePlayerContext()

	const { setDataLoaded, setGameScore, setGameResults, setRankSuffix } =
		useStateContext();

	const logout = () => {
		// remove user from storage
		localStorage.removeItem('user-tv-quiz');

		// dispatch a logout action - no payload needed
		dispatch({ type: 'LOGOUT' });

		// clears global workout state so we don't see flash of last user workouts
		songsDispatch(
			{ type: 'SET_SONGS', payload: null },
			{ type: 'SET_SONG', payload: null }
		);
		levelsDispatch({ type: 'SET_LEVELS', payload: null });
		levelsDispatch({ type: 'SET_LEVEL', payload: null });
		levelsDispatch({ type: 'SET_SONGS_IN_LEVELS', payload: null });
		levelsDispatch({ type: 'SET_SONGS_IN_LEVEL', payload: null });
		gamesDispatch({ type: 'CLEAR_GAME_DATA', payload: null });
		// levelsDispatch(
		// 	{ type: 'SET_LEVELS', payload: null },
		// 	{ type: 'SET_LEVEL', payload: null },
		// 	{ type: 'SET_SONGS_IN_LEVELS', payload: null },
		// 	{ type: 'SET_SONGS_IN_LEVEL', payload: null }
		// );
		resultsDispatch({ type: 'SET_RESULTS', payload: null });
		resultsDispatch({ type: 'SET_RESULT', payload: null });

		setDataLoaded(false);
		setGameScore(null);
		setGameResults([]);
		setRankSuffix('');
		// playlistsDispatch(
		// 	{ type: 'SET_PLAYLISTS', payload: null },
		// 	{ type: 'SET_PLAYLIST', payload: null }
		// );
		// playerDispatch({})
	};

	return { logout };
};
