import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStateContext } from '../lib/context';
import { useViewport } from '../hooks/useViewport';

import SongsTable from '../components/SongsTable';
import SongsTableMobile from '../components/SongsTableMobile';

const Songs = () => {
	const { dataLoaded } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledSongs
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{width < breakpoint ? <SongsTableMobile /> : <SongsTable />}
		</StyledSongs>
	);
};
const StyledSongs = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	max-width: 80rem;
	padding: 0.5rem 1rem;
	/* overflow-y: hidden; */
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	h2 {
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
`;

export default Songs;
