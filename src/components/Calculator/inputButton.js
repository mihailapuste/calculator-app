import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

const inputButton = ({buttonStyle = 'input', label = '0', onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles[buttonStyle]} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </>
  );
};

inputButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  double: {
    margin: 5,
    borderRadius: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 80,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  input: {
    margin: 5,
    borderRadius: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 80,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  function: {
    margin: 5,
    borderRadius: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 80,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default inputButton;
