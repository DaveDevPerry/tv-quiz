import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import VolumeTest from './VolumeTest';
// import AudioPlayer from './AudioPlayer';

const RoundInfoWidget = ({
	level,
	questionNumber,
	setQuestionNumber,
	showQuestions,
	setShowQuestions,
}) => {
	return (
		<StyledRoundInfoWidget>
			<div className='game-settings-wrapper br'>
				<ul>
					<li>
						<h3>Category:</h3>
						<p> {level.category}</p>
					</li>
					<li>
						<h3>Difficulty:</h3>
						<p> {level.roundDifficulty}</p>
					</li>
					{/* <li>
					<h3>Selection:</h3>
					<p> Intro</p>
				</li> */}
					<li>
						<h3>Game Length:</h3>
						<p> {level.questionCount} Songs</p>
						{/* <p> 3 Songs</p> */}
					</li>
					<li>
						<h3>Song Duration:</h3>
						<p>
							{level.songLength / 1000}{' '}
							{level.songLength / 1000 === 1 ? 'second' : 'seconds'}
						</p>
						{/* <p> 5 Seconds</p> */}
					</li>

					{/* <h3>Selection: Intro</h3>
				<h3>Game Length: 3 Songs</h3>
				<h3>Song Time: 5 seconds</h3> */}
					{/* <h3>Difficulty: {level.difficulty}</h3> */}
					{/* <h3>Length: 3 Songs</h3> */}
					{/* <p>8 seconds to guess the song</p> */}
					{/* <p>user sets volume level prior to starting</p> */}
				</ul>
			</div>
			{/* <div>
				<h3>Category: {level.category}</h3>
				<h3>Selection: Intro</h3>
				<h3>Game Length: 3 Songs</h3>
				<h3>Song Time: 5 seconds</h3>

			</div> */}

			{/* <div className='personal-best'>
				<h3>Personal Best: 75%</h3>
			</div> */}
			<div className='personal-best'>
				<h3>You can only hear each song sample once!</h3>
			</div>

			<VolumeTest />

			{/* <div className='sound-test-container'>
				<h4>Volume Test</h4>
				<audio
					// className={disableControls === true ? 'disable' : ''}
					// onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
					// onCanPlay={(e) => setDur(e.target.duration)}
					// onEnded={handleEnd}
					// ref={audio}
					type='audio/mpeg'
					preload='true'
					src={`./music/Brand New Toy.mp3`}
					controls
					// onLoad={playSnippet()}
					// onLoad={startSong()}
					// onLoad={() => startSong()}
				/>
			</div> */}

			<div
				className='start-game-btn'
				onClick={() => {
					setShowQuestions(true);
				}}
			>
				{/* <div className='start-game-btn' onClick={setQuestionNumber(1)}> */}
				<h2>good to go</h2>
			</div>
		</StyledRoundInfoWidget>
	);
};
const StyledRoundInfoWidget = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	/* padding: 2rem; */
	/* flex: 1; */
	/* border: 2px solid green; */
	.game-settings-wrapper {
		padding: 2rem;
		ul {
			list-style: none;
			li {
				display: flex;
				justify-content: center;
				align-items: center;
				column-gap: 1rem;
				h3 {
					flex: 1;
					text-align: right;
				}
				p {
					flex: 1;
					text-align: left;
					text-transform: capitalize;
				}
			}
		}
	}
	.personal-best {
		h3 {
			text-align: center;
		}
	}
	.start-game-btn {
		background-color: ${({ theme }) => theme.primaryColor};
		padding: 1rem 2rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		text-align: center;
		/* align-self: flex-end; */
		cursor: pointer;
		border-radius: 4px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
		margin-top: 1rem;
	}
`;

export default RoundInfoWidget;
