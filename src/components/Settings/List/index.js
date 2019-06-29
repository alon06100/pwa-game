import React from 'react';
import ToggleButton from '../../AppCommon/ToggleButton';

const List = () => (
  <div id="settings-list">
    <div className="settings-list-item">
      Sound
      <ToggleButton />
    </div>
    <div className="settings-list-item">
      Notifications
      <ToggleButton />
    </div>
    <div className="settings-list-item">
      Sponsors
    </div>
    <div className="settings-list-item">
      Contact Us
    </div>
    <div className="settings-list-item">
      About
    </div>
    <div className="settings-list-item">
      Privacy
    </div>
  </div>
);

export default List;
