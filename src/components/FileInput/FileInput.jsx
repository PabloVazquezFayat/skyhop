import './FileInput.css';
import React, { useState } from 'react';
import Button from '../Button/Button';

import { IoDocumentTextSharp } from 'react-icons/io5';
import { dedupFilesArray, returnFileSize } from '../../util/general';

export default function FileInput({ name, id, accept }) {
  const [files, setFiles] = useState([]);

  const handleFileAdd = (e) => {
    const files = Object.values(e.target.files).map((file) => file);

    setFiles((prevState) => {
      if (prevState.length) {
        return dedupFilesArray([...prevState, ...files]);
      }

      return [...files];
    });
  };

  const handleFileUpload = () => {
    console.log('run logic to upload', files);
  };

  return (
    <div className="file-input-container">
      <div className="file-input">
        <IoDocumentTextSharp />
        <label htmlFor={id}>
          drag & drop here or <b>browse</b>
        </label>
        <input
          type="file"
          name={name}
          id={id}
          multiple
          accept={accept}
          onChange={handleFileAdd}
        />

        {files.length ? (
          <ul className="file-input-list">
            {React.Children.toArray(
              files.map(({ name, size }) => (
                <li className="file-input-list__item">
                  <span>{name}</span>
                  <span>{returnFileSize(size)}</span>
                </li>
              ))
            )}
          </ul>
        ) : null}

        <Button text="upload manifest" onClick={handleFileUpload} />
      </div>
    </div>
  );
}
