import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Album from '../components/Album'
import Container from '../components/Container'
import { ROUTES } from '../routes'

import { getAlbumByUserId, getAlbumPhotos } from '../actions/action-Albums'

const MainScreen = (props) => {
  useEffect(() => {
    props.getAlbumByUserId(1)
  }, [])

  useEffect(() => {
    if (props.albums.albums) {
      // eslint-disable-next-line array-callback-return
      props.albums.albums.map((album) => {
        props.getAlbumPhotos(album.id, 4)
      })
    }
  }, [props.albums.albums])

  return (
    <Container>
      {props.albums.albumsWithPhotos && props.albums.albumsWithPhotos.length > 0 && (
        <FlatList
          data={props.albums.albumsWithPhotos}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Album
              data={item}
              onPress={() => props.navigation.navigate(ROUTES.AlbumScreen, item)}
              onPressThumbnail={(picture) =>
                props.navigation.navigate(ROUTES.PictureScreen, picture)
              }
            />
          )}
        />
      )}
    </Container>
  )
}

MainScreen.propTypes = {
  albums: PropTypes.object,
  photos: PropTypes.object,
}

const mapStateToProps = (state) => ({
  albums: state.albums,
  photos: state.photos,
})

const matchDispatchToProps = (dispatch) =>
  bindActionCreators({ getAlbumByUserId, getAlbumPhotos }, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(MainScreen)
