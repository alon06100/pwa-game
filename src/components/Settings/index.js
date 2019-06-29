import React from 'react';
import List from './List';
import Header from '../AppCommon/Header';
import UserInformation from './UserInformation';

const Settings = () => {
  return (
    <div id="settings-page">
      <Header text="Settings" showBackBtn />
      <UserInformation />
      <List />
    </div>
  );
};
export default Settings;
