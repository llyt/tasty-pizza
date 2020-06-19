import { initialState } from './index'
import * as types from './types'

export default (state = initialState, action) => {
  let id
  let count
  switch (action.type) {
    case types.ADD_TO_CART:
      id = action.payload.id
      count = state.cart[id] ? state.cart[id] + 1 : 1
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: count
        }
      }
    case types.REMOVE_FROM_CART:
      id = action.payload.id
      count = state.cart[id] ? state.cart[id] - 1 : 1
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: count
        }
      }
    default:
      return state
  }
}
