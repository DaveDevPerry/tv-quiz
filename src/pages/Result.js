import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { log } from '../utils/helper';

const Result = () => {
	const { gameScore } = useStateContext();

	useEffect(() => {
		log(gameScore, 'gameScore');
	}, []);
	return (
		<StyledResult>
			<h2>Game Result</h2>
		</StyledResult>
	);
};
const StyledResult = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	padding: 1rem;
	flex: 1;
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
		color: ${({ theme }) => theme.primaryColor};
		text-transform: capitalize;
		text-align: center;
	}
`;

export default Result;
