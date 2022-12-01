import './App.css';
import React from 'react';
import Button from './components/Button/Button';
import CloseButton from './components/CloseButton/CloseButton';
import DataCheck from './components/DataCheck/DataCheck';
import FileInput from './components/FileInput/FileInput';
import FileList from './components/FileList/FileList';
import Hr from './components/Hr/Hr';
import RadioGroup from './components/RadioGroup/RadioGroup';
import Select from './components/Select/Select';
import TestingCenter from './components/TestingCenter/TestingCenter';
import TextField from './components/TextField/TextField';
import Tolerance from './components/Tolerance/Tolerance';
import { cssVars } from './util/cssVars';

function App() {
  const importNameOptions = [
    {
      name: 'import name one',
      value: 'import name one',
    },
    {
      name: 'import name two',
      value: 'import name two',
    },
    {
      name: 'import name three',
      value: 'import name three',
    },
  ];

  const fileList = [
    {
      name: 'WN-DAL-0726-NH20166.csv',
      sizeText: '378 kb',
      sizeNumber: 378,
    },
    // {
    //   name: 'WN-DAL-0755-NH20155.csv',
    //   sizeText: '238 kb',
    //   sizeNumber: 238,
    // },
  ];

  const splitScheduleOptions = [
    {
      id: 'split-schedule-yes',
      name: 'split-schedule',
      value: 'yes',
      label: 'yes',
    },
    {
      id: 'split-schedule-no',
      name: 'split-schedule',
      value: 'no',
      label: 'no',
    },
  ];

  const clientOptions = [
    {
      id: 'client-single',
      name: 'client',
      value: 'single',
      label: 'single',
    },
    {
      id: 'client-multiple',
      name: 'client',
      value: 'multiple',
      label: 'multiple',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submite form logic, validation, sanitation and api.');
  };

  const handleCancel = () => {
    console.log('handle cancel click logic.');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="container__button">
          <CloseButton />
        </div>

        <div className="container__header">
          <h1>document upload</h1>
        </div>

        <form className="container__form" onSubmit={handleSubmit}>
          <div className="container__form__wrapper">
            <div className="container__form__left-section">
              <Select
                name="import name"
                id="importNameSelect"
                options={importNameOptions}
                defaultValue="select import name:"
              />
              <Hr />
              <TextField text="Select a manifest that you'd like to import" />
              <FileInput name="fileInput" id="fileInput" accept={'.csv'} />
              <FileList files={fileList} />
              <Hr />
              <DataCheck
                header="elapse data checking:"
                status="no elapsed dates!"
              />
              <Hr margin="10px 0" />
              <Tolerance />
            </div>

            <div className="container__form__right-section">
              <RadioGroup
                header="Split schedule using social distance?"
                options={splitScheduleOptions}
              />
              <Hr />
              <DataCheck header="location checking:" status="all available!" />
              <Hr margin="10px 0" />
              <RadioGroup header="Client:" options={clientOptions} />
              <TestingCenter label="testing center 1" />
              <TestingCenter label="testing center 2" />
              <TestingCenter label="testing center 3" />
              <TestingCenter label="testing center 4" />
            </div>
          </div>

          <div className="container__form__footer">
            <h3>
              Data in the import file is correct. Please press Continue to
              import.
            </h3>
            <div className="container__form__buttons">
              <Button
                text="continue import"
                padding="10px 25px"
                type="submit"
              />
              <Button
                text="cancel"
                padding="10px 25px"
                bgColor="transparent"
                textColor={cssVars.orange}
                borderColor={cssVars.orange}
                onClick={handleCancel}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
