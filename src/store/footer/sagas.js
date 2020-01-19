import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { FOOTER_FETCH, FOOTER_SET, FOOTER_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getFooterData);
    
    yield put({ type: FOOTER_SET, payload })
  } catch (error) {
    yield put({ type: FOOTER_ERROR })
  }
}

export function* watchFetchFooterData() {
  yield takeEvery(FOOTER_FETCH, fetchData)
}
