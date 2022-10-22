import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { log } from '../utils/helper';
import { useSongsContext } from '../hooks/useSongsContext';
// import { CgCloseR } from 'react-icons/cg';
// import { useBandsContext } from '../hooks/useBandsContext';

const GameFormSongs = ({
	setDisplay,
	display,
	setTitle,
	setSongID,
	emptyFields,
	setCreateNewAnswer,
	search,
	setSearch,
}) => {
	const { user } = useAuthContext();
	const { songs } = useSongsContext();
	// const [display, setDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	// const [search, setSearch] = useState('');
	const wrapperRef = useRef(null);

	useEffect(() => {
		const fetchAllSongs = async () => {
			// const response = await fetch(
			// 	`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
			// 	{
			// 		headers: {
			// 			Authorization: `Bearer ${user.token}`,
			// 		},
			// 	}
			// );
			// const json = await response.json();
			const clonedSongs = [...songs];
			const sortedSongs = clonedSongs.sort((a, b) => {
				return a.title > b.title ? 1 : -1;
			});

			if (sortedSongs) {
				setOptions(sortedSongs);
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchAllSongs();
		}
	}, []);

	// sets event listeners
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	};

	const setSongDex = (poke, songID) => {
		log(poke, 'poke setSongDex');
		setSearch(poke);
		setTitle(poke);
		setSongID(songID);
		setCreateNewAnswer(false);
		setDisplay(false);
	};

	return (
		<StyledGameFormSongs className='search-container' ref={wrapperRef}>
			<input
				id='auto'
				onClick={() => setDisplay(!display)}
				className={emptyFields.includes('title') ? 'error' : ''}
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
					setTitle(event.target.value);
				}}
				autoComplete='off'
				required
			/>
			{/* <div className='scroll-container'> */}
			{display && (
				<div className='autoContainer'>
					{options
						.filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
						.map((v, i) => {
							return (
								<div
									key={i}
									className='option'
									onClick={() => setSongDex(v.title, v._id)}
								>
									<span>{v.title}</span>
								</div>
							);
						})}
				</div>
			)}
			{/* </div> */}
			{/* {display && (
				<div className='autoContainer'>
					{options
						.filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
						.map((v, i) => {
							return (
								<div
									key={i}
									className='option'
									onClick={() => setSongDex(v.title, v._id)}
								>
									<span>{v.title}</span>
								</div>
							);
						})}
				</div>
			)} */}
		</StyledGameFormSongs>
	);
};
const StyledGameFormSongs = styled.div`
	position: relative;
	#auto {
		&:focus {
			border: 1px solid ${({ theme }) => theme.primaryColor};
		}
	}
	/* .scroll-container {
		overflow-y: hidden;
		border: 1px solid black; */

	.autoContainer {
		position: absolute;
		background-color: ${({ theme }) => theme.white};
		z-index: 500;
		width: 100%;
		padding: 0 1rem;
		left: 0;
		border: 1px solid ${({ theme }) => theme.primaryColor};
		/* overflow-y: hidden; */
		.option {
			padding: 0.3rem 0;
		}
		/* .scroll-container {
			overflow-y: scroll;
			.option {
				padding: 0.3rem 0;
			}
		} */
	}
	/* } */
	/* .autoContainer {
		position: absolute;
		background-color: ${({ theme }) => theme.white};
		z-index: 500;
		width: 100%;
		padding: 0 1rem;
		left: 0;
		border: 1px solid ${({ theme }) => theme.primaryColor};
		.option {
			padding: 0.3rem 0;
		}
	} */
`;

export default GameFormSongs;
