import './TimeSelector.css';
import React from 'react';
import { MdAccessTime } from 'react-icons/md';

export default function TimeSelector({ label }) {
  return (
    <div className="time-selector">
      <MdAccessTime />
      {label && <label>{label}</label>}
    </div>
  );
}
