import React from 'react';
import { useSelector } from 'react-redux';
import GameScore from '../../widgets/GameScore';
import GoBackIcon from '../../../AppCommon/GoBack';
import '../../../../styles/moment/header.scss';

const closeIcon = require('../../../../media/close_icon.png');

const MomentHeader = () => {
  const { metadata, eventData } = useSelector(state => state.moment);

  return (
    <div id="moment-header">
      <GoBackIcon icon={closeIcon} />
      <GameScore metadata={metadata} eventData={eventData} />
      <i className="fas fa-share-alt" />
    </div>
  );
};

export default MomentHeader;
