import './ProgressBar.css';
import React from 'react';

export default function ProgressBar({ percentage }) {
  const progressBarStyle = {
    width: percentage || '3%',
  };

  return (
    <div className="progressbar">
      <span className="progressbar__indicator" style={progressBarStyle}></span>
    </div>
  );
}
