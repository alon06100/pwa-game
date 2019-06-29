import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mockUsers from './placeholders';
import LeaderBoardUser from './LeaderboardUser';
import leaderbordMock from '../../../mocks/leaderbords';

const LeaderBoard = () => {
  const [users, setUsers] = useState(mockUsers);

  useEffect(() => {
    setUsers(leaderbordMock);
  }, []);

  return (
    <div id="leader-board-container">
      <div id="titles-texts">
        <span className="title">Weekly Leaderboard</span>
        <Link to="/leaderboard">
          <span className="see-all-btn">See all</span>
        </Link>
      </div>
      <div id="leaders-list">
        {users.map(user => (
          <LeaderBoardUser key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
