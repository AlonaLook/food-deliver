import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { VIRGIN_DRINKS_FETCH, VIRGIN_DRINKS_SET, VIRGIN_DRINKS_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getVirginDrinksData);
    
    yield put({ type: VIRGIN_DRINKS_SET, payload })
  } catch (error) {
    yield put({ type: VIRGIN_DRINKS_ERROR })
  }
}

export function* watchFetchVirginDrinksData() {
  yield takeEvery(VIRGIN_DRINKS_FETCH, fetchData)
}
