/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PropTypes from 'prop-types';

const useToCalculate = (inputArray) => {
  const calcObj = getNumbersAndOperators(inputArray);

  if (calcObj !== false) {
    const finalRes = calculateResult(calcObj);
    if (finalRes !== false) {
      return finalRes;
    } else {
      return ['Error'];
    }
  } else {
    return ['Error'];
  }
};

function calculateResult(calcObj) {
  const nums = calcObj.nums;
  const ops = calcObj.ops;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result = Number(checkSqrt(nums[i]));
    } else {
      if (ops[i - 1] === '%' && nums[i] === '0') { // can't divide by 0
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

  return [result.toPrecision(14)];
}

// return an json obj containing the numbers and operators in order
function getNumbersAndOperators(inputArray) {
  const numbers = inputArray
    .join('')
    .split(/[%+\-[\]\\^x]/)
    .filter(function (v) {
      return v !== '';
    });
  const operators = inputArray
    .join('')
    .split(/[0-9]+/)
    .filter(function (v) {
      if (v !== '√' && v !== '') {
        return v;
      }
    });
  if (numbers.length === operators.length + 1) {
    return {nums: numbers, ops: operators};
  } else {
    return false; // return false if there are more operators than numbers (Ex: 1+3* or 8+-9)
  }
}

function equateTwoNumbers(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '%':
      if (b !== 0) {
        return a / b;
      } else {
        return false;
      }
    default:
      return false;
  }
}

// check and return sqrt if needed
function checkSqrt(val) {
  let arr = [...val];
  if (arr[0] === '√') {
    // return calculated sqrt
    return Math.sqrt(arr.slice(1).join('')).toPrecision(5).toString();
  } else {
    return val; // do nothing
  }
}

useToCalculate.defaultProps = {
  result: [''],
};

useToCalculate.propTypes = {
  result: PropTypes.arrayOf(String),
};

export default useToCalculate;
