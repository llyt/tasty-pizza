import { takeEvery, put, select, call } from 'redux-saga/effects'
import * as catalogTypes from './catalog/types'
import * as catalogActions from './catalog/actions'
import * as userTypes from './user/types'
import * as userActions from './user/actions'
import { getUserInfo } from './user/selectors'
import { getAddedItemsFromCart } from './cart/selectors'
import axios from 'axios'

export default function* rootSaga() {
  yield takeEvery(catalogTypes.LOAD_PIZZA_LIST, fetchPizzas)
  yield takeEvery(userTypes.SEND_ORDER, sendOrder)
}

function* fetchPizzas() {
  try {
    const res = yield call(getPizzas)
    const data = yield res.data
    yield put(catalogActions.fetchPizzaList(data))
  } catch (e) {
    yield console.log(e) // need to put in redux store
  }
}

function* sendOrder() {
  try {
    yield put(userActions.loaderOn())
    const { phone, name, address } = yield select(getUserInfo)
    const added = yield select(getAddedItemsFromCart)
    const normalizedCart = yield call(normalizeCartItems, added)
    const order = {
      phone,
      name,
      goods: normalizedCart,
      address,
      date: Date.now()
    }
    const response = yield call(sendUserOrder, order)
    yield put(userActions.setResponse(
      {
        status: 'OK',
        orderId: response
      }
    ))
    yield put(userActions.loaderOff())
  } catch (e) {
    console.log(e)
    yield put(userActions.setError(
      {
        status: 'ERROR',
        message: 'Error occurred. Please, check your data.'
      }
    ))
    yield put(userActions.loaderOff())
  }
}

async function getPizzas() {
  return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/goods`)
}

async function sendUserOrder(data) {
  const { phone, name, goods, date, address } = data
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    phone,
    name,
    goods,
    date,
    address
  })
  return await res.data
}

function normalizeCartItems(srcList) {
  const result = Object.keys(srcList)
    .reduce((acc, key) => {
      if (srcList[key].count) {
        return [...acc, {
          id: key,
          count: srcList[key].count,
          price: srcList[key].price
        }]
      }
      return acc
    }, [])
  return result
}
