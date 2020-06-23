import cartReducer from './reducers'
import * as cartActions from './actions'

const DELIVERY_COST = 3

export const initialState = {
  added: {},
  totalCount: null,
  totalAmount: null,
  deliveryCost: DELIVERY_COST
}

export {
  cartActions
}

export default cartReducer
