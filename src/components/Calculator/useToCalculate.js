/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PropTypes from 'prop-types';

const useToCalculate = (inputArray) => {
  const calcObj = getNumbersAndOperators(inputArray);

  if (calcObj !== false) {
    const finalRes = calculateResult(calcObj);
    if (finalRes !== false) {
      return [finalRes];
    } else {
      return ['Error'];
    }
  } else {
    return ['Error'];
  }
};

const calculateResult = (calcObj) => {
  const nums = calcObj.nums;
  const ops = calcObj.ops;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (isNaN(result) || isNaN(checkSqrt(nums[i]))) {
      return false;
    }

    if (i === 0) {
      result = Number(checkSqrt(nums[i]));
    } else {
      if (ops[i - 1] === '÷' && nums[i] === '0') {
        // can't divide by 0
        return false;
      }

      const temp = Number(
        equateTwoNumbers(
          Number(result),
          Number(checkSqrt(nums[i])),
          ops[i - 1],
        ),
      );
      console.log(result + ops[i - 1] + checkSqrt(nums[i]) + ' = ' + temp);
      result = temp;
    }
  }
  // console.log(getPrecision(result));
  return getPrecision(result); //handle the decimal to precision
};

const getPrecision = (value) => {
  const maxPrecision = 14;
  const precisionArray = value.toString().split('.');

  if (precisionArray.length <= 2) {
    const digits = [...precisionArray.join('')];
    if (digits.length <= maxPrecision) {
      return value; // no change: not a decimal
    } else {
      return value.toPrecision(maxPrecision);
    }
  } else {
    return false; // Error: multiple decimal points found
  }
};

// return an json obj containing the numbers and operators in order
const getNumbersAndOperators = (inputArray) => {
  const numbers = inputArray
    .join('')
    .split(/[÷+\-[\]\\^x]/)
    .filter(function (v) {
      return v !== '';
    });
  const operators = inputArray
    .join('')
    .split(/[0-9]+/)
    .map((v) => {
      if (v !== '√' && v !== '.' && v !== '') {
        const op = [...v];
        return op[0]; // only return the first operator character
      } else {
        return null; // null if not operator
      }
    })
    .filter((v) => {
      if (v !== null) {
        return v; // filter out null operators
      }
    });
  // console.log(numbers, operators);
  if (numbers.length === operators.length + 1) {
    return {nums: numbers, ops: operators};
  } else {
    return false; // return false if there are more operators than numbers (Ex: 1+3* or 1.2+-9)
  }
};

const equateTwoNumbers = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '÷':
      if (b !== 0) {
        return a / b;
      } else {
        return false;
      }
    default:
      return false;
  }
};

// check and return sqrt if needed
const checkSqrt = (val) => {
  const sqrtArr = val.split('√');
  if (sqrtArr.length > 1) {
    if (sqrtArr.length > 2) {
      // Error: smore than 1 sqrt operator in digit
      return false;
    }

    if (sqrtArr[0] === '') {
      // case 1: √a
      return Math.sqrt(Number(sqrtArr[1])).toString();
    } else {
      // case 2: a√b
      const a = Number(sqrtArr[0]);
      const sqrt = Math.sqrt(Number(sqrtArr[1]));
      return (a * sqrt).toString();
    }
  } else {
    return val; // do nothing
  }
};

useToCalculate.defaultProps = {
  result: [''],
};

useToCalculate.propTypes = {
  result: PropTypes.arrayOf(String),
};

export default useToCalculate;
