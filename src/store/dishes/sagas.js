import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { DISHES_FETCH, DISHES_SET, DISHES_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getDishesData);
    
    yield put({ type: DISHES_SET, payload })
  } catch (error) {
    yield put({ type: DISHES_ERROR })
  }
}

export function* watchFetchDishesData() {
  yield takeEvery(DISHES_FETCH, fetchData)
}
