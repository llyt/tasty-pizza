import { takeEvery, put } from 'redux-saga/effects'
import * as catalogTypes from './catalog/types'
import * as catalogActions from './catalog/actions'

export default function* rootSaga() {
  yield takeEvery(catalogTypes.LOAD_PIZZA_LIST, fetchPizzas)
}

function* fetchPizzas() {
  try {
    const res = yield fetch('http://localhost:5000/goods')
    const data = yield res.json()
    yield put(catalogActions.fetchPizzaList(data))
  } catch (e) {
    yield console.log(e) // need to put in redux store
  }
}
