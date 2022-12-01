import './TestingCenter.css';
import React from 'react';
import Select from '../Select/Select';
import TimeSelector from '../TimeSelector/TimeSelector';

export default function TestingCenter({ label }) {
  const clientOptions = [
    {
      name: 'Client 1',
      value: 'Client 1',
    },
    {
      name: 'Client 2',
      value: 'Client 2',
    },
    {
      name: 'Client 3',
      value: 'Client 3',
    },
  ];

  return (
    <div className="testing-center">
      <label>{label}</label>
      <Select
        name="testing-center"
        id="testing-center"
        defaultValue="select client"
        options={clientOptions}
      />
      <TimeSelector />
    </div>
  );
}
