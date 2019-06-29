import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import Rewards from '../Rewards';
import CheckPointText from './CheckPointText'

const CheckPoint = ({ assetId, reward, continueGame }) => {
  return (
    <div id="check-point">
      <Banner assetId={assetId} />
      <CheckPointText reward={reward} />
      <Footer action={continueGame} text="KEEP GOING " />
      <Rewards rewards={[reward]} />
    </div>
  );
};

export default CheckPoint;
