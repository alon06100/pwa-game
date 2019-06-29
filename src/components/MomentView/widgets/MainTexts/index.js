import React, { memo } from 'react';

const MainTexts = ({ details, relatedCompetitor }) => (
  <div id="main-texts-wrapper">
    <div style={{ backgroundImage: `linear-gradient(to right, ${relatedCompetitor.color} 30%, rgba(0,0,0,0))` }} id="subtitle-background" />
    <div id="main-texts">
      <div className="moment-title">{details.title}</div>
      <div className="moment-subtitle">{details.subtitle} | MIN 43</div>
    </div>
  </div>
);

export default memo(MainTexts);
