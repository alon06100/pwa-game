import React, { memo } from 'react';
import getImageUrl from '../../../AppCommon/helpers/assets';

const Background = ({ image }) => (
  <div className="moment-background">
    <img className="background-image" src={getImageUrl(image)} alt="background" />
  </div>
);

export default memo(Background);
