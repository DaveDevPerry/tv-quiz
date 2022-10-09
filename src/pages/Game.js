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
// import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
import { motion } from 'framer-motion';
import { useAuthContext } from '../hooks/useAuthContext';
// import { useResultsContext } from '../hooks/useResultsContext';
// import { FaRegCircle } from 'react-icons/fa';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';

const Game = () => {
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
	const [scoreBoard, setScoreBoard] = useState([]);
	const [disableControls, setDisableControls] = useState(false);

	const [title, setTitle] = useState('');
	const [songID, setSongID] = useState('');
	const [search, setSearch] = useState('');
	// const [answers, setAnswers] = useState(null)
	const [showQuestions, setShowQuestions] = useState(false);

	const { setGameScore } = useStateContext();
	const { setGameResults } = useStateContext();

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
		}
		// if (isCorrect) {
		// 	// setScore(score + 1);
		// }
		log(title, 'title from user');
		setGameScore(scoreBoard);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < music.length) {
			setCurrentQuestion(nextQuestion);
			setDisableControls(false);
			log('here ?');
		} else {
			log(scoreBoard.length, music.length - 1, 'lengths');
			log(scoreBoard, 'score board');
			setGameScore(scoreBoard);
			// if (scoreBoard.length === music.length) {
			if (scoreBoard.length === music.length - 1) {
				log(scoreBoard, 'score board');
				setGameScore(scoreBoard);
				setGameResults(scoreBoard);
				log('game over');
				setTitle('');
				setSongID('');
				setSearch('');
				// setTimeout(() => {
				// 	// setGameResults(gameScore);
				// 	log(scoreBoard, 'scoreboard');
				// 	navigate('/game/result');
				// }, 1000);
				// navigate('/game/result');
				// return;
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
		log(scoreBoard.length, 'scoreboard length');
		// log(level.questionCount, 'level q count');
		// if (scoreBoard.length === level && level.questionCount) {
		// 	setGameScore(scoreBoard);
		// 	setTimeout(() => {
		// 		// setGameResults(gameScore);
		// 		log(scoreBoard, 'scoreboard');
		// 		navigate('/game/result');
		// 	}, 1000);
		// }
		// setGameScore(scoreBoard);
		// setGameScore(scoreBoard && scoreBoard);
	}, [scoreBoard]);

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
			{/* <h2>Game Settings</h2> */}
			{/* <h1>Game page</h1> */}
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
					<h2>Name the Song</h2>
					<div className='scoreBoard-container br'>
						{scoreBoard &&
							scoreBoard.length >= 0 &&
							scoreBoard.map((score, index) => (
								<p key={index}>
									{score && score.isCorrect && (
										<span>
											<IoMdCheckmarkCircle className='result-icon correct-icon' />
										</span>
									)}
									{score && score.isCorrect === false && (
										<span>
											<IoMdCloseCircle className='result-icon wrong-icon' />
										</span>
									)}
								</p>
							))}
					</div>

					{/* <div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{music.length}
						</div>
						<div className='question-text'>{music[currentQuestion].title}</div>
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
		/* color: ${({ theme }) => theme.primaryColor}; */
		text-transform: capitalize;
		text-align: center;
	}
	.scoreBoard-container {
		/* border: 2px solid blue; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		column-gap: 2rem;
		padding: 1rem;
		p {
			/* flex: 1; */
			text-align: center;
			span {
				display: grid;
				place-content: center;
				.result-icon {
					font-size: 3rem;
				}
				.wrong-icon {
					color: ${({ theme }) => theme.red};
				}
				.correct-icon {
					color: ${({ theme }) => theme.green};
				}
			}
		}
	}
`;

export default Game;
