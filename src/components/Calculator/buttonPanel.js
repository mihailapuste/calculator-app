/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext} from 'react';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import {InOutContext} from './InOutContext';
import InputButton from './inputButton';
import useToCalculate from './useToCalculate';

const buttonPanel = () => {
  const {inOutArray, setInOutArray} = useContext(InOutContext);

  const onChangeInputArray = (input) => {
    setInOutArray([...inOutArray, input]);
  };

  const onCalculateResult = () => {
    setInOutArray([...inOutArray, '=']);
    const calculatedResult = useToCalculate(inOutArray);
    setInOutArray(calculatedResult);
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <InputButton
          label="CLR"
          buttonStyle="function"
          onPress={() => setInOutArray([])}
        />
        <InputButton
          label="√"
          buttonStyle="function"
          onPress={() => onChangeInputArray('√')}
        />
        <InputButton
          label="÷"
          buttonStyle="function"
          onPress={() => onChangeInputArray('÷')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <InputButton label="7" onPress={() => onChangeInputArray('7')} />
        <InputButton label="8" onPress={() => onChangeInputArray('8')} />
        <InputButton label="9" onPress={() => onChangeInputArray('9')} />
        <InputButton
          label="x"
          buttonStyle="function"
          onPress={() => onChangeInputArray('x')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <InputButton label="4" onPress={() => onChangeInputArray('4')} />
        <InputButton label="5" onPress={() => onChangeInputArray('5')} />
        <InputButton label="6" onPress={() => onChangeInputArray('6')} />
        <InputButton
          label="+"
          buttonStyle="function"
          onPress={() => onChangeInputArray('+')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <InputButton label="1" onPress={() => onChangeInputArray('1')} />
        <InputButton label="2" onPress={() => onChangeInputArray('2')} />
        <InputButton label="3" onPress={() => onChangeInputArray('3')} />
        <InputButton
          label="-"
          buttonStyle="function"
          onPress={() => onChangeInputArray('-')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <InputButton
          label="0"
          buttonStyle="double"
          onPress={() => onChangeInputArray('0')}
        />
        <InputButton label="." onPress={() => onChangeInputArray('.')} />
        <InputButton
          label="="
          buttonStyle="function"
          onPress={() => onCalculateResult()}
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
});

export default buttonPanel;
