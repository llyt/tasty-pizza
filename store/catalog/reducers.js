import { initialState } from './index'
import * as types from './types'
import { HYDRATE } from 'next-redux-wrapper'

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state, // use previous state
        ...action.payload.catalog // apply delta from hydration
      }
    case types.FETCH_PIZZA_LIST:
      return {
        all: action.payload
      }
    default:
      return state
  }
}
