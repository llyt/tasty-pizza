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

export const loaderOn = () => (
  {
    type: types.LOADER_ON
  }
)

export const loaderOff = () => (
  {
    type: types.LOADER_OFF
  }
)

export const sendOrder = () => (
  {
    type: types.SEND_ORDER
  }
)

export const setResponse = (data) => (
  {
    type: types.SET_RESPONSE,
    payload: data
  }
)

export const setError = (data) => (
  {
    type: types.SET_ERROR,
    payload: data
  }
)
