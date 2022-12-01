import './DataCheck.css';
import React from 'react';

export default function DataCheck({ header, status }) {
  return (
    <div className="data-check">
      <span className="data-check__header">{header}</span>
      <span className="data-check__status">{status}</span>
    </div>
  );
}
