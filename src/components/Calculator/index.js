/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useMemo} from 'react';
import {InOutContext} from './InOutContext';
import ResultDisplay from './resultDisplay';
import ButtonPanel from './buttonPanel';

const calculator = () => {
  const [inOutArray, setInOutArray] = useState([]);

  const providerValue = useMemo(() => ({inOutArray, setInOutArray}), [
    inOutArray,
    setInOutArray,
  ]);

  return (
    <>
      <InOutContext.Provider value={providerValue}>
        <ResultDisplay />
        <ButtonPanel />
      </InOutContext.Provider>
    </>
  );
};

export default calculator;
