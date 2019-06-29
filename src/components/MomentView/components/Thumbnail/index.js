import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import GameScore from '../../widgets/GameScore';
import MainAssets from '../../widgets/MainAssets';
import momentsMock from '../../../../mocks/moments';

const bronze = require('../../../../media/moment/mini_card_bronze_bg.png');
const silver = require('../../../../media/moment/mini_card_silver_bg.png');
const gold = require('../../../../media/moment/mini_card_gold_bg.png');
const emptyCardMoment = require('../../../../media/ic_empty_card.png');

const backgrounds = {
  BRONZE: bronze,
  SILVER: silver,
  GOLD: gold,
};

const getBackgroundColor = (type, competitor) => {
  if (type) {
    return {
      background: `url(${backgrounds[type]}) no-repeat`,
      backgroundSize: 'cover',
    };
  }
  return {
    backgroundImage: `linear-gradient(to bottom, ${competitor.color}, black 80%)`,
    boxShadow: `inset 0 0 5px 0 ${competitor.color}`,
  };
};

const getTextGradientColor = (type, competitor) => {
  if (type) {
    return {
      backgroundImage: 'linear-gradient(to right, black, rgba(0,0,0,0) 80%)',
    };
  }
  return {
    backgroundImage: `linear-gradient(to right, ${competitor.color}, rgba(0,0,0,0) 80%)`,
  };
};

const MomentThumbnail = ({ history, type, id }) => {
  const [moment, setMoment] = useState(null);
  const [relatedCompetitor, setRelatedCompetitor] = useState(null);

  useEffect(() => {
    const data = momentsMock.find(m => m.metadata.id === id);
    const { competitors, relatedCompetitorId } = data.metadata;
    const competitor = competitors.find(c => c.id === relatedCompetitorId);
    setRelatedCompetitor(competitor);
    setMoment(data);
  }, []);

  const openMoment = () => {
    history.push(`/moments/${id}`);
  };

  return (
    <div className="moment-thumbnail">
      {moment
        ? (
          <div className="card" style={getBackgroundColor(type, relatedCompetitor)} onClick={openMoment}>
            <GameScore metadata={moment.metadata} eventData={moment.eventData} showLeague />
            <MainAssets assets={moment.assets.fullSizeAssets} res="thumbnail" />
            <div className="thumbnail-titles">
              <span className="thumb-title">{moment.details.title}</span>
              <span className="thumb-subtitle" style={getTextGradientColor(type, relatedCompetitor)}>
                {moment.details.subtitle}
              </span>
            </div>
            <div className="player-name">
              {moment.details.additionalInfo && moment.details.additionalInfo[0].field2}
            </div>
          </div>
        )
        : <img className="placeholder-img" src={emptyCardMoment} alt="empty-card" />
      }
    </div>
  );
};

export default withRouter(MomentThumbnail);
