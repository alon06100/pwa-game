import React, { useState } from 'react';

const ToggleButton = () => {
  const [isChecked, toggle] = useState(false);
  return (
    <div onClick={() => toggle(!isChecked)} className={`toggle-button ${isChecked ? 'checked' : 'unchecked'}`}>
      <div className="toggle-circle" />
    </div>
  );
};

export default ToggleButton;
