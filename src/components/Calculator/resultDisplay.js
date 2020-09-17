import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const resultDisplay = (props) => {
  return (
    <>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{props.result}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    position: 'relative',
    alignItems: 'flex-end',
    backgroundColor: 'orange',
    height: 100,
    width: '100%',
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

resultDisplay.defaultProps = {
  result: [],
};

resultDisplay.propTypes = {
  result: PropTypes.arrayOf(String),
};

export default resultDisplay;
