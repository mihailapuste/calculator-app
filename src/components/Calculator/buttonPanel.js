/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import InputButton from './inputButton';
import useToCalculate from './useToCalculate';

const buttonPanel = (props) => {
  const [inputArray, setInputArray] = useState([]);

  useEffect(() => {
    props.onChange(inputArray);
  }, [inputArray, props]);

  const onChangeInputArray = (input) => {
    setInputArray([...inputArray, input]);
  };

  const onCalculateResult = () => {
    setInputArray([...inputArray, '=']);
    setInputArray(useToCalculate(inputArray));
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <InputButton label="CLR" isFunction onPress={() => setInputArray([])} />
        <InputButton
          label="√"
          isFunction
          onPress={() => onChangeInputArray('√')}
        />
        <InputButton
          label="+"
          isFunction
          onPress={() => onChangeInputArray('+')}
        />
        <InputButton
          label="-"
          isFunction
          onPress={() => onChangeInputArray('-')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <InputButton label="7" onPress={() => onChangeInputArray('7')} />
        <InputButton label="8" onPress={() => onChangeInputArray('8')} />
        <InputButton label="9" onPress={() => onChangeInputArray('9')} />
        <InputButton
          label="x"
          isFunction
          onPress={() => onChangeInputArray('x')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <InputButton label="4" onPress={() => onChangeInputArray('4')} />
        <InputButton label="5" onPress={() => onChangeInputArray('5')} />
        <InputButton label="6" onPress={() => onChangeInputArray('6')} />
        <InputButton
          label="%"
          isFunction
          onPress={() => onChangeInputArray('%')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <InputButton label="1" onPress={() => onChangeInputArray('1')} />
        <InputButton label="2" onPress={() => onChangeInputArray('2')} />
        <InputButton label="3" onPress={() => onChangeInputArray('3')} />
        <InputButton label="=" isFunction onPress={() => onCalculateResult()} />
      </View>
      <View style={styles.buttonContainer}>
        <InputButton label="0" onPress={() => onChangeInputArray('0')} />
        <InputButton label="." 
        // onPress={() => onChangeInputArray('.')}
         />
        <InputButton
          label="("
          isFunction
          // onPress={() => onChangeInputArray('(')}
        />
        <InputButton
          label=")"
          isFunction
          // onPress={() => onChangeInputArray(')')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'stretch',
  },
  clearButton: {
    width: '50%',
    height: 100,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
  },
  functionButton: {
    width: '25%',
    height: 100,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default buttonPanel;
