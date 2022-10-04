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

	const setSongDex = (poke) => {
		log(poke, 'poke setSongDex');
		setSearch(poke);
		setTitle(poke);
		setCreateNewAnswer(false);
		setDisplay(false);
	};

	return (
		<StyledGameFormSongs className='search-container' ref={wrapperRef}>
			<input
				id='auto'
				onClick={() => setDisplay(!display)}
				className={emptyFields.includes('title') ? 'error' : ''}
				autoFocus
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
					setTitle(event.target.value);
				}}
				autoComplete='off'
				required
			/>
			{/* {display && search && ( */}
			{display && (
				<div className='autoContainer'>
					{options
						.filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
						.map((v, i) => {
							return (
								<div
									key={i}
									className='option'
									onClick={() => setSongDex(v.title)}
								>
									<span>{v.title}</span>
								</div>
							);
						})}
				</div>
			)}
		</StyledGameFormSongs>
	);
};
const StyledGameFormSongs = styled.div`
	position: relative;
	.autoContainer {
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
	}
`;

export default GameFormSongs;
