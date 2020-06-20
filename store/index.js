import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import catalogReducer from './catalog'
import cartReducer from './cart'
import userReducer from './user'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const createRootReducer = () => combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  user: userReducer
})

function initStore (preloadedState) {
  return createStore(
    createRootReducer(),
    preloadedState,
    bindMiddleware([])
  )
}

export const wrapper = createWrapper(initStore)
