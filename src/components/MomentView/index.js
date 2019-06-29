import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MomentFrontBody from './components/FrontBody';
import MomentBackBody from './components/BackBody';
import MomentCard from './components/Card';
import { loadMoment, setRelatedCompetitor } from '../actions/moment';
import momentsMock from '../../mocks/moments';

const MomentView = ({ match }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hiddenCard, setHiddenCard] = useState('back');
  const { dataLoaded } = useSelector(state => state.moment);
  const dispatch = useDispatch();

  useEffect(() => {
    const moment = momentsMock.find(m => m.metadata.id === match.params.momentId);

    if (moment) {
      const { competitors, relatedCompetitorId } = moment.metadata;
      const competitor = competitors.find(c => c.id === relatedCompetitorId);
      dispatch(setRelatedCompetitor(competitor));
      dispatch(loadMoment(moment));
    }
  }, []);

  const handleFlipCards = () => {
    setIsFlipped(!isFlipped);

    if (hiddenCard === 'front') {
      setHiddenCard('back');
    } else {
      setHiddenCard('front');
    }
  };

  if (!dataLoaded) {
    return '';
  }

  return (
    <div id="moment-view">
      <div id="flipped-cards-container" className={isFlipped ? 'is-flipped' : ''}>
        <MomentCard sideClass={`front ${hiddenCard === 'front' ? 'hidden-card' : ''}`} handleFlipCards={handleFlipCards}>
          <MomentFrontBody />
        </MomentCard>
        <MomentCard sideClass={`back ${hiddenCard === 'back' ? 'hidden-card' : ''}`} handleFlipCards={handleFlipCards}>
          <MomentBackBody />
        </MomentCard>
      </div>
    </div>
  );
};

export default MomentView;
