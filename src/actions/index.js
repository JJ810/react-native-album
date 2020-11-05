import * as albumsActions from './action-Albums'
import * as photosActions from './action-Photos'

export const Actions = {
  FETCH_ALBUMS_ERROR: 'ALBUM/FETCH_ALBUMS_ERROR',
  FETCH_ALBUMS_SUCCESS: 'ALBUM/FETCH_ALBUMS_SUCCESS',
  FETCH_PHOTOS_ERROR: 'ALBUM/FETCH_PHOTOS_ERROR',
  FETCH_PHOTOS_SUCCESS: 'ALBUM/FETCH_PHOTOS_SUCCESS',

  FETCH_ALL_PHOTOS_ERROR: 'PHOTO/FETCH_ALL_PHOTOS_ERROR',
  FETCH_ALL_PHOTOS_SUCCESS: 'PHOTO/FETCH_ALL_PHOTOS_SUCCESS',
}

export { albumsActions }
export { photosActions }
