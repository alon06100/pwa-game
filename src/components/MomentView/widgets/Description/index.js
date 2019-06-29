import React, { memo } from 'react';

const Description = ({ details }) => (
  <div className="moment-description">{details.description}</div>
);

export default memo(Description);
