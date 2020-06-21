import cartReducer from './reducers'

import * as cartActions from './actions'

export const initialState = {
  added: {},
  totalCount: null,
  totalAmount: null,
  deliveryCost: 3
}

export {
  cartActions
}

export default cartReducer
