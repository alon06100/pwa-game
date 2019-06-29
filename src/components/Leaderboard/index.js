import React, { useState, useEffect } from 'react';
import mockUsers from '../PlayView/LeaderBoard/placeholders';
import Header from '../AppCommon/Header';
import Tabs from './Tabs';
import Body from './Body';
import leaderbordMock from '../../mocks/leaderbords';

const Leaderboard = ({ history }) => {
  const [userList, setUserList] = useState(mockUsers);
  const [topUsers, setTopUsers] = useState(mockUsers);
  const [menuPosition, togglePosition] = useState('right');

  useEffect(() => {
    setUserList([...leaderbordMock].splice(3, leaderbordMock.length));
    setTopUsers([...leaderbordMock].splice(0, 3));
  }, []);

  return (
    <div id="leaderboard-page">
      <div id="leaderboard-top-section">
        <Header
          text="LEADERBOARD"
          showBackBtn
          showShareBtn
          history={history}
        />
        <Tabs
          menuPosition={menuPosition}
          togglePosition={togglePosition}
        />
      </div>
      <Body
        userList={userList}
        topUsers={topUsers}
      />
    </div>
  );
};

export default Leaderboard;
