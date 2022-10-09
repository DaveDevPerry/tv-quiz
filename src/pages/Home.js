import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import CategoryStatCard from '../components/CategoryStatCard';
// import CategoryStatWidget from '../components/CategoryStatWidget';
// import ProgressBarWidget from '../components/ProgressBarWidget';
import { useAuthContext } from '../hooks/useAuthContext';
// import LevelSelectButton from '../components/LevelSelectButton';
import { useLevelsContext } from '../hooks/useLevelsContext';
import { useSongsContext } from '../hooks/useSongsContext';
import { FaStar } from 'react-icons/fa';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const { songs } = useSongsContext();
	const { currentUser, userCount, users } = useAuthContext();
	const { levels } = useLevelsContext();

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

	return (
		<StyledHome
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h2>home page</h2>

			<p>this page contains basic player stats. eg</p>
			<ol>
				<li>welcome msg</li>
				<li>show user</li>
				{/* <li>total players</li>
				<li>current rank</li> */}
				{/* <li>welcome msg</li>
				<li>show user</li>
				<li>total players</li>
				<li>current rank</li> */}
			</ol>

			<div className='song-total-widget br'>
				<h6>Player Rank</h6>
				<FaStar className='star-on' />
				<h5>
					{users &&
					users.findIndex((object) => {
						return object._id === currentUser._id;
					}) +
						1 <
						10
						? `0${
								users.findIndex((object) => {
									return object._id === currentUser._id;
								}) + 1
						  }`
						: users.findIndex((object) => {
								return object._id === currentUser._id;
						  }) + 1}{' '}
					/ {userCount && userCount < 10 ? `0${userCount}` : userCount}
				</h5>
				<h6>2nd</h6>
			</div>
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

			{/* <div>
				<ProgressBarWidget
					percentage={(
						(currentUser.correctSongIDs.length / songs.length) *
						100
					).toFixed()}
				/>
			</div> */}

			{/* <div className='category-widget-container'>
				{levels &&
					levels.map((level) => (
						<CategoryStatWidget key={level._id} level={level} />
					))}
			</div> */}
			<div className='category-card-container'>
				{/* <div className='level-select-container br'> */}
				{levels &&
					levels.map((level) => (
						<CategoryStatCard key={level._id} level={level} />
					))}
				{/* <LevelSelectButton key={level._id} level={level} /> */}
			</div>

			{/* <ul>
				<li>SONGS</li>
				{songs && songs.map((song) => <li key={song._id}>{song.title}</li>)}
			</ul> */}

			{/* <div className='level-select-container br'>
				{levels &&
					levels.map((level) => (
						<LevelSelectButton key={level._id} level={level} />
					))}
			</div> */}
		</StyledHome>
	);
};
const StyledHome = styled(motion.div)`
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
	margin: 0 auto;
	h2 {
		/* color: ${({ theme }) => theme.primaryColor}; */
		text-transform: capitalize;
		text-align: center;
	}
	ol {
		list-style: disc;
		li {
			display: list-item;
			/* padding-left: 2rem; */
			margin-left: 2rem;
		}
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
	.category-widget-container {
		padding: 0.5rem;
		flex: 1;
		/* border: 1px solid black; */
		display: flex;
		flex-direction: column;
		/* align-items: stretch; */
		justify-content: flex-start;
		justify-content: flex-start;
		row-gap: 1rem;
		/* width: 100%; */
		overflow-y: scroll;
	}
	.category-card-container {
		padding: 0.5rem;
		/* flex: 1; */
		flex-wrap: wrap;
		/* border: 1px solid black; */
		display: flex;
		flex-direction: row;
		/* align-items: stretch; */
		justify-content: flex-start;
		/* justify-content: flex-start; */
		gap: 2rem;
		/* width: 100%; */
		/* overflow-y: scroll; */
	}
`;

export default Home;
