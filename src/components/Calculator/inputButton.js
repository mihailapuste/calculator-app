import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

const inputButton = (props) => {
  return (
    <>
      <TouchableOpacity
        style={props.isFunction ? styles.functionButton : styles.inputButton}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.label}</Text>
      </TouchableOpacity>
    </>
  );
};

inputButton.defaultProps = {
  label: '0',
  isFunction: false,
};

inputButton.propTypes = {
  label: PropTypes.string,
  isFunction: PropTypes.bool,
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputButton: {
    borderRadius: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 100,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  functionButton: {
    borderRadius: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 100,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default inputButton;
