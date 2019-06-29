import React, { Fragment } from 'react';
import UserScoreInfo from '../UserScoreInfo';

const heedIcon = require('../../../media/icons/ic_heed_score.png');

const UserInfo = ({ user, score }) => (
  <Fragment>
    <div id="profile-page-header">
      <img src={heedIcon} alt="heed-icon" />
    </div>
    <div id="user-info">
      <UserScoreInfo name={user.name} score={score} showSettings />
    </div>
  </Fragment>
);

export default UserInfo;
