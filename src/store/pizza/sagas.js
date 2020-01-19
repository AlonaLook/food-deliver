import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { PIZZA_FETCH, PIZZA_SET, PIZZA_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getPizzaData);
    
    yield put({ type: PIZZA_SET, payload })
  } catch (error) {
    yield put({ type: PIZZA_ERROR })
  }
}

export function* watchFetchPizzasData() {
  yield takeEvery(PIZZA_FETCH, fetchData)
}
