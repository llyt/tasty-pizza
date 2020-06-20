import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import catalogReducer from './catalog'
import cartReducer from './cart'

export const initialState = {
  catalog: [],
  cart: {
    added: null,
    totalCount: null,
    totalAmount: null
  }
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const createRootReducer = () => combineReducers({
  catalog: catalogReducer,
  cart: cartReducer
})

function initStore (preloadedState) {
  return createStore(
    createRootReducer(),
    preloadedState,
    bindMiddleware([])
  )
}

export const wrapper = createWrapper(initStore)
