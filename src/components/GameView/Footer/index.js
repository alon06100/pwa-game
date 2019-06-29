import React from 'react';

const Footer = ({ action, text }) => (
  <div className="footer">
    <div onClick={() => action()} className="footer-action-btn">
      <div className="footer-action-btn-text">{text}<i className="fas fa-arrow-right" /></div>
    </div>
  </div>
);

export default Footer;
