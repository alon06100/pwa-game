import React from 'react';
import { withRouter } from 'react-router-dom';

const heedCoins = require('../../../../media/ic_heed_coins.png');
const emptyUserIcon = require('../../../../media/ic_profile_64.png');

const LeaderBoardUser = (props) => {
  const { history, ...user } = props;

  const handleUserClick = () => {
    const userId = user.id.split(':')[1];
    history.push(`/user-collection/${userId}/rewards`);
  };

  return (
    <div className={`leader-board-user ${user.size || ''}`} onClick={handleUserClick}>
      <div className="user-position">{user.rank}</div>
      <img className="user-profile-img" src={user.imageUrl || emptyUserIcon} alt={user.name} />
      <div className="user-name">{user.name}</div>
      <div className="user-points">{(user.points || 0).toLocaleString()}</div>
      <img className="heed-coins" src={heedCoins} alt="coins" />
    </div>
  );
};

export default withRouter(LeaderBoardUser);
