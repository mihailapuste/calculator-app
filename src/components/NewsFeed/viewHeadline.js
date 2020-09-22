/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const newsFeed = ({route, navigation}) => {
  const {headlineUrl} = route.params;
  return (
    <WebView
      style={styles.webView}
      source={{
        uri: `${headlineUrl || 'https://www.youtube.com/watch?v=FcxA4w3KKLE'}`,
      }}
    />
  );
};

const styles = StyleSheet.create({
  webView: {
    height: '100%',
  },
});

export default newsFeed;
