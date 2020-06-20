import userReducer from './reducers'

import * as userActions from './actions'

export const initialState = {
  name: null,
  phone: null,
  address: null,
  comment: null
}

export {
  userActions
}

export default userReducer
