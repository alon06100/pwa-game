import React, { useState } from 'react';
import AppHeader from '../../AppCommon/Header';
import LoginActionButtons from '../ActionButtons';

const GetUserEmail = ({ handleSubmit, setEmail }) => (
  <form onSubmit={handleSubmit}>
    <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
    <LoginActionButtons text="reset password" submit />
  </form>
);

const ShowEmailSentMessage = ({ email }) => (
  <div id="password-restored-message">
    <div id="user-email-restored">
      <p>Password reset link was sent to:</p>
      <p>{email}</p>
    </div>
    <LoginActionButtons text="go to login" link="/login" />
  </div>
);

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isMailSent, setMailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMailSent(true);
    console.log('Restore password - ', email);
  };

  return (
    <div id="login-view-container">
      <AppHeader text="Forgot Password" showBackBtn />
      <div id="user-form">
        {isMailSent
          ? <ShowEmailSentMessage email={email} />
          : <GetUserEmail handleSubmit={handleSubmit} setEmail={setEmail} />}
      </div>
    </div>
  );
};

export default ForgotPassword;
