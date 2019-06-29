import React from 'react';
import { gameStatuses } from '../../constants';

const emptyUserIcon = require('../../../../media/ic_profile_64.png');

const { WIN, LOSE } = gameStatuses;

const GameResult = ({ streak, points, gameStatus }) => {
  const texts = {
    [WIN]: { title: 'GREAT WORK!', subtitle: 'Congratulations, your new streak:' },
    [LOSE]: { title: 'TRY AGAIN !', subtitle: 'Your streak:' },
  };

  return (
    <div className="game-result">
      <img src={emptyUserIcon} alt="bg" />
      <div>{texts[gameStatus].title}</div>
      <div>{texts[gameStatus].subtitle}</div>
      <div>{streak}</div>
      <div>YOU EARNED</div>
      <div>{`${streak * streak} POINTS`}</div>
    </div>
  );
};

export default GameResult;
