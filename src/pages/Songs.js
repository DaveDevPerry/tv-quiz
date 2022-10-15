import React, { useEffect } from 'react';
import styled from 'styled-components';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
import { useSongsContext } from '../hooks/useSongsContext';
import { FaStar } from 'react-icons/fa';
// import { useStateContext } from '../lib/context';
import { motion } from 'framer-motion';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';

const Songs = () => {
	const { songs } = useSongsContext();
	const { currentUser } = useAuthContext();

	const { dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
		// if (isMobile) {
		// 	log('is mobile');
		// } else {
		// 	log('is not mobile');
		// }
	}, [navigate, dataLoaded]);
	// const { tempCorrectIDs } = useStateContext();
	// const { levels } = useLevelsContext();
	return (
		<StyledSongs
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <h2>songs page</h2> */}

			<div className='song-total-widget br'>
				<h6>Songs Correct</h6>
				<FaStar className='star-on' />
				<h5>
					{currentUser && currentUser.correctSongIDs.length < 10
						? `0${currentUser.correctSongIDs.length}`
						: currentUser.correctSongIDs.length}{' '}
					/ {songs && songs.length < 10 ? `0${songs.length}` : songs.length}
				</h5>
			</div>

			<div className='songs-container br'>
				<ol className=''>
					{songs &&
						songs.map((song) => (
							<li key={song._id}>
								<p>{song.title}</p>
								{currentUser.correctSongIDs.includes(song._id) ? (
									<FaStar className='star-on' />
								) : (
									<FaStar className='star-off' />
								)}
							</li>
						))}
				</ol>
			</div>

			{/* <ol className='br'>
				{songs &&
					songs.map((song) => (
						<li key={song._id}>
							<p>{song.title}</p>
							<FaStar className='star-off' />
						</li>
					))}
			</ol> */}

			{/* <div className='level-select-container'>
				{levels &&
					levels.map((level) => (
						<LevelSelectButton key={level._id} level={level} />
					))}
			</div> */}
		</StyledSongs>
	);
};
const StyledSongs = styled(motion.div)`
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	padding: 1rem; */
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	flex: 1;
	max-width: 42rem;
	padding: 0.5rem 1rem;
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
	/* margin: 0 auto; */
	/* .level-select-container {
		padding: 0.5rem;
		flex: 1;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 2rem;
	} */
	h2 {
		/* color: ${({ theme }) => theme.primaryColor}; */
		text-transform: capitalize;
		text-align: center;
	}
	.song-total-widget {
		padding: 1rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		column-gap: 1rem;
		font-size: 2.5rem;
		.star-on {
			color: ${({ theme }) => theme.gold};
		}
	}
	.songs-container {
		overflow-y: auto;
		/* padding: 2rem 0; */
		/* padding: 2rem; */
		ol {
			padding: 2rem;
			/* margin-top: 2rem; */
			flex: 1;
			/* list-style:  */
			li {
				display: flex;
				/* display: list-item; */
				justify-content: space-between;
				align-items: center;
				p {
					text-transform: capitalize;
				}
				.star-off {
					/* color: ${({ theme }) => theme.bgCircle}; */
					color: ${({ theme }) => theme.tapeBase};
					/* color: ${({ theme }) => theme.bgLightGrey}; */
				}
				.star-on {
					/* color: ${({ theme }) => theme.bgCircle}; */
					color: ${({ theme }) => theme.green};
					/* color: ${({ theme }) => theme.bgLightGrey}; */
				}
			}
		}
	}
`;

export default Songs;
