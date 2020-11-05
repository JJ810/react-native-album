import { combineReducers } from 'redux'

import albums from './albumsReducer'
import photos from './photosReducer'

export default () =>
  combineReducers({
    albums,
    photos,
  })
