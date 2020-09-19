/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {InOutContext} from './InOutContext';

const resultHistoryDisplayLogContainer = () => {
  const {inOutArray} = useContext(InOutContext);

  return (
    <>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{inOutArray}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    borderRadius: 20,
    // position: 'relative',
    // alignItems: 'flex-end',
    backgroundColor: 'orange',
    height: '100%',
    // width: '100%',
    borderColor: 'black',
    borderWidth: 1,
  },
  resultText: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default resultHistoryDisplayLogContainer;
