import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Album = ({ data, onPress, onPressThumbnail }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{data.album.title}</Text>
      </TouchableOpacity>
      <View style={styles.thumbnail}>
        {data.photos.map((photo) => (
          <TouchableOpacity
            key={photo.id}
            style={styles.thumbImg}
            onPress={() => onPressThumbnail(photo)}
          >
            <Image key={photo.id} source={{ uri: photo.thumbnailUrl }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Album

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  thumbnail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  thumbImg: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    margin: 10,
  },
})
