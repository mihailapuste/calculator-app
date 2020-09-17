import React from 'react';
import {SafeAreaView} from 'react-native';

import Calculator from './components/Calculator/index';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Calculator />
      </SafeAreaView>
    </>
  );
};

export default App;
