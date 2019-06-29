import React from 'react';
import { Link } from 'react-router-dom';
import getImageUrl from '../../../AppCommon/helpers/assets';

const Title = ({ slide }) => (
  <div className="tutorial-item-title">
    {slide.localizedTitle.defaultText}
  </div>
);

const MainImage = ({ slide }) => (
  <img className="tutorial-item-image" src={getImageUrl(slide.image.assetId, 520)} alt="bg-slide" />
);

const Text = ({ slide }) => (
  <span>
    {slide.localizedText.defaultText}
  </span>
);

const PlayButton = () => (
  <div id="play-now-button">
    <Link to="/">
      <span>PLAY NOW!</span>
    </Link>
  </div>
);

const TutorialSlide = ({ slide, index, slidesCount }) => (
  <div className="tutorial-item">
    <div className="item-container">
      <Title slide={slide} />
      <MainImage slide={slide} />
      <Text slide={slide} />
      {
      index === slidesCount - 1
      && (
        <PlayButton />
      )
    }
    </div>
  </div>
);

export default TutorialSlide;
