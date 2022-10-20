import React, { useEffect } from 'react';
import styled from 'styled-components';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { FaStar } from 'react-icons/fa';
// import { useStateContext } from '../lib/context';
import { motion } from 'framer-motion';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import CorrectSongCard from '../components/CorrectSongCard';
import SongsTable from '../components/SongsTable';
import SongsTableMobile from '../components/SongsTableMobile';
import { useViewport } from '../hooks/useViewport';

const Songs = () => {
	// const { songs } = useSongsContext();
	// const { currentUser } = useAuthContext();

	const { dataLoaded } = useStateContext();

	const { width } = useViewport();
	const breakpoint = 620;

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

			<CorrectSongCard />

			{/* <div className='song-total-widget br'>
				<h6>Songs Correct</h6>
				<FaStar className='star-on' />
				<h5>
					{currentUser && currentUser.correctSongIDs.length < 10
						? `0${currentUser.correctSongIDs.length}`
						: currentUser.correctSongIDs.length}{' '}
					/ {songs && songs.length < 10 ? `0${songs.length}` : songs.length}
				</h5>
			</div> */}

			{/* <div className='songs-container br'>
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
			</div> */}
			{/* <div className='table-wrapper'> */}
			{width < breakpoint ? <SongsTableMobile /> : <SongsTable />}
			{/* </div> */}

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
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	/* padding: 0.5rem; */
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	padding: 0.5rem 1rem;
	/* overflow-y: hidden; */
	overflow-y: auto;
	/* overflow-y: scroll; */
	/* overflow: hidden; */
	z-index: 1;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
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
	/* .table-wrapper {
		border: 1px solid;
		flex: 1;
		overflow-y: hidden;
	} */
`;

export default Songs;
