// import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useStateContext } from '../lib/context';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { log } from '../helper';
// import { useAlbumsContext } from '../hooks/useAlbumsContext';
// import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
// import { useUsersContext } from '../hooks/useUserContext';
// import { useFavouritesContext } from '../hooks/useFavouritesContext';
// import { motion } from 'framer-motion';

const Loader = ({ theme }) => {
	// const { user } = useAuthContext();
	// const { active_user } = useUsersContext();
	// const { songs, dispatch } = useSongsContext();
	// const { albums, dispatch: albumDispatch } = useAlbumsContext();
	// const { dispatch: playlistDispatch } = usePlaylistsContext();
	// const { dispatch: favouritesDispatch } = useFavouritesContext();
	// const {
	// 	setDataLoaded,
	// 	setDefaultAnimation,
	// 	setDefaultViewMode,
	// 	setViewMode,
	// 	setMediaToDisplay,
	// } = useStateContext();

	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			// setDataLoaded(true);
			navigate('/home');
		}, 2000);
	});

	// useEffect(() => {
	// 	const fetchSongs = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/songs`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		log(json, 'json');
	// 		if (response.ok) {
	// 			dispatch({
	// 				type: 'SET_SONGS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	if (user) {
	// 		fetchSongs();
	// 	}
	// 	setTimeout(() => {
	// 		setDataLoaded(true);
	// 		setTimeout(() => {
	// 			log(songs, 'songs');
	// 			log(albums, 'albums');
	// 			navigate('/library');
	// 		}, 1000);
	// 	}, 2000);
	// }, [dispatch, user]);

	// useEffect(() => {
	// 	const fetchAlbums = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/albums`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		log(json, 'albums json');
	// 		json.reverse();
	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			albumDispatch({
	// 				type: 'SET_ALBUMS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchAlbums();
	// 	}
	// }, [albumDispatch, user]);

	// useEffect(() => {
	// 	const fetchPlaylists = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/playlists`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		log(json, 'playlists json');
	// 		// json.reverse();
	// 		if (response.ok) {
	// 			playlistDispatch({
	// 				type: 'SET_PLAYLISTS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchPlaylists();
	// 	}
	// }, [playlistDispatch, user]);
	// useEffect(() => {
	// 	const fetchFavourites = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/favourites`,
	// 			{
	// 				method: 'GET',
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		log(json, 'favourites json');
	// 		// json.reverse();
	// 		if (response.ok) {
	// 			favouritesDispatch({
	// 				type: 'SET_FAVOURITES',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchFavourites();
	// 	}
	// }, [favouritesDispatch, user]);

	// useEffect(() => {
	// 	setDefaultAnimation(active_user.defaultAnimation);
	// 	setMediaToDisplay(active_user.defaultAnimation);
	// 	setDefaultViewMode(active_user.defaultView);
	// 	setViewMode(active_user.defaultView);
	// }, [user]);

	return (
		<StyledLoader
			className='tv-loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='tv-wrapper'>
				<h1>loader</h1>
				{/* <div id='tv-signal'></div> */}
				{/* <img
					src={
						theme === 'light'
							? '/assets/tv-telly_white.webp'
							: '/assets/tv-telly_screen.webp'
					}
					alt='telly'
					id='terror-tv'
				/> */}
			</div>
		</StyledLoader>
	);
};
const StyledLoader = styled(motion.section)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.black};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 500;
	.glitch {
		font-size: 4rem;
		font-weight: 700;
		text-transform: uppercase;
		color: ${({ theme }) => theme.white};
		letter-spacing: 0.5rem;
		font-family: 'BadSignal';
		text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
			-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
			0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		animation: glitch1 2500ms infinite;
		#glitch-hyphen {
			font-family: 'Roboto';
		}
	}
	.tv-wrapper {
		position: relative;
		width: 200px;
		height: 239px;
		/* img#tv-signal {
			position: absolute;
			top: 120px;
			left: 28px;
			width: 11rem;
			height: 50px;
		} */
		/* img#terror-tv {
			position: absolute;
			top: 0;
			left: 0;
			width: 200px;
			z-index: 100000;
		} */
	}

	.tv-wrapper {
		position: relative;
		width: 200px;
		height: 239px;
		/* #tv-signal {
			position: absolute;
			top: 120px;
			left: 28px;
			width: 11rem;
			height: 50px;
			background: url('/assets/tv-signal.webp');
			background-repeat: repeat;
			background-position: 0 0;
			background-size: auto 100%;
			animation: tvSignal 500s linear infinite;
		}
		img#terror-tv {
			position: absolute;
			top: 0;
			left: 0;
			width: 200px;
			z-index: 100000;
		} */
	}
`;

export default Loader;
