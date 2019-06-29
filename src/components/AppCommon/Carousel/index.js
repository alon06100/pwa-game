import React, { Fragment, useState, useMemo } from 'react';
import ReactSwipe from 'react-swipe';

const GetSlidesBullets = ({ slides, currSlide }) => {
  return (
    <div className="carousel-bullets">
      {slides.map((c, i) => (
        <div key={i} className={`bullet-item ${currSlide === i ? 'selected' : ''}`} />
      ))}
    </div>
  );
};

const GetSlides = ({ slides, handleSlideChange }) => {
  return useMemo(() => (
    <ReactSwipe swipeOptions={{ continuous: false, callback: handleSlideChange }}>
      {slides}
    </ReactSwipe>
  ), []);
};

const Carousel = ({ children }) => {
  const [currSlideIndex, setSlideIndex] = useState(0);

  return (
    <Fragment>
      <GetSlides
        slides={children}
        handleSlideChange={(i) => {
          setSlideIndex(i);
        }}
      />
      <GetSlidesBullets slides={children} currSlide={currSlideIndex} />
    </Fragment>
  );
};

export default Carousel;
