import React from 'react';
import styled from 'styled-components';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
import { useSongsContext } from '../hooks/useSongsContext';
import { FaStar } from 'react-icons/fa';
import { useStateContext } from '../lib/context';

const Songs = () => {
	const { songs } = useSongsContext();
	const { tempCorrectIDs } = useStateContext();
	// const { levels } = useLevelsContext();
	return (
		<StyledSongs>
			<h2>songs page</h2>

			<ol className='br'>
				{songs &&
					songs.map((song) => (
						<li key={song._id}>
							<p>{song.title}</p>
							{tempCorrectIDs.includes(song._id) ? (
								<FaStar className='star-on' />
							) : (
								<FaStar className='star-off' />
							)}
						</li>
					))}
			</ol>
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
const StyledSongs = styled.div`
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
	ol {
		padding: 2rem;
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
`;

export default Songs;
