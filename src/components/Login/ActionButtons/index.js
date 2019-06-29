import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

const facebookIcon = require('../../../media/icons/ic_facebook.png');

const LoginActionButtons = ({ history, text, link, submit, facebook }) => {
  const handleActionClick = () => {
    if (link) {
      history.push(link);
    }
  };

  return (
    <Fragment>
      <button type={submit ? 'submit' : 'button'} className="login-btn action-button" onClick={handleActionClick}>
        {text}
      </button>
      {facebook && (
      <span className="login-btn facebook-button">
        <img src={facebookIcon} alt="facebook logo" />
        <span>continue with facebook</span>
      </span>
      )}
    </Fragment>
  );
};

export default withRouter(LoginActionButtons);
