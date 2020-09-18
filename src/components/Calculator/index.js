/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useContext} from 'react';
import {InOutContext} from './InOutContext';
import ResultDisplay from './resultDisplay';
import ButtonPanel from './buttonPanel';

const calculator = () => {
  const [inOutArray, setInOutArray] = useState([]);

  return (
    <>
      <InOutContext.Provider value={{inOutArray, setInOutArray}}>
        <ResultDisplay />
        <ButtonPanel />
      </InOutContext.Provider>
    </>
  );
};

export default calculator;
