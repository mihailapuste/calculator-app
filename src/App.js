import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home/index';
import Calculator from './components/Calculator/index';
import NewsFeed from './components/NewsFeed/index';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllDemos">
        <Stack.Screen
          name="AllDemos"
          component={Home}
          options={{
            title: 'All Demos',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            title: 'Calculator',
            headerStyle: {
              backgroundColor: '#42AF00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeed}
          options={{
            title: 'News Feed',
            headerStyle: {
              backgroundColor: '#3371FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
