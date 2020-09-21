/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useMemo} from 'react';
import {StyleSheet, View, SafeAreaView, Button} from 'react-native';
import {InOutContext} from './InOutContext';
import ResultDisplay from './resultDisplay';
import ButtonPanel from './buttonPanel';

const calculator = ({navigation}) => {
  const [inOutArray, setInOutArray] = useState([]);

  const providerValue = useMemo(() => ({inOutArray, setInOutArray}), [
    inOutArray,
    setInOutArray,
  ]);

  return (
    <SafeAreaView>
      <InOutContext.Provider value={providerValue}>
        <View style={styles.calculatorContainer}>
          <ResultDisplay />
          <ButtonPanel />
        </View>
      </InOutContext.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    margin: '5%',
    height: '100%',
  },
});

export default calculator;
