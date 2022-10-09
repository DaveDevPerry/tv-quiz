import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { FaStar } from 'react-icons/fa';

const Settings = () => {
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
	// const { songs } = useSongsContext();
	// const { levels } = useLevelsContext();
	return (
		<StyledSettings
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h2>Settings page</h2>
		</StyledSettings>
	);
};
const StyledSettings = styled(motion.div)`
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
				color: ${({ theme }) => theme.borderLine};
				/* color: ${({ theme }) => theme.bgLightGrey}; */
			}
		}
	}
`;

export default Settings;
