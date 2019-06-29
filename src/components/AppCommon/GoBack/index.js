import React from 'react';
import { withRouter } from 'react-router-dom';

const GoBackIcon = ({ history, icon }) => (
  <img
    id="app-back-btn"
    src={icon}
    alt="close"
    onClick={() => {
      history.goBack();
    }}
  />
);

export default withRouter(GoBackIcon);
