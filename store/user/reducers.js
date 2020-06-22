import { HYDRATE } from 'next-redux-wrapper'
import { initialState } from './index'
import * as types from './types'

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state
      }
    case types.HANDLE_CONTACT_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }

    case types.LOADER_ON:
      return {
        ...state,
        isLoading: true
      }

    case types.LOADER_OFF:
      return {
        ...state,
        isLoading: false
      }

    case types.SET_RESPONSE:
      return {
        ...state,
        cart: initialState.cart,
        response: action.payload
      }

    default:
      return state
  }
}
