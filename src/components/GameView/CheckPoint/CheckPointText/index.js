import React from 'react';

const CheckPointText = ({ reward }) => {
  return (
    <div className="check-point-view">
      <div className="check-point-text">
        <div>CONGRATULATIONS YOU HAVE EARNED {reward.type} REWARD!</div>
      </div>
    </div>
  );
};

export default CheckPointText;
