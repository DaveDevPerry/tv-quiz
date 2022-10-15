import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { FaStar } from 'react-icons/fa';

const Stats = () => {
	// const { songs } = useSongsContext();
	// const { levels } = useLevelsContext();
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
		<StyledStats
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h2>stats page</h2>
		</StyledStats>
	);
};
const StyledStats = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
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

export default Stats;
