import { initialState } from './index'
import * as types from './types'
import { HYDRATE } from 'next-redux-wrapper'

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state // use previous state
      }
    case types.HANDLE_CONTACT_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }

    default:
      return state
  }
}
