import React from 'react';
import { useSelector } from 'react-redux';
import MomentHeader from '../Header';
import MomentFooter from '../Footer';

const MomentCard = ({ sideClass, handleFlipCards, children }) => {
  const { relatedCompetitor } = useSelector(state => state.moment);
  return (
    <div
      id="moment-card"
      className={sideClass}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${relatedCompetitor.color}, black 80%)`,
        boxShadow: `inset 0px 0px 10px 3px ${relatedCompetitor.color}`,
      }}
    >
      <MomentHeader />
      {children}
      <MomentFooter flipCard={handleFlipCards} />
    </div>
  );
};

export default MomentCard;
