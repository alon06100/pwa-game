import React, { useEffect, useState } from 'react';
import QuestionCounter from '../QuestionCounter';
import Banner from '../Banner';
import LottieControl from '../../AppCommon/Lottie';
import wrongAnswer from '../../AppCommon/Lottie/wrong-answer';
import correctAnswer from '../../AppCommon/Lottie/correct-answer';

const rightAnswerMp3 = require('../../../media/sounds/ty_right_answer.mp3');
const wrongAnswerMp3 = require('../../../media/sounds/ty_wrong_answer.mp3');

const rightAnswerSound = new Audio(rightAnswerMp3);
const wrongAnswerSound = new Audio(wrongAnswerMp3);

const GameQuestion = ({ question, next }) => {
  const [userAnswer, setUserAnswer] = useState({});
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const timerFinished = () => {
    setIsTimerRunning(false);
    next(false);
  };

  useEffect(() => {
    setUserAnswer({});
    setIsTimerRunning(true);
  }, [question]);

  const handleAnswerClick = (answerId) => {
    if (userAnswer.id) return;
    const newAnswer = { id: answerId };
    if (answerId === question.correctAnswerId) {
      rightAnswerSound.play();
      newAnswer.className = 'correct-answer';
      next(true);
    } else {
      wrongAnswerSound.play();
      newAnswer.className = 'wrong-answer';
      next(false);
    }
    setUserAnswer(newAnswer);
    setIsTimerRunning(false);
  };

  return (
    <div id="question">
      <Banner assetId={question.backgroundImage.assetId} />
      <div className="action">
        {isTimerRunning ? (
          <QuestionCounter
            interval={15}
            done={timerFinished}
          />
        )
          : (
            <div className="answer-icon-container">
              <LottieControl
                width={70}
                height={70}
                animationData={userAnswer.className === 'correct-answer' ? correctAnswer : wrongAnswer}
              />
            </div>
          )}
        <span className="text">{question.question.defaultText}</span>
        {question.answers.map(answer => (
          <span
            key={answer.id}
            className={`option ${userAnswer.id  && (answer.id == question.correctAnswerId) ? 'correct-answer' : ''}`}
            onClick={() => handleAnswerClick(answer.id)}
          >
            {userAnswer.id ? answer.answerValue.defaultText : answer.answerTitle.defaultText}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameQuestion;
