import React from 'react';
import AppHeader from '../AppCommon/Header';
import LoginActionButtons from './ActionButtons';

const heedLogo = require('../../media/icons/heed_logo.png');

const MainLoginView = ({ history }) => (
  <div id="login-view-container">
    <AppHeader text="login" showBackBtn />
    <div id="heed-logo-container">
      <img src={heedLogo} alt="heed_logo" />
    </div>
    <div id="login-options">
      <p>
        <span>By pressing the "Sign Up With Email" or "Continue with Facebook" button below, you agree to Heed's </span>
        <span><a>Terms of Use</a> and acknowledge that your information will be used as described in Heed's </span>
        <a>Privacy Policy</a>
      </p>
      <LoginActionButtons text="signup with email" link="/register" facebook />
      <div className="register-toggle">
        <span>Already have an account? </span>
        <span className="toggle-btn" onClick={() => history.push('/sign-in')}>Sign In</span>
      </div>
    </div>
  </div>
);

const Login = ({ history }) => {
  return (
    <MainLoginView history={history} />
  );
};

export default Login;
