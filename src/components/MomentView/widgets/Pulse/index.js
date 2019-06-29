import React, { useState, memo } from 'react';

const scrollIcon = require('../../../../media/moment/ic_scroll_horizontal.png');

const data = [12, 34, 5, 66, 78, 9, 87, 45, 64, 23, 44, 56, 78, 90, 25, 62, 65, 32, 45, 86, 12, 34, 5, 66, 78, 9, 87, 45, 64, 23, 44, 56, 78, 90, 25, 62, 65, 32, 45, 86, 32, 45, 65, 32, 43, 65, 87, 98, 34, 56, 78, 23, 45, 56, 67, 78, 89, 65, 12, 34, 45, 56, 67, 78, 89, 33];

const Pulse = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  return (
    <div id="pulse-container" onTouchStart={() => setShowScrollIcon(false)}>
      {data.map((pulse, i) => (
        <div key={i} className="pulse-item">
          <div className="empty-space" />
          <div className="pulse-bar" style={{ height: `${pulse}%` }} />
          <div className="pulse-half-line" />
        </div>
      ))}
      {showScrollIcon ? <img id="scroll-icon" src={scrollIcon} alt="scroll" /> : ''}
    </div>
  );
};

export default memo(Pulse);
