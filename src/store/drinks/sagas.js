import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { DRINKS_FETCH, DRINKS_SET, DRINKS_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getDrinksData);
    
    yield put({ type: DRINKS_SET, payload })
  } catch (error) {
    yield put({ type: DRINKS_ERROR })
  }
}

export function* watchFetchDrinksData() {
  yield takeEvery(DRINKS_FETCH, fetchData)
}
