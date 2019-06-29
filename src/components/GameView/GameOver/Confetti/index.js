import React from 'react';

const confettiImg = require('../../../../media/bg_confetty.png');

const Confetti = () => {
  return (
    <div className="confetti">
      <img src={confettiImg} alt="confetti-img" />
    </div>
  );
};

export default Confetti;
