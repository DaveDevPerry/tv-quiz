import React from 'react';
import styled from 'styled-components';

const ResultWidget = ({ result }) => {
	return (
		<StyledResultWidget>
			{result && (
				<div className='result-stat-container'>
					<div className='result-stat-wrapper br'>
						<p className='figure'>
							{result && result.playedCount < 10
								? `0${result.playedCount}`
								: result.playedCount}
						</p>
						<p className='stat-name'>games played</p>
					</div>
					<div className='result-stat-wrapper br'>
						<p className='figure'>
							{result && result.songCount < 10
								? `0${result.songCount}`
								: result.songCount}
						</p>
						<p className='stat-name'>songs played</p>
					</div>
					<div className='result-stat-wrapper br'>
						<p className='figure'>
							{result && result.correctSongCount < 10
								? `0${result.correctSongCount}`
								: result.correctSongCount}
						</p>
						<p className='stat-name'>songs correct</p>
					</div>
				</div>
			)}
		</StyledResultWidget>
	);
};
const StyledResultWidget = styled.div`
	.result-stat-container {
		display: flex;
		flex-direction: row;
		/* align-items: flex-start; */
		justify-content: flex-start;
		/* flex-wrap: wrap; */
		gap: 1rem;
		.result-stat-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			/* flex-wrap: wrap; */
			/* gap: 1rem; */
			padding: 0.5rem 1rem;
			flex: 1;
			.figure {
				font-size: 3rem;
				font-weight: bolder;
			}
			.stat-name {
				font-size: 1.4rem;
				text-transform: uppercase;
				word-wrap: wrap;
				text-align: center;
			}
		}
	}
`;

export default ResultWidget;
