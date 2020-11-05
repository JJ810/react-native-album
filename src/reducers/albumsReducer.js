import { Actions } from '../actions'

const defaultState = {
  albums: null,
  albumsWithPhotos: [],
  error: null,
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case Actions.FETCH_ALBUMS_SUCCESS:
      return { ...state, albums: action.data }
    case Actions.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        albumsWithPhotos: state.albumsWithPhotos.concat({
          album: state.albums.find((item) => item.id === action.data[0].albumId),
          photos: action.data,
        }),
      }
    case Actions.FETCH_PHOTOS_ERROR:
    case Actions.FETCH_ALBUMS_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
