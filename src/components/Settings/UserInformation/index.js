import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';

const emptyUserIcon = require('../../../media/ic_profile_64.png');

const UserInformation = ({ history }) => {
  const [heedUser] = useState({ isAnonymous: true });

  return (
    <div id="user-information-container">
      <div id="user-information-left-section">
        <div id="user-profile-image">
          <img src={emptyUserIcon} alt="bg" />
        </div>
        {!heedUser.isAnonymous && (
          <Fragment>
            <div id="user-information">
              <div id="user-name">Alon Maor</div>
              <div id="user-email">alon06100@gmail.com</div>
            </div>
            <div id="attention-button">!</div>
          </Fragment>
        )}
        {heedUser.isAnonymous && (
          <div onClick={() => history.push('/login')}>Login or Register</div>
        )}
      </div>
      <div id="user-information-right-section" />
    </div>
  );
};

export default withRouter(UserInformation);
