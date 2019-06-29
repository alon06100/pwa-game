import React, { memo } from 'react';
import getImageUrl from '../../../AppCommon/helpers/assets';

const getOptimizedUrl = (assetId, res) => {
  if (res === 'thumbnail') {
    return getImageUrl(`${assetId}.png`, 150);
  }
  return getImageUrl(`${assetId}.webp`);
};

const MainAssets = ({ assets, res }) => (
  <div className="main-assets-container">
    {assets.map((asset, index) => (
      <img key={index} className="full-size-asset" src={getOptimizedUrl(asset.assetId, res)} alt="full-asset" />
    ))}
  </div>
);

export default memo(MainAssets);
