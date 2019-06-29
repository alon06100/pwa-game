import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Background from '../../widgets/Background';
import MainAssets from '../../widgets/MainAssets';
import MainTexts from '../../widgets/MainTexts';
import MetricBox from '../../widgets/MetricBox';
import AdditionalInfo from '../../widgets/AdditionalInfo';
import Description from '../../widgets/Description';

const MomentFrontBody = () => {
  const {
    details,
    metrics,
    relatedCompetitor,
    assets: { backgroundImage, fullSizeAssets },
  } = useSelector(state => state.moment);

  return (
    <div id="front-moment-body" className="moment-body">
      <Background image={backgroundImage} />
      <MainAssets assets={fullSizeAssets} />
      <div id="front-moment-info">
        <MainTexts details={details} relatedCompetitor={relatedCompetitor} />
        <MetricBox metrics={metrics} relatedCompetitor={relatedCompetitor} />
        <AdditionalInfo details={details} />
        <Description details={details} />
      </div>
    </div>
  );
};

export default memo(MomentFrontBody);
