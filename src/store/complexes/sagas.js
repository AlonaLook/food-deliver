import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { COMPLEXES_FETCH, COMPLEXES_SET, COMPLEXES_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getComplexesData);
    
    yield put({ type: COMPLEXES_SET, payload })
  } catch (error) {
    yield put({ type: COMPLEXES_ERROR })
  }
}

export function* watchFetchComplexesData() {
  yield takeEvery(COMPLEXES_FETCH, fetchData)
}
