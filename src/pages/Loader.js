// import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { log } from '../utils/helper';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSongsContext } from '../hooks/useSongsContext';
import { useLevelsContext } from '../hooks/useLevelsContext';
import { useResultsContext } from '../hooks/useResultsContext';
import { useStateContext } from '../lib/context';
import AuthVerify from '../common/AuthVerify';
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

const Loader = () => {
	const { user, currentUser, dispatch } = useAuthContext();
	// const { active_user } = useUsersContext();
	const { dispatch: songsDispatch } = useSongsContext();
	const { dispatch: levelDispatch } = useLevelsContext();
	// const { albums, dispatch: albumDispatch } = useAlbumsContext();
	const { dispatch: resultDispatch } = useResultsContext();
	// const { dispatch: favouritesDispatch } = useFavouritesContext();
	const { setDataLoaded, setDisplayResultsModal } = useStateContext();

	const navigate = useNavigate();
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		// setDataLoaded(true);
	// 		navigate('/home');
	// 	}, 2000);
	// });

	useEffect(() => {
		const fetchSongs = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/songs`,
				{
					headers: {
						// Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			// log(user, 'user');
			// log(json, 'json');
			if (response.ok) {
				songsDispatch({
					type: 'SET_SONGS',
					payload: json,
				});
			}
		};
		if (user) {
			fetchSongs();
		}
		setTimeout(() => {
			setDataLoaded(true);
			setTimeout(() => {
				// log(songs, 'songs');
				// log(albums, 'albums');
				navigate('/home');
			}, 1000);
		}, 1000);
	}, [dispatch, user]);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/user`
				// ,
				// {
				// 	headers: {
				// 		Authorization: `Bearer ${user.token}`,
				// 	},
				// }
			);
			const json = await response.json();
			log(user, 'user');
			log(json, 'json user');

			const userCount = json.length;

			const clonedForUserRanking = [...json];
			// const completedSongOrder = clonedForUserRanking.sort((a, b) => {
			// 	return a.correctSongIDs.length - b.correctSongIDs.length;
			// });
			const completedSongOrder = clonedForUserRanking.sort((a, b) => {
				return b.correctSongIDs.length - a.correctSongIDs.length;
			});

			const clonedUsers = [...json];
			const getUser = clonedUsers.find((obj) => obj.email === user.email);
			// const getUser = json.find((obj) => obj.email === user.email);

			log(getUser, 'get user');

			if (response.ok) {
				dispatch({
					type: 'SET_USERS',
					payload: completedSongOrder,
				});
				dispatch({
					type: 'SET_USER',
					payload: getUser,
				});
				dispatch({
					type: 'SET_USER_COUNT',
					payload: userCount,
				});
			}
			// if (response.ok) {
			// 	dispatch({
			// 		type: 'SET_USER',
			// 		payload: getUser,
			// 	});
			// }
		};
		if (user) {
			fetchUsers();
		}
		// setTimeout(() => {
		// 	// setDataLoaded(true);
		// 	setTimeout(() => {
		// 		// log(songs, 'songs');
		// 		// log(albums, 'albums');
		// 		navigate('/home');
		// 	}, 1000);
		// }, 2000);
	}, [dispatch, user]);

	useEffect(() => {
		const fetchLevels = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/levels`
				// {
				// 	headers: {
				// 		Authorization: `Bearer ${user.token}`,
				// 	},
				// }
			);
			const json = await response.json();
			log(json, 'albums json');

			const allLevelsCorrectSongs = [];

			json.forEach((level) => {
				const clonedSongs = [...level.songs];
				log(clonedSongs, 'cloned songs');
				const correctSongsInLevel = clonedSongs.filter((song) => {
					return currentUser && currentUser.correctSongIDs.includes(song._id);
				});
				log(correctSongsInLevel, 'correctSongsInLevel');
				allLevelsCorrectSongs.push(correctSongsInLevel);
				log(allLevelsCorrectSongs, 'all levels correct songs');
			});
			// json.reverse();
			if (response.ok) {
				// setWorkouts(json);
				levelDispatch({
					type: 'SET_LEVELS',
					payload: json,
				});
				levelDispatch({
					type: 'SET_SONGS_IN_LEVELS',
					payload: allLevelsCorrectSongs,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchLevels();
		}
	}, [levelDispatch, currentUser]);

	useEffect(() => {
		const fetchResults = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/results`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			log(json, 'results json');

			// log(currentUser && currentUser, 'current user in results');

			// log(currentUser && currentUser._id, 'user id');
			// const userResult = json.find(
			// 	(obj) => obj.user_id === currentUser && currentUser._id
			// );
			// log(userResult && userResult, 'userResult');
			// log(user._id, 'user id')
			// const userResult = json.find((obj) => obj.user_id === user._id);
			// log(userResult, 'userResult');
			// json.reverse();
			if (response.ok) {
				resultDispatch({
					type: 'SET_RESULTS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchResults();
		}
	}, [resultDispatch, user]);

	useEffect(() => {
		setDisplayResultsModal(false);
	}, []);
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

	// const pageRef = useRef();

	// const flipLetter = (i) => {
	// 	setTimeout(() => {
	// 		document.querySelector(`[data-order='${i}']`).classList.add('visible');
	// 	}, 300 * i);
	// };

	// const jumpLetter = (i) => {
	// 	setTimeout(() => {
	// 		document.querySelector(`[data-jump='${i}']`).classList.add('jump');
	// 	}, 100 * i);
	// };

	// const rotateContainer = () => {
	// 	document.querySelector('.load-screen').classList.add('rotate');
	// };

	// useEffect(() => {
	// 	for (let i = 1; i <= 9; i++) {
	// 		flipLetter(i);
	// 	}
	// 	setTimeout(() => {
	// 		document.querySelector('.loader-text').classList.add('display');
	// 	}, 1000);
	// 	setTimeout(() => {
	// 		for (let i = 1; i <= 6; i++) {
	// 			jumpLetter(i);
	// 		}
	// 	}, 3200);
	// 	setTimeout(() => {
	// 		rotateContainer();
	// 	}, 4800);
	// }, []);

	return (
		<StyledLoader
			// ref={pageRef}
			className='tv-loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <div className='tv-wrapper'> */}
			{/* <div className='loader-grid'>
				<div className='loader-letters span-two' data-order='9' data-pop>
					<div className='loader-letter-back loader-letter'>e</div>
					<div className='loader-letter-front loader-letter'>F</div>
				</div>
				<div className='loader-letters span-two' data-order='4' data-pop>
					<div className='loader-letter-back loader-letter'>e</div>
					<div className='loader-letter-front loader-letter'>U</div>
				</div>
				<div className='loader-letters span-two' data-order='2' data-pop>
					<div className='loader-letter-back loader-letter'>n</div>
					<div className='loader-letter-front loader-letter'>n</div>
				</div>
				<div className='loader-letters' data-order='8' data-jump='1'>
					<div className='loader-letter-back loader-letter'>u</div>
					<div className='loader-letter-front loader-letter'>j</div>
				</div>
				<div className='loader-letters' data-order='7' data-jump='2'>
					<div className='loader-letter-back loader-letter'>b</div>
					<div className='loader-letter-front loader-letter'>U</div>
				</div>
				<div className='loader-letters' data-order='5' data-jump='3'>
					<div className='loader-letter-back loader-letter'>m</div>
					<div className='loader-letter-front loader-letter'>m</div>
				</div>
				<div className='loader-letters' data-order='6' data-jump='4'>
					<div className='loader-letter-back loader-letter'>l</div>
					<div className='loader-letter-front loader-letter'>b</div>
				</div>
				<div className='loader-letters' data-order='1' data-jump='5'>
					<div className='loader-letter-back loader-letter'>u</div>
					<div className='loader-letter-front loader-letter'>l</div>
				</div>
				<div className='loader-letters' data-order='3' data-jump='6'>
					<div className='loader-letter-back loader-letter'>j</div>
					<div className='loader-letter-front loader-letter'>e</div>
				</div>
			</div> */}
			{/* </div> */}
			<div className='tv-wrapper'>
				<h1>
					TERROR
					<span>
						<strong>QUIZ</strong>
					</span>
					ION
				</h1>
			</div>
			<AuthVerify />
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
	background-color: ${({ theme }) => theme.primaryColor};
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 500;

	.tv-wrapper {
		h1 {
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 4rem;
			font-family: 'Signika', sans-serif;
			font-weight: lighter;
			span {
				color: ${({ theme }) => theme.green};
				font-weight: bolder;
				font-size: 4.4rem;
			}
		}
	}
`;

export default Loader;
