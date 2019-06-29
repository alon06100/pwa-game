import React from 'react';

const flipIcon = require('../../../../media/moment/ic_flip.png');
const collectIcon = require('../../../../media/moment/ic_collect.png');

const MomentFooter = ({ flipCard }) => {
  return (
    <div id="moment-footer">
      <img id="flip-icon" src={flipIcon} alt="flip" onClick={flipCard} />
      <img id="collect-icon" src={collectIcon} alt="collect" />
    </div>
  );
};

export default MomentFooter;
