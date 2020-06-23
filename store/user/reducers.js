import { HYDRATE } from 'next-redux-wrapper'
import { initialState } from './index'
import * as types from './types'

export default (state = initialState, action) => {
  let nextState
  switch (action.type) {
    case HYDRATE:
      nextState = {
        ...state
      }
      return nextState
    case types.HANDLE_CONTACT_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        error: initialState.error
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
        response: action.payload
      }
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case types.SET_ORDERS_HISTORY:
      return {
        ...state,
        history: action.payload
      }

    default:
      return state
  }
}
