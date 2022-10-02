import React from 'react';
import styled from 'styled-components';

const AudioPlayer = ({ music }) => {
	return (
		<StyledAudioPlayer>
			<audio id='Test_Audio' controls>
				<source src={`./music/${music.fileName}`} type='audio/mp3' />
			</audio>
			{/* <audio src={`./music/${music.fileName}`}></audio> */}
		</StyledAudioPlayer>
	);
};
const StyledAudioPlayer = styled.div`
	border: 1px solid;
	padding: 2rem;
`;

export default AudioPlayer;
