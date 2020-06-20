import * as types from './types'

export const handleContactInput = (name, value) => (
  {
    type: types.HANDLE_CONTACT_INPUT,
    payload: {
      name,
      value
    }
  }
)
