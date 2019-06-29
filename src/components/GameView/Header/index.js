import React from 'react';
import { withRouter } from 'react-router-dom';
import { gameStatuses } from '../constants';

const { PLAYING, PENDING } = gameStatuses;

const GameHeader = ({ history, bestStreak, streak, gameStatus }) => (
  gameStatus === PENDING || gameStatus === PLAYING ? (
    <div id="game-header">
      <i className="fas fa-arrow-left" onClick={() => history.push('/')} />
      <div>
        {bestStreak
          ? (
            <div>
              <span>BEST STREAK: </span>
              <span>{bestStreak}</span>
            </div>
          )
          : ''
      }
        {gameStatus === PLAYING
          && (
            <div>
              <span>CURRENT STREAK: </span>
              <span>{streak}</span>
            </div>
          )
        }
      </div>
    </div>
  ) : null
);

export default withRouter(GameHeader);
