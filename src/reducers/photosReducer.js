import { Actions } from '../actions'

const defaultState = {
  data: null,
  error: null,
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case Actions.FETCH_ALL_PHOTOS_SUCCESS:
      return { ...state, data: action.data }
    case Actions.FETCH_ALL_PHOTOS_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
