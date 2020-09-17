/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const useToCalculate = (inputArray) => {
  if (isOperator(inputArray[0])) {
    return ['Error'];
  } else {
    const validatedArray = validateEquation(createEquation(inputArray));
    if (validatedArray[0] === 'Error') {
      return validatedArray;
    } else {
      return finalCalculation(validatedArray);
    }
  }
};

const finalCalculation = (validatedArray) => {
  console.log('final', validatedArray);
  let finalResult = 0;
  for (let i = 0; i < validatedArray.length; i++) {
    if (isNumeric(validatedArray[i]) && validatedArray[i + 1] === '=') {
      return validatedArray[i];
    } else if (
      isNumeric(validatedArray[i]) &&
      isOperator(validatedArray[i + 1]) &&
      isNumeric(validatedArray[i + 2])
    ) {
      const val = equate2numbers(
        validatedArray[i],
        validatedArray[i + 1],
        validatedArray[i + 2],
      );
      if (val === 'Error') {
        return ['Error'];
      } else {
        finalResult += val;
        i += 2;
      }
    } else if (
      isOperator(validatedArray[i]) &&
      isNumeric(validatedArray[i + 1])
    ) {
      const val = equate2numbers(
        finalResult,
        validatedArray[i],
        validatedArray[i + 1],
      );
      if (val === 'Error') {
        return ['Error'];
      } else {
        finalResult += val;
        i += 1;
      }
    } else if (validatedArray[i] === '=') {
      return [finalResult];
    } else {
      return ['Error'];
    }
  }
};

const validateEquation = (equationArray) => {
  console.log(equationArray);
  let validEquationArray = [];

  for (let i = 0; i < equationArray.length; i++) {
    if (equationArray[i] === '√' && isNumeric(equationArray[i + 1])) {
      i++;
      validEquationArray.push(
        Math.sqrt(Number(equationArray[i])).toPrecision(8).toString(),
      );
    } else if (
      isNumeric(equationArray[i]) &&
      isOperator(equationArray[i + 1])
    ) {
      validEquationArray.push(equationArray[i]);
    } else if (
      isOperator(equationArray[i]) &&
      isNumeric(equationArray[i + 1])
    ) {
      validEquationArray.push(equationArray[i]);
    } else if (equationArray[i] === '=') {
      validEquationArray.push(equationArray[i]);
      return validEquationArray;
    } else {
      console.log(validEquationArray);
      return ['Error'];
    }
  }
};

const createEquation = (inputArray) => {
  inputArray.push('='); // state is behind one step

  let equationArray = [];
  let numberArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (
      isNumeric(inputArray[i]) ||
      inputArray[i] === '.' ||
      inputArray[i] === '(' ||
      inputArray[i] === ')'
    ) {
      if (inputArray[i] !== '(' && inputArray[i] !== ')') {
        numberArray.push(inputArray[i]);
      }
    } else {
      equationArray.push(numberArray.join(''));
      equationArray.push(inputArray[i]);
      numberArray = [];
    }
  }
  return equationArray;
};

function equate2numbers(a, op, b) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '%':
      if (b !== '0') {
        return a / b;
      } else {
        return 'Error';
      }
    default:
      return 'Error';
  }
}

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

function isOperator(value) {
  return /[.%+=\-[\]\\^x]/.test(value);
}

useToCalculate.defaultProps = {
  result: [''],
};

useToCalculate.propTypes = {
  result: PropTypes.arrayOf(String),
};

export default useToCalculate;
