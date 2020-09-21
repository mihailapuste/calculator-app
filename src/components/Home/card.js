/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';

const card = ({title, subtitle, imageUrl, onView}) => {
  return (
    <Card style={styles.cardContainer}>
      <Card.Title title={title} subtitle={subtitle} />
      <Card.Cover
        source={{
          uri: `${imageUrl}`,
        }}
      />
      <Card.Actions>
        <Button onPress={onView}>View</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 8,
  },
});

export default card;
