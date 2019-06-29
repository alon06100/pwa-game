import React from 'react';
import { withRouter } from 'react-router-dom';

const backButtonIcon = require('../../.../../../media/ic-arrow-left.png');
const shareIcon = require('../../.../../../media/share_icon.png');

const Header = ({ history, text, showBackBtn, showShareBtn }) => {
  const handleBackButton = () => {
    try {
      history.goBack();
    } catch (e) {
      history.push('/');
    }
  };

  const handleShareButton = () => {
    navigator.share({
      title: 'HEED IQ',
      text: 'Check out HEED IQ game — it rocks!',
      url: window.location.href,
    })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing', error));
  };

  return (
    <div id="app-page-header">
      {showBackBtn ? (
        <img id="go-back-button" src={backButtonIcon} alt="close" onClick={handleBackButton} />
      )
        : <div style={{ width: '30px' }} />}
      <div id="header-title">{text}</div>
      {showShareBtn ? (
        <img id="share-button" src={shareIcon} alt="close" onClick={handleShareButton} />
      ) : <div style={{ width: '20px' }} />
      }
    </div>
  );
};

export default withRouter(Header);
