/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {InOutContext} from './InOutContext';
import ResultDisplay from './resultDisplay';
import ButtonPanel from './buttonPanel';
import ResultHistoryDisplayLog from './resultHistoryDisplayLog';

const calculator = () => {
  const [inOutArray, setInOutArray] = useState([]);

  const providerValue = useMemo(() => ({inOutArray, setInOutArray}), [
    inOutArray,
    setInOutArray,
  ]);

  return (
    <>
      <InOutContext.Provider value={providerValue}>
        <View style={styles.calculatorContainer}>
          <ResultDisplay />
          <ButtonPanel />
        </View>
        {/* <View style={styles.logContainer}>
          <ResultHistoryDisplayLog />
        </View> */}
      </InOutContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    margin: '5%',
    height: '100%',
  },

});

export default calculator;
