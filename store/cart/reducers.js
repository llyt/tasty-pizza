import { initialState } from './index'
import * as types from './types'
import * as userTypes from '../user/types'
import { HYDRATE } from 'next-redux-wrapper'

export default (state = initialState, action) => {
  let id
  let price
  let count
  switch (action.type) {
    case HYDRATE:
      return {
        ...state// use previous state
      }
    case types.ADD_TO_CART:
      id = action.payload.id
      price = action.payload.price
      count = state.added[id] ? state.added[id].count + 1 : 1
      return {
        ...state,
        added: {
          ...state.added,
          [id]: {
            count,
            price
          }
        },
        totalCount: state.totalCount + 1,
        totalAmount: state.totalAmount + price
      }
    case types.REMOVE_FROM_CART:
      id = action.payload.id
      price = state.added[id].price
      count = state.added[id] ? state.added[id].count - 1 : 1
      return {
        ...state,
        added: {
          ...state.added,
          [id]: {
            count,
            price
          }
        },
        totalCount: state.totalCount - 1,
        totalAmount: state.totalAmount - price
      }
    case types.TOTAL_REMOVE_FROM_CART:
      id = action.payload.id
      price = state.added[id].price * state.added[id].count
      count = state.added[id].count
      return {
        ...state,
        added: {
          ...state.added,
          [id]: {
            count: 0,
            price: null
          }
        },
        totalCount: state.totalCount - count,
        totalAmount: state.totalAmount - price
      }

    case userTypes.SET_RESPONSE:
      return {
        ...initialState
      }
    default:
      return state
  }
}
