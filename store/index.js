import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import catalogReducer from './catalog'
import cartReducer from './cart'
import userReducer from './user'
import rootSaga from './saga'

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
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    createRootReducer(),
    preloadedState,
    bindMiddleware([sagaMiddleware])
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper(initStore)
