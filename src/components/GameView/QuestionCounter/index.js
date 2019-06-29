import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

let timeInterval = null;

const QuestionCounter = ({ interval, done }) => {
  const [currentNumber, setCurrentNumber] = useState(interval);

  const countDown = () => {
    setCurrentNumber(currentNumber - 1);
  };

  useEffect(() => {
    if (currentNumber > 0) {
      timeInterval = setTimeout(countDown, 1000);
    } else {
      done();
    }
  }, [currentNumber]);

  useEffect(() => {
    return () => {
      return clearTimeout(timeInterval);
    };
  }, []);

  return (
    <div className="counter-container">
      <div className="counter">
        <CircularProgressbar
          value={(100 / interval) * currentNumber}
          text={`${currentNumber}`}
          strokeWidth={4}
          styles={buildStyles({
            textColor: 'white',
            pathColor: 'grey',
            trailColor: 'white',
          })}
        />
      </div>
    </div>
  );
};

export default QuestionCounter;
