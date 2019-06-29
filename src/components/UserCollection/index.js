import React, { useEffect, useState } from 'react';
import MomentThumbnail from '../MomentView/components/Thumbnail';
import AppHeader from '../AppCommon/Header';
import UserScoreInfo from '../Profile/UserScoreInfo';
import momentsMock from '../../mocks/moments';

const UserCollection = ({ match: { params } }) => {
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    const types = ['GOLD', 'SILVER', 'BRONZE'];
    const favorites = momentsMock.map((m) => {
      const type = types[Math.floor(Math.random() * types.length)];
      return { id: m.metadata.id, type };
    });
    setMoments(favorites);
  }, []);

  return (
    <div id="user-collection-view">
      <AppHeader text={params.collection} showBackBtn showShareBtn />
      <UserScoreInfo name="OR BEN DAHAN" score="2568" />
      <div className="user-moments-container">
        {moments.map(moment => (
          <MomentThumbnail key={moment.id} id={moment.id} type={moment.type} />
        ))}
        {moments.length % 3 ? <div className="moment-thumbnail" /> : ''}
      </div>
    </div>
  );
};

export default UserCollection;
