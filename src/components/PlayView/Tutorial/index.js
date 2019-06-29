import React, { useState, useEffect } from 'react';
import TutorialSlide from './TutorialSlide';
import Carousel from '../../AppCommon/Carousel';
import TutorialMock from '../../../mocks/tutorial';

const Tutorial = () => {
  const [slides, setTutorialSlides] = useState([]);

  useEffect(() => {
    setTutorialSlides(TutorialMock);
  }, []);

  return (
    <div id="tutorial-page">
      <div id="tutorial-carousel-wrapper">
        {slides.length ? (
          <Carousel>
            {slides.map((slide, index) => (
              <TutorialSlide
                key={slide.id}
                slide={slide}
                index={index}
                slidesCount={slides.length}
              />
            ))}
          </Carousel>
        ) : ''}
      </div>
    </div>
  );
};

export default Tutorial;
