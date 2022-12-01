import './Tolerance.css';
import React from 'react';
import Toggle from '../Toggle/Toggle';
import TimeSelector from '../TimeSelector/TimeSelector';

export default function Tolerance() {
  return (
    <div className="tolerance">
      <span className="tolerance__header">tolerance window:</span>
      <div className="tolerance__wrapper">
        <Toggle />
        <TimeSelector label="select tolerance level" />
      </div>
    </div>
  );
}
