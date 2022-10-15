import { useState } from 'react';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { CgCloseR } from 'react-icons/cg';
// import { useBandsContext } from '../hooks/useBandsContext';
// import GigFormBands from './GigFormBands';
// import { useCitiesContext } from '../hooks/useCitiesContext';
// import { useVenuesContext } from '../hooks/useVenuesContext';
// import GigFormCities from './GigFormCities';
// import GigFormVenues from './GigFormVenues';
import { log } from '../utils/helper';
// import GigFormSupportBands from './GigFormSupportBands';
// import toast from 'react-hot-toast';
import GameFormSongs from './GameFormSongs';
// import { motion } from 'framer-motion';

// const Auto = ({
// 	setDisplay,
// 	display,
// 	setTitle,
// 	emptyFields,
// 	setCreateNewAnswer,
// }) => {
// 	const { user } = useAuthContext();
// 	// const [display, setDisplay] = useState(false);
// 	const [options, setOptions] = useState([]);
// 	const [search, setSearch] = useState('');
// 	const wrapperRef = useRef(null);

// 	useEffect(() => {
// 		const fetchAllBands = async () => {
// 			const response = await fetch(
// 				`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
// 				{
// 					headers: {
// 						Authorization: `Bearer ${user.token}`,
// 					},
// 				}
// 			);
// 			const json = await response.json();
// 			if (response.ok) {
// 				setOptions(json);
// 			}
// 		};
// 		// if we have a value for the user then fetch the workouts
// 		if (user) {
// 			fetchAllBands();
// 		}
// 	}, []);

// 	// sets event listeners
// 	useEffect(() => {
// 		document.addEventListener('mousedown', handleClickOutside);
// 		return () => {
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, []);

// 	const handleClickOutside = (event) => {
// 		const { current: wrap } = wrapperRef;
// 		if (wrap && !wrap.contains(event.target)) {
// 			setDisplay(false);
// 		}
// 	};

// 	const setBandDex = (poke) => {
// 		log(poke, 'poke setBandDex');
// 		setSearch(poke);
// 		setTitle(poke);
// 		setCreateNewAnswer(false);
// 		setDisplay(false);
// 	};

// 	return (
// 		<div className='search-container' ref={wrapperRef}>
// 			<input
// 				id='auto'
// 				onClick={() => setDisplay(!display)}
// 				className={emptyFields.includes('title') ? 'error' : ''}
// 				autoFocus
// 				value={search}
// 				onChange={(event) => {
// 					setSearch(event.target.value);
// 					setTitle(event.target.value);
// 				}}
// 				autoComplete='off'
// 			/>
// 			{display && (
// 				<div className='autoContainer'>
// 					{options
// 						.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
// 						.map((v, i) => {
// 							return (
// 								<div
// 									key={i}
// 									className='option'
// 									onClick={() => setBandDex(v.name)}
// 								>
// 									<span>{v.name}</span>
// 								</div>
// 							);
// 						})}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

const GameForm = ({
	handleAnswerOptionClick,
	title,
	setTitle,
	setSongID,
	songID,
	// search,
	// setSearch,
}) => {
	// const navigate = useNavigate();

	// const { dispatch } = useGigsContext();
	// const { dispatch: bandDispatch } = useBandsContext();

	const { user } = useAuthContext();

	const [createNewAnswer, setCreateNewAnswer] = useState(true);
	const [display, setDisplay] = useState(false);
	// const [title, setTitle] = useState('');
	const [search, setSearch] = useState('');
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError('You must be logged in');
			return;
		}
		// check if new band and action
		if (createNewAnswer === false) {
			log('new gig, existing band');
		}
		if (createNewAnswer === true) {
			log('new gig, create new band');
		}
		// log('new band added, now adding gig');
		// const handleClose = () => {
		// 	navigate('/home');
		// 	// setIsFormActive(!isFormActive);
		// };
		// }

		// const answerGiven = {
		// 	title,
		// };
		// log(gig, 'gig post submit');

		// const response = await fetch(
		// 	`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
		// 	{
		// 		method: 'POST',
		// 		body: JSON.stringify(gig),
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: `Bearer ${user.token}`,
		// 		},
		// 	}
		// );
		// const json = await response.json();

		// log(json, 'json in form post submit');

		// if (!response.ok) {
		// 	setError(json.error);
		// 	setEmptyFields(json.emptyFields);
		// }
		// if (response.ok) {
		// 	// setNewWeight('');
		// 	setVenue('');
		// 	setCity('');
		// 	setTitle('');
		// 	setSupport_band('');
		// 	setGig_date('');
		// 	setGig_details('');
		// 	setIsFestival(false);
		// 	// setGig_details('');
		// 	// setReps('');
		// 	setError(null);
		// 	setEmptyFields([]);
		// 	log('new gig added', json);
		// 	dispatch({ type: 'CREATE_GIG', payload: json });
		// }
		// setIsFormActive(!isFormActive);
		setEmptyFields([]);
		handleAnswerOptionClick(title, songID);
		// handleAnswerOptionClick(title);

		setSearch('');

		// setTitle('');
		// notify();
		// navigate('/home');
	};

	// create a toast
	// const notify = () => {
	// 	toast.success(`${title} gig successfully added.`, {
	// 		duration: 5000,
	// 		style: {
	// 			border: '2px solid #1da000',
	// 		},
	// 	});
	// };

	return (
		<StyledForm className='create' onSubmit={handleSubmit}>
			{/* <StyledForm className='create' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}> */}
			{/* <StyledForm className='create' onSubmit={handleAnswerOptionClick}> */}
			<div className='input-wrapper-band'>
				<label>
					answer:
					{/* <span className='field-required'>*</span> */}
				</label>
				<GameFormSongs
					setDisplay={setDisplay}
					display={display}
					setTitle={setTitle}
					setSongID={setSongID}
					title={title}
					emptyFields={emptyFields}
					setCreateNewAnswer={setCreateNewAnswer}
					search={search}
					setSearch={setSearch}
				/>
			</div>

			<div className='btn-container'>
				{error && <div className='error'>{error}</div>}
				<button className='add-btn'>SUBMIT</button>
			</div>
		</StyledForm>
	);
};
const StyledForm = styled.form`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem;
	/* padding: 1rem 2rem 2rem 2rem; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	/* row-gap: 1rem; */
	flex: 1;
	p.form-title {
		padding: 0 2rem;
		border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
		margin-bottom: 0.5rem;
		font-size: 1.6rem;
		text-align: center;
		margin-top: 1rem;
	}
	h3 {
		text-align: center;
		margin: 0;
		position: relative;
		color: ${({ theme }) => theme.secondaryColor};
		/* color: ${({ theme }) => theme.txtDarkGrey}; */
		.close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.txtDarkGrey};
			cursor: pointer;
		}
	}
	.small-input-wrappers {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 0.5rem;
		margin-top: 0.5rem;
		.input-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			label {
				font-size: 1.6rem;
				text-align: right;
				color: ${({ theme }) => theme.txtDarkGrey};
				font-weight: bold;
			}

			input[type='checkbox'] {
				/* ...existing styles */
				display: grid;
				place-content: center;
				/* margin: 0; */
				/* font-size: 1.8rem; */
				color: ${({ theme }) => theme.black};
				width: 3rem;
				height: 3rem;
				/* width: 4.2rem;
				height: 4.2rem; */
				/* border: 2px solid ${({ theme }) => theme.borderGrey}; */
				border-radius: 4px;

				appearance: none;
				background-color: transparent;
				margin: 0;
				font: inherit;
				/* color: currentColor; */
				/* width: 1.15em; */
				/* height: 1.15em; */
				/* border: 0.15em solid currentColor; */
				/* border-radius: 0.15em; */
				transform: translateY(-0.075em);
			}

			input[type='checkbox']::before {
				content: '';
				width: 1em;
				height: 1em;
				transform: scale(0);
				transition: 120ms transform ease-in-out;
				box-shadow: inset 1em 1em ${({ theme }) => theme.primaryColor};
			}

			input[type='checkbox']:checked::before {
				transform: scale(1);
			}
		}
		.input-wrapper-date {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			label {
				font-size: 1.6rem;
				text-align: right;
				color: ${({ theme }) => theme.txtDarkGrey};
				font-weight: bold;
			}
			#input-date {
				padding: 0.8rem 0.5rem;
				margin: 0;
				font-size: 1.8rem;
				color: ${({ theme }) => theme.black};
				flex: 1;
			}
		}
	}

	.input-wrapper-band {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* align-items: center; */
		/* row-gap: 0.5rem; */
		label {
			font-size: 1.6rem;
			text-align: left;
			flex: 1;
			text-transform: capitalize;
			color: ${({ theme }) => theme.txtDarkGrey};
			font-weight: bold;
		}
		#auto {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			/* color: ${({ theme }) => theme.black}; */
			flex: 1;
		}
		#input-number {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.black};
			flex: 1;
		}
		textarea {
			border: 2px solid ${({ theme }) => theme.borderGrey};
			border-radius: 4px;
			padding: 10px;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.black};
			font-family: 'Arial';
			&:focus {
				outline: none;
				border: none;
				border: 2px solid ${({ theme }) => theme.primaryColor};
				border-radius: 4px;
				box-sizing: border-box;
			}
		}
	}
	.btn-container {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		flex: 1;
		justify-content: flex-end;
		.add-btn {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bolder;
			text-transform: uppercase;
			font-size: 1.6rem;
		}
	}
`;

export default GameForm;
