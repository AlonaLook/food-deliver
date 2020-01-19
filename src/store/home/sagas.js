import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { HOME_FETCH, HOME_SET, HOME_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getHomeData);
    
    yield put({ type: HOME_SET, payload })
  } catch (error) {
    yield put({ type: HOME_ERROR })
  }
}

export function* watchFetchHomeData() {
  yield takeEvery(HOME_FETCH, fetchData)
}
