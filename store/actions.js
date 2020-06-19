import * as types from './types'

export const addToCart = (id) => (
  {
    type: types.ADD_TO_CART,
    payload: {
      id
    }
  }
)

export const removeFromCart = (id) => (
  {
    type: types.REMOVE_FROM_CART,
    payload: {
      id
    }
  }
)
