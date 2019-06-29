import React, { useEffect } from 'react';
import LeaderBoard from './LeaderBoard';
import PacksList from './PacksList';
import View from '../AppCommon/VIewHoc';
import Tutorial from './Tutorial';

let showTutorial = true;
const PlayView = () => {
  useEffect(() => {
    showTutorial = false;
  }, []);
  return (
    <View>
      {showTutorial && <Tutorial />}
      <LeaderBoard />
      <PacksList />
    </View>
  );
};

export default PlayView;
