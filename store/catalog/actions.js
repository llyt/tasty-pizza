import * as types from './types'

export const loadPizzaList = () => (
  {
    type: types.LOAD_PIZZA_LIST
  }
)

export const fetchPizzaList = (list) => (
  {
    type: types.FETCH_PIZZA_LIST,
    payload: list
  }
)
