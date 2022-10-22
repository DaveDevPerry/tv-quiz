import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useGamesContext } from '../hooks/useGamesContext';
import { log } from '../utils/helper';

const AudioPlayer = ({ music, disableControls, setDisableControls }) => {
	log(music, 'music');
	const audio = useRef();

	const [currentTime, setCurrentTime] = useState(0);

	const { level } = useGamesContext();
	// const [dur, setDur] = useState(0);
	// const [disableControls, setDisableControls] = useState(false);

	useEffect(
		function () {
			// log(audio, 'audio');
			// log(currentTime, 'currentTime');
			if (currentTime > level.songLength / 1000) {
				// if (currentTime > 5) {
				audio.current.pause();
				setCurrentTime(0);
				setDisableControls(true);
			}
		},
		[currentTime]
	);
	// useEffect(function () {
	// 	setTimeout(() => {
	// 		log(audio, 'audio');
	// 	}, 2000); // Update the content of the element after 2seconds
	// }, []);

	// log(audio, 'audio');
	// function playSnippet() {
	// 	log('audio has loaded');
	// 	log(audio, 'audio has loaded');
	// 	// let audio = document.getElementById('Test_Audio');
	// 	audio.muted = false; // New browser rule doesn't lets audio play automatically
	// 	// audio.play();
	// 	setTimeout(() => {
	// 		log('audio should stop');
	// 		audio.current.pause();
	// 		audio.current.currentTime = 0; // Works as audio stop
	// 	}, 5000);
	// }
	// const startSong = () => {
	// 	log('start');
	// 	audio.current.play();
	// };
	return (
		<StyledAudioPlayer>
			{/* <audio id='Test_Audio' controls onPlay={playSnippet}> */}
			{/* <audio id='Test_Audio' controls onPlay={playSnippet} ref={audio}>
				<source src={`./music/${music.fileName}`} type='audio/mp3' />
			</audio> */}

			<audio
				className={disableControls === true ? 'disable' : ''}
				onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
				// onCanPlay={(e) => setDur(e.target.duration)}
				// onEnded={handleEnd}
				ref={audio}
				type='audio/mpeg'
				preload='true'
				src={`./music/${music}`}
				controls
				hidden
				// muted
				// loop
				autoPlay
				// onLoad={playSnippet()}
				// onLoad={startSong()}
				// onLoad={() => startSong()}
			/>
			{/* <audio
				className={disableControls === true ? 'disable' : ''}
				onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
				onCanPlay={(e) => setDur(e.target.duration)}
				// onEnded={handleEnd}
				ref={audio}
				type='audio/mpeg'
				preload='true'
				src={`./music/${music}`}
				controls
			/> */}
			{/* <audio
					onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
					onCanPlay={(e) => setDur(e.target.duration)}
					onEnded={handleEnd}
					ref={audio}
					type='audio/mpeg'
					preload='true'
					src={songslist[currentSong].fileUrl
					}
				/> */}
			{/* <audio id='Test_Audio' controls>
				<source src={`./music/${music.fileName}`} type='audio/mp3' />
			</audio> */}
			{/* <audio src={`./music/${music.fileName}`}></audio> */}
		</StyledAudioPlayer>
	);
};
const StyledAudioPlayer = styled.div`
	/* border: 1px solid; */
	/* padding: 2rem; */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	/* audio{ */
	audio::-webkit-media-controls-panel {
		background-color: ${({ theme }) => theme.primaryColor};
		/* color: #a0276e; */
		/* border-radius: 4px; */
	}
	/* } */
	.disable {
		pointer-events: none;
	}
`;

export default AudioPlayer;
