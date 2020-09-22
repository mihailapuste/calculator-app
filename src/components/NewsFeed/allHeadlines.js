/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import axios from 'axios';
import HeadlineCard from './headlineCard';

const allHeadlines = ({navigation}) => {
  const isCurrent = useRef(true);
  const isLoaded = useRef(false);
  const [newsHeadlines, setNewsHeadlines] = useState([]);

  useEffect(() => {
    const fetchNewsHeadlines = async () => {
      try {
        const result = await axios(
          'https://newsapi.org/v2/top-headlines?country=ca&apiKey=91e97ada903440edb6b9ecf05a148e4a',
        );
        if (isCurrent.current) {
          isLoaded.current = true;
          setNewsHeadlines(result.data.articles);
        }
      } catch (err) {
        isLoaded.current = false;
        console.log(err);
      }
    };
    fetchNewsHeadlines();

    return () => {
      // unmount
      isCurrent.current = false;
    };
  }, []);

  if (isLoaded.current) {
    return (
      <ScrollView style={styles.scrollView}>
        {newsHeadlines.map((headline) => {
          return (
            <HeadlineCard
              key={headline.description}
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
  } else {
    return (
      <ActivityIndicator
        size="large"
        color="#4d4dff"
        style={styles.activityIndicator}
      />
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 8,
    height: '100%',
    backgroundColor: '#d3d3d3',
  },
  activityIndicator: {
    marginTop: 50,
  },
});

export default allHeadlines;
