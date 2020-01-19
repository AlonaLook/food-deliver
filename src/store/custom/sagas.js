import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { CUSTOM_FETCH, CUSTOM_SET, CUSTOM_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getCustomData);
    
    yield put({ type: CUSTOM_SET, payload })
  } catch (error) {
    yield put({ type: CUSTOM_ERROR })
  }
}

export function* watchFetchCustomData() {
  yield takeEvery(CUSTOM_FETCH, fetchData)
}
