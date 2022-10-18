import React, { useEffect, useState } from 'react';
// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import AudioPlayer from '../components/AudioPlayer';
// import AudioPlayer from '../components/AudioPlayer';
// import GameForm from '../components/GameForm';
import QuestionWidget from '../components/QuestionWidget';
import RoundInfoWidget from '../components/RoundInfoWidget';
// import LevelSelectButton from '../components/LevelSelectButton';
import { useGamesContext } from '../hooks/useGamesContext';
import { log } from '../utils/helper';

import { IoMdCloseCircle, IoMdCheckmarkCircle } from 'react-icons/io';
import { BsCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
import { motion } from 'framer-motion';
import { useAuthContext } from '../hooks/useAuthContext';
// import { useResultsContext } from '../hooks/useResultsContext';
// import { FaRegCircle } from 'react-icons/fa';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';

const Game = ({ scoreBoard, setScoreBoard }) => {
	// const navigate = useNavigate();
	// const { songs } = useSongsContext();
	// const { levels } = useLevelsContext();
	const { level, music } = useGamesContext();
	// const { dispatch } = useResultsContext();

	// const { user } = useAuthContext();
	const { dispatch, currentUser, user } = useAuthContext();
	// const { results } = useResultsContext();

	const [questionNumber, setQuestionNumber] = useState(null);
	// const [question, setQuestion] = useState(null);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	// const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	// const [scoreBoard, setScoreBoard] = useState([]);
	const [disableControls, setDisableControls] = useState(false);

	const [title, setTitle] = useState('');
	const [songID, setSongID] = useState('');
	const [search, setSearch] = useState('');
	// const [answers, setAnswers] = useState(null)
	const [showQuestions, setShowQuestions] = useState(false);

	const { setGameScore } = useStateContext();
	const { setGameResults, gameResults } = useStateContext();

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

	// const handleAnswerOptionClick = async () => {
	// 	let correctSongTitle = music[currentQuestion].title;
	// 	let guessedSongTitle = title;
	// 	log(correctSongTitle, 'correctSongTitle');
	// 	log(guessedSongTitle, 'guessedSongTitle');
	// 	const musicID = await songID;
	// 	if (correctSongTitle === guessedSongTitle) {
	// 		log('correct answer');
	// 		setScore(score + 1);
	// 		const questionResult = {
	// 			songID: musicID,
	// 			title: correctSongTitle,
	// 			isCorrect: true,
	// 		};
	// 		setScoreBoard([...scoreBoard, questionResult]);
	// 		log(songID, 'songID');
	// 		// const correctSongID = await songID;
	// 		// update result
	// 		// updateUserResults(correctSongID);
	// 	} else {
	// 		log('wrong answer');
	// 		const questionResult = {
	// 			songID: songID,
	// 			title: correctSongTitle,
	// 			isCorrect: false,
	// 		};
	// 		// setScoreBoard(scoreBoard.push(0));
	// 		setScoreBoard([...scoreBoard, questionResult]);
	// 	}
	// 	// if (isCorrect) {
	// 	// 	// setScore(score + 1);
	// 	// }
	// 	log(title, 'title from user');
	// 	setGameScore(scoreBoard);

	// 	const nextQuestion = currentQuestion + 1;
	// 	if (nextQuestion < music.length) {
	// 		setCurrentQuestion(nextQuestion);
	// 		setDisableControls(false);
	// 		log('here ?');
	// 	} else {
	// 		if (scoreBoard.length === music.length - 1) {
	// 			log(scoreBoard, 'score board');
	// 			setGameScore(scoreBoard);
	// 			log('game over');
	// 			setTitle('');
	// 			setSongID('');
	// 			setSearch('');
	// 			setTimeout(() => {
	// 				setGameResults(scoreBoard);
	// 				// setGameResults(gameScore);
	// 				log(scoreBoard, 'scoreboard');
	// 				navigate('/game/result');
	// 			}, 1000);
	// 			// navigate('/game/result');
	// 			return;
	// 		}
	// 		// setShowScore(true);
	// 		// log(scoreBoard, 'score board');
	// 		// setGameScore(scoreBoard);
	// 		// log('game over');
	// 		setTitle('');
	// 		setSongID('');
	// 		setSearch('');
	// 		// navigate('/game/result');
	// 	}
	// 	// if (scoreBoard.length === music.length) {
	// 	// 	log(scoreBoard, 'score board');
	// 	// 	setGameScore(scoreBoard);
	// 	// 	log('game over');
	// 	// 	setTitle('');
	// 	// 	setSearch('');
	// 	// 	navigate('/game/result');
	// 	// }
	// 	setTitle('');
	// 	setSongID('');
	// 	setSearch('');
	// };
	const handleAnswerOptionClick = async (title, songID) => {
		let correctSongTitle = music[currentQuestion].title;
		let guessedSongTitle = title;
		log(correctSongTitle, 'correctSongTitle');
		log(guessedSongTitle, 'guessedSongTitle');
		const musicID = await songID;

		if (correctSongTitle === guessedSongTitle) {
			log('correct answer');
			setScore(score + 1);
			const questionResult = {
				songID: musicID,
				title: correctSongTitle,
				isCorrect: true,
			};
			setScoreBoard([...scoreBoard, questionResult]);
			// log(songID, 'songID');
			const correctSongID = await songID;
			// update result
			updateUserResults(correctSongID);
			setGameResults([...gameResults, questionResult]);
		} else {
			log('wrong answer');
			setScore(score + 1);
			const questionResult = {
				songID: musicID,
				title: correctSongTitle,
				isCorrect: false,
			};
			// setScoreBoard(scoreBoard.push(0));
			setScoreBoard([...scoreBoard, questionResult]);
			setGameResults([...gameResults, questionResult]);
		}
		// if (isCorrect) {
		// 	// setScore(score + 1);
		// }
		log(title, 'title from user');
		setGameScore(scoreBoard);

		const nextQuestion = currentQuestion + 1;
		log(nextQuestion, music.length, 'before condition');
		if (nextQuestion < music.length) {
			log(nextQuestion, music.length, 'nextQuestion is lower condition');
			setCurrentQuestion(nextQuestion);
			setDisableControls(false);
			log('here ?');
			setGameScore(scoreBoard);
			setGameResults(scoreBoard);
		} else {
			log(nextQuestion, music.length, 'nextQuestion isnt lower condition');
			log(scoreBoard.length, music.length - 1, 'lengths');
			log(scoreBoard, 'score board');
			setGameScore(scoreBoard);
			setGameResults(scoreBoard);
			// if (scoreBoard.length === music.length) {
			if (scoreBoard.length === music.length - 1) {
				log(scoreBoard, 'score board');
				setGameScore(scoreBoard);
				setGameResults(scoreBoard);
				log('game over');
				setTitle('');
				setSongID('');
				setSearch('');
				setTimeout(() => {
					// setGameResults(gameScore);
					log(scoreBoard, 'scoreboard');
					navigate('/game/result');
				}, 1000);
				// navigate('/game/result');
				return;
			}
			// if (score === level.questionCount) {
			// 	setTimeout(() => {
			// 		// setGameResults(gameScore);
			// 		log(scoreBoard, 'scoreboard');
			// 		navigate('/game/result');
			// 	}, 1000);
			// }
			// setShowScore(true);
			// log(scoreBoard, 'score board');
			// setGameScore(scoreBoard);
			// log('game over');
			log('reset 1');
			setTitle('');
			setSongID('');
			setSearch('');
			// navigate('/game/result');
		}
		// if (score === level.questionCount) {
		// 	setTimeout(() => {
		// 		// setGameResults(gameScore);
		// 		log(scoreBoard, 'scoreboard');
		// 		navigate('/game/result');
		// 	}, 1000);
		// }
		// if (scoreBoard.length === music.length) {
		// 	log(scoreBoard, 'score board');
		// 	setGameScore(scoreBoard);
		// 	log('game over');
		// 	setTitle('');
		// 	setSearch('');
		// 	navigate('/game/result');
		// }
		setTitle('');
		setSongID('');
		setSearch('');
		log('reset 2');
	};

	const updateUserResults = async (correctSongID) => {
		// const correctResultData = {
		// 	correctSongID: musicID,
		// };
		log(correctSongID, 'correctSongID in updateUserResults func');

		log(currentUser._id, ' current user id');

		// const obj = {
		// 	newID: await songID,
		// };
		// const
		// add song to user
		// `${process.env.REACT_APP_BACKEND_URL}/api/results/${results._id}`,
		// `${process.env.REACT_APP_BACKEND_URL}/api/results/6342b347aa7633b8f5f7ead3`,
		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/user/${currentUser._id}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
				body: JSON.stringify({ correctSongID }),
			}
		);
		const json = await response.json();
		log(json, 'json results updated');
		if (!response.ok) {
			log('error in patch');
		}
		if (response.ok) {
			log('response ok in patch');
			dispatch({
				type: 'UPDATE_USER',
				payload: json,
			});
		}
	};
	// const updateUserResults = async (correctSongID) => {
	// 	// const correctResultData = {
	// 	// 	correctSongID: musicID,
	// 	// };
	// 	log(correctSongID, 'correctSongID in updateUserResults func');

	// 	// const obj = {
	// 	// 	newID: await songID,
	// 	// };
	// 	// const
	// 	// add song to user
	// 	// `${process.env.REACT_APP_BACKEND_URL}/api/results/${results._id}`,
	// 	// `${process.env.REACT_APP_BACKEND_URL}/api/results/6342b347aa7633b8f5f7ead3`,
	// 	const response = await fetch(
	// 		`${process.env.REACT_APP_BACKEND_URL}/api/results/${results[0]._id}`,
	// 		{
	// 			method: 'PATCH',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Authorization: `Bearer ${user.token}`,
	// 			},
	// 			body: JSON.stringify({ correctSongID }),
	// 		}
	// 	);
	// 	const json = await response.json();
	// 	log(json, 'json results updated');
	// 	if (!response.ok) {
	// 		log('error in patch');
	// 	}
	// 	if (response.ok) {
	// 		log('response ok in patch');
	// 		dispatch({
	// 			type: 'UPDATE_RESULTS',
	// 			payload: json,
	// 		});
	// 	}
	// };

	useEffect(() => {
		log(scoreBoard.length, scoreBoard, 'scoreboard length');
		log(gameResults, 'gameResults');
		// log(level.questionCount, 'level q count');
		// if (scoreBoard.length === level && level.questionCount) {
		// 	setGameScore(scoreBoard);
		// 	setTimeout(() => {
		// 		// setGameResults(gameScore);
		// 		log(scoreBoard, 'scoreboard');
		// 		navigate('/game/result');
		// 	}, 1000);
		// }
		setGameScore(scoreBoard);
		// setGameScore(scoreBoard && scoreBoard);
	}, [scoreBoard, gameResults]);

	// useEffect(() => {
	// 	if (!questionNumber) {
	// 		log(questionNumber, 'questionNumber');
	// 		return;
	// 	}
	// 	if (questionNumber) {
	// 		log(questionNumber, 'question number');
	// 		log(question, 'question');
	// 		setQuestion(music && music[questionNumber - 1]);
	// 	}
	// }, [questionNumber]);
	return (
		<StyledGame
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{showQuestions === false ? (
				<>
					<h2>Game Settings</h2>
					<RoundInfoWidget
						level={level}
						questionNumber={questionNumber}
						setQuestionNumber={setQuestionNumber}
						setShowQuestions={setShowQuestions}
					/>
				</>
			) : (
				<>
					<h2>{level && level.category}</h2>
					<div className='scoreBoard-container br'>
						<div className='scoreboard-wrapper'>
							{music &&
								music.length >= 0 &&
								music.map((song, index) => (
									<div className='icon-wrapper' key={index}>
										{/* <span> */}
										{scoreBoard && !scoreBoard[index] ? (
											<BsCircle className='result-icon blank-icon' />
										) : (
											<>
												{scoreBoard && scoreBoard[index].isCorrect === true ? (
													<IoMdCheckmarkCircle className='result-icon correct-icon' />
												) : (
													<IoMdCloseCircle className='result-icon wrong-icon' />
												)}
											</>
										)}
										{/* </span> */}
									</div>
								))}
						</div>
					</div>
					{/* <div className='scoreBoard-container br'>
						{music &&
							music.length >= 0 &&
							music.map((song, index) => (
								<p key={index}>
									<span>
										{scoreBoard && !scoreBoard[index] ? (
											<BsCircle className='result-icon blank-icon' />
										) : (
											<>
												{scoreBoard && scoreBoard[index].isCorrect === true ? (
													<IoMdCheckmarkCircle className='result-icon correct-icon' />
												) : (
													<IoMdCloseCircle className='result-icon wrong-icon' />
												)}
											</>
										)}
									</span>
								</p>
							))}
					</div> */}

					<QuestionWidget
						question={music[currentQuestion]}
						number={currentQuestion + 1}
						questionCount={music.length}
						// number={questionNumber}
						handleAnswerOptionClick={handleAnswerOptionClick}
						disableControls={disableControls}
						setDisableControls={setDisableControls}
						title={title}
						setTitle={setTitle}
						setSongID={setSongID}
						songID={songID}
						search={search}
						setSearch={setSearch}
						level={level}
					/>
				</>
			)}
			{/* <div>
				<h2>Category: {level.category}</h2>
				<h3>Difficulty: {level.difficulty}</h3>
				<p>8 seconds to guess the song</p>
			</div>

			<div className='start-game-btn' onClick>
				start game
			</div> */}
			{/* <ul>
				<li>music</li>
				<li>{music && music.title}</li>
			</ul> */}

			{/* <AudioPlayer music={music[currentQuestion]} /> */}

			{/* <GameForm /> */}
			{/* {question && questionNumber >= 0 && ( */}
			{/* )} */}
			{/* {question && questionNumber >= 0 && (
				<QuestionWidget
					question={question}
					number={questionNumber}
					handleAnswerOptionClick={handleAnswerOptionClick}
				/>
			)} */}

			{/* <div className='level-select-container'>
				{levels &&
					levels.map((level) => (
						<LevelSelectButton key={level._id} level={level} />
					))}
			</div> */}
		</StyledGame>
	);
};
const StyledGame = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	max-width: 100rem;

	padding: 0.5rem 1rem;
	overflow-y: hidden;

	z-index: 1;

	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	h2 {
		text-transform: capitalize;
		text-align: center;
	}
	.scoreBoard-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		column-gap: 2rem;
		padding: 1rem;
		.scoreboard-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			align-items: center;
			column-gap: 2rem;
			padding: 1rem;
			position: relative;
			height: 5rem;
			.icon-wrapper {
				display: grid;
				place-content: center;
				background-color: ${({ theme }) => theme.white};
				z-index: 5;
				width: 4rem;
				.result-icon {
					font-size: 3rem;
				}
				.wrong-icon {
					color: ${({ theme }) => theme.red};
					font-size: 3.8rem;
				}
				.correct-icon {
					color: ${({ theme }) => theme.green};
					font-size: 3.8rem;
				}
			}
			&::before {
				content: '';
				background-color: ${({ theme }) => theme.txtGrey};
				top: 50%;
				left: 50%;
				height: 0.7rem;
				width: 90%;
				transform: translate(-50%, -50%);
				position: absolute;
			}
		}
		/* p {
			text-align: center;
			span {
				display: grid;
				place-content: center;
				.result-icon {
					font-size: 3rem;
				}
				.wrong-icon {
					color: ${({ theme }) => theme.red};
					font-size: 4rem;
				}
				.correct-icon {
					color: ${({ theme }) => theme.green};
					font-size: 3.8rem;
				}
			}
		} */
	}
	/* .scoreBoard-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		column-gap: 2rem;
		padding: 1rem;
		p {
			text-align: center;
			span {
				display: grid;
				place-content: center;
				.result-icon {
					font-size: 3rem;
				}
				.wrong-icon {
					color: ${({ theme }) => theme.red};
					font-size: 4rem;
				}
				.correct-icon {
					color: ${({ theme }) => theme.green};
					font-size: 3.8rem;
				}
			}
		}
	} */
`;

export default Game;
