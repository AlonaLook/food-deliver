import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { CONTACT_FETCH, CONTACT_SET, CONTACT_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getContactData);
    
    yield put({ type: CONTACT_SET, payload })
  } catch (error) {
    yield put({ type: CONTACT_ERROR })
  }
}

export function* watchFetchContactData() {
  yield takeEvery(CONTACT_FETCH, fetchData)
}
