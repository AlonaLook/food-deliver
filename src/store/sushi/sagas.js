import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { SUSHI_FETCH, SUSHI_SET, SUSHI_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getSushiData);
    
    yield put({ type: SUSHI_SET, payload })
  } catch (error) {
    yield put({ type: SUSHI_ERROR })
  }
}

export function* watchFetchSushiData() {
  yield takeEvery(SUSHI_FETCH, fetchData)
}
