import React from 'react';
import LeaderBoardUser from '../../PlayView/LeaderBoard/LeaderboardUser';

const generateEmptyDivs = (length) => {
  const divs = [];
  for (let x = 0; x < length; x++) {
    divs.push(<div key={x} className="leader-board-user" />);
  }
  return divs;
};

const Body = ({ topUsers, userList }) => (
  <div id="leaderboard-page-container">
    <div id="leaderboard-top-players">
      <LeaderBoardUser {...topUsers[1]} size="medium" />
      <LeaderBoardUser {...topUsers[0]} size="large" />
      <LeaderBoardUser {...topUsers[2]} size="medium" />
    </div>
    <div id="leaderboard-list">
      {userList.map(user => (
        <LeaderBoardUser key={user.id} {...user} />
      ))}
      {
        generateEmptyDivs(userList.length % 4)
      }
    </div>
  </div>
);

export default Body;
