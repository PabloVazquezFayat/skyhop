import React from 'react';
import { cssVars } from '../../util/cssVars';

export default function Button({
  text,
  textColor,
  borderColor,
  bgColor,
  padding,
  width,
  height,
  type,
  onClick,
}) {
  const { blue, white, xsmRadius, lgFw } = cssVars;

  const buttonStyleOverride = {
    backgroundColor: bgColor || '#1c3e6e',
    width: width || '250px',
    height: height || 'auto',
    border: `solid 2px ${borderColor || blue}`,
    borderRadius: xsmRadius,
    textTransform: 'capitalize',
    color: textColor || white,
    padding: padding || '5px 15px',
    cursor: 'pointer',
    fontWeight: lgFw,
  };

  return (
    <button
      className="button"
      style={buttonStyleOverride}
      type={type || 'button'}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
