/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, SafeAreaView, View, Text} from 'react-native';
import axios from 'axios';
import HeadlineCard from './headlineCard';

const allHeadlines = ({navigation}) => {
  const [newsHeadlines, setNewsHeadlines] = useState([]);

  useEffect(() => {
    const fetchNewsHeadlines = async () => {
      const result = await axios(
        'https://newsapi.org/v2/top-headlines?country=ca&apiKey=91e97ada903440edb6b9ecf05a148e4a',
      );
      setNewsHeadlines(result.data.articles);
    };
    fetchNewsHeadlines();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      {newsHeadlines.map((headline) => {
        return (
          <HeadlineCard
            key={headline.title}
            newsSource={headline.source.name}
            title={headline.title}
            description={headline.description}
            imageUrl={headline.urlToImage}
            onView={() => {
              navigation.navigate('ViewHeadline', {
                headlineUrl: `${headline.url}`,
              });
            }}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 8,
    height: '100%',
    backgroundColor: '#d3d3d3',
  },
});

export default allHeadlines;
