import React, { useEffect, useState } from 'react';
import GameQuestion from './Question';
import GameOver from './GameOver';
import StartGame from './StartGame';
import GameHeader from './Header';
import CheckPoint from './CheckPoint';
import { gameStatuses } from './constants';
import packsMock from '../../mocks/packs';

let rewardAnswers = [];
const { PLAYING, PENDING, WIN, LOSE, CHECKPOINT } = gameStatuses;

const GameView = ({ match }) => {
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState({});
  const [gameStatus, changeGameStatus] = useState(PENDING);
  const [gameResult, setGameResult] = useState(null);
  const [pack, setPack] = useState({});

  useEffect(() => {
    if (pack.rewards) {
      rewardAnswers = pack.rewards.map(r => r.requiredStreak);
    }
  }, [pack]);

  useEffect(() => {
    const { league } = match.params;
    // const userId = getUserData().userProfile.identityId;
    // getFirebaseData(`/v4/private/users/${userId}/testYourselfPacks/${league}/streak`, setBestStreak);

    setPack(packsMock[league]);
    setQuestions(packsMock[league].game.questions);
  }, []);

  useEffect(() => {
    if (questions.length) {
      setQuestion(questions[questionNumber]);
    }
  }, [questions, questionNumber]);

  const questionAnswered = (isCorrectAnswer) => {
    const nextQuestion = questionNumber + 1;
    const newStreak = streak + 1;

    if (!isCorrectAnswer) {
      finishGame(streak, LOSE);
    } else if (!questions[nextQuestion]) {
      setStreak(newStreak);
      finishGame(newStreak, WIN);
    } else {
      setStreak(newStreak);
      if (rewardAnswers.includes(newStreak)) {
        setQuestionNumber(nextQuestion);
        setGameResult([{ momentId: '90c9e928-1b39-4d43-9f93-84a8ad801e06', type: 'BRONZE', requiredStreak: 5 }]);
        changeGameStatus(CHECKPOINT);
      } else {
        setTimeout(() => setQuestionNumber(nextQuestion), 1500);
      }
    }
  };

  const finishGame = (currentStreak, status) => {
    if (status === WIN) {
      setGameResult([{ momentId: '90c9e928-1b39-4d43-9f93-84a8ad801e06', type: 'BRONZE', requiredStreak: 5 }]);
    } else {
      setGameResult([]);
    }
    setTimeout(() => changeGameStatus(status), 1000);
  };

  const continueGame = () => {
    changeGameStatus(PLAYING);
    setGameResult(null);
  };

  const resetGame = () => {
    changeGameStatus(PLAYING);
    setQuestion(questions[0]);
    setStreak(0);
    setQuestionNumber(0);
    setGameResult(null);
  };

  return (
    <div id="game-view">
      <GameHeader
        bestStreak={bestStreak}
        streak={streak}
        gameStatus={gameStatus}
      />
      {gameStatus === PLAYING && (
        Object.keys(question).length
          ? (
            <GameQuestion
              question={question}
              next={questionAnswered}
            />
          ) : ''
      )
      }
      {pack.id && gameStatus === CHECKPOINT && (
      <CheckPoint
        assetId={pack.previewBackgroundImage.assetId}
        continueGame={continueGame}
        reward={gameResult[0]}
      />
      )
      }
      {pack.id && gameStatus === PENDING && (
        <StartGame
          resetGame={resetGame}
          assetId={pack.previewBackgroundImage.assetId}
          texts={pack.texts}
          rewards={pack.rewards}
        />
      )}
      {(gameStatus === WIN || gameStatus === LOSE) && gameResult && pack.id && (
        <GameOver
          resetGame={resetGame}
          streak={streak}
          points={gameResult.achievedPoints}
          rewards={gameResult}
          gameStatus={gameStatus}
          assetId={pack.previewBackgroundImage.assetId}
        />
      )}
    </div>
  );
};

export default GameView;
