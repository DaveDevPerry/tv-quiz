import React, { useEffect } from 'react';
import styled from 'styled-components';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
import { FaStar } from 'react-icons/fa';
// import { useStateContext } from '../lib/context';
import { motion } from 'framer-motion';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useLevelsContext } from '../hooks/useLevelsContext';
import CategorySongsTableMobile from '../components/mobile/CategorySongsTableMobile';
import CategorySongsTable from '../components/CategorySongsTable';
import { useViewport } from '../hooks/useViewport';

const Category = () => {
	// const { categorySongs } = useSongsContext();
	// const { currentUser } = useAuthContext();
	const { level, songsInLevel } = useLevelsContext();
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
		<StyledCategory
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h2>{level && level.category}</h2>

			<div className='song-total-widget br'>
				<h6>Songs Correct</h6>
				<FaStar className='star-on' />
				<h5>
					{songsInLevel && songsInLevel.length < 10
						? `0${songsInLevel.length}`
						: songsInLevel.length}{' '}
					/{' '}
					{level && level.songs.length < 10
						? `0${level.songs.length}`
						: level.songs.length}
				</h5>
			</div>

			{width < breakpoint ? (
				<CategorySongsTableMobile />
			) : (
				<CategorySongsTable />
			)}

			{/* <ol className='br'>
				{level &&
					level.songs
						.sort((a, b) => {
							return a.title > b.title ? 1 : -1;
						})
						.map((song) => (
							<li key={song._id}>
								<p>{song.title}</p>
								{currentUser.correctSongIDs.includes(song._id) ? (
									<FaStar className='star-on' />
								) : (
									<FaStar className='star-off' />
								)}
							</li>
						))}
			</ol> */}
		</StyledCategory>
	);
};
const StyledCategory = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	/* padding: 0.5rem; */
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	padding: 0.5rem 1rem;
	overflow-y: hidden;
	/* overflow-y: scroll; */
	/* overflow: hidden; */
	z-index: 1;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	margin-bottom: 1rem;
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
	/* ol {
		padding: 2rem;

		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			p {
				text-transform: capitalize;
			}
			.star-off {
				color: ${({ theme }) => theme.tapeBase};
			}
			.star-on {
				color: ${({ theme }) => theme.green};
			}
		}
	} */
`;

export default Category;
