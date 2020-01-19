import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { SEARCH_FETCH, SEARCH_SET, SEARCH_ERROR } from './actions';

export function* fetchData(action) {
  try {
    const { data: payload } = yield call(Api.getSearchData, action.payload);

    yield put({ type: SEARCH_SET, payload })
  } catch (error) {
    yield put({ type: SEARCH_ERROR })
  }
}

export function* watchFetchSearchData() {
  yield takeEvery(SEARCH_FETCH, fetchData)
}
