import React from 'react';
import MomentThumbnail from '../../MomentView/components/Thumbnail';

const RewardsList = ({ rewards }) => {
  return (
    <div id="rewards-list">
      {rewards.map(reward => <MomentThumbnail key={reward.momentId} id={reward.momentId} type={reward.type} />)}
    </div>
  );
};


export default RewardsList;
