/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import ResultDisplay from './resultDisplay';
import ButtonPanel from './buttonPanel';

const calculator = () => {
  const [result, setResult] = useState([]);

  function handleChange(newValue) {
    setResult(newValue);
  }

  return (
    <>
      <ResultDisplay result={result} />
      <ButtonPanel onChange={handleChange} />
    </>
  );
};


export default calculator;
