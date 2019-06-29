import React from 'react';
import Banner from '../Banner';
import StartGameText from './StartGameText';
import Footer from '../Footer';
import MomentThumbnail from '../../MomentView/components/Thumbnail';

const pyramid = require('../../../media/moment/group_10.png');
const goldBadge = require('../../../media/moment/1_st_small.png');
const silverBadge = require('../../../media/moment/2_nd_small.png');
const bronzeBadge = require('../../../media/moment/3_rd_small.png');

const badgesArr = [bronzeBadge, silverBadge, goldBadge];

const StartGame = ({ assetId, resetGame, texts, rewards }) => {
  return (
    <div id="start-game">
      <Banner assetId={assetId} />
      <div id="rewards-wrapper">
        <div id="thumbnails-container">
          {rewards.length ? rewards.map((moment, index) => (
            <div key={moment.momentId} className="thumbnail-wrapper">
              <img src={badgesArr[index]} alt="pyramid" />
              <MomentThumbnail id={moment.momentId} type={moment.type} />
            </div>
          )) : ''}
        </div>
        <div>
          <img src={pyramid} alt="pyramid" />
        </div>
        <StartGameText texts={texts} />
      </div>
      <Footer action={resetGame} text="START " />
    </div>
  );
};

export default StartGame;
