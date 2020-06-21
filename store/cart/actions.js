import * as types from './types'

export const addToCart = (id, price) => (
  {
    type: types.ADD_TO_CART,
    payload: {
      id,
      price
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

export const totalRemoveFromCart = (id) => (
  {
    type: types.TOTAL_REMOVE_FROM_CART,
    payload: {
      id
    }
  }
)
