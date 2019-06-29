import React from 'react';

const StartGameText = ({ texts }) => {
  return (
    <div className="start-game-text">
      <div>{texts.title.defaultText}</div>
      <div>{texts.description.defaultText}</div>
    </div>
  );
};

export default StartGameText;
