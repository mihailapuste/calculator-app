import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const useToCalculate = (props) => {
  return null;
};

useToCalculate.defaultProps = {
  result: [''],
};

useToCalculate.propTypes = {
  result: PropTypes.arrayOf(String),
};

export default useToCalculate;
