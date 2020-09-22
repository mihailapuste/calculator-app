/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Title, Paragraph, Divider} from 'react-native-paper';

const headlineCard = React.memo(
  ({newsSource = '', title = '', description = '', imageUrl = '', onView}) => {
    return (
      <Card style={styles.cardContainer}>
        <Card.Title titleStyle={styles.titleStyle} title={newsSource} />
        <Divider />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph style={styles.paragraph}>{description}</Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri: `${
              imageUrl ||
              'https://www.worldloppet.com/wp-content/uploads/2018/10/no-img-placeholder.png'
            }`,
          }}
        />
        <Button mode="contained" style={styles.viewButton} onPress={onView}>
          View full headline
        </Button>
      </Card>
    );
  },
);

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  viewButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: '#0000b3',
  },
  titleStyle: {
    color: 'grey',
    fontSize: 18,
  },
  paragraph: {
    marginBottom: 8,
  },
});

export default headlineCard;
