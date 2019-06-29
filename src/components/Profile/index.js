import React, { useState, useEffect } from 'react';
import View from '../AppCommon/VIewHoc';
import CollectionList from './CollectionList';
import UserInfo from './UserInfo';
import momentsMock from '../../mocks/moments';

const collectedMoments = momentsMock.slice(0, 4).map(m => ({ id: m.metadata.id }));

const Profile = () => {
  const [awsUser] = useState({ name: 'or ben dahan' });
  const [score] = useState(2355);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const types = ['GOLD', 'SILVER', 'BRONZE'];
    const favorites = momentsMock.slice(4, momentsMock.length).map((m) => {
      const type = types[Math.floor(Math.random() * types.length)];
      return { id: m.metadata.id, type };
    });
    setRewards(favorites);
  }, []);

  return (
    <View>
      <div id="profile-page">
        <UserInfo score={score} user={awsUser} />
        <CollectionList
          className="user-rewards"
          title="legendary moments"
          user={awsUser.externalUserId}
          collection={rewards}
        />
        <CollectionList
          className="user-collected"
          title="collection"
          user={awsUser.externalUserId}
          collection={collectedMoments}
        />
      </div>
    </View>
  );
};

export default Profile;
