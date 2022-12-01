import './Toggle.css';
import React, { useState } from 'react';

export default function Toggle() {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => setIsActive((prevState) => !prevState);

  return (
    <label className="toggle">
      <input type="checkbox" defaultChecked={isActive} onChange={handleClick} />
      <i></i>
      <span>{isActive ? 'Toggle ON' : 'Toggle OFF'}</span>
    </label>
  );
}
