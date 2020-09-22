/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Card from './card';

const home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <Card
          title="Calculator"
          subtitle="Basic calculated created by Mihai"
          imageUrl="https://www.linkpicture.com/q/Simulator-Screen-Shot-iPhone-11-2020-09-21-at-12.36.43_1.png"
          onView={() => navigation.push('Calculator')}
        />
        <Card
          title="News Feed"
          subtitle="Basic News Feed for Canadian breaking news by Mihai"
          imageUrl="https://c8.alamy.com/comp/2BD9KYE/breaking-news-world-news-with-backgorund-waving-national-flag-of-canada-3d-illustration-2BD9KYE.jpg"
          onView={() => navigation.push('AllHeadlines')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 8,
    height: '100%',
  },
});

export default home;
