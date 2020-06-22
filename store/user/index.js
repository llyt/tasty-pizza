import userReducer from './reducers'

import * as userActions from './actions'

export const initialState = {
  isLoading: false,
  response: null,
  error: null,
  phone: '',
  name: '',
  address: '',
  comment: ''
}

export {
  userActions
}

export default userReducer
