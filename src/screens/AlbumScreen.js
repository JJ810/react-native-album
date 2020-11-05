import React, { useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ROUTES } from '../routes'
import { getAllPhotosByAlbumId } from '../actions/action-Photos'
import Container from '../components/Container'

const AlbumScreen = (props) => {
  useEffect(() => {
    const data = props.route.params
    if (data) props.getAllPhotosByAlbumId(data.album.id)
  }, [])

  return (
    <Container>
      <Text style={styles.albumTitle}>{props.route.params.album.title}</Text>
      {props.photos.data && (
        <FlatList
          data={props.photos.data}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(ROUTES.PictureScreen, item)}
              style={styles.photo}
            >
              <Image source={{ uri: item.thumbnailUrl }} style={{ width: 150, height: 150 }} />
              <Text style={styles.photoTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </Container>
  )
}

AlbumScreen.propTypes = {
  photos: PropTypes.object,
}

const mapStateToProps = (state) => ({
  photos: state.photos,
})

const matchDispatchToProps = (dispatch) => bindActionCreators({ getAllPhotosByAlbumId }, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(AlbumScreen)

const styles = StyleSheet.create({
  albumTitle: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
  },
  photo: {
    flexDirection: 'row',
    padding: 10,
  },
  photoTitle: {
    fontSize: 16,
    padding: 10,
    flex: 1,
  },
})
