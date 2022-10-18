import React from 'react';
import styled from 'styled-components';

const TVAppLinks = () => {
	return (
		<StyledTVAppLinks>
			<h5 className='sub-heading'>terrorvision apps</h5>
			<div className='tv-app-links-container'>
				<div className='tv-app-link-wrapper'>
					{/* <p>ICON</p> */}
					<img src='/terror-fi-icon.png' alt='terror-fi' />
					<div className='tv-app-link-info-wrapper'>
						<p>TERROR-Fi</p>
						<p className='description'>Stream spoilt bratz demo tapes.</p>
					</div>
				</div>
				<div className='tv-app-link-wrapper'>
					<img src='/tv-poll-icon.png' alt='tv-poll' />
					<div className='tv-app-link-info-wrapper'>
						<p>TV Poll</p>
						<p className='description'>have your say on all things tv.</p>
					</div>
				</div>
				<div className='tv-app-link-wrapper'>
					<img src='/sps-icon.png' alt='some people say' />
					<div className='tv-app-link-info-wrapper'>
						<p>Some People Say</p>
						<p className='description'>lyric library.</p>
					</div>
				</div>
				<div className='tv-app-link-wrapper'>
					<img src='/tv-quiz-icon.png' alt='terrorquizion' />
					<div className='tv-app-link-info-wrapper'>
						<p>terrorquizion</p>
						<p className='description'>guess the songs.</p>
					</div>
				</div>
			</div>
		</StyledTVAppLinks>
	);
};
const StyledTVAppLinks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	flex: 1;
	/* row-gap: 0.5rem; */
	.sub-heading {
		color: ${({ theme }) => theme.secondaryColor};
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		margin-bottom: 1rem;
		width: 100%;
	}
	.tv-app-links-container {
		display: flex;
		flex-direction: row;
		/* align-items: flex-start; */
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 1rem;
		/* border: 1px solid; */
		.tv-app-link-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			flex: 1 1 49%;
			/* flex: 1 1 48%; */
			/* border: 1px solid red; */
			column-gap: 1rem;
			img {
				height: 32px;
				width: 32px;
			}
			.tv-app-link-info-wrapper {
				display: flex;
				flex-direction: column;
				/* align-items: flex-start; */
				justify-content: flex-start;
				/* flex-wrap: wrap; */
				p {
					font-weight: bold;
					text-transform: capitalize;
					&.description {
						font-weight: lighter;
						font-style: italic;
						text-transform: unset;
					}
				}
			}
		}
	}

	a {
		text-decoration: none;
	}
`;

export default TVAppLinks;
