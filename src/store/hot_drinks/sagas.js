import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { HOT_DRINKS_FETCH, HOT_DRINKS_SET, HOT_DRINKS_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getHotDrinksData);
    
    yield put({ type: HOT_DRINKS_SET, payload })
  } catch (error) {
    yield put({ type: HOT_DRINKS_ERROR })
  }
}

export function* watchFetchHotDrinksData() {
  yield takeEvery(HOT_DRINKS_FETCH, fetchData)
}
