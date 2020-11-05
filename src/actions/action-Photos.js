import axios from 'axios'
import { Actions } from '.'
import { baseUrl } from '../../env'

export const fetchAllPhotosError = (error) => ({
  type: Actions.FETCH_ALL_PHOTOS_ERROR,
  error,
})

export const fetchAllPhotosSuccess = (data) => ({
  type: Actions.FETCH_ALL_PHOTOS_SUCCESS,
  data,
})

export const getAllPhotosByAlbumId = (albumId) => async (dispatch) => {
  const REQUEST_ENDPOINT = `${baseUrl}/photos?albumId=${albumId}`

  try {
    const res = await axios.get(REQUEST_ENDPOINT)

    if (res.data.length > 0) {
      const response = res.data
      dispatch(fetchAllPhotosSuccess(response))
    }
  } catch (err) {
    dispatch(fetchAllPhotosError(err))
  }
}
