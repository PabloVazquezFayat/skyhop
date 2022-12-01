import './/CloseButton.css';
import React from 'react';
import { TfiClose } from 'react-icons/tfi';

export default function CloseButton() {
  return (
    <button className="closeButton">
      <TfiClose />
    </button>
  );
}
