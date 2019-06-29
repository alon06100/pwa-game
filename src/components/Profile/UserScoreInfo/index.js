import React from 'react';
import { withRouter } from 'react-router-dom';

const pointsIcon = require('../../../media/icons/points_coin.png');
const emptyUserIcon = require('../../../media/ic_profile_64.png');

const UserScoreInfo = ({ history, name, score, showSettings }) => (
  <div id="user-points-wrapper">
    <img id="user-profile-image" src={emptyUserIcon} alt="user-profile" />
    <div id="settings-wrapper">
      <span id="username-title">{name}</span>
      <div id="points-wrapper">
        <div id="points-icon-wrapper">
          <img id="points-icon" src={pointsIcon} alt="points" />
        </div>
        <span id="points">{(score || 0).toLocaleString()} points</span>
      </div>
      {showSettings && <span id="settings-button" onClick={() => history.push('/settings')}>settings</span>}
    </div>
  </div>
);

export default withRouter(UserScoreInfo);
