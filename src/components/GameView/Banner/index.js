import React from 'react';
import getImageUrl from '../../AppCommon/helpers/assets';

const Banner = ({ assetId }) => (
  <div className="banner">
    <img src={getImageUrl(`${assetId}.jpg`)} alt="bg" />
  </div>
);

export default Banner;
