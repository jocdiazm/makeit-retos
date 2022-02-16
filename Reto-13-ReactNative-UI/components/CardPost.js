import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import ImageLoad from 'react-native-image-placeholder';

const CardPost = (props) => {
  const { author, about, tags, comments } = props;
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <ImageLoad
          style={styles.image}
          loadingStyle={{ size: 'large', color: 'blue' }}
          borderRadius={20}
          source={{
            uri: '',
          }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{about.slice(0, 30)}</Text>
        <Text style={styles.author}>by {author} </Text>
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <View style={styles.commentsContainer}>
          <EvilIcons name='comment' size={24} color='black' />
          <Text style={styles.commentText}>{comments.length} Comments</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderColor: 'gainsboro',
    borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 150,
    height: '100%',
  },
  body: {
    flex: 2,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
  },
  author: {
    marginTop: 5,
    color: 'grey',
    fontFamily: 'Nunito_700Bold',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 5,
  },
  tag: {
    backgroundColor: 'gainsboro',
    margin: 2,
    borderRadius: 5,
  },
  tagText: {
    fontSize: 12,
    fontFamily: 'Nunito_400Regular,',
    lineHeight: 14,
    color: 'gray',
    padding: 3,
  },

  commentsContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  commentText: {
    marginLeft: 10,
    fontWeight: 500,
    fontFamily: 'Nunito_400Regular,',
  },
});

export default CardPost;
