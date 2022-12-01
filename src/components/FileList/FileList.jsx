import './FileList.css';
import React from 'react';
import { BsFileEarmarkImage } from 'react-icons/bs';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function FileList({ files }) {
  const calculatePercentage = (sizeNumber) => {
    return `${Math.ceil((sizeNumber / 1024) * 100)}%`;
  };

  return (
    <div className="file-list">
      <ul>
        {files.length
          ? React.Children.toArray(
              files.map(({ name, sizeText, sizeNumber }) => (
                <li>
                  <BsFileEarmarkImage />
                  <div className="file-list__wrapper">
                    <div className="file-list__name-size">
                      <span>{name}</span>
                      <span>{sizeText}</span>
                    </div>
                    <ProgressBar percentage={calculatePercentage(sizeNumber)} />
                  </div>
                </li>
              ))
            )
          : null}
      </ul>
    </div>
  );
}
