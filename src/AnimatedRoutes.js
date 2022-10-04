import {
	Routes,
	Route,
	useLocation,
	Navigate,
	// useNavigate,
} from 'react-router-dom';
// import AudioPlayer from './pages/AudioPlayer';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Library from './pages/Library';
import Loader from './pages/Loader';
import Home from './pages/Home';
import Game from './pages/Game';
import Songs from './pages/Songs';
import Play from './pages/Play';
import Result from './pages/Result';
// import Settings from './pages/Settings';
// import { useState } from 'react';
// import { log } from './helper';
// import { usePlaylistsContext } from './hooks/usePlaylistsContext';
// import { usePlayerContext } from './hooks/usePlayerContext';
// import Playlists from './pages/Playlists';
// import Playlist from './pages/Playlist';
// import { useStateContext } from './lib/context';
// import { useFavouritesContext } from './hooks/useFavouritesContext';

const AnimatedRoutes = ({ user, themeToggler, theme }) => {
	const location = useLocation();
	// const navigate = useNavigate();

	// const { playlists, dispatch: playlistDispatch } = usePlaylistsContext();
	// const { currentSong, playListTitle, songs list, dispatch } =
	// 	usePlayerContext();
	// const { setPlaylistToView, setViewPlaylist } = useStateContext();
	// const { favourites } = useFavouritesContext();

	// const [playlistDisplay, setPlaylistDisplay] = useState(false);
	// const [playlistFormDisplay, setPlaylistFormDisplay] = useState(false);
	// const [deletePlaylistFormDisplay, setDeletePlaylistFormDisplay] =
	// 	useState(false);

	// const handlePlaylist = (playlistId) => {
	// 	log(playlistId, 'id');
	// 	const clonedPlaylists = [...playlists];
	// 	log(clonedPlaylists, 'clonedPlaylists');
	// 	const activePlaylist = clonedPlaylists.filter(
	// 		(playlist) => playlist._id === playlistId
	// 	);
	// 	log(activePlaylist, 'active playlist');
	// 	const playListData = {
	// 		albumTracks: activePlaylist[0].songs,
	// 		playListName: activePlaylist[0].name,
	// 	};

	// 	dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
	// 	setPlaylistDisplay(false);
	// 	navigate('/player');
	// };

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Loader theme={theme} />} />
				<Route
					path='/login'
					element={!user ? <Login theme={theme} /> : <Navigate to='/' />}
				/>
				<Route
					path='/signup'
					element={!user ? <Signup theme={theme} /> : <Navigate to='/' />}
				/>
				<Route
					path='/home'
					element={
						user ? (
							<Home
								// themeToggler={themeToggler}
								theme={theme}
								// handlePlaylist={handlePlaylist}
								// handleViewPlaylist={handleViewPlaylist}
								// handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/play'
					element={
						user ? (
							<Play
								// themeToggler={themeToggler}
								theme={theme}
								// handlePlaylist={handlePlaylist}
								// handleViewPlaylist={handleViewPlaylist}
								// handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/game'
					element={
						user ? (
							<Game
								// themeToggler={themeToggler}
								theme={theme}
								// handlePlaylist={handlePlaylist}
								// handleViewPlaylist={handleViewPlaylist}
								// handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/game/result'
					element={
						user ? (
							<Result
								// themeToggler={themeToggler}
								theme={theme}
								// handlePlaylist={handlePlaylist}
								// handleViewPlaylist={handleViewPlaylist}
								// handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/songs'
					element={
						user ? (
							<Songs
								// themeToggler={themeToggler}
								theme={theme}
								// handlePlaylist={handlePlaylist}
								// handleViewPlaylist={handleViewPlaylist}
								// handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				{/* <Route
					path='/settings'
					element={
						user ? (
							<Settings themeToggler={themeToggler} theme={theme} />
						) : (
							<Navigate to='/login' />
						)
					}
				/> */}
				{/* <Route
					path='/game/playing'
					element={
						user ? (
							<Game
								// themeToggler={themeToggler}
								theme={theme}
								// handlePlaylist={handlePlaylist}
								// handleViewPlaylist={handleViewPlaylist}
								// handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/> */}
				{/* <Route
					path='/songs'
					element={
						user ? (
							<Home
								// themeToggler={themeToggler}
								theme={theme}
								// handlePlaylist={handlePlaylist}
								// handleViewPlaylist={handleViewPlaylist}
								// handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/> */}
				{/* <Route
					path='/playlists'
					element={
						user ? (
							<Playlists
								themeToggler={themeToggler}
								theme={theme}
								handleViewPlaylist={handleViewPlaylist}
								handlePlaylistFormDisplay={handlePlaylistFormDisplay}
								playlistFormDisplay={playlistFormDisplay}
								setPlaylistFormDisplay={setPlaylistFormDisplay}
								handlePlaylist={handlePlaylist}
								handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/playlists/:id'
					element={
						user ? (
							<Playlist
								themeToggler={themeToggler}
								theme={theme}
								handleDeletePlaylistFormDisplay={
									handleDeletePlaylistFormDisplay
								}
								deletePlaylistFormDisplay={deletePlaylistFormDisplay}
								setDeletePlaylistFormDisplay={setDeletePlaylistFormDisplay}
								// handlePlaylist={handlePlaylist}
								handlePlayPlaylist={handlePlayPlaylist}
								handleShufflePlayPlaylist={handleShufflePlayPlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/favourites'
					element={
						user ? (
							<Favourites
								themeToggler={themeToggler}
								theme={theme}
								setPlaylistDisplay={setPlaylistDisplay}
								handleShuffleFavourites={handleShuffleFavourites}
								// handleViewPlaylist={handleViewPlaylist}
								// handlePlaylistFormDisplay={handlePlaylistFormDisplay}
								// playlistFormDisplay={playlistFormDisplay}
								// setPlaylistFormDisplay={setPlaylistFormDisplay}
								// handlePlaylist={handlePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
	
				<Route
					path='/settings'
					element={
						user ? (
							<Settings themeToggler={themeToggler} theme={theme} />
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/player'
					element={
						user ? (
							<AudioPlayer
								themeToggler={themeToggler}
								theme={theme}
								setPlaylistDisplay={setPlaylistDisplay}
								playlistDisplay={playlistDisplay}
								handlePlaylist={handlePlaylist}
								addSongToPlaylist={addSongToPlaylist}
								handlePlaylistFormDisplay={handlePlaylistFormDisplay}
								playlistFormDisplay={playlistFormDisplay}
								setPlaylistFormDisplay={setPlaylistFormDisplay}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/> */}
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
