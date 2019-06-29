import React, { Fragment } from 'react';
import Footer from '../Footer';

const View = ({ children }) => (
  <Fragment>
    <div className="view">
      {children}
    </div>
    <Footer />
  </Fragment>
);

export default View;
