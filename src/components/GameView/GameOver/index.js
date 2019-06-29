import React, { useEffect } from 'react';
import Banner from '../Banner';
import GameResult from './GameResult';
import Footer from '../Footer';
import Confetti from './Confetti';
import Rewards from '../Rewards';
import GoBack from '../../AppCommon/GoBack';
import { gameStatuses } from '../constants';

const { WIN, LOSE } = gameStatuses;
const loseSoundMp3 = require('../../../media/sounds/ty_game_over.mp3');
const winAnswerMp3 = require('../../../media/sounds/ty_win.mp3');
const closeIcon = require('../../../media/close_icon.png');

const winSound = new Audio(winAnswerMp3);
const loseSound = new Audio(loseSoundMp3);

const GameOver = ({ assetId, rewards, points, streak, gameStatus, resetGame }) => {
  useEffect(() => {
    if (gameStatus === WIN) {
      winSound.play();
    } else if (gameStatus === LOSE) {
      loseSound.play();
    }
  }, []);

  return (
    <div id="game-over">
      <GoBack icon={closeIcon} />
      <Banner assetId={assetId} />
      <GameResult gameStatus={gameStatus} streak={streak} points={points} />
      <Footer action={resetGame} text="PLAY AGAIN " />
      {(gameStatus === WIN || rewards.length) ? <Confetti /> : ''}
      {rewards.length ? <Rewards rewards={rewards} /> : ''}
    </div>
  );
};

export default GameOver;
