import userReducer from './reducers'

import * as userActions from './actions'

export const initialState = {
  isLoading: false,
  response: null
}

export {
  userActions
}

export default userReducer
