import './Select.css';
import React from 'react';

export default function Select({ name, id, options, defaultValue }) {
  return (
    <div className="select">
      <select name={name} id={id}>
        <option defaultValue={defaultValue}>{defaultValue}</option>
        {options.length ? (
          React.Children.toArray(
            options.map(({ name, value }) => (
              <option value={value}>{name}</option>
            ))
          )
        ) : (
          <option value="nothing found">nothing found</option>
        )}
      </select>
    </div>
  );
}
