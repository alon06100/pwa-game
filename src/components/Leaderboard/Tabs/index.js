import React, { Fragment } from 'react';

const Tabs = ({ menuPosition, togglePosition }) => {
  return (
    <Fragment>
      <div id="leaderboad-page-menu">
        <div onClick={() => togglePosition('left')}>PREVIOUS</div>
        <div onClick={() => togglePosition('right')}>THIS WEEK</div>
      </div>
      <div id="menu-line-wrapper">
        <div id="menu-line" className={menuPosition} />
      </div>
    </Fragment>
  );
};

export default Tabs;
