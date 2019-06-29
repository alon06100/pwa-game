import React, { memo, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../../../AppCommon/Carousel';
import Pulse from '../../widgets/Pulse';
import Background from '../../widgets/Background';
import Description from '../../widgets/Description';

const field = require('../../../../media/moment/ic_goal_large.png');
const ball = require('../../../../media/moment/ic_ball.png');

const MomentBackBody = () => {
  const { assets, details, digitalRepresentation } = useSelector(state => state.moment);
  const fieldRef = useRef(null);

  useEffect(() => {
    // const { x, y } = digitalRepresentation[0].position;
    // const fieldWidth = fieldRef.current.clientWidth;
    // const fieldHeight = fieldRef.current.clientHeight;
    // console.log('Width - ', fieldWidth);
    // console.log('Height - ', fieldHeight);
    // console.log('x - ', x);
    // console.log('y - ', y);
  }, []);

  return (
    <div id="back-moment-body" className="moment-body">
      <Background image={assets.backgroundImage} />
      <div id="back-moment-info">
        <span className="moment-title">{details.title}</span>
        <span className="moment-subtitle">
          <span className="subtitle-text">{details.subtitle}</span>
          <div className="subtitle-info">
            <span className="moment-score">0 - 1</span>
            <span className="moment-minute">43 MIN</span>
          </div>
        </span>
        <Description details={details} />
        <Carousel>
          <div className="field-position">
            <img className="field-img" src={field} alt="field" ref={fieldRef} />
            <img className="field-ball" style={{ top: '20px', left: '100px' }} src={ball} alt="ball" />
          </div>
          <div className="field-position">
            <img className="field-img" src={field} alt="field" />
            <img className="field-ball" style={{ top: '20px', left: '100px' }} src={ball} alt="ball" />
          </div>
        </Carousel>
        <Pulse />
      </div>
    </div>
  );
};

export default memo(MomentBackBody);
