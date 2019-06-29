import React, { useState, useEffect } from 'react';
import AppHeader from '../../AppCommon/Header';
import LoginActionButtons from '../ActionButtons';

const visiblePassword = require('../../../media/icons/ic_visibility.png');
const hiddenPassword = require('../../../media/icons/visibility_off.png');

const GetRegistrationText = () => (
  <div className="form-text">
    <span>We will send an email verification link</span>
    <span>to the email address you provided.</span>
  </div>
);

const UserLoginForm = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    const formState = history.location.pathname.replace('/', '').replace('-', ' ');
    setState(formState);
    if (formState === 'register') {
      setIsRegister(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hereeee');
  };

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div id="login-view-container">
      <AppHeader text={state} showBackBtn />
      <div id="user-form">
        <form onSubmit={handleSubmit}>
          {isRegister && <input type="text" onChange={setName} placeholder="Name" />}
          <input type="email" onChange={setEmail} placeholder="Email" />
          <div id="" />
          <div className="password-container">
            <input type={passwordVisible ? 'text' : 'password'} onChange={setPassword} placeholder="Password" />
            {passwordVisible && <img src={visiblePassword} alt="show password" onClick={togglePassword} />}
            {!passwordVisible && <img src={hiddenPassword} alt="hide password" onClick={togglePassword} />}
          </div>
          {isRegister
            ? <GetRegistrationText />
            : <div className="form-text" onClick={() => history.push('/forgot-password')}>Forgot password?</div>
          }
          <LoginActionButtons text={state} submit facebook />
        </form>
      </div>
    </div>
  );
};

export default UserLoginForm;
