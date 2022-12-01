import './Hr.css';
import React from 'react';

export default function Hr({ margin }) {
  const styleOverride = {
    margin: margin || '20px 0 10px 0',
  };
  return <hr className="hr" style={styleOverride} />;
}
