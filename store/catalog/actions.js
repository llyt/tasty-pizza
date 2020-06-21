import * as types from './types'

export const initPizzasList = (list) => (
  {
    type: types.INIT_PIZZAS_LIST,
    payload: list
  }
)
