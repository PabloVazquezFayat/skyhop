import './RadioGroup.css';
import React from 'react';

export default function RadioGroup({ header, options }) {
  return (
    <div className="radio-group">
      <span className="radio-group__header">{header}</span>
      <fieldset>
        {React.Children.toArray(
          options.map(({ id, name, value, label }) => (
            <>
              <input type="radio" id={id} name={name} value={value} />
              <label htmlFor={id}>{label}</label>
            </>
          ))
        )}
      </fieldset>
    </div>
  );
}
