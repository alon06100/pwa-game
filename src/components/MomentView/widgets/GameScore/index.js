import React, { memo } from 'react';
import getImageUrl from '../../../AppCommon/helpers/assets';

const GameScore = ({ metadata, eventData, showLeague }) => {
  const { competitors, timestamp, league } = metadata;
  const firstTeamAsset = competitors[0].thumbnails.LIVE.assetId;
  const secondTeamAsset = competitors[1].thumbnails.LIVE.assetId;

  return (
    <div className="game-score">
      {showLeague && <img src={getImageUrl(league.icon, 45, 45)} alt={metadata.league.type} />}
      <div className="scores-row">
        {firstTeamAsset && <img src={getImageUrl(firstTeamAsset, 45, 45)} alt={competitors[0].name} />}
        <div className="scores">
          <span>{eventData.eventResult.scores[0]}</span>
          <span> - </span>
          <span>{eventData.eventResult.scores[1]}</span>
        </div>
        {secondTeamAsset && <img src={getImageUrl(secondTeamAsset, 45, 45)} alt={competitors[1].name} />}
      </div>
      <div className="event-date">{new Date(timestamp).toDateString()}</div>
    </div>
  );
};


export default memo(GameScore);
