import axios from 'axios'
import { Actions } from '.'
import { baseUrl } from '../../env'

export const fetchAlbumsError = (error) => ({
  type: Actions.FETCH_ALBUMS_ERROR,
  error,
})

export const fetchAlbumsSuccess = (data) => ({
  type: Actions.FETCH_ALBUMS_SUCCESS,
  data,
})

export const getAlbumByUserId = (userId) => async (dispatch) => {
  const REQUEST_ENDPOINT = `${baseUrl}/albums?userId=${userId}`

  try {
    const res = await axios.get(REQUEST_ENDPOINT)
    if (res.data.length > 0) {
      const response = res.data
      dispatch(fetchAlbumsSuccess(response))
    }
  } catch (err) {
    dispatch(fetchAlbumsError(err))
  }
}

export const fetchPhotosError = (error) => ({
  type: Actions.FETCH_PHOTOS_ERROR,
  error,
})

export const fetchPhotosSuccess = (data) => ({
  type: Actions.FETCH_PHOTOS_SUCCESS,
  data,
})

export const getAlbumPhotos = (albumId, limit) => async (dispatch) => {
  const REQUEST_ENDPOINT = `${baseUrl}/photos?albumId=${albumId}&_limit=${limit}`

  try {
    const res = await axios.get(REQUEST_ENDPOINT)

    if (res.data.length > 0) {
      const response = res.data
      dispatch(fetchPhotosSuccess(response))
    }
  } catch (err) {
    dispatch(fetchPhotosError(err))
  }
}
