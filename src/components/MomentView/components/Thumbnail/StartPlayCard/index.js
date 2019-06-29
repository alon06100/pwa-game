import React from 'react';
import { withRouter } from 'react-router-dom';

const StartPlayCard = ({ history }) => (
  <div className="moment-thumbnail start-play-card" onClick={() => history.push('/')}>
    <div>Play challenges</div>
    <div>to earn rewards</div>
    <div><i className="fas fa-plus" /></div>
  </div>
);

export default withRouter(StartPlayCard);
