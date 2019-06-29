import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const heed = require('../../../media/footer/heed_icon.png');
const events = require('../../../media/footer/events_icon.png');
const play = require('../../../media/footer/play_icon.png');
const profile = require('../../../media/footer/profile_icon.png');

const navButtons = [
  { id: 1, label: 'Home', route: '/', icon: heed },
  { id: 2, label: 'Rewards', route: '/', icon: events },
  { id: 4, label: 'Play', route: '/', icon: play },
  { id: 5, label: 'Profile', route: '/profile', icon: profile },
];

const MenuButton = withRouter(({ label, icon, route, selected, setSelected, history }) => {
  const handleMenuButtonClick = () => {
    setSelected(label);
    history.push(route);
  };

  return (
    <div className={`menu-button ${selected === label ? 'selected' : ''}`} onClick={handleMenuButtonClick}>
      <img src={icon} align={label} alt={label} />
      <span>{label}</span>
    </div>
  );
});

const Footer = () => {
  const [selected, setSelected] = useState('Play');

  return (
    <div id="footer">
      {navButtons.map(button => (
        <MenuButton key={button.id} {...button} selected={selected} setSelected={setSelected} />
      ))}
    </div>
  );
};

export default Footer;
