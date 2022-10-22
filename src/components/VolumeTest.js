import React, { useRef, useState } from 'react';
import styled from 'styled-components';
// import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useStateContext } from '../lib/context';
import { GoUnmute } from 'react-icons/go';

const VolumeTest = () => {
	const { playing, setPlaying } = useStateContext();
	const audio = useRef();

	const [stateVolume, setStateVolume] = useState(0.3);
	// const [dur, setDur] = useState(0);
	// const [currentTime, setCurrentTime] = useState(0);
	// const fmtMSS = (s) => {
	// 	return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
	// };
	// const toggleAudio = () =>
	// 	audio.current.paused ? audio.current.play() : audio.current.pause();

	const handleVolume = (q) => {
		setStateVolume(q);
		audio.current.volume = q;
	};

	// const toggleAudio = () =>
	// 	audio.current.paused ? audio.current.play() : audio.current.pause();
	// const handleEnd = () => {
	// 	// Check for random and repeat options
	// 	if (random) {
	// 		return dispatch({
	// 			type: 'SET_CURRENT_SONG',
	// 			data: ~~(Math.random() * songslist.length),
	// 		});
	// 	} else {
	// 		if (repeat) {
	// 			nextSong();
	// 		} else if (currentSong === songslist.length - 1) {
	// 			return;
	// 		} else {
	// 			nextSong();
	// 		}
	// 	}
	// };

	const togglePlay = () => {
		if (playing === false) {
			audio.current.play();
			setPlaying(true);
			// return
		} else {
			audio.current.pause();
			setPlaying(false);
		}
	};
	return (
		// <StyledVolumeTest>
		<StyledVolumeTest className='br'>
			<div className='sound-test-container'>
				<h3>Sound check</h3>

				<div className='musicControls'>
					<audio
						type='audio/mpeg'
						preload='true'
						src={`./music/Brand New Toy.mp3`}
						ref={audio}
						// onEnded={handleEnd}
						loop
					/>
					<span
						className='play'
						onClick={() => {
							togglePlay();
							// toggleAudio();
						}}
					>
						<span className={!playing ? '' : 'hide'}>
							<FaPlay className='fas fa-play' />
							{/* <BsPlayCircle className='fas fa-play' /> */}
						</span>

						<span className={!playing ? 'hide' : ''}>
							<FaPause className='fas fa-pause' />
						</span>
					</span>
					<div className='vlme'>
						{/* <span className='volum'>
							<GoUnmute className='fas fa-volume-down' />
						</span> */}

						<input
							value={Math.round(stateVolume * 100)}
							type='range'
							name='volBar'
							id='volBar'
							onChange={(e) => handleVolume(e.target.value / 100)}
						/>
						<span className='volum'>
							<GoUnmute className='fas fa-volume-down' />
						</span>
					</div>
					{/* <span
						className='play'
						onClick={() => {
							togglePlay();
							// toggleAudio();
						}}
					>
						<span className={!playing ? '' : 'hide'}>
							<BsPlayCircle className='fas fa-play' />
						</span>

						<span className={!playing ? 'hide' : ''}>
							<BsPauseCircle className='fas fa-pause' />
						</span>
					</span> */}
				</div>
				{/* <div className='audio-wrapper'>
					<audio
						type='audio/mpeg'
						preload='true'
						src={`./music/Brand New Toy.mp3`}
						// controls
						ref={audio}
					/>
					<div
						className='test-play'
						onClick={() => {
							togglePlay();
						}}
					>
						play
					</div>
				</div> */}
				{/* <div className='audio-wrapper'>
					<audio
						type='audio/mpeg'
						preload='true'
						src={`./music/Brand New Toy.mp3`}
						controls
						ref={audio}
					/>
				</div> */}
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
		/* row-gap: 0.5rem; */
		h3 {
			/* padding-left: 1rem; */
			/* font-size: 1.6rem; */
			color: ${({ theme }) => theme.txtGrey};
			text-align: center;
		}
		.musicControls {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			flex: 1;
			column-gap: 1rem;
			/* border: 2px solid green; */

			.vlme {
				display: flex;
				align-content: center;
				justify-content: flex-start;
				column-gap: 1rem;
				overflow: hidden;
				/* width: 40%; */
				/* width: 40%; */
				width: 20rem;
				transition: all 500ms;
				/* border: 2px solid green; */
				/* &:hover {
				width: 11rem;
			} */
				.volum {
					font-size: 2.4rem;
					display: grid;
					place-content: center;
				}
				input[type='range'] {
					-webkit-appearance: none;
					margin: 1rem 0;
					width: 100%;
				}

				input[type='range']:focus {
					outline: none;
				}

				input[type='range']::-webkit-slider-runnable-track {
					width: 100%;
					/* height: 0.5rem; */
					height: 1rem;
					cursor: pointer;
					animation: 0.2s;
					box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
					/* background-color: ${({ theme }) => theme.txtGrey}; */
					background-color: ${({ theme }) => theme.bgApp};
					border-radius: 0.5rem;
					border: 0px solid ${({ theme }) => theme.black};
				}

				input[type='range']::-webkit-slider-thumb {
					box-shadow: 0px 0px 1px ${({ theme }) => theme.black};
					border: 0px solid ${({ theme }) => theme.black};
					height: 2rem;
					/* height: 1.3rem; */

					/* width: 0.4rem; */
					width: 0.6rem;
					/* height: 1.3rem;
				width: 1.3rem; */
					border-radius: 5rem;
					${'' /* background: #2a6586; */}
					background: ${({ theme }) => theme.green};
					cursor: pointer;
					-webkit-appearance: none;
					margin-top: -0.5rem;
				}

				input[type='range']:focus::-webkit-slider-runnable-track {
					background-color: ${({ theme }) => theme.bgApp};
				}

				input[type='range']::-moz-range-track {
					width: 100%;
					/* height: 0.5rem; */
					height: 1rem;
					cursor: pointer;
					animation: 0.2s;
					box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
					background-color: ${({ theme }) => theme.bgApp};
					border-radius: 0.5rem;
					border: 0px solid ${({ theme }) => theme.black};
				}

				input[type='range']::-moz-range-thumb {
					box-shadow: 0px 0px 1px ${({ theme }) => theme.black};
					border: 0px solid ${({ theme }) => theme.black};
					height: 2rem;
					/* height: 1.3rem; */

					/* width: 0.4rem; */
					width: 0.6rem;
					/* height: 1.3rem;
				width: 1.3rem; */
					border-radius: 5rem;
					${'' /* background: #2a6586; */}
					background: ${({ theme }) => theme.green};
					cursor: pointer;
				}

				input[type='range']::-ms-track {
					width: 100%;
					/* height: 0.5rem; */
					height: 1rem;
					cursor: pointer;
					animation: 0.2s;
					background: transparent;
					/* background: ${({ theme }) => theme.green}; */
					border-color: transparent;
					/* color: ${({ theme }) => theme.green}; */
					color: transparent;
				}

				input[type='range']::-ms-fill-lower {
					background: ${({ theme }) => theme.primaryColor};
					border: 0px solid ${({ theme }) => theme.black};
					border-radius: 1rem;
					box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
				}

				input[type='range']::-ms-fill-upper {
					background: ${({ theme }) => theme.primaryColor};
					border: 0px solid ${({ theme }) => theme.black};
					border-radius: 1rem;
					box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
				}

				input[type='range']::-ms-thumb {
					box-shadow: 0px 0px 1px ${({ theme }) => theme.black};
					border: 0px solid ${({ theme }) => theme.black};
					/* height: 1.3rem;
				width: 1.3rem; */
					height: 2rem;
					/* height: 1.3rem; */

					/* width: 0.4rem; */
					width: 0.6rem;
					border-radius: 5rem;
					${'' /* background: #2a6586; */}
					background: ${({ theme }) => theme.green};
					cursor: pointer;
				}

				/* input[type='range']:focus::-ms-fill-lower {
				background-color: ${({ theme }) => theme.bgGrey};
			} */

				/* input[type='range']:focus::-ms-fill-upper {
				background-color: ${({ theme }) => theme.bgGrey};
			} */
				#volBar {
					/* padding: 0;
				margin: 0;
				width: 50px; */
					/* width: 5rem; */
					width: 100%;
					background: transparent;
					border: none;
				}

				/* #volBar::-moz-range-thumb {
				height: 1rem;
				width: 3px;
				background-color: ${({ theme }) => theme.white};
				border-radius: 5px;
				cursor: pointer;
			} */
			}
			.hide {
				display: none;
			}

			span {
				cursor: pointer;
				&:hover {
					color: ${({ theme }) => theme.txtGrey};
				}

				&.play {
					z-index: 3;
					span.hide {
						display: none;
					}
					span {
						/* display: block; */
						display: grid;
						.fas {
							font-size: 2rem;
						}
					}
					/* &:active {
						box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
					}
					&:hover {
						box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
					} */
				}
			}
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
