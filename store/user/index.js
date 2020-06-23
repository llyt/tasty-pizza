import userReducer from './reducers'

import * as userActions from './actions'

export const initialState = {
  isLoading: false,
  response: {},
  error: null,
  history: null,
  phone: '',
  name: '',
  address: '',
  comment: ''
}

export {
  userActions
}

export default userReducer
