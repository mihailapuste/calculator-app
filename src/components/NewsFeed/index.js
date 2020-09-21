/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {StyleSheet, View, Text, Button, SafeAreaView} from 'react-native';

const newsFeed = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>News Feed</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Calculator')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 300,
  },
});

export default newsFeed;
