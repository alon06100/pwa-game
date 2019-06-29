import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import getImageUrl from '../../AppCommon/helpers/assets';

const Pack = (props) => {
  const { id, previewBackgroundImage, texts, previewBackgroundColor, history } = props;
  const packAssetId = previewBackgroundImage.assetId;
  const [bestStreak, setBestStreak] = useState(0);

  useEffect(() => {
    const userStreak = Math.floor(Math.random() * 25) + 1;
    setBestStreak(userStreak);
  }, []);

  return (
    <div className="pack">
      <div className="pack-background">
        <img src={getImageUrl(`${packAssetId}.jpg`)} alt={id} />
      </div>
      <div className="pack-header">
        <i className="fas fa-share-alt" />
        {bestStreak ? <span className="strike-info">Best streak: {bestStreak}</span> : ''}
      </div>
      <div className="pack-body">
        <span className="pack-title">{texts.previewTitle.defaultText}</span>
        <span
          className="pack-description"
          style={{ backgroundImage: `linear-gradient(to right, ${previewBackgroundColor}, black)` }}
        >
          {texts.previewDescription.defaultText}
        </span>
        <div className="pack-action">
          <span className="pack-play-btn" onClick={() => history.push(`/game/${id}`)}>
          PLAY
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Pack);
