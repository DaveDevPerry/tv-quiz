import React from 'react';
import styled from 'styled-components';

const VolumeTest = () => {
	return (
		<StyledVolumeTest className='br'>
			<div className='sound-test-container'>
				<h4>Sound check</h4>
				<div className='audio-wrapper'>
					<audio
						type='audio/mpeg'
						preload='true'
						src={`./music/Brand New Toy.mp3`}
						controls
					/>
				</div>
			</div>
		</StyledVolumeTest>
	);
};
const StyledVolumeTest = styled.div`
	padding: 2rem;
	.sound-test-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		row-gap: 0.5rem;
		h4 {
			padding-left: 1rem;
			color: ${({ theme }) => theme.txtGrey};
		}
		.audio-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			audio::-webkit-media-controls-panel {
				background-color: ${({ theme }) => theme.primaryColor};
				/* color: #a0276e; */
				/* border-radius: 4px; */
			}
		}
	}
`;

export default VolumeTest;
