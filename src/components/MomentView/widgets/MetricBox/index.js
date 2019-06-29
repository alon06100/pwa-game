import React, { memo } from 'react';

const MetricBox = ({ metrics, relatedCompetitor }) => (
  <div id="metric-box-wrapper">
    <div style={{ backgroundImage: `linear-gradient(to left, ${relatedCompetitor.color} 10%, rgba(0,0,0,0))` }} id="metric-box">
      <div id="metric-title">
        {metrics[0].name}
      </div>
      <div id="metric-value">
        {metrics[0].value}%
      </div>
    </div>
  </div>
);

export default memo(MetricBox);
